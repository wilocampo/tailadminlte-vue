<script setup lang="ts">
import InfoBox from '@/components/widgets/InfoBox.vue'
import AppCard from '@/components/widgets/AppCard.vue'
import LineChart from '@/components/charts/LineChart.vue'
import BarChart from '@/components/charts/BarChart.vue'
import type { ChartData, ChartOptions } from 'chart.js'

// ── Revenue Line Chart data ──
const revenueChartData: ChartData<'line'> = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Revenue',
      data: [8200, 9400, 7800, 11200, 10600, 13500, 12100, 15800, 14200, 16900, 15400, 18230],
      borderColor: '#0d6efd',
      backgroundColor: 'rgba(13, 110, 253, 0.15)',
      fill: true,
      tension: 0.4,
      pointRadius: 4,
      pointHoverRadius: 7,
      pointBackgroundColor: '#0d6efd',
    },
    {
      label: 'Expenses',
      data: [4100, 4800, 3900, 5200, 4900, 6100, 5500, 7200, 6400, 7800, 7100, 8400],
      borderColor: '#dc3545',
      backgroundColor: 'rgba(220, 53, 69, 0.1)',
      fill: true,
      tension: 0.4,
      pointRadius: 4,
      pointHoverRadius: 7,
      pointBackgroundColor: '#dc3545',
    },
    {
      label: 'Profit',
      data: [4100, 4600, 3900, 6000, 5700, 7400, 6600, 8600, 7800, 9100, 8300, 9830],
      borderColor: '#198754',
      borderDash: [5, 5],
      backgroundColor: 'transparent',
      fill: false,
      tension: 0.4,
      pointRadius: 3,
      pointHoverRadius: 6,
      pointBackgroundColor: '#198754',
    },
  ],
}

const revenueChartOptions: ChartOptions<'line'> = {
  plugins: {
    legend: { labels: { usePointStyle: true } },
  },
  scales: {
    y: {
      ticks: {
        callback: (v) => '$' + (Number(v) / 1000) + 'k',
      },
    },
  },
}

// ── Monthly Bar Chart data ──
const monthlyBarData: ChartData<'bar'> = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Online Sales',
      data: [4200, 5100, 3900, 6200, 5800, 7500, 6800, 8900, 7600, 9400, 8200, 10100],
      backgroundColor: '#0d6efd',
      borderRadius: 4,
    },
    {
      label: 'In-Store Sales',
      data: [2800, 3200, 2700, 3800, 3500, 4200, 3900, 5100, 4400, 5300, 4800, 5900],
      backgroundColor: '#0dcaf0',
      borderRadius: 4,
    },
    {
      label: 'Returns',
      data: [800, 900, 800, 800, 700, 1200, 600, 1200, 800, 1800, 1600, 1770],
      backgroundColor: '#dc3545',
      borderRadius: 4,
    },
  ],
}

const monthlyBarOptions: ChartOptions<'bar'> = {
  plugins: {
    legend: { labels: { usePointStyle: true } },
  },
  scales: {
    y: {
      ticks: {
        callback: (v) => '$' + (Number(v) / 1000) + 'k',
      },
    },
  },
}

