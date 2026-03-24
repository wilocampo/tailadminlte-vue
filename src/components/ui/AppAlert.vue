<script setup lang="ts">
import { ref } from 'vue'
import { X } from 'lucide-vue-next'
import * as icons from 'lucide-vue-next'

const props = defineProps<{
  variant: string
  icon?: string
  title?: string
  dismissible?: boolean
}>()

const visible = ref(true)

const variantClasses: Record<string, string> = {
  success: 'bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-300',
  danger: 'bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-300',
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-800 dark:text-yellow-300',
  info: 'bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-300',
  primary: 'bg-blue-50 border-blue-300 text-blue-900 dark:bg-blue-900/20 dark:border-blue-700 dark:text-blue-300',
  secondary: 'bg-gray-50 border-gray-200 text-gray-800 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300',
}

const iconComponent = props.icon ? (icons as Record<string, any>)[props.icon] : null
</script>

<template>
  <div
    v-if="visible"
    class="flex items-start gap-3 p-4 mb-4 rounded-md border"
    :class="variantClasses[variant] ?? ''"
    role="alert"
  >
    <component
      v-if="iconComponent"
      :is="iconComponent"
      class="w-5 h-5 flex-shrink-0 mt-0.5"
    />
    <div class="flex-1">
      <p v-if="title" class="font-semibold">{{ title }}</p>
      <p class="text-sm"><slot /></p>
    </div>
    <button
      v-if="dismissible"
      @click="visible = false"
      class="flex-shrink-0 ml-auto opacity-70 hover:opacity-100"
    >
      <X class="w-4 h-4" />
    </button>
  </div>
</template>
