<script setup lang="ts">
import { computed } from 'vue'
import * as icons from 'lucide-vue-next'

const props = defineProps<{
  icon: string
  iconBg: string
  label: string
  value: string | number
  progressValue?: number
  progressColor?: string
  progressDescription?: string
}>()

function resolveIcon(name: string) {
  const pascal = name.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')
  return (icons as any)[pascal] || null
}

const iconComponent = computed(() => resolveIcon(props.icon))
</script>

<template>
  <div class="info-box">
    <span class="info-box-icon text-white" :class="iconBg">
      <component :is="iconComponent" v-if="iconComponent" class="w-8 h-8" />
    </span>
    <div class="info-box-content">
      <span class="info-box-text">{{ label }}</span>
      <span class="info-box-number">{{ value }}</span>
      <div class="progress" v-if="progressValue != null">
        <div
          class="progress-bar"
          :class="progressColor || 'bg-primary'"
          :style="{ width: progressValue + '%' }"
        ></div>
      </div>
      <span class="progress-description" v-if="progressDescription">{{ progressDescription }}</span>
    </div>
  </div>
</template>