// ── Recent Orders data ──
const orders = [
  { id: '#ORD-7841', customer: 'John Doe', product: 'MacBook Pro 16"', amount: '$2,499.00', status: 'Completed', statusClass: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
  { id: '#ORD-7842', customer: 'Jane Smith', product: 'iPhone 15 Pro', amount: '$1,199.00', status: 'Processing', statusClass: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' },
  { id: '#ORD-7843', customer: 'Bob Wilson', product: 'AirPods Max', amount: '$549.00', status: 'Shipped', statusClass: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
  { id: '#ORD-7844', customer: 'Alice Brown', product: 'iPad Air M2', amount: '$799.00', status: 'Completed', statusClass: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
  { id: '#ORD-7845', customer: 'Charlie Davis', product: 'Apple Watch Ultra', amount: '$799.00', status: 'Cancelled', statusClass: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' },
  { id: '#ORD-7846', customer: 'Diana Evans', product: 'Magic Keyboard', amount: '$299.00', status: 'Processing', statusClass: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' },
]

// ── Goal Completion data ──
const goals = [
  { label: 'Sales Target', value: 72, color: 'bg-primary' },
  { label: 'Customer Acquisition', value: 85, color: 'bg-success' },
  { label: 'Product Launches', value: 45, color: 'bg-warning' },
  { label: 'Market Expansion', value: 58, color: 'bg-danger' },
  { label: 'Customer Retention', value: 91, color: 'bg-info' },
  { label: 'Support Resolution', value: 67, color: 'bg-secondary' },
]

// ── Quick Stats data ──
const quickStats = [
  { label: 'Avg. Order Value', value: '$85.40', color: 'text-primary' },
  { label: 'Conversion Rate', value: '3.8%', color: 'text-success' },
  { label: 'Cart Abandonment', value: '24.5%', color: 'text-danger' },
  { label: 'Return Rate', value: '5.2%', color: 'text-warning' },
]
</script>

<template>
  <!-- Revenue/Expense Overview Cards -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
    <InfoBox
      icon="dollar-sign"
      icon-bg="bg-primary"
      label="Total Revenue"
      value="$125,830"
      :progress-value="72"
      progress-color="bg-primary"
      progress-description="72% of target"
    />
    <InfoBox
      icon="credit-card"
      icon-bg="bg-danger"
      label="Expenses"
      value="$48,250"
      :progress-value="38"
      progress-color="bg-danger"
      progress-description="38% of budget"
    />
    <InfoBox
      icon="trending-up"
      icon-bg="bg-success"
      label="Net Profit"
      value="$77,580"
      :progress-value="61"
      progress-color="bg-success"
      progress-description="61% margin"
    />
    <InfoBox
      icon="users"
      icon-bg="bg-warning"
      label="New Customers"
      value="2,340"
      :progress-value="85"
      progress-color="bg-warning"
      progress-description="85% growth"
    />
  </div>

  <!-- Charts Row: Line + Bar side by side -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
    <!-- Revenue Line Chart -->
    <AppCard title="Revenue Overview" icon="trending-up" interactive>
      <LineChart :data="revenueChartData" :options="revenueChartOptions" :height="300" />
    </AppCard>

    <!-- Monthly Bar Chart -->
    <AppCard title="Monthly Breakdown" icon="bar-chart-3" interactive>
      <BarChart :data="monthlyBarData" :options="monthlyBarOptions" :height="300" />
    </AppCard>
  </div>

  <!-- Bottom Row: Recent Orders + Progress -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-4">
    <!-- Recent Orders Table -->
    <div class="lg:col-span-8">
      <AppCard title="Recent Orders" icon="shopping-bag" interactive>
        <template #default>
          <div class="-mx-4 -my-4">
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                  <th class="text-left px-4 py-3 font-semibold">Order ID</th>
                  <th class="text-left px-4 py-3 font-semibold">Customer</th>
                  <th class="text-left px-4 py-3 font-semibold">Product</th>
                  <th class="text-right px-4 py-3 font-semibold">Amount</th>
                  <th class="text-center px-4 py-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(order, index) in orders"
                  :key="order.id"
                  :class="index < orders.length - 1 ? 'border-b border-gray-100 dark:border-gray-700/50' : ''"
                >
                  <td class="px-4 py-3 font-mono text-xs">{{ order.id }}</td>
                  <td class="px-4 py-3">{{ order.customer }}</td>
                  <td class="px-4 py-3">{{ order.product }}</td>
                  <td class="text-right px-4 py-3 font-semibold">{{ order.amount }}</td>
                  <td class="text-center px-4 py-3">
                    <span
                      class="inline-block px-2 py-0.5 text-xs font-semibold rounded-full"
                      :class="order.statusClass"
                    >{{ order.status }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </template>
        <template #footer>
          <div class="text-center">
            <a href="#" class="text-sm text-primary hover:underline">View All Orders</a>
          </div>
        </template>
      </AppCard>
    </div>

    <!-- Progress Indicators -->
    <div class="lg:col-span-4">
      <AppCard title="Goal Completion" icon="target" interactive>
        <div v-for="(goal, index) in goals" :key="goal.label" :class="index < goals.length - 1 ? 'mb-4' : ''">
          <div class="flex justify-between mb-1 text-sm">
            <span>{{ goal.label }}</span>
            <span class="font-semibold">{{ goal.value }}%</span>
          </div>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped progress-bar-animated"
              :class="goal.color"
              :style="{ width: goal.value + '%' }"
            ></div>
          </div>
        </div>
      </AppCard>

      <!-- Quick Stats Card -->
      <AppCard title="Quick Stats" icon="zap">
        <div
          v-for="(stat, index) in quickStats"
          :key="stat.label"
          class="flex items-center justify-between"
          :class="index < quickStats.length - 1 ? 'mb-3 pb-3 border-b border-gray-100 dark:border-gray-700/50' : ''"
        >
          <span class="text-sm">{{ stat.label }}</span>
          <span class="font-semibold" :class="stat.color">{{ stat.value }}</span>
        </div>
      </AppCard>
    </div>
  </div>
</template>
