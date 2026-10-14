import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import postgres from "postgres";
import {
  resolveDatabaseUrl,
  parseSummary,
  formatCategory,
  formatCardMarkdown,
  formatReadme,
  fetchSignalsForDate,
  recordDeliveries,
  runSync,
  PublicationItem,
} from "../scripts/sync.ts";

async function runSmokeTests() {
  console.log("=== [Indie Radar] Starting Smoke Tests ===");

  // 1. Resolve DB URL
  console.log("Test 1: Resolving DATABASE_URL...");
  const dbUrl = resolveDatabaseUrl();
  assert.ok(dbUrl.startsWith("postgres://"), "DATABASE_URL must be a valid postgres URI");
  console.log("✓ Test 1 Passed: DB URL resolved successfully.");

  // 2. Connect and test query
  console.log("Test 2: Connecting to PostgreSQL and testing query...");
  const sql = postgres(dbUrl, { max: 1, idle_timeout: 5 });
  try {
    const today = new Date().toISOString().split("T")[0];
    const items = await fetchSignalsForDate(sql, today);
    console.log(`Found ${items.length} items for today (${today}).`);
    assert.ok(Array.isArray(items), "Items must be an array");
    console.log("✓ Test 2 Passed: Query executed successfully.");
  } finally {
    await sql.end();
  }

  // 3. Test summary parser & card formatting
  console.log("Test 3: Testing summary parsing & card formatting...");
  const mockItem: PublicationItem = {
    article_id: "test-item-1",
    title: "测试出海开源工具",
    original_title: "Test Indie Tool",
    score: 85.5,
    category: "opensource",
    tags: ["开源神器", "AI工具", "entity:github"],
    url: "https://github.com/test/repo",
    summary: "【这是什么】这是一款面向出海团队的自动化工具。【商业逻辑】通过免费开源引流，高级功能买断变现。",
    reason: "解决独立开发者多任务分发痛点，工程架构精简。",
    timeline_at: new Date(),
    published_at: new Date(),
    discovered_at: new Date(),
  };

  const { what, business } = parseSummary(mockItem.summary);
  assert.equal(what, "这是一款面向出海团队的自动化工具。");
  assert.equal(business, "通过免费开源引流，高级功能买断变现。");

  const cardMd = formatCardMarkdown(mockItem, 0);
  assert.ok(cardMd.includes("### 1. [测试出海开源工具](https://github.com/test/repo)"));
  assert.ok(cardMd.includes("Test Indie Tool"));
  assert.ok(cardMd.includes("85.5"));
  assert.ok(cardMd.includes("`#开源神器` `#AI工具`"));
  assert.ok(!cardMd.includes("entity:github"), "entity tags should be filtered out");
  assert.ok(cardMd.includes("商业模式与变现"));
  assert.ok(cardMd.includes("这是一款面向出海团队的自动化工具。"));
  console.log("✓ Test 3 Passed: Summary parser and card formatting verified.");

  // 4. Test README structure compliance
  console.log("Test 4: Verifying README structure compliance...");
  const readmeMd = formatReadme("2026-10-14", [mockItem], [{ date: "2026-10-14", count: 1 }]);
  assert.ok(readmeMd.includes("# Indie Radar | 出海与独立开发每日情报"), "Must have required title");
  assert.ok(readmeMd.includes("img.shields.io/badge/Telegram-@IndieRadarPro-blue?logo=telegram"), "Must include Telegram badge");
  assert.ok(readmeMd.includes("img.shields.io/badge/Website-radar.everythingisok.top-indigo"), "Must include Website badge");
  assert.ok(readmeMd.includes("img.shields.io/badge/Daily_Update-Automated-green"), "Must include Daily Update badge");
  assert.ok(readmeMd.includes("## 今日精选 (Today's Top Signals)"), "Must have Today's Top Signals");
  assert.ok(readmeMd.includes("## 历史归档 (Historical Archives)"), "Must have Historical Archives");
  assert.ok(readmeMd.includes("(archives/2026-10-14.md)"), "Must link to archive");
  console.log("✓ Test 4 Passed: README structure strictly follows specification.");

  // 5. Test External GitHub connectivity
  console.log("Test 5: Verifying external Git / GitHub remote connectivity...");
  const remoteOutput = execSync("git ls-remote origin HEAD", { encoding: "utf8" }).trim();
  assert.ok(remoteOutput.includes("HEAD"), "External git ls-remote must return HEAD ref");
  console.log("✓ Test 5 Passed: External Git remote connectivity verified.");

  // 6. Test Atomic Database Side-Effects (deliveries record & deduplication)
  console.log("Test 6: Verifying atomic database side-effects in PostgreSQL deliveries table...");
  const dbSql = postgres(dbUrl, { max: 1, idle_timeout: 5 });
  try {
    const testArticleId = "test-smoke-" + Date.now();
    const testDate = "2026-10-14";
    const testSha = "smoke-test-sha-123456";
    const testItemForDb: PublicationItem = {
      ...mockItem,
      article_id: testArticleId,
    };

    // First insertion
    const inserted = await recordDeliveries(dbSql, [testItemForDb], testSha, testDate);
    assert.equal(inserted, 1, "recordDeliveries must record 1 item");

    // Verify record in database
    const rows = await dbSql<{ target_key: string; subject_id: string; dedupe_key: string; status: string; response: string }[]>`
      SELECT target_key, subject_id, dedupe_key, status, response
      FROM deliveries
      WHERE target_key = 'github-daily'
        AND dedupe_key = ${`github-${testDate}-${testArticleId}`}
    `;
    assert.equal(rows.length, 1, "Delivery record must be present in database");
    assert.equal(rows[0].status, "sent", "Delivery status must be sent");
    assert.equal(rows[0].response, testSha, "Delivery response must match commit SHA");

    // Test deduplication idempotency with updated SHA
    const updatedSha = "smoke-test-sha-updated";
    await recordDeliveries(dbSql, [testItemForDb], updatedSha, testDate);
    const updatedRows = await dbSql<{ response: string }[]>`
      SELECT response FROM deliveries
      WHERE target_key = 'github-daily'
        AND dedupe_key = ${`github-${testDate}-${testArticleId}`}
    `;
    assert.equal(updatedRows[0].response, updatedSha, "Deduplication must update atomically without duplicate error");

    // Clean up test record
    await dbSql`
      DELETE FROM deliveries
      WHERE target_key = 'github-daily'
        AND dedupe_key = ${`github-${testDate}-${testArticleId}`}
    `;
    console.log("✓ Test 6 Passed: Database side-effects and deduplication verifiably tested.");
  } finally {
    await dbSql.end();
  }

  // 7. Run dry-run sync
  console.log("Test 7: Testing runSync with --dry-run...");
  const syncResult = await runSync({ dryRun: true, backfill: true });
  assert.equal(syncResult.dryRun, true, "Dry run must return dryRun: true");
  assert.ok(fs.existsSync(path.join(process.cwd(), "archives")), "Archives directory must exist");
  assert.ok(fs.existsSync(path.join(process.cwd(), "README.md")), "README.md must exist");
  console.log("✓ Test 7 Passed: Dry run completed and files verified.");

  console.log("=== All Smoke Tests Passed Successfully ===");
}

runSmokeTests().catch((err) => {
  console.error("Smoke test failed:", err);
  process.exit(1);
});