<script setup lang="ts">
import { Pie } from 'vue-chartjs'
import { computed } from 'vue'
import { useThemeColors } from '@/composables/useThemeColors'
import type { ChartData, ChartOptions } from 'chart.js'

const props = defineProps<{
  data: ChartData<'pie'>
  options?: ChartOptions<'pie'>
  height?: number
}>()

const { labelColor } = useThemeColors()

const mergedOptions = computed<ChartOptions<'pie'>>(() => ({
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
    <Pie :data="data" :options="mergedOptions" />
  </div>
</template>
