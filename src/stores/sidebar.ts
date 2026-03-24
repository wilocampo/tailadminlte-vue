import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', () => {
  const open = ref(true)
  const mini = ref(false)
  const breakpoint = ref(992)

  const _wasMobile = ref(false)
  const _userToggled = ref(false)

  function expand(): void {
    document.body.classList.remove('sidebar-collapse')
    document.body.classList.add('sidebar-open')
    open.value = true
  }

  function collapse(): void {
    document.body.classList.remove('sidebar-open')
    document.body.classList.add('sidebar-collapse')
    open.value = false
  }

  function toggle(): void {
    _userToggled.value = true
    if (document.body.classList.contains('sidebar-collapse')) {
      expand()
    } else {
      collapse()
    }
  }

  function close(): void {
    document.body.classList.remove('sidebar-open')
    open.value = false
  }

  function menusClose(): void {
    document.querySelectorAll('.nav-treeview').forEach((el) => {
      ;(el as HTMLElement).style.removeProperty('display')
      ;(el as HTMLElement).style.removeProperty('height')
    })
    document.querySelectorAll('.sidebar-menu .nav-item').forEach((el) => {
      el.classList.remove('menu-open')
    })
  }

  function _detectBreakpoint(): void {
    const expandEl = document.querySelector('[class*="sidebar-expand"]')
    if (expandEl) {
      const content = getComputedStyle(expandEl, '::before').getPropertyValue(
        'content',
      )
      const bp = Number(content.replace(/[^\d.-]/g, ''))
      if (bp > 0) breakpoint.value = bp
    }
  }

  function _applyInitialState(): void {
    if (window.innerWidth <= breakpoint.value) {
      collapse()
    } else {
      if (
        mini.value &&
        document.body.classList.contains('sidebar-collapse')
      ) {
        // Keep collapsed if mini + already collapsed
      } else if (!mini.value) {
        expand()
      }
    }
  }

  function _handleResize(): void {
    const isMobile = window.innerWidth <= breakpoint.value
    if (isMobile && !_wasMobile.value) {
      _userToggled.value = false
      collapse()
    } else if (!isMobile && _wasMobile.value) {
      _userToggled.value = false
      if (!mini.value) {
        expand()
      }
    }
    _wasMobile.value = isMobile
  }

  // Init
  mini.value = document.body.classList.contains('sidebar-mini')
  _detectBreakpoint()
  _wasMobile.value = window.innerWidth <= breakpoint.value
  _applyInitialState()
  window.addEventListener('resize', () => _handleResize())

  return { open, mini, breakpoint, toggle, expand, collapse, close, menusClose }
})
