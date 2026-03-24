<script setup lang="ts">
import { ref } from 'vue'
import { Search, Globe, Image, Newspaper, ChevronLeft, ChevronRight } from 'lucide-vue-next'

const activeTab = ref<'all' | 'images' | 'news'>('all')
const query = ref('TailAdminLTE dashboard')
const currentPage = ref(1)

const allResults = [
  {
    title: 'TailAdminLTE - Premium Admin Dashboard Template',
    url: 'https://tailadminlte.com/docs/getting-started',
    desc: 'A modern, responsive admin dashboard built with Tailwind CSS and Alpine.js. Features 50+ UI components, dark mode, multiple layouts, and Chart.js integration.',
  },
  {
    title: 'Getting Started with TailAdminLTE - Installation Guide',
    url: 'https://tailadminlte.com/docs/installation',
    desc: 'Learn how to install and configure TailAdminLTE in your project. Supports npm, yarn, and CDN-based installation methods with detailed setup instructions.',
  },
  {
    title: 'Dashboard Components & Widgets - TailAdminLTE Docs',
    url: 'https://tailadminlte.com/docs/widgets',
    desc: 'Explore small boxes, info boxes, cards, direct chat, and timeline widgets. Each component comes with multiple style variants and dark mode support.',
  },
  {
    title: 'Building Custom Themes - TailAdminLTE Customization',
    url: 'https://tailadminlte.com/docs/theming',
    desc: 'Customize colors, fonts, spacing, and component styles using Tailwind CSS configuration. Create your own branded theme in minutes.',
  },
  {
    title: 'TailAdminLTE vs Other Admin Templates - Comparison 2026',
    url: 'https://blog.example.com/admin-template-comparison',
    desc: 'A comprehensive comparison of top admin dashboard templates including TailAdminLTE, AdminLTE, and others. See how they stack up in features, performance, and developer experience.',
  },
  {
    title: 'Chart.js Integration in TailAdminLTE',
    url: 'https://tailadminlte.com/docs/charts',
    desc: 'Learn to create line, bar, doughnut, radar, and polar area charts using Chart.js. Includes responsive chart cards and inline sparkline examples.',
  },
]

const imageResults = [
  { src: '/assets/img/photo1.png', label: 'Dashboard Overview' },
  { src: '/assets/img/photo2.png', label: 'Widgets Page' },
  { src: '/assets/img/photo3.jpg', label: 'Dark Mode Theme' },
  { src: '/assets/img/photo4.jpg', label: 'Chart Examples' },
  { src: '/assets/img/prod-1.jpg', label: 'Form Elements' },
  { src: '/assets/img/prod-2.jpg', label: 'Login Page' },
  { src: '/assets/img/prod-3.jpg', label: 'Data Tables' },
  { src: '/assets/img/prod-4.jpg', label: 'User Profile' },
]

const newsResults = [
  {
    title: 'TailAdminLTE v2.0 Released with Full Dark Mode Support',
    source: 'TechNews - March 10, 2026',
    desc: 'The popular open-source admin template now features complete dark mode, improved accessibility, and 20 new UI components...',
    thumb: '/assets/img/photo1.png',
  },
  {
    title: 'Top 10 Admin Dashboards for 2026 - TailAdminLTE Makes the List',
    source: 'WebDev Weekly - February 28, 2026',
    desc: 'Our annual roundup of the best admin dashboard templates includes TailAdminLTE as a top pick for Tailwind CSS projects...',
    thumb: '/assets/img/photo2.png',
  },
  {
    title: 'How TailAdminLTE Simplifies Admin Panel Development',
    source: 'Dev.to - February 15, 2026',
    desc: 'A deep dive into how TailAdminLTE combines the power of Tailwind CSS utility classes with AdminLTE\'s proven layout patterns...',
    thumb: '/assets/img/photo3.jpg',
  },
]

const pages = [1, 2, 3, 48]
</script>

<template>
  <!-- Search Bar -->
  <div class="card mb-4">
    <div class="card-body">
      <div class="flex gap-2">
        <div class="relative flex-1">
          <Search class="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            v-model="query"
            placeholder="Search..."
            class="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
        </div>
        <button class="px-6 py-2.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition font-medium">Search</button>
      </div>
    </div>
  </div>

  <!-- Tabs -->
  <div class="flex gap-4 mb-4 border-b border-gray-200 dark:border-gray-700">
    <button
      @click="activeTab = 'all'"
      :class="activeTab === 'all' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'"
      class="py-2 px-1 border-b-2 text-sm font-medium transition"
    >
      <Globe class="w-4 h-4 inline mr-1" /> All Results
    </button>
    <button
      @click="activeTab = 'images'"
      :class="activeTab === 'images' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'"
      class="py-2 px-1 border-b-2 text-sm font-medium transition"
    >
      <Image class="w-4 h-4 inline mr-1" /> Images
    </button>
    <button
      @click="activeTab = 'news'"
      :class="activeTab === 'news' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'"
      class="py-2 px-1 border-b-2 text-sm font-medium transition"
    >
      <Newspaper class="w-4 h-4 inline mr-1" /> News
    </button>
  </div>

  <!-- Results Count -->
  <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">
    Found <strong class="text-gray-700 dark:text-gray-200">2,847</strong> results for "<span class="font-medium">{{ query }}</span>"
  </p>

  <!-- All Results Tab -->
  <div v-show="activeTab === 'all'" class="space-y-4 mb-6">
    <div v-for="(result, i) in allResults" :key="i" class="card">
      <div class="card-body">
        <a href="#" class="text-blue-600 hover:underline font-semibold text-base">{{ result.title }}</a>
        <p class="text-xs text-green-600 dark:text-green-400 mt-0.5">{{ result.url }}</p>
        <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">{{ result.desc }}</p>
      </div>
    </div>
  </div>

  <!-- Images Tab -->
  <div v-show="activeTab === 'images'" class="mb-6">
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      <div v-for="(img, i) in imageResults" :key="i" class="group cursor-pointer">
        <img :src="img.src" alt="Screenshot" class="w-full aspect-square object-cover rounded-lg group-hover:opacity-80 transition">
        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 truncate">{{ img.label }}</p>
      </div>
    </div>
  </div>

  <!-- News Tab -->
  <div v-show="activeTab === 'news'" class="space-y-4 mb-6">
    <div v-for="(news, i) in newsResults" :key="i" class="card">
      <div class="card-body flex gap-4">
        <img :src="news.thumb" alt="Thumbnail" class="w-24 h-20 object-cover rounded shrink-0 hidden sm:block">
        <div>
          <a href="#" class="text-blue-600 hover:underline font-semibold">{{ news.title }}</a>
          <p class="text-xs text-gray-400 mt-0.5">{{ news.source }}</p>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">{{ news.desc }}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Pagination -->
  <nav class="flex justify-center mb-6">
    <ul class="flex items-center gap-1">
      <li>
        <button class="px-3 py-2 text-sm rounded text-gray-400 cursor-not-allowed" disabled>
          <ChevronLeft class="w-4 h-4" />
        </button>
      </li>
      <li v-for="page in pages" :key="page">
        <template v-if="page === 48 && currentPage < 4">
          <span class="px-2 text-gray-400">...</span>
        </template>
        <button
          @click="currentPage = page"
          :class="currentPage === page ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'"
          class="px-3 py-2 text-sm rounded transition min-w-[36px]"
        >
          {{ page }}
        </button>
      </li>
      <li>
        <button class="px-3 py-2 text-sm rounded bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
          <ChevronRight class="w-4 h-4" />
        </button>
      </li>
    </ul>
  </nav>
</template>
