<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowRight } from 'lucide-vue-next'
import * as icons from 'lucide-vue-next'

const props = withDefaults(defineProps<{
  bgColor: string
  value: string | number
  label: string
  icon: string
  link?: string
  linkText?: string
}>(), {
  linkText: 'More info',
})

function resolveIcon(name: string) {
  const pascal = name.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')
  return (icons as any)[pascal] || null
}

const iconComponent = computed(() => resolveIcon(props.icon))
</script>

<template>
  <div class="small-box" :class="bgColor">
    <div class="inner">
      <h3 v-html="value"></h3>
      <p>{{ label }}</p>
    </div>
    <div class="small-box-icon">
      <component :is="iconComponent" v-if="iconComponent" />
    </div>
    <RouterLink v-if="link" :to="link" class="small-box-footer">
      {{ linkText }} <ArrowRight class="inline w-4 h-4" />
    </RouterLink>
    <a v-else href="#" class="small-box-footer">
      {{ linkText }} <ArrowRight class="inline w-4 h-4" />
    </a>
  </div>
</template>
