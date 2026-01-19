<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
}

const today = new Date().toLocaleDateString('fr-CA', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
})
</script>

<template>
  <div :class="isDark ? 'bg-[#0f0f0f]' : 'bg-[#8b7355]'" class="min-h-screen transition-colors duration-500 py-4 md:py-8 px-3 md:px-4">
    
    <div class="relative z-10 max-w-4xl mx-auto" :class="isDark ? 'text-[#d4d0c8]' : 'text-[#2a2a2a]'">

      <button @click="toggleTheme" class="fixed top-3 right-3 md:top-4 md:right-4 z-50 opacity-50 hover:opacity-100 transition p-2">
        <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
      </button>

      <div 
        class="newspaper-container relative shadow-2xl"
        :class="isDark ? 'bg-[#1c1a17]' : 'bg-[#f5f0e6]'"
      >
        <div class="paper-texture"></div>
        <div class="paper-grain"></div>
        <div class="fold-line hidden md:block"></div>

        <div class="relative z-10">

          <div class="text-center text-[10px] md:text-xs py-2 md:py-3 border-b-2 border-double" :class="isDark ? 'border-[#3a3836]' : 'border-[#2a2a2a]'">
            <span class="opacity-60 tracking-[0.2em] md:tracking-[0.3em] uppercase font-medium">québec, qc — {{ today }}</span>
          </div>

          <header class="text-center py-4 md:py-8 px-3 md:px-4 border-b-4" :class="isDark ? 'border-[#3a3836]' : 'border-[#2a2a2a]'">
            <div class="hidden md:flex items-center justify-center gap-4 mb-3">
              <div class="flex-1 border-t border-b py-px" :class="isDark ? 'border-[#3a3836]' : 'border-[#2a2a2a]'"></div>
              <span class="text-xs tracking-[0.4em] uppercase opacity-50 px-4">est. 2023</span>
              <div class="flex-1 border-t border-b py-px" :class="isDark ? 'border-[#3a3836]' : 'border-[#2a2a2a]'"></div>
            </div>
            <p class="md:hidden text-[10px] tracking-[0.3em] uppercase opacity-50 mb-2">est. 2023</p>
            <h1 class="newspaper-title text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-wide leading-tight">GABRIEL GINGRAS</h1>
            <div class="flex items-center justify-center gap-2 md:gap-4 mt-2 md:mt-3">
              <div class="flex-1 h-px" :class="isDark ? 'bg-[#3a3836]' : 'bg-[#2a2a2a]'"></div>
              <span class="text-[10px] md:text-xs tracking-[0.1em] md:tracking-[0.2em] uppercase opacity-50 px-2 md:px-4 whitespace-nowrap">développeur web & logiciel</span>
              <div class="flex-1 h-px" :class="isDark ? 'bg-[#3a3836]' : 'bg-[#2a2a2a]'"></div>
            </div>
          </header>

          <div class="flex flex-wrap justify-center gap-3 md:gap-8 text-[10px] md:text-xs py-3 md:py-4 border-b-2 px-2" :class="isDark ? 'border-[#2a2826]' : 'border-[#c4b8a8]'">
            <a href="mailto:gabgingras@yahoo.com" class="opacity-60 hover:opacity-100 transition tracking-wider md:tracking-widest uppercase font-medium">email</a>
            <span class="opacity-30 hidden sm:inline">✦</span>
            <a href="https://github.com/dev-smurf" target="_blank" class="opacity-60 hover:opacity-100 transition tracking-wider md:tracking-widest uppercase font-medium">github</a>
            <span class="opacity-30 hidden sm:inline">✦</span>
            <a href="https://www.linkedin.com/in/dev-gabgingras" target="_blank" class="opacity-60 hover:opacity-100 transition tracking-wider md:tracking-widest uppercase font-medium">linkedin</a>
            <span class="opacity-30 hidden sm:inline">✦</span>
