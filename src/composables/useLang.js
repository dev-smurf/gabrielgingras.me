import { ref, watch } from 'vue'

const STORAGE_KEY = 'portfolio-lang'

const stored = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
const lang = ref(stored === 'en' ? 'en' : 'fr')

watch(lang, (v) => {
  localStorage.setItem(STORAGE_KEY, v)
})

export function useLang() {
  const toggle = () => { lang.value = lang.value === 'fr' ? 'en' : 'fr' }
  const t = (fr, en) => lang.value === 'fr' ? fr : en
  return { lang, toggle, t }
}
