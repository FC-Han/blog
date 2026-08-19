import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import PostList from './components/PostList.vue'
import TagList from './components/TagList.vue'
import SiteStats from './components/SiteStats.vue'
import PostMeta from './components/PostMeta.vue'
import './style.css'

// 扩展默认主题：
// 1) 把文章列表 / 标签分类 / 站点统计组件注册为全局组件，供 markdown 中的
//    <PostList />、<TagList />、<SiteStats /> 直接调用（之前漏注册导致主页/标签页空白）。
// 2) 在每篇文章正文顶部注入日期与标签信息（PostMeta 仅在 frontmatter
//    含 date / tags 时渲染，首页、标签页、关于页不受影响）。
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('PostList', PostList)
    app.component('TagList', TagList)
    app.component('SiteStats', SiteStats)
  },
  Layout(props) {
    return h(DefaultTheme.Layout, props, {
      'doc-before': () => h(PostMeta)
    })
  }
}
