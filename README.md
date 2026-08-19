# 我的博客

基于 [VitePress](https://vitepress.dev/) 的个人博客，部署在 GitHub Pages。

## 本地预览

```bash
npm install
npm run docs:dev
```

## 构建

```bash
npm run docs:build
```

## 写文章

在 `posts/` 目录下新建 `.md` 文件，填写 frontmatter（`title` / `date` / `tags` / `description`），首页与标签页会自动聚合。

## 部署

推送到 `main` 分支后，GitHub Actions 会自动构建并发布到 GitHub Pages。
