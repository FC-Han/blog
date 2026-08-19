<script setup>
import { useData } from 'vitepress'
const { frontmatter } = useData()
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
        :href="'/tags#' + t"
        class="pm-tag"
      >#{{ t }}</a>
    </span>
  </div>
</template>
