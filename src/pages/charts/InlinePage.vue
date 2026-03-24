<script setup lang="ts">
import { computed } from 'vue'
import { DollarSign, Users, ShoppingBag, Activity, TrendingUp, TrendingDown } from 'lucide-vue-next'
import LineChart from '@/components/charts/LineChart.vue'
import BarChart from '@/components/charts/BarChart.vue'
import DoughnutChart from '@/components/charts/DoughnutChart.vue'
import { useDarkModeStore } from '@/stores/darkMode'
import type { ChartData, ChartOptions } from 'chart.js'

const darkMode = useDarkModeStore()

const sparkOpts: ChartOptions<'line'> = {
  plugins: { legend: { display: false }, tooltip: { enabled: false } },
  scales: { x: { display: false }, y: { display: false } },
  elements: { point: { radius: 0 }, line: { borderWidth: 2 } },
}

const miniBarOpts: ChartOptions<'bar'> = {
  plugins: { legend: { display: false }, tooltip: { enabled: false } },
  scales: { x: { display: false }, y: { display: false } },
}

const trendOpts: ChartOptions<'line'> = {
  plugins: { legend: { display: false }, tooltip: { enabled: false } },
  scales: { x: { display: false }, y: { display: false } },
  elements: { point: { radius: 0 }, line: { borderWidth: 2 } },
}

const sparkRevenue: ChartData<'line'> = {
  labels: Array(12).fill(''),
  datasets: [{ data: [28,32,30,35,38,36,40,42,38,45,44,48], borderColor: '#3b82f6', backgroundColor: 'rgba(59,130,246,0.1)', fill: true, tension: 0.4 }],
}
const sparkUsers: ChartData<'line'> = {
  labels: Array(12).fill(''),
  datasets: [{ data: [120,135,125,140,155,148,160,170,165,175,180,184], borderColor: '#22c55e', backgroundColor: 'rgba(34,197,94,0.1)', fill: true, tension: 0.4 }],
}
const sparkOrders: ChartData<'line'> = {
  labels: Array(12).fill(''),
  datasets: [{ data: [350,380,360,390,370,365,375,360,370,368,365,367], borderColor: '#f59e0b', backgroundColor: 'rgba(245,158,11,0.1)', fill: true, tension: 0.4 }],
}
const sparkBounce: ChartData<'line'> = {
  labels: Array(12).fill(''),
  datasets: [{ data: [35,32,30,28,31,29,27,26,28,25,26,25], borderColor: '#ef4444', backgroundColor: 'rgba(239,68,68,0.1)', fill: true, tension: 0.4 }],
}

const miniBar1: ChartData<'bar'> = {
  labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
  datasets: [{ data: [1200,1800,1500,2100,1900,2400,1550], backgroundColor: 'rgba(59,130,246,0.7)', borderRadius: 2 }],
}
const miniBar2: ChartData<'bar'> = {
  labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
  datasets: [{ data: [1100,1400,1700,1300,1600,2000,1700], backgroundColor: 'rgba(34,197,94,0.7)', borderRadius: 2 }],
}
const miniBar3: ChartData<'bar'> = {
  labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
  datasets: [{ data: [1300,1500,1400,1800,1700,1900,1700], backgroundColor: 'rgba(245,158,11,0.7)', borderRadius: 2 }],
}

const trafficSources = [
  { label: 'Organic Search', value: 42, color: '#3b82f6', barClass: 'bg-primary' },
  { label: 'Social Media', value: 28, color: '#22c55e', barClass: 'bg-success' },
  { label: 'Direct', value: 18, color: '#f59e0b', barClass: 'bg-warning' },
  { label: 'Referral', value: 12, color: '#ef4444', barClass: 'bg-danger' },
]

const doughnutBg = computed(() => {
  const isDark = darkMode.mode === 'dark' || (darkMode.mode === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)
  return isDark ? '#374151' : '#e5e7eb'
})

const miniDoughnutDataSets = computed(() =>
  trafficSources.map(src => ({
    datasets: [{ data: [src.value, 100 - src.value], backgroundColor: [src.color, doughnutBg.value], borderWidth: 0 }],
  } as ChartData<'doughnut'>))
)

const miniDoughnutOpts: ChartOptions<'doughnut'> = {
  cutout: '70%',
  maintainAspectRatio: true,
  plugins: { legend: { display: false }, tooltip: { enabled: false } },
}

