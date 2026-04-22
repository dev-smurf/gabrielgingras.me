import { describe, it, expect } from 'vitest'
import { parseFrontmatter, splitLang } from '../data/posts.js'

describe('parseFrontmatter', () => {
  it('parses title and tags from frontmatter', () => {
    const raw = `---
title: "Mon post"
titleEn: "My post"
pubDate: "2026-01-01"
tags: ["vue", "test"]
---

Contenu ici`

    const { meta, body } = parseFrontmatter(raw)
    expect(meta.title).toBe('Mon post')
    expect(meta.titleEn).toBe('My post')
    expect(meta.pubDate).toBe('2026-01-01')
    expect(meta.tags).toEqual(['vue', 'test'])
    expect(body.trim()).toBe('Contenu ici')
  })

  it('returns raw body when no frontmatter', () => {
    const raw = 'Just plain text'
    const { meta, body } = parseFrontmatter(raw)
    expect(meta).toEqual({})
    expect(body).toBe('Just plain text')
  })

  it('handles empty tags', () => {
    const raw = `---
title: "Test"
tags: []
---

Body`
    const { meta } = parseFrontmatter(raw)
    expect(meta.tags).toEqual([''])
  })
})

describe('splitLang', () => {
  it('splits FR and EN content', () => {
    const body = `Contenu francais

---

<!-- en -->
English content`
    const { fr, en } = splitLang(body)
    expect(fr).toBe('Contenu francais')
    expect(en).toBe('English content')
  })

  it('uses FR as fallback when no EN separator', () => {
    const body = 'Only french content'
    const { fr, en } = splitLang(body)
    expect(fr).toBe('Only french content')
    expect(en).toBe('Only french content')
  })
})
