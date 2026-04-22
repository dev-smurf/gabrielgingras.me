<script setup>
import { ref, computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { posts } from '@/data/posts.js'

const route = useRoute()

const lang = ref('fr')
const toggle = () => { lang.value = lang.value === 'fr' ? 'en' : 'fr' }
const t = (fr, en) => lang.value === 'fr' ? fr : en

const post = computed(() => posts.find((p) => p.slug === route.params.slug))

const formatDate = (dateStr) => {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString(lang.value === 'fr' ? 'fr-CA' : 'en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
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
