---
layout: home

hero:
  name: 成的小屋
  text: 休息也是工作的一部分
  tagline: 一个用 VitePress 搭建的小角落 · 写代码，也写生活
  image:
    src: /tx.jpg
    alt: 头像
  actions:
    - theme: brand
      text: 开始阅读
      link: /posts
    - theme: alt
      text: 我的日记
      link: /diary

features:
  - icon: 📝
    title: 文章
    details: 技术笔记与思考，原生 Markdown 渲染，代码高亮一应俱全。
    link: /posts
  - icon: 🏷️
    title: 标签
    details: 按主题归类检索，一个标签串起一串相关笔记。
    link: /tags
  - icon: 📔
    title: 日记
    details: 随手记录日常点滴，按月归档，留下生活里的小痕迹。
    link: /diary
---

## ✨ 最新文章

<PostList :limit="6" exclude-tag="日记" />

## 🧭 随便逛逛

- [📝 全部文章](/posts) · [🏷️ 标签分类](/tags) · [📔 我的日记](/diary) · [👤 关于我](/about)
