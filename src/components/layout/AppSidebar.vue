<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SidebarMenu from './SidebarMenu.vue'
import { navigation } from '@/data/navigation'
import { useSidebarStore } from '@/stores/sidebar'

defineProps<{
  activePage: string
}>()

const sidebarStore = useSidebarStore()
</script>

<template>
  <aside class="app-sidebar">
    <div class="sidebar-brand">
      <RouterLink to="/" class="brand-link">
        <img
          src="/assets/img/AdminLTELogo.png"
          alt="TailAdminLTE Logo"
          class="brand-image"
        />
        <span class="brand-text">TailAdmin<b>LTE</b></span>
      </RouterLink>
    </div>
    <div class="sidebar-wrapper">
      <SidebarMenu :sections="navigation" :active-page="activePage" />
    </div>
  </aside>
  <div class="sidebar-overlay" @click="sidebarStore.close()"></div>
</template>
