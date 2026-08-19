# 我的博客

基于 [VitePress](https://vitepress.dev/) 的个人博客，部署在 GitHub Pages（地址：https://fc-han.github.io/blog/）。

## 目录结构

```
blog/
├── .vitepress/
│   ├── config.mjs              # 站点配置（标题/导航/侧边栏）
│   └── theme/                  # 自定义主题（文章列表/标签/元信息组件）
├── posts/                      # 你的文章（每个 .md 一篇）
├── index.md                    # 首页 = 文章列表
├── tags.md                     # 标签分类页
├── about.md                    # 关于页面
├── deploy.sh                   # 一键部署脚本（构建 → 推送到 gh-pages）
└── package.json
```

## 本地预览

```bash
npm install
npm run docs:dev      # 启动开发服务器，默认 http://localhost:5173
```

> PowerShell / CMD 里把 `npm run docs:dev` 当作正常命令即可；在 Git Bash 中注意路径。

## 写文章

在 `posts/` 目录下新建 `.md` 文件，顶部写 frontmatter，首页和标签页会**自动**聚合：

```markdown
---
title: 文章标题
date: 2026-08-19
tags: [前端, VitePress]
description: 一句话简介（显示在列表里）
---

正文用 Markdown 写……
```

## 构建

```bash
npm run docs:build    # 产物输出到 .vitepress/dist/
```

> 注意：在部分环境（如 H: 网络盘）上，`docs:build` 末尾清理临时目录可能报 `exit 1`，
> 但这只是清理步骤的噪声——只要 `.vitepress/dist/` 目录生成了就是构建成功。

## 部署（gh-pages 分支方式）

本项目用 **gh-pages 分支** 托管静态产物（而非 GitHub Actions，因为当前 token 没有 `workflow` 权限）。
一条命令即可重新发布：

```bash
bash deploy.sh
```

脚本会：构建 → 把产物同步到独立的部署仓库（`../blog_deploy`）→ 提交并推送到 `gh-pages` 分支。
推送后 GitHub Pages 会自动重新构建并上线，通常几十秒后生效。

### 首次手动部署（可选，等价于 deploy.sh 做的事）

```bash
git push origin main                              # 源码推到 main
# 然后运行 bash deploy.sh 把构建产物推到 gh-pages
```

### 站点设置

仓库 → Settings → Pages → Source 已设为 **Deploy from a branch → gh-pages → /(root)**。
