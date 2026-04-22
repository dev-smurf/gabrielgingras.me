<script setup>
import { ref } from 'vue'

const lang = ref('fr')
const toggle = () => { lang.value = lang.value === 'fr' ? 'en' : 'fr' }

const t = (fr, en) => lang.value === 'fr' ? fr : en

const openEntry = ref(null)
const toggleEntry = (id) => { openEntry.value = openEntry.value === id ? null : id }
</script>

<template>
  <div class="page">
    <div class="container">

      <!-- Header -->
      <header class="header fade" style="--d: 0">
        <div class="header-left">
          <h1 class="name">Gabriel Gingras</h1>
          <span class="title">{{ t('Dev & IA Agentique', 'Dev & Agentic AI') }}</span>
        </div>
        <nav class="nav">
          <button class="lang-toggle" @click="toggle">{{ lang === 'fr' ? 'EN' : 'FR' }}</button>
          <a href="mailto:gabgingras@yahoo.com" aria-label="Email"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></a>
          <a href="https://github.com/dev-smurf" target="_blank" rel="noopener" aria-label="GitHub"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
          <a href="https://www.linkedin.com/in/dev-gabgingras" target="_blank" rel="noopener" aria-label="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
          <a href="/CV-GabrielGingras.pdf" target="_blank" aria-label="CV"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg></a>
        </nav>
      </header>

      <!-- Bio -->
      <section class="bio fade" style="--d: 1">
        <p>
          {{ t(
            "Je suis passionné par l'informatique et convaincu que l'",
            "I'm passionate about tech and convinced that "
          ) }}<strong>{{ t("intelligence artificielle", "artificial intelligence") }}</strong>
          {{ t(
            " est en train de tout changer. Je travaille avec l'IA au quotidien, agents autonomes, automatisation, intégration d'API, et je pense qu'on est juste au début.",
            " is changing everything. I work with AI daily, autonomous agents, automation, API integrations, and I think we're just getting started."
          ) }}
        </p>

        <p>
          {{ t(
            "En ce moment, je suis analyste et développeur au",
            "Currently, I'm an analyst and developer at the"
          ) }}
          <strong>{{ t("Ministère de la Cybersécurité et du Numérique", "Ministère de la Cybersécurité et du Numérique") }}</strong>
          {{ t(
            "du gouvernement du Québec, où je développe des outils internes en Python et j'automatise tout ce qui peut l'être. En parallèle, je finis mon DEC en informatique au Cégep Garneau.",
            "(Quebec government), where I build internal tools in Python and automate everything I can. I'm also finishing my CS degree at Cégep Garneau."
          ) }}
        </p>

        <p>
          {{ t("J'ai aussi fondé", "I also founded") }}
          <a href="https://backdoorproject.com" target="_blank" rel="noopener">Backdoor Project</a>{{ t(
            ", une marque de vêtements locale au Québec.",
            ", a local clothing brand in Quebec."
          ) }}
        </p>

        <p>
          {{ t(
            "Le futur, c'est les gens qui construisent avec l'IA, pas ceux qui la regardent passer.",
            "The future belongs to those who build with AI, not those who watch it pass by."
          ) }}
        </p>

        <a href="https://tokscale.ai/u/dev-smurf" target="_blank" rel="noopener" class="tokscale-card">
          <img src="/logo-claude.svg" alt="" class="tokscale-claude">
          <div class="tokscale-stat">
            <span class="tokscale-value">6.1B</span>
            <span class="tokscale-label">tokens</span>
          </div>
          <div class="tokscale-sep"></div>
          <div class="tokscale-stat">
            <span class="tokscale-value">$3,457</span>
            <span class="tokscale-label">{{ t('dépensés', 'spent') }}</span>
          </div>
          <div class="tokscale-sep"></div>
          <div class="tokscale-stat">
            <span class="tokscale-value">88</span>
            <span class="tokscale-label">{{ t('jours actifs', 'active days') }}</span>
          </div>
          <span class="tokscale-badge">tokscale.ai <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></span>
        </a>
      </section>

      <hr class="sep fade" style="--d: 2">

      <!-- Experience -->
      <section class="section fade" style="--d: 2">
        <h2 class="section-label">{{ t('Expérience', 'Experience') }}</h2>

        <div class="entry entry-collapsible" :class="{ open: openEntry === 'mcn' }" @click="toggleEntry('mcn')">
          <div class="entry-header">
            <div class="entry-title-row">
              <img src="/logo-quebec.png" alt="" class="entry-logo">
              <div>
                <strong>{{ t('Ministère de la Cybersécurité et du Numérique', 'Ministry of Cybersecurity and Digital') }}</strong>
                <span class="entry-role">{{ t('Analyste et développeur', 'Analyst & Developer') }}</span>
              </div>
            </div>
            <span class="entry-date">2023 — {{ t('Présent', 'Present') }}</span>
          </div>
          <div class="entry-details">
            <ul class="entry-list">
              <li>{{ t(
                "Conception et développement d'un système automatisé de génération d'avis de sécurité, réduisant le temps de production.",
                "Designed and developed an automated security advisory generation system, reducing production time."
              ) }}</li>
              <li>{{ t(
                "Réalisation de tests d'intrusion (pentests) et d'analyses de vulnérabilités à l'aide de Tenable.",
                "Performed penetration tests and vulnerability assessments using Tenable."
              ) }}</li>
            </ul>
          </div>
        </div>

        <div class="entry entry-collapsible" :class="{ open: openEntry === 'backdoor' }" @click="toggleEntry('backdoor')">
          <div class="entry-header">
            <div class="entry-title-row">
              <img src="/logo-backdoor.png" alt="" class="entry-logo">
              <div>
                <strong>Backdoor Project</strong>
                <span class="entry-role">{{ t('Fondateur', 'Founder') }}</span>
              </div>
            </div>
            <span class="entry-date">2025 — {{ t('Présent', 'Present') }}</span>
          </div>
          <div class="entry-details">
            <ul class="entry-list">
              <li>{{ t(
                "Création et développement d'une marque de vêtement indépendante.",
                "Created and developed an independent clothing brand."
              ) }}</li>
              <li>{{ t(
                "Gestion complète des opérations : design produit, production, logistique, e-commerce et marketing.",
                "Full operations management: product design, production, logistics, e-commerce and marketing."
              ) }}</li>
              <li>{{ t(
                "Développement complet du site e-commerce en architecture headless, incluant le frontend et l'intégration de l'API Shopify, avec une expérience utilisateur entièrement personnalisée.",
                "Full development of the e-commerce site in headless architecture, including frontend and Shopify API integration, with a fully custom user experience."
              ) }}</li>
            </ul>
            <div class="entry-links" @click.stop>
              <a href="https://backdoorproject.com" target="_blank" rel="noopener">Site <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></a>
              <a href="https://instagram.com/backdoor.project" target="_blank" rel="noopener">Instagram <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></a>
            </div>
          </div>
        </div>
      </section>

      <hr class="sep fade" style="--d: 3">

      <!-- Projets -->
      <section class="section fade" style="--d: 3">
        <h2 class="section-label">{{ t('Projets', 'Projects') }}</h2>

        <div class="projects-grid">
          <a href="https://homard.cloud" target="_blank" rel="noopener" class="project-card">
            <div class="project-card-top">
              <img src="/logo-homard.png" alt="" class="project-logo">
              <strong>Homard Cloud</strong>
              <span class="project-date">2026</span>
              <span class="project-arrow"><svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></span>
            </div>
            <p>{{ t(
              "Plateforme d'hébergement géré pour assistants IA : déploiement 1 clic sur WhatsApp, Telegram, Slack, Discord, Signal et Teams. Infrastructure Kubernetes, Cloudflare Tunnel, provisioning automatisé.",
              "Managed hosting platform for AI assistants: 1-click deployment on WhatsApp, Telegram, Slack, Discord, Signal and Teams. Kubernetes infrastructure, Cloudflare Tunnel, automated provisioning."
            ) }}</p>
            <span class="project-tech">kubernetes · cloudflare · ai</span>
          </a>

          <a href="https://canopiaquebec.ca" target="_blank" rel="noopener" class="project-card">
            <div class="project-card-top">
              <img src="/logo-canopia.svg" alt="" class="project-logo">
              <strong>Canopia</strong>
              <span class="project-date">2026</span>
              <span class="project-arrow"><svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></span>
            </div>
            <p>{{ t(
              "Application web de photo-interprétation forestière combinant LiDAR, imagerie satellite et données du MRNF, avec moteur d'optimisation IA et visualisation cartographique en temps réel.",
              "Forest photo-interpretation web app combining LiDAR, satellite imagery and MRNF data, with AI optimization engine and real-time map visualization."
            ) }}</p>
            <span class="project-tech">lidar · ai · cartographie</span>
          </a>

          <a href="https://weathermellon.info" target="_blank" rel="noopener" class="project-card">
            <div class="project-card-top">
              <img src="/logo-weathermellon.png" alt="" class="project-logo">
              <strong>WeatherMellon</strong>
              <span class="project-date">2025</span>
              <span class="project-arrow"><svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></span>
            </div>
            <p>{{ t(
              "Plateforme météo pour le NASA Space Apps Challenge. 48h de coding, globe 3D, données depuis 1981.",
              "Weather platform for the NASA Space Apps Challenge. 48h of coding, 3D globe, data since 1981."
            ) }}</p>
            <span class="project-tech">vue · fastapi · cesiumjs</span>
          </a>

          <a href="https://backdoorproject.com" target="_blank" rel="noopener" class="project-card">
            <div class="project-card-top">
              <img src="/logo-backdoor.png" alt="" class="project-logo">
              <strong>Backdoor Project</strong>
              <span class="project-date">2025</span>
              <span class="project-arrow"><svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></span>
            </div>
            <p>{{ t(
              "Site e-commerce headless avec l'API Shopify. Design minimaliste, expérience personnalisée.",
              "Headless e-commerce site with Shopify API. Minimalist design, custom experience."
            ) }}</p>
            <span class="project-tech">vue · shopify · tailwind</span>
          </a>

          <a href="https://github.com/dev-smurf/excaliclaude" target="_blank" rel="noopener" class="project-card">
            <div class="project-card-top">
              <img src="/logo-excaliclaude.svg" alt="" class="project-logo">
              <strong>excaliclaude</strong>
              <span class="project-date">2025</span>
              <span class="project-arrow"><svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></span>
            </div>
            <p>{{ t(
              "Serveur MCP qui permet à Claude de dessiner sur un canvas Excalidraw en temps réel. Chiffrement E2E, protocole natif.",
              "MCP server that lets Claude draw on an Excalidraw canvas in real-time. E2E encrypted, native protocol."
            ) }}</p>
            <span class="project-tech">typescript · mcp · socket.io</span>
          </a>
        </div>
      </section>

      <hr class="sep fade" style="--d: 4">

      <!-- Formation -->
      <section class="section fade" style="--d: 4">
        <h2 class="section-label">{{ t('Formation', 'Education') }}</h2>

        <div class="entry">
          <div class="entry-header">
            <div>
              <strong>{{ t('DEC en Informatique', 'CS Diploma (DEC)') }}</strong>
              <span class="entry-role">Cégep Garneau</span>
            </div>
            <span class="entry-date">2023 — 2026</span>
          </div>
        </div>

        <div class="entry">
          <div class="entry-header">
            <div>
              <strong>{{ t('Secondaire', 'High School') }}</strong>
              <span class="entry-role">{{ t('Académie Saint-Louis · Profil sport-langues', 'Académie Saint-Louis · Sports-languages profile') }}</span>
            </div>
            <span class="entry-date">2018 — 2023</span>
          </div>
        </div>
      </section>

      <hr class="sep fade" style="--d: 5">

      <!-- Distinctions -->
      <section class="section fade" style="--d: 5">
        <h2 class="section-label">{{ t('Distinctions', 'Awards') }}</h2>

        <div class="entry">
          <div class="entry-header">
            <div>
              <strong>{{ t('Participation, Botpress ADK Contest', 'Participation, Botpress ADK Contest') }}</strong>
              <span class="entry-role">{{ t('Concours #BotpressADK', '#BotpressADK Competition') }}</span>
            </div>
            <span class="entry-date">{{ t('Avril 2026', 'Apr. 2026') }}</span>
          </div>
          <div class="entry-dist-links">
            <a href="https://www.linkedin.com/feed/update/urn:li:activity:7442702617622888449/" target="_blank" rel="noopener">Post <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></a>
            <a href="https://www.linkedin.com/posts/botpressadk-share-7439377929555369984-4bD6" target="_blank" rel="noopener">Concours <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></a>
          </div>
        </div>

        <div class="entry">
          <div class="entry-header">
            <div>
              <strong>{{ t('1re place, BP Hacks', '1st place, BP Hacks') }}</strong>
              <span class="entry-role">{{ t('Hackathon Botpress, Québec', 'Botpress Hackathon, Quebec City') }}</span>
            </div>
            <span class="entry-date">{{ t('Mars 2026', 'Mar. 2026') }}</span>
          </div>
          <div class="entry-dist-links">
            <a href="https://bphacks.com/" target="_blank" rel="noopener">bphacks.com <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></a>
            <a href="https://www.linkedin.com/feed/update/urn:li:activity:7439011555435810816/" target="_blank" rel="noopener">Post <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></a>
          </div>
        </div>

        <div class="entry">
          <div class="entry-header">
            <div>
              <strong>{{ t('Participation, Défi OSEntreprendre', 'Participation, OSEntreprendre Challenge') }}</strong>
              <span class="entry-role">{{ t('Volet entrepreneuriat étudiant', 'Student entrepreneurship track') }}</span>
            </div>
            <span class="entry-date">2025</span>
          </div>
          <div class="entry-dist-links">
            <a href="https://www.osentreprendre.quebec/defi-osentreprendre/volet/etudiant/" target="_blank" rel="noopener">osentreprendre.quebec <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></a>
          </div>
        </div>

        <div class="entry">
          <div class="entry-header">
            <div>
              <strong>{{ t('Participation, NASA Space Apps Challenge', 'Participation, NASA Space Apps Challenge') }}</strong>
              <span class="entry-role">{{ t('Hackathon international', 'International hackathon') }}</span>
            </div>
            <span class="entry-date">{{ t('Oct. 2025', 'Oct. 2025') }}</span>
          </div>
          <div class="entry-dist-links">
            <a href="https://www.spaceappschallenge.org/2025/" target="_blank" rel="noopener">spaceappschallenge.org <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></a>
            <a href="https://www.linkedin.com/pulse/48-heures-pour-concevoir-une-plateforme-m%C3%A9t%C3%A9o-nasa-space-boudreau-aefcc/" target="_blank" rel="noopener">Article <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></a>
          </div>
        </div>
      </section>

      <footer class="footer fade" style="--d: 6">
        <p>&copy; 2026 Gabriel Gingras</p>
      </footer>

    </div>
  </div>
