<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'
import DarkModeToggle from '@/components/ui/DarkModeToggle.vue'

onMounted(() => {
  document.body.className = 'bg-gray-100 dark:bg-gray-900 font-sans text-gray-800 dark:text-gray-200'
})

onUnmounted(() => {
  document.body.className = ''
})
</script>

<template>
  <DarkModeToggle />
  <RouterView />
</template>
