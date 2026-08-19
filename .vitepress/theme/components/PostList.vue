<script setup>
import { computed } from 'vue'
import { loadPosts } from '../utils/posts'

// 文章列表组件，支持三种用法：
//   <PostList />                      全部文章
//   <PostList tag="日记" />           只看某标签
//   <PostList exclude-tag="日记" />   排除某标签（首页/文章页用，把日记分出去）
//   <PostList :limit="5" />           限制条数
//   <PostList tag="日记" mode="archive" />  按月归档（高级日记页）
const props = defineProps({
  tag: { type: String, default: '' },
  excludeTag: { type: String, default: '' },
  limit: { type: Number, default: 0 },
  mode: { type: String, default: 'list' } // 'list' | 'archive'
})

const all = loadPosts()

const filtered = computed(() => {
  let list = all.filter(
    (p) =>
      (!props.tag || p.tags.includes(props.tag)) &&
      (!props.excludeTag || !p.tags.includes(props.excludeTag))
  )
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
      <a :href="post.url" class="post-card-main">
        <div class="post-meta">
          <span v-if="post.date" class="post-date">
            <span class="post-date-icon">📅</span>{{ post.date }}
          </span>
          <span v-for="t in post.tags" :key="t" class="post-tag">#{{ t }}</span>
        </div>
        <h3 class="post-title">{{ post.title }}</h3>
        <p v-if="post.description" class="post-desc">{{ post.description }}</p>
      </a>
      <a :href="post.url" class="post-arrow" aria-label="阅读文章">→</a>
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
          <span v-if="post.description" class="diary-desc">{{ post.description }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>
