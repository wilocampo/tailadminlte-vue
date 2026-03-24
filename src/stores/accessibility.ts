import { ref } from 'vue'
import { defineStore } from 'pinia'

export type FontSize = 'normal' | 'large' | 'x-large'

export const useAccessibilityStore = defineStore('accessibility', () => {
  const reducedMotion = ref(false)
  const highContrast = ref(false)
  const fontSize = ref<FontSize>('normal')

  function apply(): void {
    const html = document.documentElement
    html.classList.toggle('high-contrast', highContrast.value)
    html.classList.remove(
      'font-size-normal',
      'font-size-large',
      'font-size-x-large',
    )
    html.classList.add('font-size-' + fontSize.value)
    html.classList.toggle('reduced-motion', reducedMotion.value)
  }

  function save(): void {
    localStorage.setItem(
      'accessibility',
      JSON.stringify({
        highContrast: highContrast.value,
        fontSize: fontSize.value,
      }),
    )
  }

  function announce(message: string): void {
    const region = document.getElementById('a11y-announcements')
    if (region) {
      region.textContent = ''
      requestAnimationFrame(() => {
        region.textContent = message
      })
    }
  }

  function toggleHighContrast(): void {
    highContrast.value = !highContrast.value
    apply()
    save()
    announce(
      highContrast.value
        ? 'High contrast mode enabled'
        : 'High contrast mode disabled',
    )
  }

  function setFontSize(size: FontSize): void {
    if (['normal', 'large', 'x-large'].includes(size)) {
      fontSize.value = size
      apply()
      save()
      announce('Font size set to ' + size)
    }
  }

  // Init: detect system reduced-motion preference
  reducedMotion.value = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches

  window
    .matchMedia('(prefers-reduced-motion: reduce)')
    .addEventListener('change', (e: MediaQueryListEvent) => {
      reducedMotion.value = e.matches
      apply()
    })

  // Restore saved preferences from localStorage
  const saved = localStorage.getItem('accessibility')
  if (saved) {
    try {
      const parsed = JSON.parse(saved) as {
        highContrast?: boolean
        fontSize?: FontSize
      }
      if (parsed.highContrast !== undefined)
        highContrast.value = parsed.highContrast
      if (
        parsed.fontSize !== undefined &&
        ['normal', 'large', 'x-large'].includes(parsed.fontSize)
      )
        fontSize.value = parsed.fontSize
    } catch {
      // Ignore malformed data
    }
  }

  apply()

  return {
    reducedMotion,
    highContrast,
    fontSize,
    toggleHighContrast,
    setFontSize,
    announce,
    apply,
  }
})
