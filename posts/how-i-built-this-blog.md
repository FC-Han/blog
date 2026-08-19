---
title: 我是怎么把这个博客搭起来的
date: 2026-08-19
tags: [VitePress, 博客, 折腾]
description: 从零到上线：VitePress + GitHub Pages 搭建个人博客的全过程，以及踩过的那些坑。
---

# 我是怎么把这个博客搭起来的

一直想有个地方安放零散的记录和想法，拖了很久。这次终于动手，从选型到上线花了大半天，踩了不少坑，值得写下来。

## 为什么选 VitePress

先列了几个候选：

- **Hexo**：老牌博客框架，主题多，但 Node 依赖链长，改样式要碰 EJS。
- **Hugo**：快，但 Go 模板不是我的主场，主题定制成本高。
- **VitePress**：基于 Vite，写 Markdown 就是写博客，零运行时负担，还能完全用 Vue 组件定制——最终选了它。

VitePress 官方定位是文档站，但拿来做个人博客非常合适：原生 Markdown 渲染、代码高亮、暗色模式都是现成的，需要的东西自己写几个 Vue 组件就能补上。

## 站点结构

```
H:\blog
├── index.md              # 主页（hero + 特性卡 + 最新文章）
├── posts.md              # 全部文章
├── tags.md               # 标签分类
├── diary.md              # 日记（按月归档）
├── about.md              # 关于
├── posts/                # 文章都在这里，一篇一个 .md
│   ├── how-i-built-this-blog.md
│   └── ...
├── public/               # 静态资源（头像等）
└── .vitepress/
    ├── config.mjs        # 站点配置
    └── theme/
        ├── index.js      # 主题入口（注册全局组件）
        ├── style.css     # 全局样式
        └── components/   # 自定义组件
```

写新文章就是往 `posts/` 丢一个 `.md`，头部写好 `title / date / tags / description`，首页和标签页会自动聚合——这也是选 VitePress 的最大理由：**内容即文件，无需数据库**。

## 部署：GitHub Pages

部署方案用了 **gh-pages 分支**（源码在 `main`，构建产物在 `gh-pages`），而不是 GitHub Actions：

- Actions 工作流文件需要 token 有 `workflow` 权限，我的授权 token 没有，推送会被 GitHub 直接拒绝；
- 改成分支部署后，每次更新就是：本地构建 → 把 `dist` 推到 `gh-pages` → Pages 自动重新发布。

## 踩过的坑

1. **组件没注册，主页空白**：`PostList` / `TagList` 写好了但没在主题里注册成全局组件，结果主页只剩两行字——第一版上线后才发现，赶紧补上 `app.component(...)`。
2. **取不到 frontmatter**：VitePress 1.x 不给 Markdown 模块导出 `frontmatter`，列表显示成了文件名。最后用 `?raw` 读原文 + 自己写了个极简 YAML 解析器。
3. **本地构建报 exit 1**：Windows 上 H: 盘没有回收站，构建末尾清理临时目录时删除失败。禁用安全删除拦截后构建就干净了。
4. **上传网络不稳**：推送 `gh-pages` 时连接反复被重置，靠"重试 + 校验远程 SHA"的循环才推上去。

## 之后想做的

- 写更多技术笔记（前端为主）；
- 给日记页加个心情标签；
- 也许加个留言板（先用评论区服务）。

这里会持续更新，欢迎常来。
