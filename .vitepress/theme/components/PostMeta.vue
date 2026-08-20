<script setup>
import { useData } from 'vitepress'
const { frontmatter } = useData()
// base 前缀（/blog/），拼在标签链接前，否则点击会跳到根目录的 /tags（404）
const BASE_URL = import.meta.env.BASE_URL
</script>

<template>
  <div
    v-if="frontmatter.date || (frontmatter.tags && frontmatter.tags.length)"
    class="post-meta-head"
  >
    <span v-if="frontmatter.date" class="pm-date">🗓 {{ frontmatter.date }}</span>
    <span class="pm-tags">
      <a
        v-for="t in (frontmatter.tags || [])"
        :key="t"
        :href="BASE_URL + 'tags#' + t"
        class="pm-tag"
      >#{{ t }}</a>
    </span>
  </div>
</template>
