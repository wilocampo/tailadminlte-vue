<script setup lang="ts">
import { useDarkModeStore } from '@/stores/darkMode'
import { Sun, Moon, Monitor } from 'lucide-vue-next'

const darkMode = useDarkModeStore()
</script>

<template>
  <div class="fixed top-4 right-4 z-50">
    <button @click="darkMode.toggle()" title="Toggle dark mode"
      class="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
      <Sun v-show="darkMode.mode === 'light'" class="w-5 h-5" />
      <Moon v-show="darkMode.mode === 'dark'" class="w-5 h-5" />
      <Monitor v-show="darkMode.mode === 'auto'" class="w-5 h-5" />
    </button>
  </div>
</template>
