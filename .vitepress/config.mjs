import { defineConfig } from 'vitepress'

// 站点基础配置。title / description 后续可按你的实际博客主题修改。
// base 在部署到 GitHub Pages 时会按仓库名自动调整（见部署步骤）。
export default defineConfig({
  title: '成的小屋',
  description: '成的小屋 · 技术笔记与生活记录',
  cleanUrls: true,
  // 项目站点（github.com/FC-Han/blog → FC-Han.github.io/blog）必须设置 base
  base: '/blog/',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts' },
      { text: '标签', link: '/tags' },
      { text: '日记', link: '/diary' },
      { text: '关于', link: '/about' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/FC-Han' }
    ],
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    outline: {
      label: '目录'
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lastUpdatedText: '最后更新'
  }
})
