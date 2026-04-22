import { describe, it, expect } from 'vitest'

describe('router config', () => {
  it('defines all expected routes', async () => {
    const mod = await import('../router/index.js')
    const router = mod.default
    const routes = router.getRoutes()
    const paths = routes.map((r) => r.path)

    expect(paths).toContain('/')
    expect(paths).toContain('/blog')
    expect(paths).toContain('/blog/:slug')
  })

  it('names routes correctly', async () => {
    const mod = await import('../router/index.js')
    const router = mod.default
    const routes = router.getRoutes()
    const names = routes.map((r) => r.name)

    expect(names).toContain('Home')
    expect(names).toContain('Blog')
    expect(names).toContain('BlogPost')
  })
})
