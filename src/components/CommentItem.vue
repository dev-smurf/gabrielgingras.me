<script setup>
import { computed } from 'vue'

defineOptions({ name: 'CommentItem' })

const props = defineProps({
  comment: { type: Object, required: true },
  replies: { type: Object, required: true },
  depth: { type: Number, default: 0 },
  replyingTo: { type: String, default: null },
  collapsed: { type: Object, required: true },
  submitting: { type: Boolean, default: false },
  submitError: { type: String, default: '' },
  t: { type: Function, required: true },
  formatDate: { type: Function, required: true },
})

const emit = defineEmits(['reply', 'submit-reply', 'toggle-collapse'])

const MAX_DEPTH = 4

const childComments = computed(() => props.replies[props.comment.id] || [])
const isCollapsed = () => props.collapsed.has(props.comment.id)
</script>

<template>
  <div class="comment-node">
    <div class="comment">
      <div class="comment-meta">
        <span class="comment-name">{{ comment.name }}</span>
        <span class="comment-dot">&middot;</span>
        <span class="comment-date">{{ formatDate(comment.created_at) }}</span>
      </div>
      <p class="comment-content">{{ comment.content }}</p>
      <div class="comment-actions">
        <button class="comment-action-btn" @click="emit('reply', comment.id)">
          {{ replyingTo === comment.id ? t('Annuler', 'Cancel') : t('Répondre', 'Reply') }}
        </button>
        <button
          v-if="childComments.length"
          class="comment-action-btn"
          @click="emit('toggle-collapse', comment.id)"
        >{{ isCollapsed() ? t(`Voir ${childComments.length} réponse(s)`, `Show ${childComments.length} reply(ies)`) : t('Masquer', 'Hide') }}</button>
      </div>
    </div>

    <!-- Inline reply form -->
    <form v-if="replyingTo === comment.id" class="reply-form" @submit.prevent="emit('submit-reply', comment.id)">
      <slot name="reply-form"></slot>
    </form>

    <!-- Children -->
    <div v-if="childComments.length && !isCollapsed()" class="comment-children">
      <CommentItem
        v-for="child in childComments"
        :key="child.id"
        :comment="child"
        :replies="replies"
        :depth="Math.min(depth + 1, MAX_DEPTH)"
        :replying-to="replyingTo"
        :collapsed="collapsed"
        :submitting="submitting"
        :submit-error="submitError"
        :t="t"
        :format-date="formatDate"
        @reply="emit('reply', $event)"
        @submit-reply="emit('submit-reply', $event)"
        @toggle-collapse="emit('toggle-collapse', $event)"
      >
        <template #reply-form>
          <slot name="reply-form"></slot>
        </template>
      </CommentItem>
    </div>
  </div>
</template>

<style scoped>
.comment-node {
  padding-left: 0;
}

.comment {
  padding: 0.6rem 0;
}

.comment-node .comment-children {
  padding-left: 1.25rem;
  border-left: 1px solid #ddd0c0;
  margin-left: 0.5rem;
}

.comment-meta {
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
  margin-bottom: 0.2rem;
}

.comment-name {
  font-family: 'Outfit', sans-serif;
  font-weight: 500;
  font-size: 0.78rem;
  color: #1e1812;
}

.comment-dot {
  font-size: 0.6rem;
  color: #9a8b7a;
}

.comment-date {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.55rem;
  color: #9a8b7a;
}

.comment-content {
  font-size: 0.82rem;
  line-height: 1.55;
  color: #3d3228;
  margin: 0;
}

.comment-actions {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.25rem;
}

.comment-action-btn {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.55rem;
  color: #9a8b7a;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  letter-spacing: 0.02em;
  transition: color 0.2s;
}

.comment-action-btn:hover {
  color: #c45d31;
}

.reply-form {
  margin: 0.35rem 0 0.5rem 0.5rem;
  padding-left: 1rem;
  border-left: 2px solid #c45d31;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

@media (max-width: 480px) {
  .comment-node .comment-children {
    padding-left: 0.75rem;
  }
}
</style>
