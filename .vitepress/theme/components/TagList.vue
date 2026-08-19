<script setup>
import { computed } from 'vue'

// 汇总所有文章的 tags，按标签下文章数量排序，生成标签分类页。
const modules = import.meta.glob('../../../posts/*.md', { eager: true })

const tags = computed(() => {
  const map = {}
  for (const [path, mod] of Object.entries(modules)) {
    const fm = mod.frontmatter || {}
    const slug = path.split('/').pop().replace(/\.md$/, '')
    const list = Array.isArray(fm.tags) ? fm.tags : []
    const post = {
      title: fm.title || slug,
      date: fm.date || '',
      url: '/posts/' + slug
    }
    for (const t of list) {
      if (!map[t]) map[t] = []
      map[t].push(post)
    }
  }
  return Object.entries(map)
    .map(([name, posts]) => ({
      name,
      posts: posts.sort((a, b) => (a.date < b.date ? 1 : -1))
    }))
    .sort((a, b) => b.posts.length - a.posts.length)
})
</script>

<template>
  <div class="tag-list">
    <section v-for="tag in tags" :key="tag.name" :id="tag.name" class="tag-section">
      <h2 class="tag-title"># {{ tag.name }} <span class="tag-count">({{ tag.posts.length }})</span></h2>
      <ul>
        <li v-for="p in tag.posts" :key="p.url">
          <a :href="p.url">{{ p.title }}</a>
          <span v-if="p.date" class="tag-date">{{ p.date }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>
