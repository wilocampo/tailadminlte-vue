import { ref, type Ref } from 'vue'
import { slideUp, slideDown } from './useSlideToggle'

export interface CardWidgetOptions {
  initialCollapsed?: boolean
  animationSpeed?: number
}

export function useCardWidget(
  cardRef: Ref<HTMLElement | null>,
  bodyRef: Ref<HTMLElement | null>,
  footerRef: Ref<HTMLElement | null>,
  options: CardWidgetOptions = {},
) {
  const collapsed = ref(options.initialCollapsed ?? false)
  const maximized = ref(false)
  const animationSpeed = options.animationSpeed ?? 500

  function getTargets(): HTMLElement[] {
    const targets: HTMLElement[] = []
    if (bodyRef.value) targets.push(bodyRef.value)
    if (footerRef.value) targets.push(footerRef.value)
    return targets
  }

  function collapse(): void {
    const card = cardRef.value
    if (!card) return

    card.classList.add('collapsing-card')
    getTargets().forEach((el) => slideUp(el, animationSpeed))

    setTimeout(() => {
      card.classList.add('collapsed-card')
      card.classList.remove('collapsing-card')
      collapsed.value = true
    }, animationSpeed)
  }

  function expand(): void {
    const card = cardRef.value
    if (!card) return

    card.classList.add('expanding-card')
    getTargets().forEach((el) => slideDown(el, animationSpeed))

    setTimeout(() => {
      card.classList.remove('collapsed-card', 'expanding-card')
      collapsed.value = false
    }, animationSpeed)
  }

  function toggleCollapse(): void {
    const card = cardRef.value
    if (!card) return

    if (card.classList.contains('collapsed-card')) {
      expand()
    } else {
      collapse()
    }
  }

  function remove(): void {
    const card = cardRef.value
    if (card) slideUp(card, animationSpeed)
  }

  function maximize(card: HTMLElement): void {
    card.style.height = `${card.offsetHeight}px`
    card.style.width = `${card.offsetWidth}px`
    card.style.transition = 'all .15s'

    setTimeout(() => {
      document.documentElement.classList.add('maximized-card')
      card.classList.add('maximized-card')
      if (card.classList.contains('collapsed-card')) {
        card.classList.add('was-collapsed')
      }
      maximized.value = true
    }, 150)
  }

  function minimize(card: HTMLElement): void {
    card.style.cssText = ''

    setTimeout(() => {
      document.documentElement.classList.remove('maximized-card')
      card.classList.remove('maximized-card')
      if (card.classList.contains('was-collapsed')) {
        card.classList.remove('was-collapsed')
      }
      maximized.value = false
    }, 10)
  }

  function toggleMaximize(): void {
    const card = cardRef.value
    if (!card) return

    if (card.classList.contains('maximized-card')) {
      minimize(card)
    } else {
      maximize(card)
    }
  }

  // Apply initial collapsed state
  if (options.initialCollapsed) {
    // Defer to allow refs to be populated after mount
    setTimeout(() => {
      const card = cardRef.value
      if (card) {
        card.classList.add('collapsed-card')
        getTargets().forEach((el) => {
          el.style.display = 'none'
        })
      }
    }, 0)
  }

  return {
    collapsed,
    maximized,
    toggleCollapse,
    toggleMaximize,
    remove,
  }
}
