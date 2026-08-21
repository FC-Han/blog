// 构建后处理：把 VitePress 生成的文件式页面（about.html 等）转换成目录式
// （about/index.html），使 GitHub Pages 在 cleanUrls 模式下能正确解析 /xxx/ 干净路径。
// 不处理 index.html（已是目录首页）和 404.html（GitHub Pages 需要根级 404.html）。
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dist = path.resolve(__dirname, '..', '.vitepress', 'dist')

function convert(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      convert(full)
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      if (entry.name === 'index.html' || entry.name === '404.html') continue
      const name = entry.name.slice(0, -'.html'.length)
      const targetDir = path.join(dir, name)
      fs.mkdirSync(targetDir, { recursive: true })
      fs.renameSync(full, path.join(targetDir, 'index.html'))
      console.log('[ghpages]', path.relative(dist, full), '->', path.relative(dist, path.join(targetDir, 'index.html')))
    }
  }
}

if (!fs.existsSync(dist)) {
  console.error('[ghpages] 找不到 .vitepress/dist，请先运行 vitepress build')
  process.exit(1)
}
convert(dist)
console.log('[ghpages] 转换完成')
