<script setup lang="ts">
import { Clock, Mail, Check, AlertTriangle, UserPlus, Trash2, Plus } from 'lucide-vue-next'
import SmallBox from '@/components/widgets/SmallBox.vue'
import InfoBox from '@/components/widgets/InfoBox.vue'
import AppCard from '@/components/widgets/AppCard.vue'
import DoughnutChart from '@/components/charts/DoughnutChart.vue'
import { useTodoList } from '@/composables/useTodoList'
import type { ChartData, ChartOptions } from 'chart.js'
import type { TodoItem } from '@/types'

// ── Doughnut Chart data ──
const doughnutData: ChartData<'doughnut'> = {
  labels: ['Electronics', 'Clothing', 'Home & Garden', 'Sports', 'Other'],
  datasets: [
    {
      data: [35, 25, 20, 12, 8],
      backgroundColor: ['#0d6efd', '#198754', '#ffc107', '#dc3545', '#6c757d'],
      borderWidth: 3,
      hoverOffset: 8,
    },
  ],
}

const doughnutOptions: ChartOptions<'doughnut'> = {
  cutout: '60%',
  plugins: {
    legend: { display: false },
  },
}

const categoryLegend = [
  { label: 'Electronics', color: '#0d6efd', value: '35%' },
  { label: 'Clothing', color: '#198754', value: '25%' },
  { label: 'Home & Garden', color: '#ffc107', value: '20%' },
  { label: 'Sports', color: '#dc3545', value: '12%' },
  { label: 'Other', color: '#6c757d', value: '8%' },
]

// ── Todo List ──
const initialTodos: TodoItem[] = [
  { id: 1, text: 'Review Q1 financial report', done: false, color: 'danger' },
  { id: 2, text: 'Update product inventory', done: true, color: 'warning' },
  { id: 3, text: 'Prepare marketing deck', done: false, color: 'primary' },
  { id: 4, text: 'Schedule team standup', done: true, color: 'success' },
  { id: 5, text: 'Deploy v2.3 hotfix', done: false, color: 'info' },
  { id: 6, text: 'Reply to client feedback', done: false, color: 'secondary' },
  { id: 7, text: 'Update SSL certificates', done: true, color: 'danger' },
  { id: 8, text: 'Optimize database queries', done: false, color: 'warning' },
]

const { items: todos, remaining, newItem, addItem, toggleItem } = useTodoList(initialTodos)

// ── Timeline data ──
const timeline = [
  {
    label: 'Today',
    items: [
      {
        icon: Mail,
        iconBg: 'bg-primary',
        header: '<a href="#">Sarah</a> sent you a message',
        time: '12 mins ago',
        body: 'Can you review the quarterly report before the meeting?',
      },
      {
        icon: Check,
        iconBg: 'bg-success',
        header: 'Order <a href="#">#ORD-7841</a> completed',
        time: '1 hr ago',
        body: 'Payment of $2,499.00 has been confirmed.',
      },
      {
        icon: AlertTriangle,
        iconBg: 'bg-warning',
        header: 'Server load warning',
        time: '2 hrs ago',
        body: 'CPU usage reached 89% on web-server-03. Auto-scaling triggered.',
      },
    ],
  },
  {
    label: 'Yesterday',
    items: [
      {
        icon: UserPlus,
        iconBg: 'bg-info',
        header: '5 new users registered',
        time: 'Yesterday',
        body: 'New signups from the social media campaign are performing well.',
      },
      {
        icon: Trash2,
        iconBg: 'bg-danger',
        header: 'Product <a href="#">SKU-4521</a> removed',
        time: 'Yesterday',
        body: 'Discontinued item removed from catalog by admin.',
      },
    ],
  },
]
</script>

