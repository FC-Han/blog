<script setup>
import { computed } from 'vue'

// 自动收集 posts/ 下所有 Markdown 文章的 frontmatter，生成文章列表。
const modules = import.meta.glob('../../../posts/*.md', { eager: true })

const posts = computed(() => {
  return Object.entries(modules)
    .map(([path, mod]) => {
      const fm = mod.frontmatter || {}
      const slug = path.split('/').pop().replace(/\.md$/, '')
      return {
        title: fm.title || slug,
        date: fm.date || '',
        tags: Array.isArray(fm.tags) ? fm.tags : [],
        description: fm.description || '',
        url: '/posts/' + slug
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
})
</script>

<template>
  <div class="post-list">
    <article v-for="post in posts" :key="post.url" class="post-card">
      <a :href="post.url" class="post-title">{{ post.title }}</a>
      <div class="post-meta">
        <span v-if="post.date" class="post-date">{{ post.date }}</span>
        <span v-for="t in post.tags" :key="t" class="post-tag">#{{ t }}</span>
      </div>
      <p v-if="post.description" class="post-desc">{{ post.description }}</p>
    </article>
  </div>
</template>
