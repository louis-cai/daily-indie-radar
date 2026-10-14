import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import postgres from "postgres";

export interface PublicationItem {
  article_id: string;
  title: string;
  original_title: string | null;
  score: number;
  category: string;
  tags: string[];
  url: string;
  summary: string;
  reason: string;
  timeline_at: Date;
  published_at: Date | null;
  discovered_at: Date;
}

export interface SyncOptions {
  date?: string;
  dryRun?: boolean;
  backfill?: boolean;
  targetDir?: string;
}

/**
 * Resolve PostgreSQL database URL from process.env, local .env, or fallback location.
 */
export function resolveDatabaseUrl(explicitDir?: string): string {
  if (process.env.DATABASE_URL) {
    return process.env.DATABASE_URL;
  }

  const candidatePaths = [
    path.join(explicitDir || process.cwd(), ".env"),
    "/home/louis/candi-tasks/daily-indie-radar/.env",
    "/home/louis/candi-tasks/indie-radar/.env",
  ];

  for (const envPath of candidatePaths) {
    if (fs.existsSync(envPath)) {
      try {
        const content = fs.readFileSync(envPath, "utf8");
        for (const line of content.split("\n")) {
          const trimmed = line.trim();
          if (trimmed.startsWith("DATABASE_URL=")) {
            const val = trimmed.slice("DATABASE_URL=".length).trim();
            const cleanVal = val.replace(/^["']|["']$/g, "");
            if (cleanVal) return cleanVal;
          }
        }
      } catch {
        // continue
      }
    }
  }

  throw new Error("Unable to resolve DATABASE_URL from environment or .env files");
}

/**
 * Format category tag into emoji & human readable label
 */
export function formatCategory(cat: string): string {
  const map: Record<string, string> = {
    opensource: "🛠 开源基础设施 / Open Source",
    products: "🚀 新出海产品 / Products",
    guides: "📖 实操复盘与指南 / Case Study",
    ideas: "💡 机会与灵感 / Opportunity",
  };
  return map[cat] || `📌 ${cat}`;
}

/**
 * Extract "what it is" and "business logic" from summary if annotated.
 */
export function parseSummary(summary: string): { what: string; business: string } {
  let what = summary || "";
  let business = "";

  const whatMatch = summary.match(/【这是什么】(.*?)(?=【商业逻辑】|$)/s);
  const bizMatch = summary.match(/【商业逻辑】(.*)/s);

  if (whatMatch && whatMatch[1].trim()) {
    what = whatMatch[1].trim();
  }
  if (bizMatch && bizMatch[1].trim()) {
    business = bizMatch[1].trim();
  }

  return { what, business };
}

/**
 * Format single publication item into a Markdown card.
 */
export function formatCardMarkdown(item: PublicationItem, index: number): string {
  const { what, business } = parseSummary(item.summary);
  const cleanTags = (item.tags || [])
    .filter((t) => !t.startsWith("entity:"))
    .map((t) => `\`#${t}\``)
    .join(" ");

  const lines: string[] = [];
  lines.push(`### ${index + 1}. [${item.title}](${item.url})`);
  lines.push("");
  if (item.original_title && item.original_title.trim() !== item.title.trim()) {
    lines.push(`- **原标题 / Original**: ${item.original_title.trim()}`);
  }
  lines.push(
    `- **评分 / Signal Score**: ⭐ \`${Number(item.score).toFixed(1)}\` / 100 | **分类**: ${formatCategory(
      item.category
    )}`
  );
  if (cleanTags) {
    lines.push(`- **标签 / Tags**: ${cleanTags}`);
  }
  if (what) {
    lines.push(`- **💡 核心概要 / What It Is**: ${what}`);
  }
  if (business) {
    lines.push(`- **💰 商业模式与变现 / Business Logic**: ${business}`);
  }
  if (item.reason && item.reason.trim()) {
    lines.push(`- **🎯 推荐与借鉴 / Takeaway**: ${item.reason.trim()}`);
  }
  lines.push("");

  return lines.join("\n");
}

/**
 * Format an archive page markdown.
 */
export function formatDailyArchive(date: string, items: PublicationItem[]): string {
  const lines: string[] = [];
  lines.push(`# Indie Radar 精选情报 | ${date}`);
  lines.push("");
  lines.push(
    `> 本期共精选 **${items.length}** 条高分出海与独立开发情报（评分门槛 >= 70 分）。数据源自 [Indie Radar](https://radar.everythingisok.top) 全球雷达系统。`
  );
  lines.push("");
  lines.push("---");
  lines.push("");

  items.forEach((item, idx) => {
    lines.push(formatCardMarkdown(item, idx));
  });

  lines.push("---");
  lines.push("");
  lines.push(
    `*由 [Indie Radar](https://radar.everythingisok.top) 每日自动同步 · 加入 [Telegram 频道 @IndieRadarPro](https://t.me/IndieRadarPro) 接收实时推送*`
  );
  lines.push("");

  return lines.join("\n");
}

/**
 * Format the root README.md
 */
export function formatReadme(
  todayDate: string,
  todayItems: PublicationItem[],
  archiveDates: { date: string; count: number }[]
): string {
  const lines: string[] = [];
  lines.push("# Indie Radar | 出海与独立开发每日情报");
  lines.push("");
  lines.push(
    "[![Telegram](https://img.shields.io/badge/Telegram-@IndieRadarPro-blue?logo=telegram)](https://t.me/IndieRadarPro) " +
      "[![Website](https://img.shields.io/badge/Website-radar.everythingisok.top-indigo)](https://radar.everythingisok.top) " +
      "![Auto Update](https://img.shields.io/badge/Daily_Update-Automated-green)"
  );
  lines.push("");
  lines.push(
    "> 专为全球出海开发者、独立黑客（Indie Hackers）与技术创业者打造的 90% 降噪情报站。每日自动监控全球主流社区（Product Hunt、Reddit、V2EX、GitHub、Hacker News 等），严格经过多维价值与商业可行性评分漏斗，仅沉淀并同步评分 >= 70 分的硬核优质项目、开源基建与变现复盘。"
  );
  lines.push("");
  lines.push("---");
  lines.push("");

  lines.push(`## 今日精选 (Today's Top Signals) · ${todayDate}`);
  lines.push("");
  if (todayItems.length === 0) {
    lines.push("今日暂无新入库记录，请查看历史归档。");
  } else {
    todayItems.forEach((item, idx) => {
      lines.push(formatCardMarkdown(item, idx));
    });
  }

  lines.push("---");
  lines.push("");
  lines.push("## 历史归档 (Historical Archives)");
  lines.push("");
  if (archiveDates.length === 0) {
    lines.push("- 暂无历史归档");
  } else {
    for (const arc of archiveDates) {
      lines.push(`- [📅 ${arc.date} 情报精选 (${arc.count} 篇)](archives/${arc.date}.md)`);
    }
  }

  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push(
    "### 📡 关注我们 / Stay Connected\n\n" +
      "- 🌐 **在线情报站**：[radar.everythingisok.top](https://radar.everythingisok.top)\n" +
      "- 💬 **Telegram 频道**：[@IndieRadarPro](https://t.me/IndieRadarPro)\n" +
      "- ⭐ **欢迎 Star 支持**，让更多独立开发者与出海同路人看到本仓库！"
  );
  lines.push("");

  return lines.join("\n");
}

/**
 * Fetch top signals for a given date from PostgreSQL
 */
export async function fetchSignalsForDate(
  sql: postgres.Sql,
  dateStr: string
): Promise<PublicationItem[]> {
  const rows = await sql<PublicationItem[]>`
    SELECT 
      article_id,
      title,
      original_title,
      score,
      category,
      tags,
      url,
      summary,
      reason,
      timeline_at,
      published_at,
      discovered_at
    FROM publications
    WHERE score >= 70
      AND visibility = 'public'
      AND timeline_at::date = ${dateStr}::date
    ORDER BY score DESC, timeline_at DESC
  `;
  return rows;
}

/**
 * Fetch all available distinct dates with item counts from PostgreSQL
 */
export async function fetchAvailableDates(
  sql: postgres.Sql
): Promise<{ date: string; count: number }[]> {
  const rows = await sql<{ date: string; count: number }[]>`
    SELECT 
      timeline_at::date::text AS date,
      count(*)::int AS count
    FROM publications
    WHERE score >= 70
      AND visibility = 'public'
    GROUP BY 1
    ORDER BY 1 DESC
  `;
  return rows;
}

/**
 * Record delivery state into PostgreSQL deliveries table atomically with deduplication.
 */
export async function recordDeliveries(
  sql: postgres.Sql,
  items: PublicationItem[],
  commitSha: string,
  dateStr: string
): Promise<number> {
  if (items.length === 0) return 0;

  let count = 0;
  await sql.begin(async (tx) => {
    await tx`
      INSERT INTO notify_targets (key, purpose, kind, enabled, note)
      VALUES ('github-daily', 'content', 'log', true, 'GitHub louis-cai/daily-indie-radar')
      ON CONFLICT (key) DO UPDATE SET enabled = true, updated_at = now()
    `;

    for (const item of items) {
      const dedupeKey = `github-${dateStr}-${item.article_id}`;
      await tx`
        INSERT INTO deliveries (target_key, subject_kind, subject_id, dedupe_key, status, response, sent_at)
        VALUES ('github-daily', 'selected', ${item.article_id}, ${dedupeKey}, 'sent', ${commitSha}, now())
        ON CONFLICT (target_key, dedupe_key) DO UPDATE SET response = EXCLUDED.response, updated_at = now()
      `;
      count++;
    }
  });

  return count;
}

/**
 * Main sync procedure
 */
export async function runSync(options: SyncOptions = {}) {
  const projectRoot = options.targetDir || process.cwd();
  const archivesDir = path.join(projectRoot, "archives");
  const readmePath = path.join(projectRoot, "README.md");

  if (!fs.existsSync(archivesDir)) {
    fs.mkdirSync(archivesDir, { recursive: true });
  }

  const databaseUrl = resolveDatabaseUrl(projectRoot);
  const sql = postgres(databaseUrl, {
    max: 1,
    idle_timeout: 10,
    connect_timeout: 10,
    onnotice: () => {},
  });

  try {
    const todayStr =
      options.date || new Date().toISOString().split("T")[0];
    console.log(`[Indie Radar Sync] Target date: ${todayStr}`);

    // If backfill is requested, generate archives for all dates
    const allAvailable = await fetchAvailableDates(sql);
    console.log(
      `[Indie Radar Sync] Found ${allAvailable.length} days with score >= 70 in database.`
    );

    const datesToSync = options.backfill
      ? allAvailable.map((d) => d.date)
      : [todayStr];

    for (const d of datesToSync) {
      const items = await fetchSignalsForDate(sql, d);
      if (items.length > 0) {
        const archiveContent = formatDailyArchive(d, items);
        const archiveFile = path.join(archivesDir, `${d}.md`);
        fs.writeFileSync(archiveFile, archiveContent, "utf8");
        console.log(`[Indie Radar Sync] Written archive: archives/${d}.md (${items.length} items)`);
      } else {
        console.log(`[Indie Radar Sync] No signals found for date ${d}`);
      }
    }

    // Read all archives on disk to build archive list
    const existingArchives = fs
      .readdirSync(archivesDir)
      .filter((f) => f.endsWith(".md"))
      .map((f) => f.replace(/\.md$/, ""))
      .sort((a, b) => b.localeCompare(a));

    const archiveSummary: { date: string; count: number }[] = [];
    for (const arcDate of existingArchives) {
      const dbInfo = allAvailable.find((a) => a.date === arcDate);
      const count = dbInfo ? dbInfo.count : 0;
      archiveSummary.push({ date: arcDate, count });
    }

    // Determine today's items to showcase in README
    let showcaseDate = todayStr;
    let showcaseItems = await fetchSignalsForDate(sql, showcaseDate);

    if (showcaseItems.length === 0 && existingArchives.length > 0) {
      showcaseDate = existingArchives[0];
      showcaseItems = await fetchSignalsForDate(sql, showcaseDate);
      console.log(
        `[Indie Radar Sync] Today has no items; showcasing latest archive date: ${showcaseDate}`
      );
    }

    const readmeContent = formatReadme(showcaseDate, showcaseItems, archiveSummary);
    fs.writeFileSync(readmePath, readmeContent, "utf8");
    console.log(`[Indie Radar Sync] Updated README.md successfully.`);

    if (options.dryRun) {
      console.log(`[Indie Radar Sync] Dry run enabled. Skipping git commit & push.`);
      return { committed: false, dryRun: true };
    }

    // Git operations with idempotency check
    const statusOutput = execSync("git status --porcelain", {
      cwd: projectRoot,
      encoding: "utf8",
    }).trim();

    if (!statusOutput) {
      console.log(
        `[Indie Radar Sync] Idempotency check: Working tree clean. No changes to commit.`
      );
      const currentSha = execSync("git rev-parse HEAD", {
        cwd: projectRoot,
        encoding: "utf8",
      }).trim();
      if (showcaseItems.length > 0) {
        await recordDeliveries(sql, showcaseItems, currentSha, showcaseDate);
      }
      return { committed: false, clean: true, commitSha: currentSha };
    }

    console.log(`[Indie Radar Sync] Detected changes in working tree:\n${statusOutput}`);

    execSync("git add .", { cwd: projectRoot, stdio: "inherit" });
    const commitMsg = `chore(radar): daily sync ${todayStr} [skip ci]`;
    execSync(`git commit -m "${commitMsg}"`, { cwd: projectRoot, stdio: "inherit" });

    const commitSha = execSync("git rev-parse HEAD", {
      cwd: projectRoot,
      encoding: "utf8",
    }).trim();
    console.log(`[Indie Radar Sync] Created commit: ${commitSha}`);

    console.log(`[Indie Radar Sync] Pushing to origin main...`);
    try {
      execSync("git push -u origin main", { cwd: projectRoot, stdio: "inherit" });
    } catch (e) {
      execSync("git push origin main", { cwd: projectRoot, stdio: "inherit" });
    }
    console.log(`[Indie Radar Sync] Push completed successfully.`);

    if (showcaseItems.length > 0) {
      console.log(`[Indie Radar Sync] Recording ${showcaseItems.length} delivery records in PostgreSQL...`);
      await recordDeliveries(sql, showcaseItems, commitSha, showcaseDate);
      console.log(`[Indie Radar Sync] Deliveries recorded successfully.`);
    }

    return { committed: true, commitSha };
  } finally {
    await sql.end();
  }
}

// Standalone execution
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const backfill = args.includes("--backfill");
  const dateArg = args.find((a) => a.startsWith("--date="));
  const date = dateArg ? dateArg.split("=")[1] : undefined;

  runSync({ dryRun, backfill, date })
    .then((res) => {
      console.log("[Indie Radar Sync] Result:", res);
      process.exit(0);
    })
    .catch((err) => {
      console.error("[Indie Radar Sync] Error:", err);
      process.exit(1);
    });
}
