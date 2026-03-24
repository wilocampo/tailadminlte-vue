<script setup lang="ts">
import { Radar } from 'vue-chartjs'
import { computed } from 'vue'
import { useThemeColors } from '@/composables/useThemeColors'
import type { ChartData, ChartOptions } from 'chart.js'

const props = defineProps<{
  data: ChartData<'radar'>
  options?: ChartOptions<'radar'>
  height?: number
}>()

const { gridColor, labelColor } = useThemeColors()

const mergedOptions = computed<ChartOptions<'radar'>>(() => ({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
      grid: { color: gridColor.value },
      ticks: { color: labelColor.value, backdropColor: 'transparent' },
      pointLabels: { color: labelColor.value },
      angleLines: { color: gridColor.value },
    },
  },
  plugins: {
    legend: { labels: { color: labelColor.value } },
  },
  ...props.options,
}))
</script>

<template>
  <div :style="height ? { height: height + 'px' } : {}">
    <Radar :data="data" :options="mergedOptions" />
  </div>
</template>