<template>
  <!-- Small Stat Boxes -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
    <SmallBox bg-color="bg-info" value="1,250" label="Total Products" icon="package" link-text="Manage products" />
    <SmallBox bg-color="bg-success" value="$32.5k" label="Monthly Revenue" icon="wallet" link-text="View report" />
    <SmallBox bg-color="bg-danger" :value="18" label="Pending Tickets" icon="ticket" link-text="View tickets" />
    <SmallBox bg-color="bg-warning" value="87%" label="Satisfaction Rate" icon="smile" link-text="View reviews" />
  </div>

  <!-- Middle Row: Chart + Todo + Timeline -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
    <!-- Doughnut Chart -->
    <div class="lg:col-span-4">
      <AppCard title="Sales by Category" icon="pie-chart" interactive>
        <div class="relative mx-auto" style="max-width: 260px;">
          <DoughnutChart :data="doughnutData" :options="doughnutOptions" :height="260" />
        </div>
        <div class="mt-4 space-y-2 text-sm">
          <div
            v-for="cat in categoryLegend"
            :key="cat.label"
            class="flex items-center justify-between"
          >
            <div class="flex items-center gap-2">
              <span class="inline-block w-3 h-3 rounded-full" :style="{ backgroundColor: cat.color }"></span>
              <span>{{ cat.label }}</span>
            </div>
            <span class="font-semibold">{{ cat.value }}</span>
          </div>
        </div>
      </AppCard>
    </div>

    <!-- Todo List Widget -->
    <div class="lg:col-span-4">
      <AppCard>
        <template #header>
          <h3 class="card-title">
            <component :is="Check" class="inline w-4 h-4 mr-1" />
            Todo List
          </h3>
          <div class="card-tools">
            <span class="text-xs mr-2">{{ remaining }} pending</span>
          </div>
        </template>
        <template #default>
          <div class="-mx-4 -my-4">
            <ul class="divide-y divide-gray-100 dark:divide-gray-700/50">
              <li
                v-for="todo in todos"
                :key="todo.id"
                class="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <input
                  type="checkbox"
                  :checked="todo.done"
                  class="w-4 h-4 rounded border-gray-300 dark:border-gray-600 accent-[var(--color-primary)]"
                  @change="toggleItem(todo.id)"
                >
                <span
                  class="flex-1 text-sm"
                  :class="todo.done ? 'line-through text-gray-400' : ''"
                >{{ todo.text }}</span>
                <span
                  class="inline-block w-2 h-2 rounded-full"
                  :style="'background-color: var(--color-' + todo.color + ')'"
                ></span>
              </li>
            </ul>
          </div>
        </template>
        <template #footer>
          <div class="flex gap-2">
            <input
              v-model="newItem"
              type="text"
              placeholder="Add a new task..."
              class="flex-1 px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded bg-transparent focus:border-primary focus:outline-none"
              @keydown.enter="addItem"
            >
            <button
              class="px-3 py-1.5 text-sm bg-primary text-white rounded hover:bg-blue-700 transition-colors"
              @click="addItem"
            >
              <Plus class="w-4 h-4" />
            </button>
          </div>
        </template>
      </AppCard>
    </div>

    <!-- Timeline of Recent Activity -->
    <div class="lg:col-span-4">
      <AppCard title="Recent Activity" icon="clock" interactive>
        <div style="max-height: 460px; overflow-y: auto;">
          <ul class="timeline">
            <template v-for="(section, sIndex) in timeline" :key="sIndex">
              <li class="time-label">
                <span>{{ section.label }}</span>
              </li>
              <li v-for="(item, iIndex) in section.items" :key="`${sIndex}-${iIndex}`">
                <div class="timeline-item">
                  <span class="timeline-icon" :class="item.iconBg">
                    <component :is="item.icon" class="w-3 h-3" />
                  </span>
                  <div class="timeline-header">
                    <span v-html="item.header"></span>
                    <span class="time"><Clock class="inline w-3 h-3" /> {{ item.time }}</span>
                  </div>
                  <div class="timeline-body">
                    {{ item.body }}
                  </div>
                </div>
              </li>
            </template>
          </ul>
        </div>
      </AppCard>
    </div>
  </div>

  <!-- Info Boxes at Bottom -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    <InfoBox icon="cpu" icon-bg="bg-info" label="CPU Usage" value="42%" :progress-value="42" progress-color="bg-info" />
    <InfoBox icon="hard-drive" icon-bg="bg-success" label="Disk Usage" value="68%" :progress-value="68" progress-color="bg-success" />
    <InfoBox icon="memory-stick" icon-bg="bg-warning" label="RAM Usage" value="73%" :progress-value="73" progress-color="bg-warning" />
    <InfoBox icon="wifi" icon-bg="bg-danger" label="Network I/O" value="124 Mbps" :progress-value="55" progress-color="bg-danger" />
  </div>
</template>
