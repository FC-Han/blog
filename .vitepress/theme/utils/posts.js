// 共享的文章加载与 frontmatter 解析工具
// VitePress 1.x 不给 markdown 模块导出 frontmatter，这里用 ?raw 读原文 + 自建极简解析。

export function parseFrontmatter(raw) {
  const m = raw && raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!m) return {}
  const fm = {}
  const lines = m[1].split(/\r?\n/)
  let i = 0
  while (i < lines.length) {
    const kv = lines[i].match(/^([A-Za-z\u4e00-\u9fa5_-]+):\s*(.*)$/)
    if (!kv) { i++; continue }
    const key = kv[1]
    const val = kv[2].trim()
    if (val === '') {
      const arr = []
      let j = i + 1
      while (j < lines.length && /^\s*-\s+/.test(lines[j])) {
        arr.push(lines[j].replace(/^\s*-\s+/, '').trim())
        j++
      }
      fm[key] = arr.length ? arr : ''
      i = j
      continue
    }
    const arrMatch = val.match(/^\[(.*)\]$/)
    if (arrMatch) {
      fm[key] = arrMatch[1].split(',').map((s) => s.trim()).filter(Boolean)
    } else {
      fm[key] = val.replace(/^["']|["']$/g, '')
    }
    i++
  }
  return fm
}

// 加载全部文章并按日期倒序
export function loadPosts() {
  const modules = import.meta.glob('../../../posts/*.md', {
    eager: true,
    query: '?raw',
    import: 'default'
  })
  return Object.entries(modules)
    .map(([path, raw]) => {
      const fm = parseFrontmatter(raw)
      const slug = path.split('/').pop().replace(/\.md$/, '')
      const content = raw.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '')
      return {
        title: fm.title || slug,
        date: fm.date || '',
        tags: Array.isArray(fm.tags) ? fm.tags : [],
        description: fm.description || '',
        url: '/posts/' + slug,
        wordCount: content.replace(/\s/g, '').length
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}
