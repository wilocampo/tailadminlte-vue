<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import { computed } from 'vue'
import { useThemeColors } from '@/composables/useThemeColors'
import type { ChartData, ChartOptions } from 'chart.js'

const props = defineProps<{
  data: ChartData<'bar'>
  options?: ChartOptions<'bar'>
  height?: number
}>()

const { gridColor, labelColor, borderColor } = useThemeColors()

const mergedOptions = computed<ChartOptions<'bar'>>(() => ({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: { color: gridColor.value },
      ticks: { color: labelColor.value },
      border: { color: borderColor.value },
    },
    y: {
      grid: { color: gridColor.value },
      ticks: { color: labelColor.value },
      border: { color: borderColor.value },
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
    <Bar :data="data" :options="mergedOptions" />
  </div>
</template>
