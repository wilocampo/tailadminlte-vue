<script setup lang="ts">
import { ref, computed } from 'vue'
import { LayoutGrid, List, SlidersHorizontal, ShoppingCart, Star } from 'lucide-vue-next'

interface Product {
  name: string
  price: number
  rating: number
  reviews: number
  category: string
  image: string
  badge: string
}

const view = ref<'grid' | 'list'>('grid')
const sortBy = ref('name')
const showFilters = ref(true)
const selectedCategories = ref<string[]>([])
const minRating = ref(0)

const products: Product[] = [
  { name: 'Wireless Bluetooth Headphones', price: 79.99, rating: 4.5, reviews: 128, category: 'electronics', image: '/assets/img/prod-1.jpg', badge: 'Sale' },
  { name: 'Premium Leather Backpack', price: 129.99, rating: 4.8, reviews: 89, category: 'accessories', image: '/assets/img/prod-2.jpg', badge: '' },
  { name: 'Smart Fitness Watch', price: 199.99, rating: 4.3, reviews: 256, category: 'electronics', image: '/assets/img/prod-3.jpg', badge: 'New' },
  { name: 'Organic Cotton T-Shirt', price: 34.99, rating: 4.6, reviews: 412, category: 'clothing', image: '/assets/img/prod-4.jpg', badge: '' },
  { name: 'Mechanical Keyboard RGB', price: 149.99, rating: 4.7, reviews: 67, category: 'electronics', image: '/assets/img/prod-5.jpg', badge: 'Hot' },
  { name: 'Canvas Sneakers', price: 59.99, rating: 4.2, reviews: 183, category: 'clothing', image: '/assets/img/prod-1.jpg', badge: 'Sale' },
  { name: 'Stainless Steel Water Bottle', price: 24.99, rating: 4.9, reviews: 534, category: 'accessories', image: '/assets/img/prod-2.jpg', badge: '' },
  { name: 'Wireless Charging Pad', price: 39.99, rating: 4.4, reviews: 301, category: 'electronics', image: '/assets/img/prod-3.jpg', badge: '' },
]

const sorted = computed(() => {
  let list = [...products]
  if (selectedCategories.value.length > 0) {
    list = list.filter(p => selectedCategories.value.includes(p.category))
  }
  if (minRating.value > 0) {
    list = list.filter(p => p.rating >= minRating.value)
  }
  if (sortBy.value === 'price-asc') list.sort((a, b) => a.price - b.price)
  else if (sortBy.value === 'price-desc') list.sort((a, b) => b.price - a.price)
  else if (sortBy.value === 'rating') list.sort((a, b) => b.rating - a.rating)
  else if (sortBy.value === 'popularity') list.sort((a, b) => b.reviews - a.reviews)
  else list.sort((a, b) => a.name.localeCompare(b.name))
  return list
})

function stars(rating: number): ('full' | 'half' | 'empty')[] {
  return Array.from({ length: 5 }, (_, i) =>
    i < Math.floor(rating) ? 'full' : (i < rating ? 'half' : 'empty')
  )
}

function badgeColor(badge: string): string {
  if (badge === 'Sale') return 'bg-red-500'
  if (badge === 'New') return 'bg-green-500'
  if (badge === 'Hot') return 'bg-orange-500'
  return 'bg-blue-500'
}

function toggleCategory(cat: string) {
  const idx = selectedCategories.value.indexOf(cat)
  if (idx > -1) selectedCategories.value.splice(idx, 1)
  else selectedCategories.value.push(cat)
}

function resetFilters() {
  selectedCategories.value = []
  minRating.value = 0
  sortBy.value = 'name'
}
</script>

