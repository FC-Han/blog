<script setup>
import { ref, computed } from 'vue'
import { loadPosts } from '../utils/posts'

// 标签页：标签云（点击筛选）+ 文章卡片列表
// 默认显示全部文章（去重）；点某个标签只看该标签下的文章，
// 避免同一篇多标签文章在页面里重复出现。
const all = loadPosts()
const activeTag = ref('') // '' = 全部

const tags = computed(() => {
  const map = {}
  for (const p of all) {
    for (const t of p.tags) {
      if (!map[t]) map[t] = []
      map[t].push(p)
    }
  }
  return Object.entries(map)
    .map(([name, posts]) => ({
      name,
      count: posts.length,
      posts: posts.sort((a, b) => (a.date < b.date ? 1 : -1))
    }))
    .sort((a, b) => b.count - a.count)
})

const shown = computed(() => {
  if (!activeTag.value) return all
  return all.filter((p) => p.tags.includes(activeTag.value))
})

// 标签云字号：数量越多越大
function cloudClass(count) {
  if (count >= 3) return 'cloud-lg'
  if (count === 2) return 'cloud-md'
  return 'cloud-sm'
}
</script>

<template>
  <div class="tag-page">
    <!-- 标签云（含「全部」） -->
    <div v-if="tags.length" class="tag-cloud">
      <a
        class="cloud-chip"
        :class="['cloud-lg', { active: activeTag === '' }]"
        @click.prevent="activeTag = ''"
      >全部</a>
      <a
        v-for="t in tags"
        :key="t.name"
        class="cloud-chip"
        :class="[cloudClass(t.count), { active: activeTag === t.name }]"
        @click.prevent="activeTag = t.name"
        :title="`${t.count} 篇`"
      ># {{ t.name }}</a>
    </div>
    <p v-else class="post-empty">还没有标签，写第一篇文章时记得加上哦～</p>

    <!-- 筛选结果标题 -->
    <h3 v-if="shown.length" class="tag-result-title">
      <template v-if="activeTag"># {{ activeTag }} <span class="count">（{{ shown.length }} 篇）</span></template>
      <template v-else>全部内容 <span class="count">（{{ shown.length }} 篇）</span></template>
    </h3>

    <!-- 文章卡片（去重后） -->
    <div class="post-list">
      <p v-if="!shown.length" class="post-empty">这个标签下还没有内容～</p>
      <article v-for="post in shown" :key="post.url" class="post-card">
        <a :href="post.url" class="post-card-main">
          <div class="post-meta">
            <span v-if="post.date" class="post-date">
              <span class="post-date-icon">📅</span>{{ post.date }}
            </span>
            <span v-for="t in post.tags" :key="t" class="post-tag">#{{ t }}</span>
          </div>
          <h4 class="post-title">{{ post.title }}</h4>
          <p v-if="post.description" class="post-desc">{{ post.description }}</p>
        </a>
        <a :href="post.url" class="post-arrow" aria-label="阅读文章">→</a>
      </article>
    </div>
  </div>
</template>
