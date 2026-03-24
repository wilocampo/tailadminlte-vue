<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-vue-next'
import type { DataColumn } from '@/types'

const props = withDefaults(defineProps<{
  columns: DataColumn[]
  rows: Record<string, any>[]
  searchable?: boolean
  filterable?: boolean
  filterKey?: string
  filterOptions?: string[]
  pageSize?: number
}>(), {
  searchable: false,
  filterable: false,
  filterOptions: () => [],
  pageSize: 10,
})

const sortKey = ref('')
const sortDir = ref<'asc' | 'desc'>('asc')
const searchQuery = ref('')
const filterValue = ref('')
const currentPage = ref(1)

const effectivePageSize = computed(() => props.pageSize)

const filteredRows = computed(() => {
  let result = props.rows

  // Apply search (case-insensitive across all columns)
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter((row) =>
      props.columns.some((col) => {
        const val = row[col.key]
        return val != null && String(val).toLowerCase().includes(query)
      })
    )
  }

  // Apply filter (exact match on filterKey)
  if (filterValue.value && props.filterKey) {
    result = result.filter(
      (row) => String(row[props.filterKey!]) === filterValue.value
    )
  }

  return result
})

const sortedRows = computed(() => {
  if (!sortKey.value) return filteredRows.value

  return [...filteredRows.value].sort((a, b) => {
    const aVal = a[sortKey.value]
    const bVal = b[sortKey.value]

    if (aVal == null && bVal == null) return 0
    if (aVal == null) return sortDir.value === 'asc' ? -1 : 1
    if (bVal == null) return sortDir.value === 'asc' ? 1 : -1

    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return sortDir.value === 'asc' ? aVal - bVal : bVal - aVal
    }

    const cmp = String(aVal).localeCompare(String(bVal))
    return sortDir.value === 'asc' ? cmp : -cmp
  })
})

const pagedRows = computed(() => {
  const start = (currentPage.value - 1) * effectivePageSize.value
  return sortedRows.value.slice(start, start + effectivePageSize.value)
})

const totalPages = computed(() =>
  Math.ceil(filteredRows.value.length / effectivePageSize.value)
)

function sort(key: string) {
  if (sortKey.value === key) {
    sortDir.value = sortDir.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortKey.value = key
    sortDir.value = 'asc'
  }
}

// Reset to page 1 when search or filter changes
watch([searchQuery, filterValue], () => {
  currentPage.value = 1
})
</script>

<template>
  <div>
    <!-- Controls row -->
    <div v-if="searchable || filterable" class="flex items-center justify-between gap-4 mb-4">
      <div v-if="filterable" class="flex items-center gap-2">
        <label class="text-sm text-gray-600 dark:text-gray-400">Filter:</label>
        <select
          v-model="filterValue"
          class="px-3 py-1.5 text-sm border rounded-md bg-white dark:bg-gray-700 dark:border-gray-600"
        >
          <option value="">All</option>
          <option v-for="opt in filterOptions" :key="opt" :value="opt">{{ opt }}</option>
        </select>
      </div>
      <div v-if="searchable" class="flex items-center gap-2">
        <label class="text-sm text-gray-600 dark:text-gray-400">Search:</label>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search..."
          class="px-3 py-1.5 text-sm border rounded-md bg-white dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
        >
      </div>
    </div>

    <!-- Table -->
    <div class="overflow-x-auto">
      <table class="w-full text-sm text-left">
        <thead class="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-700">
          <tr>
            <th
              v-for="col in columns"
              :key="col.key"
              class="px-4 py-3"
              :class="col.sortable !== false ? 'cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors' : ''"
              @click="col.sortable !== false && sort(col.key)"
            >
              <span class="flex items-center gap-1">
                {{ col.label }}
                <template v-if="col.sortable !== false">
                  <ArrowUpDown v-if="sortKey !== col.key" class="w-3 h-3" />
                  <ArrowUp v-else-if="sortDir === 'asc'" class="w-3 h-3" />
                  <ArrowDown v-else class="w-3 h-3" />
                </template>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, i) in pagedRows"
            :key="i"
            class="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <td v-for="col in columns" :key="col.key" class="px-4 py-3">
              <slot :name="`cell-${col.key}`" :row="row" :value="row[col.key]">
                {{ row[col.key] }}
              </slot>
            </td>
          </tr>
          <tr v-if="pagedRows.length === 0">
            <td :colspan="columns.length" class="px-4 py-8 text-center text-gray-500">
              <slot name="empty">No results found.</slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div v-if="totalPages > 1" class="flex items-center justify-between mt-4 text-sm">
      <div class="text-gray-500 dark:text-gray-400">
        Showing {{ (currentPage - 1) * effectivePageSize + 1 }} to {{ Math.min(currentPage * effectivePageSize, filteredRows.length) }} of {{ filteredRows.length }} entries
      </div>
      <div class="flex items-center gap-1">
        <button
          @click="currentPage--"
          :disabled="currentPage <= 1"
          class="px-3 py-1 rounded border dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >Previous</button>
        <button
          v-for="page in totalPages"
          :key="page"
          @click="currentPage = page"
          class="px-3 py-1 rounded border dark:border-gray-600"
          :class="page === currentPage ? 'bg-primary text-white border-primary' : 'hover:bg-gray-100 dark:hover:bg-gray-700'"
        >{{ page }}</button>
        <button
          @click="currentPage++"
          :disabled="currentPage >= totalPages"
          class="px-3 py-1 rounded border dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >Next</button>
      </div>
    </div>
  </div>
</template>
