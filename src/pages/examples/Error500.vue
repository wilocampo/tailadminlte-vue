<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Search, ArrowLeft } from 'lucide-vue-next'

const searchQuery = ref('')
</script>

<template>
  <div class="error-page-wrapper">
    <div class="error-page-content">

      <div class="error-code">500</div>
      <div class="error-title">Oops! Something went wrong.</div>
      <div class="error-description">
        The server encountered an internal error and was unable to complete your request.
        Please try again later or <RouterLink to="/" class="text-[var(--color-primary)] hover:underline">return to the dashboard</RouterLink>.
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
