import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CommentItem from '../components/CommentItem.vue'

const mockComment = {
  id: 'c1',
  slug: 'test-post',
  name: 'Alice',
  content: 'Great post!',
  parent_id: null,
  created_at: '2026-04-20T12:00:00Z',
}

const mockReply = {
  id: 'c2',
  slug: 'test-post',
  name: 'Bob',
  content: 'Thanks!',
  parent_id: 'c1',
  created_at: '2026-04-20T13:00:00Z',
}

const defaultProps = {
  comment: mockComment,
  replies: {},
  depth: 0,
  replyingTo: null,
  collapsed: new Set(),
  submitting: false,
  submitError: '',
  t: (fr) => fr,
  formatDate: () => '20 avr. 2026',
}

describe('CommentItem', () => {
  it('renders comment name and content', () => {
    const wrapper = mount(CommentItem, { props: defaultProps })
    expect(wrapper.text()).toContain('Alice')
    expect(wrapper.text()).toContain('Great post!')
  })

  it('renders date', () => {
    const wrapper = mount(CommentItem, { props: defaultProps })
    expect(wrapper.text()).toContain('20 avr. 2026')
  })

  it('shows reply button', () => {
    const wrapper = mount(CommentItem, { props: defaultProps })
    const btn = wrapper.find('.comment-reply-btn')
    expect(btn.exists()).toBe(true)
    expect(btn.text()).toBe('Répondre')
  })

  it('emits reply event on reply button click', async () => {
    const wrapper = mount(CommentItem, { props: defaultProps })
    await wrapper.find('.comment-reply-btn').trigger('click')
    expect(wrapper.emitted('reply')).toBeTruthy()
    expect(wrapper.emitted('reply')[0]).toEqual(['c1'])
  })

  it('shows cancel when replyingTo matches', () => {
    const wrapper = mount(CommentItem, {
      props: { ...defaultProps, replyingTo: 'c1' },
    })
    expect(wrapper.find('.comment-reply-btn').text()).toBe('Annuler')
  })

  it('renders nested replies', () => {
    const wrapper = mount(CommentItem, {
      props: {
        ...defaultProps,
        replies: { c1: [mockReply] },
      },
    })
    expect(wrapper.text()).toContain('Bob')
    expect(wrapper.text()).toContain('Thanks!')
  })

  it('shows fold button when replies exist', () => {
    const wrapper = mount(CommentItem, {
      props: {
        ...defaultProps,
        replies: { c1: [mockReply] },
      },
    })
    expect(wrapper.find('.comment-fold').exists()).toBe(true)
  })

  it('does not show fold button when no replies', () => {
    const wrapper = mount(CommentItem, { props: defaultProps })
    expect(wrapper.find('.comment-fold').exists()).toBe(false)
  })

  it('hides replies when collapsed', () => {
    const collapsed = new Set(['c1'])
    const wrapper = mount(CommentItem, {
      props: {
        ...defaultProps,
        replies: { c1: [mockReply] },
        collapsed,
      },
    })
    expect(wrapper.text()).not.toContain('Bob')
    expect(wrapper.text()).toContain('1 réponse(s) masquée(s)')
  })

  it('emits toggle-collapse on fold click', async () => {
    const wrapper = mount(CommentItem, {
      props: {
        ...defaultProps,
        replies: { c1: [mockReply] },
      },
    })
    await wrapper.find('.comment-fold').trigger('click')
    expect(wrapper.emitted('toggle-collapse')).toBeTruthy()
    expect(wrapper.emitted('toggle-collapse')[0]).toEqual(['c1'])
  })

  it('applies depth indentation via CSS var', () => {
    const wrapper = mount(CommentItem, {
      props: { ...defaultProps, depth: 2 },
    })
    expect(wrapper.find('.comment-node').attributes('style')).toContain('--depth: 2')
  })

  it('adds is-reply class when depth > 0', () => {
    const wrapper = mount(CommentItem, {
      props: { ...defaultProps, depth: 1 },
    })
    expect(wrapper.find('.comment').classes()).toContain('is-reply')
  })

  it('does not add is-reply class at depth 0', () => {
    const wrapper = mount(CommentItem, { props: defaultProps })
    expect(wrapper.find('.comment').classes()).not.toContain('is-reply')
  })

  it('shows reply form slot when replyingTo matches', () => {
    const wrapper = mount(CommentItem, {
      props: { ...defaultProps, replyingTo: 'c1' },
      slots: {
        'reply-form': '<div class="test-reply-form">reply form</div>',
      },
    })
    expect(wrapper.find('.test-reply-form').exists()).toBe(true)
  })
})
