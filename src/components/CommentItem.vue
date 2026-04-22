<script setup>
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

const childComments = props.replies[props.comment.id] || []
const isCollapsed = () => props.collapsed.has(props.comment.id)
</script>

<template>
  <div class="comment-node" :style="{ '--depth': Math.min(depth, MAX_DEPTH) }">
    <div class="comment" :class="{ 'is-reply': depth > 0 }">
      <div class="comment-header">
        <div class="comment-header-left">
          <button
            v-if="childComments.length"
            class="comment-fold"
            @click="emit('toggle-collapse', comment.id)"
          >{{ isCollapsed() ? '+' : '−' }}</button>
          <span class="comment-name">{{ comment.name }}</span>
        </div>
        <span class="comment-date">{{ formatDate(comment.created_at) }}</span>
      </div>
      <p class="comment-content">{{ comment.content }}</p>
      <button class="comment-reply-btn" @click="emit('reply', comment.id)">
        {{ replyingTo === comment.id ? t('Annuler', 'Cancel') : t('Répondre', 'Reply') }}
      </button>
    </div>

    <!-- Inline reply form -->
    <form v-if="replyingTo === comment.id" class="comment-form reply-form" @submit.prevent="emit('submit-reply', comment.id)">
      <slot name="reply-form"></slot>
    </form>

    <!-- Children -->
    <div v-if="childComments.length && !isCollapsed()" class="comment-children">
      <CommentItem
        v-for="child in childComments"
        :key="child.id"
        :comment="child"
        :replies="replies"
        :depth="depth + 1"
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

    <p v-if="childComments.length && isCollapsed()" class="collapsed-hint">
      {{ childComments.length }} {{ t('réponse(s) masquée(s)', 'hidden reply(ies)') }}
    </p>
  </div>
</template>

<style scoped>
.comment-node {
  margin-left: calc(var(--depth) * 1rem);
}

.comment-node:first-child > .comment.is-reply {
  margin-top: 0;
}

.comment {
  background: #efe3d2;
  border-radius: 8px;
  padding: 0.85rem 1rem;
  margin-top: 0.5rem;
}

.comment.is-reply {
  border-left: 2px solid #ddd0c0;
  border-radius: 0 8px 8px 0;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.35rem;
}

.comment-header-left {
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
}

.comment-fold {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem;
  color: #9a8b7a;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  line-height: 1;
  width: 1rem;
  text-align: center;
  transition: color 0.2s;
}

.comment-fold:hover {
  color: #c45d31;
}

.comment-name {
  font-family: 'Outfit', sans-serif;
  font-weight: 500;
  font-size: 0.82rem;
  color: #1e1812;
}

.comment-date {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.55rem;
  color: #9a8b7a;
}

.comment-content {
  font-size: 0.85rem;
  line-height: 1.6;
  color: #3d3228;
  margin: 0;
}

.comment-reply-btn {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.55rem;
  color: #9a8b7a;
  background: none;
  border: none;
  padding: 0;
  margin-top: 0.35rem;
  cursor: pointer;
  letter-spacing: 0.02em;
  transition: color 0.2s;
}

.comment-reply-btn:hover {
  color: #c45d31;
}

.comment-children {
  margin-top: 0;
}

.collapsed-hint {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.55rem;
  color: #9a8b7a;
  margin: 0.35rem 0 0 1rem;
  cursor: default;
}

.reply-form {
  margin-top: 0.5rem;
  margin-left: 1rem;
  padding-left: 0.75rem;
  border-left: 2px solid #c45d31;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

@media (max-width: 480px) {
  .comment-node {
    margin-left: calc(var(--depth) * 0.5rem);
  }
}
</style>
