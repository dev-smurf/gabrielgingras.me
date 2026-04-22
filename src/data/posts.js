import { marked } from 'marked'

const modules = import.meta.glob('/src/content/blog/**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return { meta: {}, body: raw }

  const meta = {}
  for (const line of match[1].split('\n')) {
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    let val = line.slice(idx + 1).trim()
    if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1)
    if (val.startsWith('[') && val.endsWith(']')) {
      val = val.slice(1, -1).split(',').map((s) => s.trim().replace(/"/g, ''))
    }
    meta[key] = val
  }

  return { meta, body: match[2] }
}

function splitLang(body) {
  const parts = body.split(/\n---\n\n<!-- en -->\n/)
  const fr = parts[0].trim()
  const en = parts.length > 1 ? parts[1].trim() : fr
  return { fr, en }
}

export const posts = Object.entries(modules)
  .map(([path, raw]) => {
    const slug = path.split('/').pop().replace('.md', '')
    const { meta, body } = parseFrontmatter(raw)
    const { fr, en } = splitLang(body)

    return {
      slug,
      title: meta.title || slug,
      titleEn: meta.titleEn || meta.title || slug,
      date: meta.pubDate || '',
      summary: meta.description || '',
      summaryEn: meta.descriptionEn || meta.description || '',
      tags: Array.isArray(meta.tags) ? meta.tags : [],
      content: marked(fr),
      contentEn: marked(en),
    }
  })
  .sort((a, b) => b.date.localeCompare(a.date))