const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
const trend1: ChartData<'line'> = { labels: days, datasets: [{ data: [3200,3500,3300,3800,3600,3900,4100], borderColor: '#22c55e', tension: 0.4 }] }
const trend2: ChartData<'line'> = { labels: days, datasets: [{ data: [4.1,4.0,4.3,4.2,4.5,4.4,4.5], borderColor: '#3b82f6', tension: 0.4 }] }
const trend3: ChartData<'line'> = { labels: days, datasets: [{ data: [3.8,3.6,3.5,3.7,3.4,3.5,3.4], borderColor: '#ef4444', tension: 0.4 }] }
const trend4: ChartData<'line'> = { labels: days, datasets: [{ data: [58,62,60,65,63,67,67], borderColor: '#22c55e', tension: 0.4 }] }

const statCards = [
  { title: 'Total Revenue', value: '$48,295', change: '+12.5% from last month', positive: true, icon: DollarSign, iconBg: 'bg-blue-100 dark:bg-blue-900/30', iconColor: 'text-blue-600', data: sparkRevenue },
  { title: 'New Users', value: '1,842', change: '+8.3% from last month', positive: true, icon: Users, iconBg: 'bg-green-100 dark:bg-green-900/30', iconColor: 'text-green-600', data: sparkUsers },
  { title: 'Orders', value: '3,672', change: '-2.1% from last month', positive: false, icon: ShoppingBag, iconBg: 'bg-yellow-100 dark:bg-yellow-900/30', iconColor: 'text-yellow-600', data: sparkOrders },
  { title: 'Bounce Rate', value: '24.8%', change: '-4.2% from last month', positive: true, icon: Activity, iconBg: 'bg-red-100 dark:bg-red-900/30', iconColor: 'text-red-600', data: sparkBounce },
]

const performanceRows = [
  { metric: 'Page Views', current: '24,521', change: '+15.2%', positive: true, data: trend1 },
  { metric: 'Session Duration', current: '4m 32s', change: '+5.8%', positive: true, data: trend2 },
  { metric: 'Conversion Rate', current: '3.42%', change: '-1.3%', positive: false, data: trend3 },
  { metric: 'Avg Order Value', current: '$67.40', change: '+8.7%', positive: true, data: trend4 },
]

const cssBars = [
  { label: 'Server Load', value: '68%', heights: [40,55,70,45,80,65,90,68], colors: ['bg-blue-200 dark:bg-blue-900/40','bg-blue-300 dark:bg-blue-800/50','bg-blue-400 dark:bg-blue-700/60','bg-blue-400 dark:bg-blue-700/60','bg-blue-500 dark:bg-blue-600/70','bg-blue-500 dark:bg-blue-600/70','bg-blue-600','bg-blue-600'] },
  { label: 'Memory Usage', value: '4.2 GB', heights: [60,50,75,80,60,55,70,65], colors: ['bg-green-300 dark:bg-green-800/50','bg-green-300 dark:bg-green-800/50','bg-green-400 dark:bg-green-700/60','bg-green-400 dark:bg-green-700/60','bg-green-500 dark:bg-green-600/70','bg-green-500 dark:bg-green-600/70','bg-green-600','bg-green-600'] },
  { label: 'Disk I/O', value: '245 MB/s', heights: [30,45,60,100,75,50,40,55], colors: ['bg-yellow-300 dark:bg-yellow-800/50','bg-yellow-300 dark:bg-yellow-800/50','bg-yellow-400 dark:bg-yellow-700/60','bg-yellow-400 dark:bg-yellow-700/60','bg-yellow-500 dark:bg-yellow-600/70','bg-yellow-500 dark:bg-yellow-600/70','bg-yellow-500','bg-yellow-500'] },
  { label: 'Network', value: '1.8 Gbps', heights: [85,70,90,60,75,95,80,88], colors: ['bg-purple-300 dark:bg-purple-800/50','bg-purple-300 dark:bg-purple-800/50','bg-purple-400 dark:bg-purple-700/60','bg-purple-400 dark:bg-purple-700/60','bg-purple-500 dark:bg-purple-600/70','bg-purple-500 dark:bg-purple-600/70','bg-purple-600','bg-purple-600'] },
]
</script>

