<script setup>
import { computed } from 'vue'
import { loadPosts } from '../utils/posts'

// 汇总所有文章的 tags，按标签下文章数量排序，生成标签云 + 分类卡片。
const all = loadPosts()

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

// 标签云字号：数量越多越大
function cloudClass(count) {
  if (count >= 3) return 'cloud-lg'
  if (count === 2) return 'cloud-md'
  return 'cloud-sm'
}

function scrollToTag(name) {
  const el = document.getElementById('tag-' + name)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <div class="tag-page">
    <!-- 标签云 -->
    <div v-if="tags.length" class="tag-cloud">
      <a
        v-for="t in tags"
        :key="t.name"
        class="cloud-chip"
        :class="cloudClass(t.count)"
        @click.prevent="scrollToTag(t.name)"
        :title="`${t.count} 篇`"
      ># {{ t.name }}</a>
    </div>
    <p v-else class="post-empty">还没有标签，写第一篇文章时记得加上哦～</p>

    <!-- 分类卡片 -->
    <div class="tag-sections">
      <section
        v-for="t in tags"
        :key="t.name"
        :id="'tag-' + t.name"
        class="tag-section"
      >
        <div class="tag-section-head">
          <h2 class="tag-title"># {{ t.name }}</h2>
          <span class="tag-count">{{ t.count }} 篇</span>
        </div>
        <ul class="tag-post-list">
          <li v-for="p in t.posts" :key="p.url">
            <a :href="p.url" class="tag-post-link">{{ p.title }}</a>
            <span v-if="p.date" class="tag-date">{{ p.date }}</span>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
