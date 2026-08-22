<template>
  <div v-if="enabled" ref="container" class="giscus-comments">
    <p class="giscus-tip">💬 使用 GitHub 账号即可在下方留言</p>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed, nextTick } from 'vue'
import { useData, useRoute } from 'vitepress'

const { isDark, frontmatter } = useData()
const route = useRoute()
const container = ref(null)

// 仅「文章页」显示评论：frontmatter 含 date 的日记/博文才渲染，
// 首页、关于、标签、归档页都不显示。
const enabled = computed(() => !!frontmatter.value && !!frontmatter.value.date)

const CONFIG = {
  repo: 'FC-Han/blog',
  repoId: 'R_kgDOT9Z9KA',
  category: 'General',
  categoryId: 'DIC_kwDOT9Z9KM4DD7h3',
  mapping: 'pathname',
  strict: '0',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'bottom',
  lang: 'zh-CN',
  loading: 'lazy'
}

const theme = () => (isDark.value ? 'dark' : 'light')

function clear() {
  if (!container.value) return
  const iframe = container.value.querySelector('iframe.giscus-frame')
  const script = container.value.querySelector('script')
  if (iframe) iframe.remove()
  if (script) script.remove()
}

function render() {
  if (!enabled.value || !container.value) return
  clear()
  const s = document.createElement('script')
  s.src = 'https://giscus.app/client.js'
  s.async = true
  s.crossOrigin = 'anonymous'
  s.setAttribute('data-repo', CONFIG.repo)
  s.setAttribute('data-repo-id', CONFIG.repoId)
  s.setAttribute('data-category', CONFIG.category)
  s.setAttribute('data-category-id', CONFIG.categoryId)
  s.setAttribute('data-mapping', CONFIG.mapping)
  s.setAttribute('data-strict', CONFIG.strict)
  s.setAttribute('data-reactions-enabled', CONFIG.reactionsEnabled)
  s.setAttribute('data-emit-metadata', CONFIG.emitMetadata)
  s.setAttribute('data-input-position', CONFIG.inputPosition)
  s.setAttribute('data-theme', theme())
  s.setAttribute('data-lang', CONFIG.lang)
  s.setAttribute('data-loading', CONFIG.loading)
  container.value.appendChild(s)
}

function updateTheme() {
  const iframe = container.value && container.value.querySelector('iframe.giscus-frame')
  if (iframe && iframe.contentWindow) {
    iframe.contentWindow.postMessage(
      { giscus: { setConfig: { theme: theme() } } },
      'https://giscus.app'
    )
  }
}

onMounted(() => render())

// 路由切换（SPA 导航）或评论开关变化 → 重新渲染以适配新页面
watch(
  () => [route.path, enabled.value],
  () => nextTick(render)
)

// 跟随 VitePress 暗色模式切换评论区主题
watch(isDark, () => updateTheme())
</script>

<style scoped>
.giscus-comments {
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--vp-c-divider);
}
.giscus-tip {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin: 0 0 0.5rem;
}
</style>
