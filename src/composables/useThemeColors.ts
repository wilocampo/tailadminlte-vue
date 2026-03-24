import { computed } from 'vue'
import { useDarkModeStore } from '@/stores/darkMode'

export function useThemeColors() {
  const darkModeStore = useDarkModeStore()

  const isDark = computed(
    () =>
      darkModeStore.mode === 'dark' ||
      (darkModeStore.mode === 'auto' &&
        document.documentElement.classList.contains('dark')),
  )

  const gridColor = computed(() =>
    isDark.value ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
  )

  const labelColor = computed(() => (isDark.value ? '#e2e8f0' : '#6b7280'))

  const borderColor = computed(() => (isDark.value ? '#334155' : '#e5e7eb'))

  return {
    gridColor,
    labelColor,
    borderColor,
  }
}
