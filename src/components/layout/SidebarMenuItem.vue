<script setup lang="ts">
import { ref, computed, nextTick, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import * as icons from 'lucide-vue-next'
import { slideDown, slideUp } from '@/composables/useSlideToggle'
import type { NavigationItem } from '@/types'

const props = withDefaults(
  defineProps<{
    item: NavigationItem
    activePage: string
    accordion?: boolean
  }>(),
  { accordion: true },
)

const emit = defineEmits<{
  'menu-toggle': [item: NavigationItem]
}>()

const treeviewRef = ref<HTMLElement | null>(null)
const hasChildren = computed(() => !!props.item.children?.length)

function isChildActive(item: NavigationItem): boolean {
  if (item.activePage === props.activePage) return true
  if (item.children) {
    return item.children.some((child) => isChildActive(child))
  }
  return false
}

const isActive = computed(() => {
  if (hasChildren.value) {
    return props.item.children!.some((child) => isChildActive(child))
  }
  return props.item.activePage === props.activePage
})

const isOpen = ref(false)

onMounted(() => {
  if (hasChildren.value && isActive.value) {
    isOpen.value = true
    // Set initial display without animation
    nextTick(() => {
      if (treeviewRef.value) {
        treeviewRef.value.style.display = 'block'
      }
    })
  }
})

function resolveIcon(name: string) {
  const pascal = name
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('')
  return (icons as any)[pascal] || null
}

const iconComponent = computed(() => {
  if (props.item.icon) {
    return resolveIcon(props.item.icon)
  }
  return null
})

function toggle() {
  if (!hasChildren.value) return

  if (isOpen.value) {
    close()
  } else {
    open()
  }
}

function open() {
  isOpen.value = true
  nextTick(() => {
    if (treeviewRef.value) {
      slideDown(treeviewRef.value)
    }
  })
  if (props.accordion) {
    emit('menu-toggle', props.item)
  }
}

function close() {
  isOpen.value = false
  if (treeviewRef.value) {
    slideUp(treeviewRef.value)
  }
}

function onChildToggle(childItem: NavigationItem) {
  // Accordion: close sibling children when one opens
  // This is handled by the parent SidebarMenuItem recursively
}

defineExpose({ close })
</script>

<template>
  <li
    v-if="hasChildren"
    class="nav-item"
    :class="{ 'menu-open': isOpen }"
  >
    <a href="#" class="nav-link" @click.prevent="toggle">
      <span class="nav-icon">
        <component
          :is="iconComponent"
          v-if="iconComponent"
          class="w-5 h-5"
        />
      </span>
      <p>
        {{ item.label }}
        <span class="nav-arrow">
          <component :is="icons.ChevronRight" class="w-4 h-4" />
        </span>
      </p>
    </a>
    <ul ref="treeviewRef" class="nav-treeview" style="display: none">
      <SidebarMenuItem
        v-for="(child, index) in item.children"
        :key="index"
        :item="child"
        :active-page="activePage"
        :accordion="accordion"
        @menu-toggle="onChildToggle"
      />
    </ul>
  </li>

  <li v-else class="nav-item">
    <RouterLink
      v-if="item.href"
      :to="item.href"
      class="nav-link"
      :class="{ active: isActive }"
    >
      <span class="nav-icon">
        <component
          :is="iconComponent"
          v-if="iconComponent"
          class="w-5 h-5"
        />
        <component
          :is="icons.Circle"
          v-else
          class="w-3 h-3"
        />
      </span>
      <p>{{ item.label }}</p>
    </RouterLink>
    <a v-else :href="item.href" class="nav-link">
      <span class="nav-icon">
        <component
          :is="iconComponent"
          v-if="iconComponent"
          class="w-5 h-5"
        />
        <component
          :is="icons.Circle"
          v-else
          class="w-3 h-3"
        />
      </span>
      <p>{{ item.label }}</p>
    </a>
  </li>
</template>
