<script setup lang="ts">
defineProps<{
  variant?: string
  title?: string
}>()
</script>

<template>
  <div class="callout" :class="variant ? `callout-${variant}` : ''">
    <h5 v-if="title">{{ title }}</h5>
    <p><slot /></p>
  </div>
</template>
