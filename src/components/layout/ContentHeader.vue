<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  title: string
}>()
</script>

<template>
  <div class="app-content-header">
    <div class="w-full px-4">
      <div class="flex items-center justify-between">
        <h3 class="text-lg font-semibold m-0">{{ title }}</h3>
        <ol class="breadcrumb text-sm">
          <li class="breadcrumb-item"><RouterLink to="/">Home</RouterLink></li>
          <li class="breadcrumb-item active" aria-current="page">{{ title }}</li>
        </ol>
      </div>
    </div>
  </div>
</template>
