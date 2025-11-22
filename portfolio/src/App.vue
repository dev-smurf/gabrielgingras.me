<script setup>
import { ref } from 'vue'

const isDark = ref(true)

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
  <div :class="isDark ? 'bg-[#141414]' : 'bg-[#f4f1ea]'" class="min-h-screen transition-colors duration-500">
    
    <!-- texture overlay -->
    <div class="fixed inset-0 pointer-events-none opacity-20" :style="{ backgroundImage: `url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E')` }"></div>

    <div class="relative z-10 max-w-3xl mx-auto px-6 py-8" :class="isDark ? 'text-[#d4d0c8]' : 'text-[#2a2a2a]'">

      <!-- top bar -->
      <div class="flex justify-between items-center text-xs border-b pb-2 mb-2" :class="isDark ? 'border-[#333]' : 'border-[#2a2a2a]'">
        <span class="uppercase tracking-widest opacity-60">québec, qc</span>
        <button 
          @click="toggleTheme" 
          class="px-3 py-1 rounded border transition"
          :class="isDark ? 'border-[#444] hover:border-[#666] hover:bg-[#222]' : 'border-[#ccc] hover:border-[#999] hover:bg-[#e8e4db]'"
        >
          {{ isDark ? '☀ clair' : '☾ sombre' }}
        </button>
        <span class="uppercase tracking-widest opacity-60">{{ today }}</span>
      </div>

      <!-- masthead -->
      <header class="text-center py-6 border-b-4 mb-1" :class="isDark ? 'border-[#444]' : 'border-[#2a2a2a]'">
        <h1 class="font-black text-5xl md:text-7xl tracking-tight" style="font-family: 'Playfair Display', serif;">
          GABRIEL GINGRAS
        </h1>
        <p class="text-xs tracking-[0.4em] uppercase mt-3 opacity-50">développeur web & logiciel</p>
      </header>

      <!-- sub header -->
      <div class="flex justify-center gap-6 text-xs border-b py-3 mb-10" :class="isDark ? 'border-[#333]' : 'border-[#2a2a2a]'">
        <a href="mailto:ton@email.com" class="opacity-50 hover:opacity-100 transition">email</a>
        <span class="opacity-30">•</span>
        <a href="https://github.com" class="opacity-50 hover:opacity-100 transition">github</a>
        <span class="opacity-30">•</span>
        <a href="https://linkedin.com" class="opacity-50 hover:opacity-100 transition">linkedin</a>
        <span class="opacity-30">•</span>
        <a href="/cv.pdf" class="opacity-50 hover:opacity-100 transition">cv</a>
      </div>

      <!-- à propos -->
      <section class="mb-12">
        <p class="text-lg leading-relaxed text-center max-w-xl mx-auto" style="font-family: 'Playfair Display', serif;">
          étudiant en dernière session au cégep garneau. je fais du développement web et logiciel et je travaille en cybersécurité.
        </p>
      </section>

      <!-- section break -->
      <div class="flex items-center gap-4 mb-10">
        <div class="flex-1 h-px" :class="isDark ? 'bg-[#333]' : 'bg-[#2a2a2a]'"></div>
        <span class="text-xs tracking-widest opacity-40">✦</span>
        <div class="flex-1 h-px" :class="isDark ? 'bg-[#333]' : 'bg-[#2a2a2a]'"></div>
      </div>

      <!-- expérience & entrepreneuriat -->
      <section class="mb-12">
        <h2 class="text-xs tracking-[0.3em] uppercase text-center mb-8 opacity-50">— expérience & entrepreneuriat —</h2>

        <div class="space-y-8">
          <div class="border-b pb-6" :class="isDark ? 'border-[#292929]' : 'border-[#d4d0c8]'">
            <div class="flex justify-between items-baseline mb-2">
              <h3 class="font-semibold text-lg" style="font-family: 'Playfair Display', serif;">ministère de la cybersécurité et du numérique</h3>
              <span class="text-xs opacity-40">juin 2023 — présent</span>
            </div>
            <p class="text-sm opacity-50 mb-3">analyste en cybersécurité</p>
            <p class="text-sm opacity-70 leading-relaxed">
              je travaille dans l'équipe de gestion des vulnérabilités et d'automatisation. développement d'outils internes en python, intégration de l'api openai pour l'analyse, et tests de pénétration avec tenable.
            </p>
            <p class="text-xs opacity-40 font-mono mt-3">python · openai api · tenable</p>
          </div>

          <div class="border-b pb-6" :class="isDark ? 'border-[#292929]' : 'border-[#d4d0c8]'">
            <div class="flex justify-between items-baseline mb-2">
              <h3 class="font-semibold text-lg" style="font-family: 'Playfair Display', serif;">backdoor project</h3>
              <span class="text-xs opacity-40">mai 2025 — présent</span>
            </div>
            <p class="text-sm opacity-50 mb-3">fondateur</p>
            <p class="text-sm opacity-70 leading-relaxed">
              ma marque de vêtements. des pièces uniques conçues pour sortir des codes imposés par la mode traditionnelle. chaque vêtement est designé par moi-même et fabriqué au québec. pas de fast fashion, pas de tendances — juste du linge qui a du sens.
            </p>
            <p class="text-xs opacity-40 font-mono mt-3">design · production locale · e-commerce</p>
          </div>
        </div>
      </section>

      <!-- section break -->
      <div class="flex items-center gap-4 mb-10">
        <div class="flex-1 h-px" :class="isDark ? 'bg-[#333]' : 'bg-[#2a2a2a]'"></div>
        <span class="text-xs tracking-widest opacity-40">✦</span>
        <div class="flex-1 h-px" :class="isDark ? 'bg-[#333]' : 'bg-[#2a2a2a]'"></div>
      </div>

      <!-- projets -->
      <section class="mb-12">
        <h2 class="text-xs tracking-[0.3em] uppercase text-center mb-8 opacity-50">— projets —</h2>

        <div class="grid md:grid-cols-2 gap-x-8 gap-y-6">
          <div>
            <h3 class="font-semibold text-lg mb-1" style="font-family: 'Playfair Display', serif;">weathermellon</h3>
            <p class="text-sm opacity-70 leading-relaxed mb-2">plateforme météo avec globe 3d. développé au nasa space apps challenge 2024.</p>
            <p class="text-xs opacity-40 font-mono">vue · fastapi · cesiumjs</p>
          </div>

          <div>
            <h3 class="font-semibold text-lg mb-1" style="font-family: 'Playfair Display', serif;">backdoor project</h3>
            <p class="text-sm opacity-70 leading-relaxed mb-2">site e-commerce pour ma marque. design minimaliste, pièces limitées.</p>
            <p class="text-xs opacity-40 font-mono">vue · tailwind</p>
          </div>

          <div>
            <h3 class="font-semibold text-lg mb-1" style="font-family: 'Playfair Display', serif;">fliptracker</h3>
            <p class="text-sm opacity-70 leading-relaxed mb-2">app de gestion pour un business de revente. profits, inventaire, split entre partenaires.</p>
            <p class="text-xs opacity-40 font-mono">next.js · prisma · sqlite</p>
          </div>

          <div>
            <h3 class="font-semibold text-lg mb-1" style="font-family: 'Playfair Display', serif;">flippi</h3>
            <p class="text-sm opacity-70 leading-relaxed mb-2">scan wifi sur raspberry pi. interface terminal rétro.</p>
            <p class="text-xs opacity-40 font-mono">python · raspberry pi</p>
          </div>
        </div>
      </section>

      <!-- section break -->
      <div class="flex items-center gap-4 mb-10">
        <div class="flex-1 h-px" :class="isDark ? 'bg-[#333]' : 'bg-[#2a2a2a]'"></div>
        <span class="text-xs tracking-widest opacity-40">✦</span>
        <div class="flex-1 h-px" :class="isDark ? 'bg-[#333]' : 'bg-[#2a2a2a]'"></div>
      </div>

      <!-- formation & distinctions -->
      <section class="mb-12">
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h2 class="text-xs tracking-[0.3em] uppercase mb-6 opacity-50">— formation —</h2>
            <h3 class="font-semibold" style="font-family: 'Playfair Display', serif;">dec en informatique</h3>
            <p class="text-sm opacity-50">cégep garneau · 2023-2026</p>
            <p class="text-sm opacity-70 mt-2">cheminement dec-bac</p>
          </div>

          <div>
            <h2 class="text-xs tracking-[0.3em] uppercase mb-6 opacity-50">— distinctions —</h2>
            <ul class="text-sm space-y-2">
              <li class="flex justify-between">
                <span class="opacity-70">nasa space apps challenge</span>
                <span class="opacity-40">2024</span>
              </li>
              <li class="flex justify-between">
                <span class="opacity-70">hackathon</span>
                <span class="opacity-40">2024</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- footer -->
      <footer class="text-center pt-8 border-t" :class="isDark ? 'border-[#333]' : 'border-[#2a2a2a]'">
        <p class="text-xs tracking-widest uppercase opacity-30">— fin —</p>
        <p class="text-xs opacity-20 mt-4 font-mono">© 2025 · vue + tailwind</p>
      </footer>

    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;900&family=IBM+Plex+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400&display=swap');

* {
  font-family: 'IBM Plex Sans', sans-serif;
}

.font-mono {
  font-family: 'JetBrains Mono', monospace;
}

html {
  scroll-behavior: smooth;
}
</style>