import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', () => {
  const loaded = ref(false)

  let resizeTimer: ReturnType<typeof setTimeout> | null = null

  // Init: hold transitions during resize, mark loaded after initial delay
  window.addEventListener('resize', () => {
    document.body.classList.add('hold-transition')
    if (resizeTimer !== null) {
      clearTimeout(resizeTimer)
    }
    resizeTimer = setTimeout(() => {
      document.body.classList.remove('hold-transition')
    }, 400)
  })

  setTimeout(() => {
    loaded.value = true
    document.body.classList.add('app-loaded')
  }, 400)

  return { loaded }
})
