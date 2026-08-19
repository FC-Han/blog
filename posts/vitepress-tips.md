---
title: VitePress 博客搭建小记
date: 2026-08-18
tags: [前端, VitePress]
description: 用 VitePress 做个人博客的一些心得。
---

## 为什么选 VitePress

VitePress 基于 Vite，启动和热更新极快，写文章就是写 Markdown，零运行时负担。

## 目录结构

- `posts/` 存放文章
- `.vitepress/theme` 自定义主题与组件
- GitHub Actions 负责自动部署

## 一些技巧

1. 用 `import.meta.glob` 自动收集文章，省去手动维护列表。
2. 通过扩展默认主题的 `Layout`，在文章顶部注入日期与标签。
3. 配合 `cleanUrls` 得到更干净的链接。

> 写博客最重要的是坚持，工具只是辅助。
