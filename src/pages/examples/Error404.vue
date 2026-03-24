<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Search, ArrowLeft } from 'lucide-vue-next'

const searchQuery = ref('')
</script>

<template>
  <div class="error-page-wrapper">
    <div class="error-page-content">

      <div class="error-code">404</div>
      <div class="error-title">Oops! Page not found.</div>
      <div class="error-description">
        We could not find the page you were looking for.
        Meanwhile, you may <RouterLink to="/" class="text-[var(--color-primary)] hover:underline">return to the dashboard</RouterLink>
        or try searching for the page.
      </div>

      <!-- Search -->
      <form class="error-search" @submit.prevent>
        <input type="text" placeholder="Search..." v-model="searchQuery">
        <button type="submit">
          <Search class="w-4 h-4" />
        </button>
      </form>

      <RouterLink to="/" class="error-home-link">
        <ArrowLeft class="w-4 h-4" />
        Back to Dashboard
      </RouterLink>

    </div>
  </div>
</template>
