<script setup lang="ts">
import { Doughnut } from 'vue-chartjs'
import { computed } from 'vue'
import { useThemeColors } from '@/composables/useThemeColors'
import type { ChartData, ChartOptions } from 'chart.js'

const props = defineProps<{
  data: ChartData<'doughnut'>
  options?: ChartOptions<'doughnut'>
  height?: number
}>()

const { labelColor } = useThemeColors()

const mergedOptions = computed<ChartOptions<'doughnut'>>(() => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { labels: { color: labelColor.value } },
  },
  ...props.options,
}))
</script>

<template>
  <div :style="height ? { height: height + 'px' } : {}">
    <Doughnut :data="data" :options="mergedOptions" />
  </div>
</template>
