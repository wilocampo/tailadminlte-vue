<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { RouterView } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppSidebar from '@/components/layout/AppSidebar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import ContentHeader from '@/components/layout/ContentHeader.vue'
import { useSidebarStore } from '@/stores/sidebar'
import { useLayoutStore } from '@/stores/layout'

const route = useRoute()
const sidebarStore = useSidebarStore()
const layoutStore = useLayoutStore()

const activePage = computed(() => (route.meta.activePage as string) || '')
const pageTitle = computed(() => (route.meta.pageTitle as string) || '')
const layoutClass = computed(() => (route.meta.layoutClass as string) || '')

const bodyClasses = 'layout-fixed sidebar-expand-lg sidebar-mini bg-gray-100 dark:bg-gray-900 font-sans text-gray-800 dark:text-gray-200'

onMounted(() => {
  document.body.className = bodyClasses
})

onUnmounted(() => {
  document.body.className = ''
})
</script>

<template>
  <!-- Skip to content -->
  <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded">
    Skip to content
  </a>
  <!-- Screen reader announcements -->
  <div id="a11y-announcements" aria-live="polite" aria-atomic="true" class="sr-only"></div>

  <div class="app-wrapper" :class="layoutClass">
    <AppHeader />
    <AppSidebar :active-page="activePage" />
    <main class="app-main" role="main">
      <ContentHeader :title="pageTitle" />
      <div class="app-content" id="main-content">
        <div class="w-full px-4">
          <RouterView />
        </div>
      </div>
    </main>
    <AppFooter />
  </div>
</template>
