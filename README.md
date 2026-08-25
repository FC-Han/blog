<p align="center">
  <a href="https://fc-han.github.io/blog/">
    <img src="https://img.shields.io/badge/🌐_在线博客-fc--han.github.io%2Fblog-ff6b35?style=for-the-badge" alt="在线博客">
  </a>
</p>

<h1 align="center">🏠 成的小屋</h1>

<p align="center">
  <b>一个用 VitePress 搭建的小角落 · 写代码，也写生活</b>
</p>

<p align="center">
  <i>记录 &amp; 专注</i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Framework-VitePress-ff6b35?style=flat-square&logo=vue.js&logoColor=white" alt="VitePress">
  <img src="https://img.shields.io/badge/Host-GitHub%20Pages-1f6feb?style=flat-square&logo=githubpages&logoColor=white" alt="GitHub Pages">
  <img src="https://img.shields.io/badge/Comments-Giscus-9b59b6?style=flat-square" alt="Giscus">
  <img src="https://img.shields.io/github/last-commit/FC-Han/blog?style=flat-square&color=2ecc71" alt="最近提交">
</p>

---

## 🌐 在线博客

👉 **https://fc-han.github.io/blog/**

源码托管在 [`FC-Han/blog`](https://github.com/FC-Han/blog)，由 **GitHub Pages** 自动发布。

## ✨ 特性

- 📝 **文章 & 日记** —— 在 `posts/` 写 `.md`，`frontmatter` 自动聚合到首页、标签、日记归档
- 🏷️ **标签筛选** —— 点击标签即可快速过滤文章，同一篇不会重复出现
- 💬 **Giscus 评论** —— 基于 GitHub Discussions，文章页底部可留言互动
- 🌗 **明暗主题** —— 跟随系统 / 站点切换，自动适配
- 📱 **响应式** —— 手机、平板、桌面都好看
- 🎨 **暖橙主题「成的小屋」** —— 统一的视觉风格，养眼不刺眼
- 🚀 **GitHub Pages 发布** —— `gh-pages` 分支托管，提交即上线

## 📁 目录结构

```text
blog/
├── .vitepress/
│   ├── config.mjs              # 站点配置（导航 / 侧边栏 / base 前缀）
│   └── theme/
│       ├── components/         # 自定义组件
│       │   ├── AboutPage.vue   # 关于页
│       │   ├── PostList.vue    # 文章 / 日记列表
│       │   ├── TagList.vue     # 标签筛选
│       │   ├── PostMeta.vue    # 文章元信息 / 标签
│       │   ├── SiteStats.vue   # 站点统计
│       │   └── Giscus.vue      # 评论区（Giscus）
│       ├── utils/posts.js      # 文章读取与聚合
│       ├── index.js            # 主题入口（注册组件 + 注入评论区）
│       └── style.css           # 暖橙主题样式
├── posts/                      # 文章（日记 + 博文，每篇一个 .md）
├── scripts/
│   └── ghpages-html.js         # 构建后转目录式页面（修复子页 404）
├── index.md                    # 首页（最新文章）
├── posts.md                    # 文章列表
├── tags.md                     # 标签分类
├── diary.md                    # 日记归档
├── about.md                    # 关于我
├── 404.md                      # 自定义 404 页
└── package.json
```

## 🚀 本地预览

```bash
npm install
npm run docs:dev      # 开发服务器：http://localhost:5173/blog/
```

> 站点配置了 `base: '/blog/'`，本地预览请访问 `http://localhost:5173/blog/`（不是根路径）。

## ✍️ 写一篇文章

在 `posts/` 目录下新建 `.md`，填好 `frontmatter`，首页、标签页、日记页会**自动**聚合：

```markdown
---
title: 文章标题
date: 2026-08-25
tags: [前端, VitePress]
description: 一句话简介（显示在列表里）
---

正文用 Markdown 写……
```

> 💡 `date` 字段用于文章 / 日记页展示与排序；首页、标签、关于等页不含 `date`。

## 📦 构建与部署

```bash
npm run docs:build    # 构建 + 目录式页面转换（自动修复 GitHub Pages 子页 404）
```

- 产物输出到 `.vitepress/dist/`
- 通过 `gh-pages` 分支托管（`git push` 到 `gh-pages` 即上线）
- GitHub Pages 设置：`Settings → Pages → Source: Deploy from a branch → gh-pages → /(root)`

## 🛠 技术栈

| 技术 | 用途 |
|------|------|
| [VitePress](https://vitepress.dev/) | 静态站点生成器（基于 Vue + Vite） |
| [Vue 3](https://vuejs.org/) | 自定义主题组件 |
| [Giscus](https://giscus.app/) | 评论系统（GitHub Discussions 驱动） |
| GitHub Pages | 站点托管与发布 |

## 📮 评论区

文章页底部已接入 [Giscus](https://giscus.app/)，使用 GitHub 账号登录即可留言；同一页面按 URL 自动聚合讨论。

---

<p align="center">
  Made with ❤️ and ☕ by <a href="https://github.com/FC-Han">FC-Han</a>
</p>
