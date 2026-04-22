import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CommentItem from '../components/CommentItem.vue'

describe('XSS prevention', () => {
  it('does not render HTML in comment name', () => {
    const wrapper = mount(CommentItem, {
      props: {
        comment: {
          id: 'xss1',
          slug: 'test',
          name: '<script>alert("xss")</script>',
          content: 'normal content',
          parent_id: null,
          created_at: '2026-01-01T00:00:00Z',
        },
        replies: {},
        depth: 0,
        replyingTo: null,
        collapsed: new Set(),
        submitting: false,
        submitError: '',
        t: (fr) => fr,
        formatDate: () => '1 jan. 2026',
      },
    })
    expect(wrapper.find('.comment-name').element.innerHTML).not.toContain('<script>')
    expect(wrapper.find('.comment-name').text()).toContain('<script>')
  })

  it('does not render HTML in comment content', () => {
    const wrapper = mount(CommentItem, {
      props: {
        comment: {
          id: 'xss2',
          slug: 'test',
          name: 'Attacker',
          content: '<img src=x onerror=alert(1)>',
          parent_id: null,
          created_at: '2026-01-01T00:00:00Z',
        },
        replies: {},
        depth: 0,
        replyingTo: null,
        collapsed: new Set(),
        submitting: false,
        submitError: '',
        t: (fr) => fr,
        formatDate: () => '1 jan. 2026',
      },
    })
    expect(wrapper.find('.comment-content').element.innerHTML).not.toContain('<img')
    expect(wrapper.find('.comment-content').text()).toContain('<img')
  })
})

describe('honeypot anti-spam', () => {
  it('honeypot field is hidden from users', async () => {
    const BlogPost = (await import('../views/BlogPost.vue')).default
    const { createRouter, createWebHistory } = await import('vue-router')

    const router = createRouter({
      history: createWebHistory(),
      routes: [{ path: '/blog/:slug', component: BlogPost }],
    })
    router.push('/blog/algo-trading-mes-debuts')
    await router.isReady()

    const wrapper = mount(BlogPost, {
      global: { plugins: [router] },
    })

    const hp = wrapper.find('.hp-field')
    expect(hp.exists()).toBe(true)
    expect(hp.attributes('tabindex')).toBe('-1')
    expect(hp.attributes('autocomplete')).toBe('off')
  })
})
