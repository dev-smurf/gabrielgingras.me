import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CommentItem from '../components/CommentItem.vue'

const baseProps = {
  replies: {},
  depth: 0,
  replyingTo: null,
  collapsed: new Set(),
  submitting: false,
  submitError: '',
  t: (fr) => fr,
  formatDate: () => '1 jan. 2026',
}

describe('XSS prevention', () => {
  it('does not render HTML in comment name', () => {
    const wrapper = mount(CommentItem, {
      props: {
        ...baseProps,
        comment: {
          id: 'xss1', slug: 'test',
          name: '<script>alert("xss")</script>',
          content: 'normal content',
          parent_id: null, created_at: '2026-01-01T00:00:00Z',
        },
      },
    })
    expect(wrapper.find('.comment-name').element.innerHTML).not.toContain('<script>')
    expect(wrapper.find('.comment-name').text()).toContain('<script>')
  })

  it('does not render HTML in comment content', () => {
    const wrapper = mount(CommentItem, {
      props: {
        ...baseProps,
        comment: {
          id: 'xss2', slug: 'test',
          name: 'Attacker',
          content: '<img src=x onerror=alert(1)>',
          parent_id: null, created_at: '2026-01-01T00:00:00Z',
        },
      },
    })
    expect(wrapper.find('.comment-content').element.innerHTML).not.toContain('<img')
    expect(wrapper.find('.comment-content').text()).toContain('<img')
  })
})
