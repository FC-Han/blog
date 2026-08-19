---
layout: home

hero:
  name: 成的小屋
  text: 休息也是工作的一部分
  tagline: 记录 & 专注
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

<div class="home-links">
  <a href="/posts">📝 全部文章</a>
  <a href="/tags">🏷️ 标签分类</a>
  <a href="/diary">📔 我的日记</a>
  <a href="/about">👤 关于我</a>
</div>
