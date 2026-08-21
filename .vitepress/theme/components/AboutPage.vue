<script setup>
// 关于页组件：完全用 Vue 组件实现，避免 markdown 内联 HTML 被解析成代码块
const BASE_URL = import.meta.env.BASE_URL
</script>

<template>
  <div class="about-page">
    <!-- 头像卡（居中） -->
    <div class="about-hero">
      <div class="about-avatar-wrap">
        <img class="about-avatar" :src="BASE_URL + 'tx.jpg'" alt="头像" />
      </div>
      <h1 class="about-name">成</h1>
      <p class="about-sign">「成的小屋」的主理人 · 写代码，也写生活</p>
      <p class="about-bio">相信休息也是工作的一部分，喜欢把零碎的想法变成文字留下来。</p>
      <div class="about-tags">
        <span>💻 前端</span>
        <span>📝 VitePress</span>
        <span>🔧 折腾爱好者</span>
        <span>📒 记录控</span>
      </div>
      <div class="about-actions">
        <a class="about-btn primary" href="https://github.com/FC-Han" target="_blank" rel="noopener">
          <span class="btn-icon">🐙</span> GitHub
        </a>
        <a class="about-btn" :href="BASE_URL + 'diary'">
          <span class="btn-icon">📔</span> 我的日记
        </a>
        <a class="about-btn" href="mailto:you@example.com">
          <span class="btn-icon">✉️</span> 邮箱
        </a>
      </div>
    </div>

    <!-- 站点统计 -->
    <SiteStats />

    <!-- 内容卡片网格 -->
    <div class="about-grid">
      <div class="about-card">
        <h2 class="about-card-title">🙋 关于我</h2>
        <p>你好，我是成。平时喜欢折腾各种小工具，把生活里零碎的想法写成文字留下来。这个博客就是我的一个小角落——技术笔记和生活碎片都在这里。</p>
      </div>
      <div class="about-card">
        <h2 class="about-card-title">🛠️ 这个站点</h2>
        <ul class="about-list">
          <li>基于 <strong>VitePress</strong> 构建，原生支持 Markdown 与代码高亮。</li>
          <li>部署在 <strong>GitHub Pages</strong>，源码与构建产物分离（main / gh-pages）。</li>
          <li>文章、标签、日记一应俱全，写新内容只需丢一个 <code>.md</code> 文件。</li>
        </ul>
      </div>
      <div class="about-card">
        <h2 class="about-card-title">🚀 最近在做</h2>
        <ul class="about-list">
          <li>把博客打磨得更顺手，慢慢沉淀技术笔记。</li>
          <li>坚持写日记，给生活留点痕迹。</li>
        </ul>
      </div>
      <div class="about-card">
        <h2 class="about-card-title">☕ 一句话</h2>
        <blockquote class="about-quote">慢下来，写下来。<br />休息也是工作的一部分。</blockquote>
      </div>
    </div>
  </div>
</template>