</template>

<style>
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

/* Grain texture */
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

/* ── Container ── */
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

.name {
  font-family: 'DM Serif Display', serif;
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
  color: #1e1812;
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
  flex-wrap: wrap;
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

.nav a {
  color: #6b5d4f;
  text-decoration: none;
  transition: color 0.2s;
  display: flex;
  align-items: center;
}

.nav a:hover {
  color: #c45d31;
}

.nav a svg {
  display: block;
}

/* ── Bio ── */
.bio {
  margin-bottom: 0;
}

.bio p {
  font-size: 0.95rem;
  line-height: 1.8;
  color: #3d3228;
  margin: 0 0 1.25rem;
}

.bio p:last-of-type {
  margin-bottom: 1.5rem;
}

.bio strong {
  font-weight: 500;
  color: #1e1812;
}

.bio a:not(.tokscale-card) {
  color: #c45d31;
  text-decoration: none;
  background-image: linear-gradient(#c45d31, #c45d31);
  background-size: 0% 1px;
  background-position: left bottom;
  background-repeat: no-repeat;
  transition: background-size 0.3s ease;
}

.bio a:not(.tokscale-card):hover {
  background-size: 100% 1px;
}

/* ── Tokscale card ── */
.tokscale-card {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  background: #efe3d2;
  border-radius: 10px;
  padding: 1rem 1.25rem;
  text-decoration: none;
  color: #2c2418;
  margin-top: 0.25rem;
}

.tokscale-claude {
  width: 26px;
  height: 26px;
  border-radius: 6px;
  flex-shrink: 0;
}

.tokscale-stat {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.tokscale-value {
  font-family: 'DM Serif Display', serif;
  font-size: 1.3rem;
  font-weight: 400;
  color: #1e1812;
  line-height: 1;
}

.tokscale-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.55rem;
  color: #9a8b7a;
  letter-spacing: 0.05em;
}

.tokscale-sep {
  width: 1px;
  height: 28px;
  background: #ddd0c0;
}

.tokscale-badge {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.55rem;
  color: #c45d31;
  margin-left: auto;
  letter-spacing: 0.02em;
}

@media (max-width: 480px) {
  .tokscale-card {
    gap: 0.9rem;
    padding: 0.85rem 1rem;
  }

  .tokscale-value {
    font-size: 1.1rem;
  }
}

/* ── Separator ── */
.sep {
  border: none;
  height: 1px;
  background: #ddd0c0;
  margin: 2.5rem 0;
}

/* ── Section ── */
.section {
  margin-bottom: 0;
}

.section-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.6rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #9a8b7a;
  margin: 0 0 1.5rem;
}

/* ── Entries ── */
.entry {
  margin-bottom: 1.75rem;
  padding: 0.75rem 0.85rem;
  margin-left: -0.85rem;
  margin-right: -0.85rem;
  border-radius: 6px;
  transition: background 0.25s ease;
}

.entry:hover {
  background: rgba(30, 24, 18, 0.03);
}

.entry-collapsible {
  cursor: pointer;
}

.entry-collapsible .entry-details {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease;
}

.entry-collapsible .entry-details > * {
  overflow: hidden;
}

.entry-collapsible.open .entry-details {
  grid-template-rows: 1fr;
}

.entry-collapsible .entry-details p,
.entry-collapsible .entry-details .entry-list {
  padding-top: 0.35rem;
}

.entry-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.entry-list li {
  font-size: 0.85rem;
  color: #6b5d4f;
  line-height: 1.7;
  padding-left: 1rem;
  position: relative;
  margin-bottom: 0.3rem;
}

.entry-list li::before {
  content: '·';
  position: absolute;
  left: 0;
  color: #9a8b7a;
  font-weight: 500;
}

.entry-collapsible .entry-header {
  align-items: center;
}

.entry-collapsible .entry-date {
  margin-left: auto;
  margin-right: 0.5rem;
}

.entry-collapsible .entry-header::after {
  content: '+';
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: #9a8b7a;
  flex-shrink: 0;
  transition: transform 0.25s ease;
}

.entry-collapsible.open .entry-header::after {
  transform: rotate(45deg);
}

.entry:last-child {
  margin-bottom: 0;
}

.entry-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 0.35rem;
  flex-wrap: wrap;
}

