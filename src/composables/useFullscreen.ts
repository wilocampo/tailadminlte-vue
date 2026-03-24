import { ref, onUnmounted } from 'vue'

export function useFullscreen() {
  const isFullscreen = ref(!!document.fullscreenElement)

  function onFullscreenChange(): void {
    isFullscreen.value = !!document.fullscreenElement
  }

  document.addEventListener('fullscreenchange', onFullscreenChange)

  onUnmounted(() => {
    document.removeEventListener('fullscreenchange', onFullscreenChange)
  })

  function toggle(): void {
    if (document.fullscreenElement) {
      document.exitFullscreen()
      isFullscreen.value = false
    } else {
      document.documentElement.requestFullscreen()
      isFullscreen.value = true
    }
  }

  return {
    isFullscreen,
    toggle,
  }
}
