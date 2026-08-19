<script setup>
import { computed } from 'vue'

// 文章列表组件，支持三种用法：
//   <PostList />                      全部文章
//   <PostList tag="日记" />           只看某标签
//   <PostList exclude-tag="日记" />   排除某标签（首页/文章页用，把日记分出去）
//   <PostList :limit="5" />           限制条数
//   <PostList tag="日记" mode="archive" />  按月归档（高级日记页）
// VitePress 1.x 不给 markdown 导出 frontmatter，这里用 ?raw 读原文并自建极简解析。
const props = defineProps({
  tag: { type: String, default: '' },
  excludeTag: { type: String, default: '' },
  limit: { type: Number, default: 0 },
  mode: { type: String, default: 'list' } // 'list' | 'archive'
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

const filtered = computed(() => {
  let list = Object.entries(modules)
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
    .filter(
      (p) =>
        (!props.tag || p.tags.includes(props.tag)) &&
        (!props.excludeTag || !p.tags.includes(props.excludeTag))
    )
    .sort((a, b) => (a.date < b.date ? 1 : -1))
  if (props.limit) list = list.slice(0, props.limit)
  return list
})

// 按月归档：把文章按 YYYY-MM 分组，倒序（新的月份在前）。
const grouped = computed(() => {
  const map = {}
  for (const p of filtered.value) {
    const ym = (p.date || '').slice(0, 7) || '未标注日期'
    if (!map[ym]) map[ym] = []
    map[ym].push(p)
  }
  return Object.keys(map)
    .sort((a, b) => (a < b ? 1 : -1))
    .map((ym) => {
      const [y, m] = ym.split('-')
      const label = ym === '未标注日期' ? ym : `${y} 年 ${Number(m)} 月`
      return { ym, label, posts: map[ym] }
    })
})
</script>

<template>
  <!-- 列表模式 -->
  <div v-if="mode !== 'archive'" class="post-list">
    <p v-if="!filtered.length" class="post-empty">这里还没有内容，敬请期待～</p>
    <article v-for="post in filtered" :key="post.url" class="post-card">
      <a :href="post.url" class="post-title">{{ post.title }}</a>
      <div class="post-meta">
        <span v-if="post.date" class="post-date">{{ post.date }}</span>
        <span v-for="t in post.tags" :key="t" class="post-tag">#{{ t }}</span>
      </div>
      <p v-if="post.description" class="post-desc">{{ post.description }}</p>
    </article>
  </div>

  <!-- 按月归档模式（高级日记页） -->
  <div v-else class="diary-archive">
    <p v-if="!grouped.length" class="post-empty">日记还是空白的，去写第一篇吧～</p>
    <section v-for="group in grouped" :key="group.ym" class="diary-month">
      <div class="diary-month-head">
        <span class="diary-month-dot"></span>
        <h2 class="diary-month-label">{{ group.label }}</h2>
        <span class="diary-month-count">{{ group.posts.length }} 篇</span>
      </div>
      <ul class="diary-month-list">
        <li v-for="post in group.posts" :key="post.url" class="diary-entry">
          <span class="diary-day">{{ (post.date || '').slice(8, 10) || '--' }}</span>
          <a :href="post.url" class="diary-title">{{ post.title }}</a>
        </li>
      </ul>
    </section>
  </div>
</template>