.entry strong {
  font-size: 0.9rem;
  font-weight: 500;
  color: #1e1812;
}

.entry strong a {
  color: #1e1812;
  text-decoration: none;
  transition: color 0.2s;
}

.entry strong a:hover {
  color: #c45d31;
}

.entry-title-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.entry-logo {
  width: 22px;
  height: 22px;
  border-radius: 5px;
  object-fit: cover;
  flex-shrink: 0;
}

.entry-role {
  display: block;
  font-size: 0.78rem;
  color: #6b5d4f;
  margin-top: 0.1rem;
}

.entry-date {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  color: #9a8b7a;
  white-space: nowrap;
  flex-shrink: 0;
}

.entry p {
  font-size: 0.85rem;
  color: #6b5d4f;
  line-height: 1.7;
  margin: 0;
}

.entry-tech {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.62rem;
  color: #9a8b7a;
  display: inline-block;
  margin-top: 0.4rem;
  letter-spacing: 0.02em;
}

.entry-links {
  display: flex;
  gap: 1rem;
  margin-top: 0.4rem;
}

/* ── Project cards ── */
.projects-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

.project-card {
  background: #efe3d2;
  border-radius: 10px;
  padding: 1.15rem 1.25rem;
  text-decoration: none;
  color: #2c2418;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;
}

