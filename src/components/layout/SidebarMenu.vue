<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import SidebarMenuItem from './SidebarMenuItem.vue'
import type { NavigationSection, NavigationItem } from '@/types'

defineProps<{
  sections: NavigationSection[]
  activePage: string
}>()

// Store refs to menu items per section for accordion behavior
const itemRefs = ref<Map<string, InstanceType<typeof SidebarMenuItem>[]>>(new Map())

function setItemRef(sectionIndex: number, index: number) {
  return (el: any) => {
    const key = `${sectionIndex}`
    if (!itemRefs.value.has(key)) {
      itemRefs.value.set(key, [])
    }
    const arr = itemRefs.value.get(key)!
    arr[index] = el
  }
}

function onMenuToggle(sectionIndex: number, toggledIndex: number, item: NavigationItem) {
  // Accordion: close siblings at the same level
  const siblings = itemRefs.value.get(`${sectionIndex}`)
  if (siblings) {
    siblings.forEach((sibling, i) => {
      if (i !== toggledIndex && sibling?.close) {
        sibling.close()
      }
    })
  }
}
</script>

<template>
  <nav class="mt-2">
    <ul class="sidebar-menu">
      <template v-for="(section, sectionIndex) in sections" :key="sectionIndex">
        <li class="nav-header">{{ section.header }}</li>
        <SidebarMenuItem
          v-for="(item, itemIndex) in section.items"
          :key="`${sectionIndex}-${itemIndex}`"
          :ref="setItemRef(sectionIndex, itemIndex)"
          :item="item"
          :active-page="activePage"
          @menu-toggle="onMenuToggle(sectionIndex, itemIndex, $event)"
        />
      </template>
    </ul>
  </nav>
</template>
