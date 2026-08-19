<script setup>
import { computed } from 'vue'
import { loadPosts } from '../utils/posts'

// 站点统计：文章数 / 日记数 / 标签数（用于关于页）
const all = loadPosts()

const stats = computed(() => {
  const articles = all.filter((p) => !p.tags.includes('日记')).length
  const diaries = all.filter((p) => p.tags.includes('日记')).length
  const tagSet = new Set(all.flatMap((p) => p.tags))
  return [
    { icon: '📝', label: '文章', value: articles },
    { icon: '📔', label: '日记', value: diaries },
    { icon: '🏷️', label: '标签', value: tagSet.size }
  ]
})
</script>

<template>
  <div class="site-stats">
    <div v-for="s in stats" :key="s.label" class="stat-card">
      <span class="stat-icon">{{ s.icon }}</span>
      <span class="stat-value">{{ s.value }}</span>
      <span class="stat-label">{{ s.label }}</span>
    </div>
  </div>
</template>