<a href="/CV-GabrielGingras.pdf" target="_blank" class="opacity-60 hover:opacity-100 transition tracking-wider md:tracking-widest uppercase font-medium">cv</a>          </div>
          <div class="p-4 md:p-6 lg:p-10">

            <article class="mb-6 md:mb-10 p-4 md:p-6 border-2" :class="isDark ? 'bg-[#171513] border-[#2a2826]' : 'bg-[#fffef9] border-[#c4b8a8]'">
              <p class="text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-50 mb-3 md:mb-4 text-center font-semibold">à la une</p>
              <h2 class="newspaper-title text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center mb-3 md:mb-4 leading-tight">Un étudiant québécois jongle entre cybersécurité et entrepreneuriat</h2>
              <p class="text-center opacity-70 leading-relaxed max-w-xl mx-auto text-sm md:text-base serif-text">
                Étudiant en dernière session au Cégep Garneau. Je fais du développement web et logiciel et je travaille en cybersécurité.
              </p>
            </article>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-10">

              <article class="p-4 md:p-5 border-2" :class="isDark ? 'bg-[#171513] border-[#2a2826]' : 'bg-[#fffef9] border-[#c4b8a8]'">
                <p class="text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] opacity-50 mb-2 md:mb-3 font-semibold">Expérience</p>
                <h3 class="newspaper-title text-lg md:text-xl mb-1">Ministère de la Cybersécurité et du Numérique</h3>
                <p class="text-[10px] md:text-xs opacity-50 mb-2 md:mb-3 tracking-wide">Juin 2023 — Présent</p>
                <p class="text-xs md:text-sm opacity-80 leading-relaxed mb-2 md:mb-3 serif-text">
                  Analyste dans l'équipe de gestion des vulnérabilités et d'automatisation. Développement d'outils internes en Python, intégration de l'API OpenAI, tests de pénétration avec Tenable.
                </p>
                <p class="text-[10px] md:text-xs opacity-50 font-mono tracking-wide">python · openai api · tenable</p>
              </article>

              <article class="p-4 md:p-5 border-2" :class="isDark ? 'bg-[#171513] border-[#2a2826]' : 'bg-[#fffef9] border-[#c4b8a8]'">
                <p class="text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] opacity-50 mb-2 md:mb-3 font-semibold">Entrepreneuriat</p>
                <h3 class="newspaper-title text-lg md:text-xl mb-1">Backdoor Project</h3>
                <p class="text-[10px] md:text-xs opacity-50 mb-2 md:mb-3 tracking-wide">Mai 2025 — Présent</p>
                <p class="text-xs md:text-sm opacity-80 leading-relaxed mb-2 md:mb-3 serif-text">
                  Fondateur d'une marque de vêtements. Design, production locale au Québec, marketing, e-commerce. Des pièces uniques qui sortent des codes traditionnels.
                </p>
                <a href="https://instagram.com/backdoor.project" target="_blank" class="text-[10px] md:text-xs opacity-60 hover:opacity-100 transition font-medium">→ Instagram</a>
                <a href="https://backdoorproject.com" target="_blank" class="block text-[10px] md:text-xs opacity-60 hover:opacity-100 transition font-medium mt-1">→ Site</a>
              </article>

            </div>

            <div class="text-center py-4 md:py-6 border-t-2 border-b-2 mb-6 md:mb-10" :class="isDark ? 'border-[#2a2826]' : 'border-[#c4b8a8]'">
              <p class="text-xs md:text-sm uppercase tracking-[0.3em] md:tracking-[0.4em] opacity-50 font-semibold">✦ Projets ✦</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-10">

              <article class="p-3 md:p-4 border-2" :class="isDark ? 'bg-[#171513] border-[#2a2826]' : 'bg-[#fffef9] border-[#c4b8a8]'">
                <h3 class="newspaper-title text-base md:text-lg mb-1 md:mb-2">WeatherMellon</h3>
                <p class="text-[10px] md:text-xs opacity-80 leading-relaxed mb-2 serif-text">
                  Plateforme météo pour le NASA Space Apps Challenge 2025. 48h de coding. Globe 3D, données depuis 1981, alertes catastrophes.
                </p>
                <p class="text-[10px] md:text-xs opacity-50 font-mono mb-2">vue · fastapi · cesiumjs</p>
                <a href="https://weathermellon.info" target="_blank" class="text-[10px] md:text-xs opacity-60 hover:opacity-100 transition font-medium">→ Site</a>
              </article>

              <article class="p-3 md:p-4 border-2" :class="isDark ? 'bg-[#171513] border-[#2a2826]' : 'bg-[#fffef9] border-[#c4b8a8]'">
                <h3 class="newspaper-title text-base md:text-lg mb-1 md:mb-2">Backdoor Project</h3>
                <p class="text-[10px] md:text-xs opacity-80 leading-relaxed mb-2 serif-text">
                  Site e-commerce pour ma marque. Design minimaliste, intégration Stripe, gestion des commandes.
                </p>
                <p class="text-[10px] md:text-xs opacity-50 font-mono mb-2">vue · tailwind · stripe</p>
                <a href="https://backdoorproject.com" target="_blank" class="text-[10px] md:text-xs opacity-60 hover:opacity-100 transition font-medium">→ Site</a>
              </article>

              <article class="p-3 md:p-4 border-2 sm:col-span-2 md:col-span-1" :class="isDark ? 'bg-[#171513] border-[#2a2826]' : 'bg-[#fffef9] border-[#c4b8a8]'">
                <h3 class="newspaper-title text-base md:text-lg mb-1 md:mb-2">DevChain</h3>
                <p class="text-[10px] md:text-xs opacity-80 leading-relaxed mb-2 serif-text">
                  Réseau social pour développeurs. Projet avec Antoine Boudreau. Auth, publications Markdown, profils.
                </p>
                <p class="text-[10px] md:text-xs opacity-50 font-mono mb-2">django · tailwind · sass</p>
              </article>

            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-10">

              <article class="p-4 md:p-5 border-2" :class="isDark ? 'bg-[#171513] border-[#2a2826]' : 'bg-[#fffef9] border-[#c4b8a8]'">
                <p class="text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] opacity-50 mb-3 md:mb-4 font-semibold">Formation</p>
                <div class="mb-3 md:mb-4">
                  <h3 class="newspaper-title text-base md:text-lg">DEC en Informatique</h3>
                  <p class="text-[10px] md:text-xs opacity-60">Cégep Garneau · 2023-2026</p>
                  <p class="text-[10px] md:text-xs opacity-50 mt-1">Cheminement DEC-BAC · Fin prévue automne 2026</p>
                </div>
                <div>
                  <h3 class="newspaper-title text-base md:text-lg">Secondaire</h3>
                  <p class="text-[10px] md:text-xs opacity-60">Académie Saint-Louis · 2018-2023</p>
                  <p class="text-[10px] md:text-xs opacity-50 mt-1">Profil langues ELA</p>
                </div>
              </article>

              <article class="p-4 md:p-5 border-2" :class="isDark ? 'bg-[#171513] border-[#2a2826]' : 'bg-[#fffef9] border-[#c4b8a8]'">
                <p class="text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] opacity-50 mb-3 md:mb-4 font-semibold">Distinctions</p>
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <h3 class="newspaper-title text-base md:text-lg">NASA Space Apps Challenge</h3>
                  <span class="text-[10px] md:text-xs opacity-50">Oct. 2025</span>
                </div>
              </article>

            </div>

          </div>

          <footer class="text-center py-6 md:py-8 border-t-2" :class="isDark ? 'border-[#2a2826]' : 'border-[#c4b8a8]'">
            <p class="text-xs md:text-sm opacity-40 tracking-[0.2em] md:tracking-[0.3em] uppercase font-semibold">— Fin de l'édition —</p>
            <p class="text-[10px] md:text-xs opacity-30 mt-2 md:mt-3 font-mono">Gabriel Gingras © 2025</p>
          </footer>

        </div>

      </div>

    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Lora:wght@400;500;600&family=Source+Sans+3:wght@400;500;600&family=JetBrains+Mono:wght@400&display=swap');

* {
  font-family: 'Source Sans 3', sans-serif;
}

.newspaper-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 900;
}

.serif-text {
  font-family: 'Lora', Georgia, serif;
}

.font-mono {
  font-family: 'JetBrains Mono', monospace;
}

.newspaper-container {
  position: relative;
  overflow: hidden;
}

.paper-texture {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.04;
  pointer-events: none;
}

.paper-grain {
  position: absolute;
  inset: 0;
  background: 
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0,0,0,0.01) 2px,
      rgba(0,0,0,0.01) 4px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 2px,
      rgba(0,0,0,0.01) 2px,
      rgba(0,0,0,0.01) 4px
    );
  pointer-events: none;
}

.fold-line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 1px;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0,0,0,0.05) 10%,
    rgba(0,0,0,0.08) 50%,
    rgba(0,0,0,0.05) 90%,
    transparent 100%
  );
  pointer-events: none;
}

.newspaper-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(to bottom, rgba(255,255,255,0.03), transparent);
  pointer-events: none;
}

.newspaper-container::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(to top, rgba(0,0,0,0.05), transparent);
  pointer-events: none;
}
</style>