a.project-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(30, 24, 18, 0.08);
}

.project-card-top {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.project-logo {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  object-fit: cover;
}

.project-logo-emoji {
  font-size: 1.1rem;
  line-height: 1;
  width: 20px;
  text-align: center;
}

.project-card-top strong {
  font-size: 0.9rem;
  font-weight: 500;
  color: #1e1812;
  flex: 1;
}

.project-date {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.6rem;
  color: #9a8b7a;
}

.project-arrow {
  color: #c45d31;
  transition: transform 0.2s;
  display: flex;
  flex-shrink: 0;
}

.project-arrow .arrow-icon {
  width: 12px;
  height: 12px;
}

a.project-card:hover .project-arrow {
  transform: translate(2px, -2px);
}

.project-card p {
  font-size: 0.78rem;
  color: #6b5d4f;
  line-height: 1.6;
  margin: 0;
  flex: 1;
}

.project-tech {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.58rem;
  color: #9a8b7a;
  margin-top: 0.75rem;
  letter-spacing: 0.02em;
}

@media (max-width: 520px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

.entry-dist-links {
  display: flex;
  gap: 1rem;
  margin-top: 0.35rem;
}

.entry-dist-links a {
  font-size: 0.7rem;
  color: #c45d31;
  text-decoration: none;
  transition: opacity 0.2s;
}

.entry-dist-links a:hover {
  opacity: 0.6;
}

.entry-links a {
  font-size: 0.75rem;
  color: #c45d31;
  text-decoration: none;
  transition: opacity 0.2s;
}

.entry-links a:hover {
  opacity: 0.6;
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
  margin-left: 0.15rem;
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

  .entry-header {
    flex-wrap: nowrap;
  }

  .entry-collapsible .entry-header {
    flex-wrap: nowrap;
  }

  .entry-collapsible .entry-title-row {
    flex: 1;
    min-width: 0;
  }

  .entry-collapsible .entry-title-row strong {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .entry:not(.entry-collapsible) .entry-header {
    flex-direction: column;
    gap: 0.1rem;
  }
}
</style>
