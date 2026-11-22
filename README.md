# Indie Radar | 出海与独立开发每日情报

[![Telegram](https://img.shields.io/badge/Telegram-@IndieRadarPro-blue?logo=telegram)](https://t.me/IndieRadarPro) [![Website](https://img.shields.io/badge/Website-radar.everythingisok.top-indigo)](https://radar.everythingisok.top) ![Auto Update](https://img.shields.io/badge/Daily_Update-Automated-green)

> 专为全球出海开发者、独立黑客（Indie Hackers）与技术创业者打造的 90% 降噪情报站。每日自动监控全球主流社区（Product Hunt、Reddit、V2EX、GitHub、Hacker News 等），严格经过多维价值与商业可行性评分漏斗，仅沉淀并同步评分 >= 70 分的硬核优质项目、开源基建与变现复盘。

---

## 今日精选 (Today's Top Signals) · 2026-11-22

### 1. [Ghostscript Upload2Shell（CVE-2026-125396）：Type 1 字体加载器漏洞穿透 -dSAFER 沙箱，波及 Google、WordPress、Debian CUPS 等](https://pwn.ai/upload2shell)

- **原标题 / Original**: Upload2Shell (CVE-2026-125396)
- **评分 / Signal Score**: ⭐ `82.0` / 100 | **分类**: 📌 infra
- **标签 / Tags**: `#安全/对齐` `#开源/仓库` `#自动化` `#行业动态` `#GitHub`
- **💡 核心概要 / What It Is**: pwn.ai 公开的 Ghostscript 漏洞披露：Type 1 字体加载器的 use-after-free 可让恶意文档穿透 -dSAFER 沙箱，以渲染进程身份执行任意命令。
- **🎯 推荐与借鉴 / Takeaway**: 披露了一条贯穿 Google、WordPress、Debian CUPS 等服务的 Ghostscript 沙箱逃逸链，对做文件上传与预览功能的出海产品是直接的安全踩坑警示。

### 2. [aist v0.6.0 重新开源：零配置终端 AI 排障工具，支持多机 SSH 与环境记忆](https://www.v2ex.com/t/1258874#reply0)

- **原标题 / Original**: 年初做的终端排障小工具推倒重做成了 aist：零配置融进 Shell、多机 SSH、带环境记忆，再来求各位老哥拍砖
- **评分 / Signal Score**: ⭐ `79.0` / 100 | **分类**: 🛠 开源基础设施 / Open Source
- **标签 / Tags**: `#开源神器` `#开源/仓库` `#CLI` `#AI工具` `#独立开发` `#出海` `#V2EX` `#GitHub`
- **💡 核心概要 / What It Is**: aist 是一款开源的终端 AI 排障工具，由独立开发者根据年初 aiassist 的使用反馈推倒重做，发布 v0.6.0。【商业/痛点逻辑】解决运维中换机器要配 YAML 和 API Key、多服务器排查割裂、新会话失忆等痛点。
- **🎯 推荐与借鉴 / Takeaway**: 开发者把终端 AI 排障工具推倒重做并开源，零配置融入 Shell、多机 SSH 和环境记忆的设计思路可作工程参考。

### 3. [ShareToken 开源：基于 P2P 网络共享 Claude/ChatGPT 闲置额度](https://www.v2ex.com/t/1258937#reply0)

- **原标题 / Original**: 开源个基于 P2P 网络共享 Token 的项目，一起来共享闲置算力解决生产力
- **评分 / Signal Score**: ⭐ `73.0` / 100 | **分类**: 🛠 开源基础设施 / Open Source
- **标签 / Tags**: `#开源神器` `#开源/仓库` `#AI工具` `#CLI` `#GitHub` `#V2EX`
- **💡 核心概要 / What It Is**: ShareToken 是一个点对点的大模型额度共享网络，MIT 协议开源，支持共享 Claude、ChatGPT、Gemini、Grok 订阅、各家 API key 和本地 Ollama 模型。
- **🎯 推荐与借鉴 / Takeaway**: 作者开源了一个点对点共享大模型额度的工具，围绕订阅额度闲置的痛点给出工程方案，也坦诚了审计局限。

### 4. [Kooyu 1.0.0 发布：本地优先 AI 助手统一调度 10 多个编程 CLI](https://www.v2ex.com/t/1258880#reply0)

- **原标题 / Original**: 我做了 Kooyu：一个本地优先的 AI 助手，统一调度你手里所有的编程 CLI
- **评分 / Signal Score**: ⭐ `73.0` / 100 | **分类**: 🚀 新出海产品 / Products
- **标签 / Tags**: `#新出海产品` `#开源/仓库` `#AI工具` `#独立开发` `#桌面端` `#CLI` `#V2EX` `#GitHub`
- **💡 核心概要 / What It Is**: Kooyu 是一个本地优先的个人 AI 助手，把 Claude Code、Codex、DeepSeek、Gemini CLI、OpenCode、Cursor 等 10 多个编程引擎统一在一个主管之下调度。
- **🎯 推荐与借鉴 / Takeaway**: 多引擎编程 agent 切换是真实痛点，其上下文转交和并行竞速的调度思路对做 AI 工具的开发者有工程借鉴。

### 5. [微子中枢 v0.6.1 开源：一键部署远程控制面板，新增本地 Ollama 和 OpenCode 支持](https://www.v2ex.com/t/1258878#reply0)

- **原标题 / Original**: [开源] 微子中枢 v0.6.1：一键部署 + 远程控制，新增本地 Ollama 和 OpenCode
- **评分 / Signal Score**: ⭐ `73.0` / 100 | **分类**: 🛠 开源基础设施 / Open Source
- **标签 / Tags**: `#开源神器` `#开源/仓库` `#GitHub` `#AI工具` `#独立开发` `#V2EX`
- **💡 核心概要 / What It Is**: 作者 iffiX 开源的微子中枢 v0.6.1，一个自托管的一键部署与远程控制面板，支持远程桌面、终端、VS Code、Claude Code、Codex、Ollama 等模块化安装。
- **🎯 推荐与借鉴 / Takeaway**: 作者开源的自托管远程控制面板，对想在外网安全调用家中算力和 AI 编程工具的开发者是完整的工程方案参考。

### 6. [gopgext 开源：用 Go 编写 PostgreSQL 扩展](https://jespino.github.io/gopgext/)

- **原标题 / Original**: PostgreSQL Extensions in Go
- **评分 / Signal Score**: ⭐ `73.0` / 100 | **分类**: 🛠 开源基础设施 / Open Source
- **标签 / Tags**: `#开源神器` `#开源/仓库` `#独立开发` `#GitHub`
- **💡 核心概要 / What It Is**: gopgext 是一个实验性工具，能用纯 Go 代码构建 PostgreSQL 扩展，函数加上 //gopgext:function 注解即可变成 SQL 函数，C 胶水代码、安装脚本和 control 文件自动生成。

---

## 历史归档 (Historical Archives)

- [📅 2026-11-22 情报精选 (6 篇)](archives/2026-11-22.md)
- [📅 2026-11-21 情报精选 (7 篇)](archives/2026-11-21.md)
- [📅 2026-11-20 情报精选 (11 篇)](archives/2026-11-20.md)
- [📅 2026-11-19 情报精选 (9 篇)](archives/2026-11-19.md)
- [📅 2026-11-18 情报精选 (6 篇)](archives/2026-11-18.md)
- [📅 2026-11-17 情报精选 (14 篇)](archives/2026-11-17.md)
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
