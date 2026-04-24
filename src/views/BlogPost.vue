<script setup>
import { ref, computed, reactive, onMounted, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { posts } from '@/data/posts.js'
import { supabase } from '@/lib/supabase.js'
import CommentItem from '@/components/CommentItem.vue'
import { useLang } from '@/composables/useLang.js'

const route = useRoute()

const { lang, toggle, t } = useLang()

const post = computed(() => posts.find((p) => p.slug === route.params.slug))

const formatDate = (dateStr) => {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString(lang.value === 'fr' ? 'fr-CA' : 'en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const allComments = ref([])
const commentName = ref('')
const commentContent = ref('')
const submitting = ref(false)
const submitError = ref('')
const loadError = ref(false)
const replyingTo = ref(null)
const replyName = ref('')
const replyContent = ref('')
const lastSubmitTime = ref(0)
const honeypot = ref('')

const COOLDOWN_MS = 10_000

const collapsed = reactive(new Set())

const topComments = computed(() => allComments.value.filter(c => !c.parent_id))
const repliesMap = computed(() => {
  const map = {}
  for (const c of allComments.value) {
    if (c.parent_id) {
      if (!map[c.parent_id]) map[c.parent_id] = []
      map[c.parent_id].push(c)
    }
  }
  return map
})

const toggleCollapse = (id) => {
  collapsed.has(id) ? collapsed.delete(id) : collapsed.add(id)
}

const fetchComments = async () => {
  loadError.value = false
  try {
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .eq('slug', route.params.slug)
      .order('created_at', { ascending: true })
    if (error) throw error
    allComments.value = data || []
  } catch {
    loadError.value = true
    allComments.value = []
  }
}

const checkCooldown = () => {
  const elapsed = Date.now() - lastSubmitTime.value
  if (elapsed < COOLDOWN_MS) {
    const secs = Math.ceil((COOLDOWN_MS - elapsed) / 1000)
    submitError.value = t(`Attends ${secs}s avant de reposter.`, `Wait ${secs}s before posting again.`)
    return false
  }
  return true
}

const submitComment = async () => {
  if (honeypot.value) return
  const name = commentName.value.trim()
  const content = commentContent.value.trim()
  if (!name || !content) return
  if (!checkCooldown()) return

  submitting.value = true
  submitError.value = ''

  try {
    const { error } = await supabase
      .from('comments')
      .insert({ slug: route.params.slug, name, content, parent_id: null })
    if (error) throw error
    commentName.value = ''
    commentContent.value = ''
    lastSubmitTime.value = Date.now()
    await fetchComments()
  } catch {
    submitError.value = t('Erreur, réessaie.', 'Error, try again.')
  }
  submitting.value = false
}

const submitReply = async (parentId) => {
  if (honeypot.value) return
  const name = replyName.value.trim()
  const content = replyContent.value.trim()
  if (!name || !content) return
  if (!checkCooldown()) return

  submitting.value = true
  submitError.value = ''

  try {
    const { error } = await supabase
      .from('comments')
      .insert({ slug: route.params.slug, name, content, parent_id: parentId })
    if (error) throw error
    replyName.value = ''
    replyContent.value = ''
    replyingTo.value = null
    lastSubmitTime.value = Date.now()
    await fetchComments()
  } catch {
    submitError.value = t('Erreur, réessaie.', 'Error, try again.')
  }
  submitting.value = false
}

const openReply = (commentId) => {
  replyingTo.value = replyingTo.value === commentId ? null : commentId
  replyName.value = ''
  replyContent.value = ''
  submitError.value = ''
}

const formatCommentDate = (iso) => {
  const date = new Date(iso)
  return date.toLocaleDateString(lang.value === 'fr' ? 'fr-CA' : 'en-CA', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

onMounted(fetchComments)
watch(() => route.params.slug, fetchComments)
</script>

<template>
  <div class="page">
    <div class="container">

      <header class="header fade" style="--d: 0">
        <div class="header-left">
          <RouterLink to="/blog" class="back-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Blog
          </RouterLink>
        </div>
        <nav class="nav">
          <button class="lang-toggle" @click="toggle">{{ lang === 'fr' ? 'EN' : 'FR' }}</button>
        </nav>
      </header>

      <template v-if="post">
        <article class="article fade" style="--d: 1">
          <h1 class="article-title">{{ lang === 'fr' ? post.title : post.titleEn }}</h1>
          <span class="article-date">{{ formatDate(post.date) }}</span>
          <div class="article-tags">
            <span v-for="tag in post.tags" :key="tag" class="article-tag">{{ tag }}</span>
          </div>
          <div
            class="prose"
            v-html="lang === 'fr' ? post.content : post.contentEn"
          ></div>
        </article>

        <section class="comments-section fade" style="--d: 2">
          <h2 class="comments-title">{{ t('Commentaires', 'Comments') }}</h2>

          <!-- Main comment form (always on top) -->
          <form class="comment-form main-form" @submit.prevent="submitComment">
            <input v-model="honeypot" type="text" class="hp-field" tabindex="-1" autocomplete="off">
            <input v-model="commentName" type="text" :placeholder="t('Ton nom', 'Your name')" maxlength="50" class="comment-input">
            <textarea v-model="commentContent" :placeholder="t('Ton commentaire...', 'Your comment...')" maxlength="1000" rows="3" class="comment-textarea"></textarea>
            <div class="comment-form-footer">
              <span class="comment-notice">{{ t('Les commentaires ne peuvent pas être modifiés ou supprimés.', 'Comments cannot be edited or deleted.') }}</span>
              <button type="submit" class="comment-submit" :disabled="submitting || !commentName.trim() || !commentContent.trim()">
                {{ submitting ? '...' : t('Envoyer', 'Send') }}
              </button>
            </div>
            <span v-if="submitError && !replyingTo" class="comment-error">{{ submitError }}</span>
          </form>

          <!-- Comments list -->
          <div v-if="topComments.length" class="comments-list">
            <CommentItem
              v-for="c in topComments"
              :key="c.id"
              :comment="c"
              :replies="repliesMap"
              :replying-to="replyingTo"
              :collapsed="collapsed"
              :submitting="submitting"
              :submit-error="submitError"
              :t="t"
              :format-date="formatCommentDate"
              @reply="openReply"
              @submit-reply="submitReply"
              @toggle-collapse="toggleCollapse"
            >
              <template #reply-form>
                <input v-model="replyName" type="text" :placeholder="t('Ton nom', 'Your name')" maxlength="50" class="comment-input">
                <textarea v-model="replyContent" :placeholder="t('Ta réponse...', 'Your reply...')" maxlength="1000" rows="2" class="comment-textarea"></textarea>
                <div class="comment-form-footer">
                  <span v-if="submitError" class="comment-error">{{ submitError }}</span>
                  <button type="submit" class="comment-submit" :disabled="submitting || !replyName.trim() || !replyContent.trim()">
                    {{ submitting ? '...' : t('Envoyer', 'Send') }}
                  </button>
                </div>
              </template>
            </CommentItem>
          </div>
          <p v-else-if="loadError" class="comments-error">{{ t('Impossible de charger les commentaires.', 'Could not load comments.') }}</p>
          <p v-else class="comments-empty">{{ t('Aucun commentaire.', 'No comments yet.') }}</p>
        </section>
      </template>

      <template v-else>
        <div class="not-found fade" style="--d: 1">
          <p>{{ t('Article introuvable.', 'Post not found.') }}</p>
          <RouterLink to="/blog" class="back-cta">
            {{ t('Retour au blog', 'Back to blog') }}
          </RouterLink>
        </div>
      </template>

      <footer class="footer fade" style="--d: 2">
        <p>&copy; 2026 Gabriel Gingras</p>
      </footer>

    </div>
  </div>
</template>

<style scoped>
/* ── Page ── */
.page {
  min-height: 100vh;
  background: #f7ebdd;
  color: #2c2418;
  font-family: 'Outfit', sans-serif;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  position: relative;
}

.page::before {
  content: '';
  position: fixed;
  inset: 0;
  opacity: 0.08;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 128px 128px;
  z-index: 1;
}

.container {
  max-width: 620px;
  margin: 0 auto;
  padding: 3rem 1.5rem 4rem;
  position: relative;
  z-index: 2;
}

/* ── Header ── */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.back-link {
  font-family: 'DM Serif Display', serif;
  font-size: 1.4rem;
  font-weight: 400;
  color: #1e1812;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.2s;
}

.back-link:hover {
  color: #c45d31;
}

.nav {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.lang-toggle {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.05em;
  color: #c45d31;
  background: none;
  border: 1px solid #c45d31;
  border-radius: 3px;
  padding: 0.15rem 0.4rem;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.lang-toggle:hover {
  background: #c45d31;
  color: #f7ebdd;
}

/* ── Article ── */
.article-title {
  font-family: 'DM Serif Display', serif;
  font-size: 2rem;
  font-weight: 400;
  color: #1e1812;
  margin: 0;
  line-height: 1.2;
}

.article-date {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  color: #9a8b7a;
  display: block;
  margin-top: 0.5rem;
}

.article-tags {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.65rem;
  flex-wrap: wrap;
}

.article-tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.55rem;
  color: #9a8b7a;
  border: 1px solid #ddd0c0;
  border-radius: 3px;
  padding: 0.1rem 0.4rem;
  letter-spacing: 0.02em;
}

/* ── Prose ── */
.prose {
  margin-top: 2rem;
}

.prose :deep(p) {
  font-size: 0.95rem;
  line-height: 1.85;
  color: #3d3228;
  margin: 0 0 1.25rem;
}

.prose :deep(h2) {
  font-family: 'DM Serif Display', serif;
  font-size: 1.25rem;
  font-weight: 400;
  color: #1e1812;
  margin: 2rem 0 0.75rem;
}

.prose :deep(h3) {
  font-family: 'Outfit', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #1e1812;
  margin: 1.5rem 0 0.5rem;
}

.prose :deep(a) {
  color: #c45d31;
  text-decoration: none;
  background-image: linear-gradient(#c45d31, #c45d31);
  background-size: 0% 1px;
  background-position: left bottom;
  background-repeat: no-repeat;
  transition: background-size 0.3s ease;
}

.prose :deep(a:hover) {
  background-size: 100% 1px;
}

.prose :deep(strong) {
  font-weight: 500;
  color: #1e1812;
}

.prose :deep(ul),
.prose :deep(ol) {
  padding-left: 1.25rem;
  margin: 0 0 1.25rem;
}

.prose :deep(li) {
  font-size: 0.92rem;
  line-height: 1.8;
  color: #3d3228;
  margin-bottom: 0.3rem;
}

.prose :deep(code) {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.82rem;
  background: #efe3d2;
  border-radius: 3px;
  padding: 0.15rem 0.35rem;
}

.prose :deep(blockquote) {
  border-left: 2px solid #c45d31;
  margin: 1.5rem 0;
  padding: 0.5rem 0 0.5rem 1.25rem;
  color: #6b5d4f;
}

/* ── Not found ── */
.not-found {
  text-align: center;
  padding: 3rem 0;
}

.not-found p {
  font-size: 1rem;
  color: #6b5d4f;
  margin: 0 0 1.5rem;
}

.back-cta {
  font-size: 0.85rem;
  color: #c45d31;
  text-decoration: none;
  transition: opacity 0.2s;
}

.back-cta:hover {
  opacity: 0.7;
}

/* ── Comments ── */
.comments-section {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #ddd0c0;
}

.comments-title {
  font-family: 'DM Serif Display', serif;
  font-size: 1.25rem;
  font-weight: 400;
  color: #1e1812;
  margin: 0 0 1.25rem;
}

.comments-list {
  margin-top: 1.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid #ddd0c0;
}

.main-form {
  margin-bottom: 0;
}

.comment-notice {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.55rem;
  color: #9a8b7a;
  letter-spacing: 0.02em;
}

.comments-empty,
.comments-error {
  font-size: 0.82rem;
  color: #9a8b7a;
  margin: 0 0 1.5rem;
}

.comments-error {
  color: #c45d31;
}

.hp-field {
  position: absolute;
  left: -9999px;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;
}

.comment-form {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.comment-input,
.comment-textarea {
  font-family: 'Outfit', sans-serif;
  font-size: 0.82rem;
  color: #2c2418;
  background: #efe3d2;
  border: 1px solid #ddd0c0;
  border-radius: 6px;
  padding: 0.6rem 0.75rem;
  outline: none;
  transition: border-color 0.2s;
}

.comment-input:focus,
.comment-textarea:focus {
  border-color: #c45d31;
}

.comment-input::placeholder,
.comment-textarea::placeholder {
  color: #9a8b7a;
}

.comment-textarea {
  resize: vertical;
  min-height: 70px;
}

.comment-form-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.75rem;
}

.comment-error {
  font-size: 0.72rem;
  color: #c45d31;
}

.comment-submit {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.03em;
  color: #f7ebdd;
  background: #c45d31;
  border: none;
  border-radius: 4px;
  padding: 0.4rem 1rem;
  cursor: pointer;
  transition: opacity 0.2s;
}

.comment-submit:hover:not(:disabled) {
  opacity: 0.85;
}

.comment-submit:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* ── Footer ── */
.footer {
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 1px solid #ddd0c0;
}

.footer p {
  font-size: 0.65rem;
  color: #9a8b7a;
  margin: 0;
}

/* ── Fade-in ── */
.fade {
  opacity: 0;
  transform: translateY(8px);
  animation: up 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: calc(var(--d) * 0.09s + 0.12s);
}

@keyframes up {
  to {
    opacity: 1;
    transform: none;
  }
}

/* ── Mobile ── */
@media (max-width: 480px) {
  .container {
    padding: 2rem 1.25rem 3rem;
  }

  .header {
    margin-bottom: 2rem;
  }

  .article-title {
    font-size: 1.6rem;
  }
}
</style>
