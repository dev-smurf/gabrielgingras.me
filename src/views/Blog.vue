<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { posts } from '@/data/posts.js'
import { supabase } from '@/lib/supabase.js'
import { useLang } from '@/composables/useLang.js'

const { lang, toggle, t } = useLang()

const commentCounts = ref({})

const formatDate = (dateStr) => {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString(lang.value === 'fr' ? 'fr-CA' : 'en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const fetchCommentCounts = async () => {
  try {
    const slugs = posts.map((p) => p.slug)
    const { data, error } = await supabase
      .from('comments')
      .select('slug')
      .in('slug', slugs)
    if (error) throw error
    const counts = {}
    for (const row of data) {
      counts[row.slug] = (counts[row.slug] || 0) + 1
    }
    commentCounts.value = counts
  } catch {
    commentCounts.value = {}
  }
}

onMounted(fetchCommentCounts)
</script>

<template>
  <div class="page">
    <div class="container">

      <header class="header fade" style="--d: 0">
        <div class="header-left">
          <RouterLink to="/" class="back-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Gabriel Gingras
          </RouterLink>
          <span class="title">Blog</span>
        </div>
        <nav class="nav">
          <button class="lang-toggle" @click="toggle">{{ lang === 'fr' ? 'EN' : 'FR' }}</button>
        </nav>
      </header>

      <section class="posts">
        <RouterLink
          v-for="(post, i) in posts"
          :key="post.slug"
          :to="`/blog/${post.slug}`"
          class="post-card fade"
          :style="{ '--d': i + 1 }"
        >
          <div class="post-card-header">
            <h2 class="post-title">{{ lang === 'fr' ? post.title : post.titleEn }}</h2>
            <span class="post-arrow">
              <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
            </span>
          </div>
          <div class="post-meta">
            <span class="post-date">{{ formatDate(post.date) }}</span>
            <span v-if="commentCounts[post.slug]" class="post-comments">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              {{ commentCounts[post.slug] }}
            </span>
          </div>
          <p class="post-summary">{{ lang === 'fr' ? post.summary : post.summaryEn }}</p>
          <div class="post-tags">
            <span v-for="tag in post.tags" :key="tag" class="post-tag">{{ tag }}</span>
          </div>
        </RouterLink>
      </section>

      <footer class="footer fade" :style="{ '--d': posts.length + 1 }">
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

.title {
  font-size: 0.85rem;
  color: #6b5d4f;
  display: block;
  margin-top: 0.25rem;
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

/* ── Posts ── */
.posts {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.post-card {
  background: #efe3d2;
  border-radius: 10px;
  padding: 1.25rem 1.5rem;
  text-decoration: none;
  color: #2c2418;
  display: block;
  transition: transform 0.2s, box-shadow 0.2s;
}

.post-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(30, 24, 18, 0.08);
}

.post-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
}

.post-title {
  font-family: 'DM Serif Display', serif;
  font-size: 1.15rem;
  font-weight: 400;
  color: #1e1812;
  margin: 0;
  line-height: 1.3;
}

.post-arrow {
  color: #c45d31;
  transition: transform 0.2s;
  display: flex;
  flex-shrink: 0;
  margin-top: 0.2rem;
}

.post-card:hover .post-arrow {
  transform: translate(2px, -2px);
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.35rem;
}

.post-date {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.62rem;
  color: #9a8b7a;
}

.post-comments {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.6rem;
  color: #9a8b7a;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.post-comments svg {
  display: block;
}

.post-summary {
  font-size: 0.85rem;
  color: #6b5d4f;
  line-height: 1.7;
  margin: 0.65rem 0 0;
}

.post-tags {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.75rem;
  flex-wrap: wrap;
}

.post-tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.55rem;
  color: #9a8b7a;
  border: 1px solid #ddd0c0;
  border-radius: 3px;
  padding: 0.1rem 0.4rem;
  letter-spacing: 0.02em;
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

/* ── Arrow icon ── */
.arrow-icon {
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;
}

/* ── Mobile ── */
@media (max-width: 480px) {
  .container {
    padding: 2rem 1.25rem 3rem;
  }

  .header {
    margin-bottom: 2rem;
  }
}
</style>
