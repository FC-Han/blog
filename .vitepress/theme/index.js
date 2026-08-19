import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import PostMeta from './components/PostMeta.vue'
import './style.css'

// 扩展默认主题：在每篇文章正文顶部注入日期与标签信息（PostMeta 仅在
// frontmatter 含 date / tags 时渲染，首页、标签页、关于页不会受影响）。
export default {
  extends: DefaultTheme,
  Layout(props) {
    return h(DefaultTheme.Layout, props, {
      'doc-before': () => h(PostMeta)
    })
  }
}
