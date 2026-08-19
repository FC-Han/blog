<script setup>
import { computed } from 'vue'

// 汇总所有文章的 tags，按标签下文章数量排序，生成标签分类页。
// 用 ?raw 读原文 + 自建极简 frontmatter 解析（VitePress 1.x 不导出 frontmatter 命名导出）。
const modules = import.meta.glob('../../../posts/*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
})

function parseFrontmatter(raw) {
  const m = raw && raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!m) return {}
  const fm = {}
  const lines = m[1].split(/\r?\n/)
  let i = 0
  while (i < lines.length) {
    const kv = lines[i].match(/^([A-Za-z\u4e00-\u9fa5_-]+):\s*(.*)$/)
    if (!kv) { i++; continue }
    const key = kv[1]
    const val = kv[2].trim()
    if (val === '') {
      const arr = []
      let j = i + 1
      while (j < lines.length && /^\s*-\s+/.test(lines[j])) {
        arr.push(lines[j].replace(/^\s*-\s+/, '').trim())
        j++
      }
      fm[key] = arr.length ? arr : ''
      i = j
      continue
    }
    const arrMatch = val.match(/^\[(.*)\]$/)
    if (arrMatch) {
      fm[key] = arrMatch[1].split(',').map((s) => s.trim()).filter(Boolean)
    } else {
      fm[key] = val.replace(/^["']|["']$/g, '')
    }
    i++
  }
  return fm
}

const tags = computed(() => {
  const map = {}
  for (const [path, raw] of Object.entries(modules)) {
    const fm = parseFrontmatter(raw)
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