<template>
  <div class="flex flex-col lg:flex-row gap-4 mb-6">

    <!-- Sidebar Filters -->
    <div v-show="showFilters" class="lg:w-64 shrink-0">
      <div class="card sticky top-4">
        <div class="card-header">
          <h3 class="card-title">Filters</h3>
        </div>
        <div class="card-body space-y-5">

          <!-- Category -->
          <div>
            <h4 class="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Category</h4>
            <label class="flex items-center gap-2 text-sm mb-1.5 cursor-pointer">
              <input type="checkbox" @change="toggleCategory('electronics')" :checked="selectedCategories.includes('electronics')" class="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500">
              Electronics
            </label>
            <label class="flex items-center gap-2 text-sm mb-1.5 cursor-pointer">
              <input type="checkbox" @change="toggleCategory('clothing')" :checked="selectedCategories.includes('clothing')" class="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500">
              Clothing
            </label>
            <label class="flex items-center gap-2 text-sm mb-1.5 cursor-pointer">
              <input type="checkbox" @change="toggleCategory('accessories')" :checked="selectedCategories.includes('accessories')" class="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500">
              Accessories
            </label>
          </div>

          <!-- Rating Filter -->
          <div>
            <h4 class="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Min Rating</h4>
            <div class="space-y-1">
              <label class="flex items-center gap-2 text-sm cursor-pointer">
                <input type="radio" name="rating" :value="0" v-model.number="minRating" class="border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500"> All
              </label>
              <label class="flex items-center gap-2 text-sm cursor-pointer">
                <input type="radio" name="rating" :value="4" v-model.number="minRating" class="border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500"> 4+ Stars
              </label>
              <label class="flex items-center gap-2 text-sm cursor-pointer">
                <input type="radio" name="rating" :value="4.5" v-model.number="minRating" class="border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500"> 4.5+ Stars
              </label>
            </div>
          </div>

          <!-- Reset -->
          <button @click="resetFilters" class="w-full px-3 py-1.5 text-sm bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition">
            Reset Filters
          </button>
        </div>
      </div>
    </div>

    <!-- Product Area -->
    <div class="flex-1">
      <!-- Toolbar -->
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
        <div class="flex items-center gap-2">
          <button @click="showFilters = !showFilters" class="lg:hidden px-3 py-1.5 text-sm bg-white dark:bg-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition inline-flex items-center gap-1">
            <SlidersHorizontal class="w-4 h-4" /> Filters
          </button>
          <p class="text-sm text-gray-500 dark:text-gray-400">Showing <strong>{{ sorted.length }}</strong> products</p>
        </div>
        <div class="flex items-center gap-2">
          <select v-model="sortBy" class="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="name">Sort by Name</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
            <option value="popularity">Most Popular</option>
          </select>
          <div class="flex gap-1 bg-white dark:bg-gray-800 rounded p-0.5">
            <button @click="view = 'grid'" :class="view === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-500'" class="p-1.5 rounded transition">
              <LayoutGrid class="w-4 h-4" />
            </button>
            <button @click="view = 'list'" :class="view === 'list' ? 'bg-blue-600 text-white' : 'text-gray-500'" class="p-1.5 rounded transition">
              <List class="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <!-- Grid View -->
      <div v-show="view === 'grid'" class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        <div v-for="(product, i) in sorted" :key="i" class="card overflow-hidden group">
          <div class="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800">
            <img :src="product.image" :alt="product.name" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105">
            <span v-if="product.badge" :class="badgeColor(product.badge)" class="absolute top-2 left-2 text-white text-xs px-2 py-0.5 rounded font-medium">{{ product.badge }}</span>
          </div>
          <div class="card-body">
            <h4 class="font-semibold text-sm mb-1 line-clamp-1">{{ product.name }}</h4>
            <!-- Rating -->
            <div class="flex items-center gap-1 mb-2">
              <div class="flex text-yellow-400">
                <Star
                  v-for="(s, j) in stars(product.rating)"
                  :key="j"
                  class="w-3.5 h-3.5"
                  :class="s === 'full' ? 'fill-current' : s === 'half' ? 'fill-current opacity-50' : 'text-gray-300 dark:text-gray-600'"
                />
              </div>
              <span class="text-xs text-gray-400">({{ product.reviews }})</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-lg font-bold text-blue-600">${{ product.price.toFixed(2) }}</span>
              <button class="px-3 py-1.5 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition inline-flex items-center gap-1">
                <ShoppingCart class="w-3 h-3" /> Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- List View -->
      <div v-show="view === 'list'" class="space-y-3">
        <div v-for="(product, i) in sorted" :key="i" class="card">
          <div class="card-body flex flex-col sm:flex-row gap-4">
            <div class="relative w-full sm:w-40 h-32 shrink-0 overflow-hidden rounded bg-gray-100 dark:bg-gray-800">
              <img :src="product.image" :alt="product.name" class="w-full h-full object-cover">
              <span v-if="product.badge" :class="badgeColor(product.badge)" class="absolute top-2 left-2 text-white text-xs px-2 py-0.5 rounded font-medium">{{ product.badge }}</span>
            </div>
            <div class="flex-1">
              <h4 class="font-semibold text-base mb-1">{{ product.name }}</h4>
              <div class="flex items-center gap-1 mb-2">
                <div class="flex text-yellow-400">
                  <Star
                    v-for="(s, j) in stars(product.rating)"
                    :key="j"
                    class="w-3.5 h-3.5"
                    :class="s === 'full' ? 'fill-current' : 'text-gray-300 dark:text-gray-600'"
                  />
                </div>
                <span class="text-xs text-gray-400">{{ product.rating }} ({{ product.reviews }} reviews)</span>
              </div>
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">High-quality product with premium materials and excellent craftsmanship. Perfect for everyday use.</p>
              <div class="flex items-center justify-between">
                <span class="text-xl font-bold text-blue-600">${{ product.price.toFixed(2) }}</span>
                <button class="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition inline-flex items-center gap-1">
                  <ShoppingCart class="w-4 h-4" /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