<template>
  <!-- Stat Cards with Sparkline Charts -->
  <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
    <div v-for="card in statCards" :key="card.title" class="card">
      <div class="card-body">
        <div class="flex justify-between items-start mb-3">
          <div>
            <p class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">{{ card.title }}</p>
            <h3 class="text-2xl font-bold mt-1">{{ card.value }}</h3>
            <p class="text-xs mt-1" :class="card.positive ? 'text-green-500' : 'text-red-500'">
              <TrendingUp v-if="card.positive" class="w-3 h-3 inline" />
              <TrendingDown v-else class="w-3 h-3 inline" />
              {{ card.change }}
            </p>
          </div>
          <div class="w-10 h-10 rounded-lg flex items-center justify-center" :class="card.iconBg">
            <component :is="card.icon" class="w-5 h-5" :class="card.iconColor" />
          </div>
        </div>
        <LineChart :data="card.data" :options="sparkOpts" :height="40" />
      </div>
    </div>
  </div>

  <!-- Mini Bar Charts -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
    <div class="card">
      <div class="card-header"><h3 class="card-title">Weekly Sales</h3></div>
      <div class="card-body">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div class="text-center">
            <p class="text-xs text-gray-500 dark:text-gray-400 mb-1">This Week</p>
            <h4 class="text-xl font-bold mb-2">$12,450</h4>
            <BarChart :data="miniBar1" :options="miniBarOpts" :height="60" />
          </div>
          <div class="text-center">
            <p class="text-xs text-gray-500 dark:text-gray-400 mb-1">Last Week</p>
            <h4 class="text-xl font-bold mb-2">$10,830</h4>
            <BarChart :data="miniBar2" :options="miniBarOpts" :height="60" />
          </div>
          <div class="text-center">
            <p class="text-xs text-gray-500 dark:text-gray-400 mb-1">2 Weeks Ago</p>
            <h4 class="text-xl font-bold mb-2">$11,290</h4>
            <BarChart :data="miniBar3" :options="miniBarOpts" :height="60" />
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header"><h3 class="card-title">Traffic Sources</h3></div>
      <div class="card-body">
        <div class="space-y-4">
          <div v-for="(src, idx) in trafficSources" :key="src.label" class="flex items-center gap-4">
            <div class="w-14 h-14 shrink-0">
              <DoughnutChart :data="miniDoughnutDataSets[idx]" :options="miniDoughnutOpts" />
            </div>
            <div class="flex-1">
              <div class="flex justify-between items-center mb-1">
                <span class="text-sm font-medium">{{ src.label }}</span>
                <span class="text-sm font-bold">{{ src.value }}%</span>
              </div>
              <div class="progress progress-sm">
                <div class="progress-bar" :class="src.barClass" :style="{ width: src.value + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Performance Overview Table -->
  <div class="card mb-6">
    <div class="card-header"><h3 class="card-title">Performance Overview</h3></div>
    <div class="card-body p-0">
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th class="py-3 px-4 text-left font-semibold text-gray-500 dark:text-gray-400">Metric</th>
              <th class="py-3 px-4 text-left font-semibold text-gray-500 dark:text-gray-400">Current</th>
              <th class="py-3 px-4 text-left font-semibold text-gray-500 dark:text-gray-400">Change</th>
              <th class="py-3 px-4 text-left font-semibold text-gray-500 dark:text-gray-400" style="min-width: 180px">Trend (7 Days)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in performanceRows" :key="row.metric" class="border-b border-gray-100 dark:border-gray-800">
              <td class="py-3 px-4 font-medium">{{ row.metric }}</td>
              <td class="py-3 px-4">{{ row.current }}</td>
              <td class="py-3 px-4" :class="row.positive ? 'text-green-500' : 'text-red-500'">{{ row.change }}</td>
              <td class="py-3 px-4">
                <LineChart :data="row.data" :options="trendOpts" :height="30" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- CSS-Only Mini Bar Charts -->
  <div class="card mb-6">
    <div class="card-header"><h3 class="card-title">CSS-Only Mini Bar Charts</h3></div>
    <div class="card-body">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="bar in cssBars" :key="bar.label">
          <div class="flex justify-between text-sm mb-2">
            <span class="font-medium">{{ bar.label }}</span>
            <span class="text-gray-500 dark:text-gray-400">{{ bar.value }}</span>
          </div>
          <div class="flex items-end gap-0.5 h-12">
            <div v-for="(h, i) in bar.heights" :key="i" class="flex-1 rounded-t" :class="bar.colors[i]" :style="{ height: h + '%' }"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
