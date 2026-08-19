<script setup>
import { computed } from 'vue'

// 支持可选 tag 过滤：<PostList /> 显示全部；<PostList tag="日记" /> 只显示该标签文章。
// VitePress 1.x 不给 markdown 导出 frontmatter 命名导出，这里用 ?raw 读原文并自建极简解析。
const props = defineProps({
  tag: { type: String, default: '' }
})

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

const posts = computed(() => {
  return Object.entries(modules)
    .map(([path, raw]) => {
      const fm = parseFrontmatter(raw)
      const slug = path.split('/').pop().replace(/\.md$/, '')
      return {
        title: fm.title || slug,
        date: fm.date || '',
        tags: Array.isArray(fm.tags) ? fm.tags : [],
        description: fm.description || '',
        url: '/posts/' + slug
      }
    })
    .filter((p) => !props.tag || p.tags.includes(props.tag))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
})
</script>

<template>
  <div class="post-list">
    <p v-if="!posts.length" class="post-empty">这里还没有内容，敬请期待～</p>
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
