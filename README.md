# Indie Radar | 出海与独立开发每日情报

[![Telegram](https://img.shields.io/badge/Telegram-@IndieRadarPro-blue?logo=telegram)](https://t.me/IndieRadarPro) [![Website](https://img.shields.io/badge/Website-radar.everythingisok.top-indigo)](https://radar.everythingisok.top) ![Auto Update](https://img.shields.io/badge/Daily_Update-Automated-green)

> 专为全球出海开发者、独立黑客（Indie Hackers）与技术创业者打造的 90% 降噪情报站。每日自动监控全球主流社区（Product Hunt、Reddit、V2EX、GitHub、Hacker News 等），严格经过多维价值与商业可行性评分漏斗，仅沉淀并同步评分 >= 70 分的硬核优质项目、开源基建与变现复盘。

---

## 今日精选 (Today's Top Signals) · 2026-11-28

### 1. [Balatro 开发者复盘 3 年开发时间线：上线首日 Steam 卖出 119,000 份、数小时收入超 $600,000](https://localthunk.com/blog/balatro-timeline-3aarh)

- **原标题 / Original**: The Balatro Timeline
- **评分 / Signal Score**: ⭐ `88.0` / 100 | **分类**: 📌 cases
- **标签 / Tags**: `#变现实录` `#独立开发` `#变现` `#出海` `#冷启动` `#Hacker News`
- **💡 核心概要 / What It Is**: Balatro 开发者 LocalThunk 发布的长文，按时间顺序复盘从 2021 年 12 月立项到 2024 年 2 月发售的全部开发历程。
- **🎯 推荐与借鉴 / Takeaway**: 开发者亲述 Balatro 从业余项目到发售首日 119,000 份销量的完整时间线，涵盖发行商签约与主播传播路径，参考价值在真实商业节奏。

### 2. [google-trends-for-agent 开源：把 Google Trends 换算成真实日搜量，支持 Claude Code 与 Codex 接入](https://www.v2ex.com/t/1260534#reply0)

- **原标题 / Original**: 给 Claude Code / DeepSeek Harness / Codex 接上 Google Trends，开源了个能查真实日搜量的工具
- **评分 / Signal Score**: ⭐ `77.0` / 100 | **分类**: 🛠 开源基础设施 / Open Source
- **标签 / Tags**: `#开源神器` `#开源/仓库` `#SEO` `#AI工具` `#CLI` `#自动化` `#GitHub` `#V2EX`
- **💡 核心概要 / What It Is**: 开发者 exmorning 开源的 google-trends-for-agent 工具，可将 Google Trends 的 0-100 相对指数换算成近似真实日搜索量，替代已归档停更、频繁报 429 的 pytrends。
- **🎯 推荐与借鉴 / Takeaway**: 开源工具把 Google Trends 相对指数校准成真实日搜量，替代已停更的 pytrends，对出海选词和 SEO 调研有直接用处。

### 3. [Cloudflare Workers 被 AI 爬虫刷到 8840 次超限：一次免费额度耗尽的排查与拦截复盘](https://www.v2ex.com/t/1260570#reply1)

- **原标题 / Original**: robots.txt 早写了，爬虫还是把我免费的 Worker 刷到 8840 次超限
- **评分 / Signal Score**: ⭐ `76.0` / 100 | **分类**: 📌 infra
- **标签 / Tags**: `#出海基建` `#Cloudflare` `#现象/趋势` `#V2EX`
- **💡 核心概要 / What It Is**: 一位独立开发者在 V2EX 复盘自己部署在 Cloudflare Workers 上的免费站点被爬虫刷爆 CPU 额度的完整过程。
- **🎯 推荐与借鉴 / Takeaway**: 作者完整复盘 Worker 被恶意爬虫刷爆免费额度的定位与拦截过程，是边缘函数上线前值得参考的踩坑警示。

### 4. [无际翻译开源：纯大模型浏览器双语对照插件，Chrome/Edge/Firefox 已上架](https://www.v2ex.com/t/1260537#reply0)

- **原标题 / Original**: 因为忍受不了免费的机器翻译，开源了一款纯大模型浏览器双语对照插件
- **评分 / Signal Score**: ⭐ `76.0` / 100 | **分类**: 🛠 开源基础设施 / Open Source
- **标签 / Tags**: `#开源神器` `#AI工具` `#Chrome插件` `#独立开发` `#出海` `#GitHub` `#V2EX`
- **💡 核心概要 / What It Is**: 一款只用大模型做网页双语对照翻译的浏览器插件，已在 Chrome / Edge / Firefox 三家商店上架。
- **💰 商业模式与变现 / Business Logic**: 针对传统机翻质量差、商业 AI 翻译插件订阅贵且功能锁付费档的痛点，采用无账号无订阅模式，用户填自己的 API Key 即可，实测每 100 万 Token 约 1.07 元。
- **🎯 推荐与借鉴 / Takeaway**: 作者分享纯大模型双语对照插件的成本实测与缓存设计，可参考其用自有 API Key 替代订阅付费的产品思路。

### 5. [nnStream 开源发布：Win 到 Mac 局域网串流工具，v0.2.1 上线](https://www.v2ex.com/t/1260524#reply0)

- **原标题 / Original**: 受不了 UU 远程收费和 Sunshine 折腾，自己撸了个 Win → Mac 开源串流软件 nnStream
- **评分 / Signal Score**: ⭐ `73.0` / 100 | **分类**: 🛠 开源基础设施 / Open Source
- **标签 / Tags**: `#开源神器` `#开源/仓库` `#桌面端` `#GitHub` `#V2EX`
- **💡 核心概要 / What It Is**: nnStream 是一款面向 Windows → Apple Silicon macOS 局域网场景的开源串流工具，作者因 UU 远程即将对纯局域网直连收费、Sunshine 配置繁琐而自行开发。
- **🎯 推荐与借鉴 / Takeaway**: 作者不满 UU 远程局域网收费，自研开源串流工具替代 Sunshine 方案，思路与实现细节可供同类工具开发借鉴。

### 6. [译哥 Poly 上线：Mac 本机视频换语言并用原片音色配音，买断 ¥69 起](https://www.v2ex.com/t/1260512#reply0)

- **原标题 / Original**: 译哥 Poly：Mac 本机把视频换成另一种语言，并用原片音色配音（v 站用户送 10 个买断码）
- **评分 / Signal Score**: ⭐ `73.0` / 100 | **分类**: 🚀 新出海产品 / Products
- **标签 / Tags**: `#新出海产品` `#桌面端` `#AI工具` `#移动端` `#非AI/通用工具` `#出海` `#V2EX` `#Google` `#DeepSeek`
- **💡 核心概要 / What It Is**: 一款原生 Swift 写的 macOS 应用，把视频拖进去不到 1 分钟换成另一种语言，保留原片音色并压好双语字幕（目前中英互译）。
- **💰 商业模式与变现 / Business Logic**: 针对云端 AI 配音按分钟收费、声音同质化、手动流程耗时的痛点，主打视频不上传的本机处理；纯字幕永久免费，配音每视频前 3 分钟免费，买断版首发 ¥69、之后 ¥129，无订阅。
- **🎯 推荐与借鉴 / Takeaway**: 开发者公开了本机视频配音工具的技术栈、性能数据和买断定价，对做本地化 AI 桌面产品的开发者有工程与定价参考。

### 7. [拾页（Shiye）0.4.3 上架 Chrome 商店：100% 本地的正文全文检索浏览记忆插件](https://www.v2ex.com/t/1260557#reply0)

- **原标题 / Original**: 做了一个 100% 本地的 Chrome 浏览记忆插件：关掉未读标签不怕忘，支持按正文关键词找回（无需账号）
- **评分 / Signal Score**: ⭐ `72.0` / 100 | **分类**: 🚀 新出海产品 / Products
- **标签 / Tags**: `#新出海产品` `#Chrome插件` `#开源/仓库` `#独立开发` `#V2EX` `#GitHub`
- **💡 核心概要 / What It Is**: 一款 100% 本地的 Chrome 浏览记忆插件，解决关掉未读标签后找回网页的问题。【商业/痛点逻辑】浏览器自带历史只能搜标题和 URL，作者用原生 ES Modules + IndexedDB + Mozilla Readability 实现正文存档与全文检索，支持中文片段、英文拼写容错和片段高亮，无需账号、无 API Key、无默认遥测。
- **🎯 推荐与借鉴 / Takeaway**: 作者自述了从浏览器记忆痛点出发的插件设计与权限取舍，适合参考本地化小工具的工程与隐私边界处理。

### 8. [Page Agent Lite 开源：受 Hermes 启发的会记经验 AI 浏览器插件](https://www.v2ex.com/t/1260543#reply0)

- **原标题 / Original**: [开源] 受 Hermes 启发，做了个会记经验的 AI 浏览器插件
- **评分 / Signal Score**: ⭐ `71.0` / 100 | **分类**: 🛠 开源基础设施 / Open Source
- **标签 / Tags**: `#开源神器` `#AI工具` `#Chrome插件` `#开源/仓库` `#GitHub` `#V2EX`
- **💡 核心概要 / What It Is**: 一款 Chrome / Edge 浏览器插件 Page Agent Lite，在侧栏下达指令后可自动读页面、填表、点击、翻页。
- **💰 商业模式与变现 / Business Logic**: 源自作者做在线试题时来回切换 AI 的痛点，任务完成后会把经验步骤存在本机供下次复用，不训练模型。
- **🎯 推荐与借鉴 / Takeaway**: 作者分享了自己开发的开源浏览器自动化插件，本地记忆方案和不依赖后端的设计思路值得借鉴。

### 9. [涟漪（Ripple）v0.1.31 上线：免费无广的安卓防冲动戒手机工具](https://www.v2ex.com/t/1260525#reply0)

- **原标题 / Original**: 受够锁机软件收费和冲动卸载，给安卓写了个免费无广的防冲动戒手机工具：涟漪（Ripple）
- **评分 / Signal Score**: ⭐ `70.0` / 100 | **分类**: 🚀 新出海产品 / Products
- **标签 / Tags**: `#新出海产品` `#非AI/通用工具` `#移动端` `#独立开发` `#开源/仓库` `#V2EX` `#GitHub`
- **💡 核心概要 / What It Is**: 一款安卓本地戒手机工具涟漪（Ripple），免费、无广告、免注册，规则与拦截记录仅存本机，当前版本 v0.1.31。
- **💰 商业模式与变现 / Business Logic**: 作者不满现有锁机软件弹窗开会员和易被冲动卸载，主打三个防绕过设计：15 分钟冷静期、按开机单调时钟计时防改系统时间、以及仅拦截微信视频号、朋友圈、小程序和 QQ 频道而保留聊天与支付。
- **🎯 推荐与借鉴 / Takeaway**: 作者针对现有锁机工具的付费墙和防卸载缺陷自建本地免费方案，防绕过设计与不做一刀切的拦截思路值得同类工具开发者参考。

---

## 历史归档 (Historical Archives)

- [📅 2026-11-28 情报精选 (9 篇)](archives/2026-11-28.md)
- [📅 2026-11-27 情报精选 (13 篇)](archives/2026-11-27.md)
- [📅 2026-11-26 情报精选 (11 篇)](archives/2026-11-26.md)
- [📅 2026-11-25 情报精选 (10 篇)](archives/2026-11-25.md)
- [📅 2026-11-24 情报精选 (14 篇)](archives/2026-11-24.md)
- [📅 2026-11-23 情报精选 (14 篇)](archives/2026-11-23.md)
- [📅 2026-11-22 情报精选 (10 篇)](archives/2026-11-22.md)
- [📅 2026-11-21 情报精选 (8 篇)](archives/2026-11-21.md)
- [📅 2026-11-20 情报精选 (11 篇)](archives/2026-11-20.md)
- [📅 2026-11-19 情报精选 (9 篇)](archives/2026-11-19.md)
- [📅 2026-11-18 情报精选 (6 篇)](archives/2026-11-18.md)
- [📅 2026-11-17 情报精选 (13 篇)](archives/2026-11-17.md)
- [📅 2026-11-16 情报精选 (10 篇)](archives/2026-11-16.md)
- [📅 2026-11-14 情报精选 (10 篇)](archives/2026-11-14.md)
- [📅 2026-11-13 情报精选 (12 篇)](archives/2026-11-13.md)
- [📅 2026-11-12 情报精选 (5 篇)](archives/2026-11-12.md)
- [📅 2026-11-11 情报精选 (7 篇)](archives/2026-11-11.md)
- [📅 2026-11-10 情报精选 (5 篇)](archives/2026-11-10.md)
- [📅 2026-11-09 情报精选 (12 篇)](archives/2026-11-09.md)
- [📅 2026-11-08 情报精选 (5 篇)](archives/2026-11-08.md)
- [📅 2026-11-07 情报精选 (8 篇)](archives/2026-11-07.md)
- [📅 2026-11-06 情报精选 (8 篇)](archives/2026-11-06.md)
- [📅 2026-11-05 情报精选 (12 篇)](archives/2026-11-05.md)
- [📅 2026-11-04 情报精选 (8 篇)](archives/2026-11-04.md)
- [📅 2026-11-03 情报精选 (10 篇)](archives/2026-11-03.md)
- [📅 2026-11-02 情报精选 (8 篇)](archives/2026-11-02.md)
- [📅 2026-11-01 情报精选 (4 篇)](archives/2026-11-01.md)
- [📅 2026-10-31 情报精选 (8 篇)](archives/2026-10-31.md)
- [📅 2026-10-30 情报精选 (17 篇)](archives/2026-10-30.md)
- [📅 2026-10-29 情报精选 (15 篇)](archives/2026-10-29.md)
- [📅 2026-10-28 情报精选 (14 篇)](archives/2026-10-28.md)
- [📅 2026-10-27 情报精选 (10 篇)](archives/2026-10-27.md)
- [📅 2026-10-26 情报精选 (15 篇)](archives/2026-10-26.md)
- [📅 2026-10-25 情报精选 (4 篇)](archives/2026-10-25.md)
- [📅 2026-10-24 情报精选 (9 篇)](archives/2026-10-24.md)
- [📅 2026-10-23 情报精选 (10 篇)](archives/2026-10-23.md)
- [📅 2026-10-22 情报精选 (17 篇)](archives/2026-10-22.md)
- [📅 2026-10-21 情报精选 (19 篇)](archives/2026-10-21.md)
- [📅 2026-10-20 情报精选 (9 篇)](archives/2026-10-20.md)
- [📅 2026-10-19 情报精选 (12 篇)](archives/2026-10-19.md)
- [📅 2026-10-18 情报精选 (7 篇)](archives/2026-10-18.md)
- [📅 2026-10-17 情报精选 (5 篇)](archives/2026-10-17.md)
- [📅 2026-10-16 情报精选 (12 篇)](archives/2026-10-16.md)
- [📅 2026-10-15 情报精选 (14 篇)](archives/2026-10-15.md)
- [📅 2026-10-14 情报精选 (9 篇)](archives/2026-10-14.md)
- [📅 2026-10-13 情报精选 (8 篇)](archives/2026-10-13.md)
- [📅 2026-10-12 情报精选 (14 篇)](archives/2026-10-12.md)
- [📅 2026-10-11 情报精选 (13 篇)](archives/2026-10-11.md)
- [📅 2026-10-10 情报精选 (2 篇)](archives/2026-10-10.md)
- [📅 2026-10-09 情报精选 (4 篇)](archives/2026-10-09.md)
- [📅 2026-10-08 情报精选 (3 篇)](archives/2026-10-08.md)
- [📅 2026-10-02 情报精选 (4 篇)](archives/2026-10-02.md)

---

### 📡 关注我们 / Stay Connected

- 🌐 **在线情报站**：[radar.everythingisok.top](https://radar.everythingisok.top)
- 💬 **Telegram 频道**：[@IndieRadarPro](https://t.me/IndieRadarPro)
- ⭐ **欢迎 Star 支持**，让更多独立开发者与出海同路人看到本仓库！
