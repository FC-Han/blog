import { defineConfig } from 'vitepress'

// 站点基础配置。title / description 后续可按你的实际博客主题修改。
// base 在部署到 GitHub Pages 时会按仓库名自动调整（见部署步骤）。
export default defineConfig({
  title: '我的博客',
  description: '我的个人博客 · 技术 & 生活记录',
  cleanUrls: true,
  // 项目站点（github.com/FC-Han/blog → FC-Han.github.io/blog）必须设置 base
  base: '/blog/',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '标签', link: '/tags' },
      { text: '关于', link: '/about' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
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
