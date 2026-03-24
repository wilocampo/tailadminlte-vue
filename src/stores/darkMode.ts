import { ref } from 'vue'
import { defineStore } from 'pinia'

export type ThemeMode = 'light' | 'dark' | 'auto'

export const useDarkModeStore = defineStore('darkMode', () => {
  const mode = ref<ThemeMode>('light')

  function apply(): void {
    const isDark =
      mode.value === 'dark' ||
      (mode.value === 'auto' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.classList.toggle('dark', isDark)
  }

  function toggle(): void {
    const modes: ThemeMode[] = ['light', 'dark', 'auto']
    const idx = modes.indexOf(mode.value)
    mode.value = modes[(idx + 1) % modes.length]
    localStorage.setItem('theme', mode.value)
    apply()
  }

  function setMode(newMode: ThemeMode): void {
    mode.value = newMode
    localStorage.setItem('theme', newMode)
    apply()
  }

  // Init: read stored preference and listen for system theme changes
  const stored = localStorage.getItem('theme') as ThemeMode | null
  if (stored && ['light', 'dark', 'auto'].includes(stored)) {
    mode.value = stored
  }
  apply()

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', () => {
      if (mode.value === 'auto') apply()
    })

  return { mode, toggle, setMode, apply }
})
