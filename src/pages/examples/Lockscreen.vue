<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { User, Unlock } from 'lucide-vue-next'

const password = ref('')
const time = ref('')
const date = ref('')
let intervalId: ReturnType<typeof setInterval> | null = null

function updateClock() {
  const now = new Date()
  time.value = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
  date.value = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
}

onMounted(() => {
  updateClock()
  intervalId = setInterval(updateClock, 1000)
})

onUnmounted(() => {
  if (intervalId !== null) {
    clearInterval(intervalId)
  }
})
</script>

<template>
  <div class="lockscreen-page">
    <div class="lockscreen-card">

      <!-- Clock -->
      <div class="lockscreen-clock">
        <div class="lockscreen-time">{{ time }}</div>
        <div class="lockscreen-date">{{ date }}</div>
      </div>

      <!-- Avatar -->
      <div class="lockscreen-avatar">
        <span class="avatar-placeholder">
          <User class="w-10 h-10" />
        </span>
      </div>

      <!-- User Info -->
      <div class="lockscreen-name">John Doe</div>
      <div class="lockscreen-subtitle">Enter your password to unlock</div>

      <!-- Unlock Form -->
      <form class="lockscreen-form" @submit.prevent>
        <input type="password" placeholder="Password" autocomplete="current-password" v-model="password">
        <button type="submit" title="Unlock">
          <Unlock class="w-4 h-4" />
        </button>
      </form>

      <!-- Footer -->
      <div class="lockscreen-footer">
        <RouterLink to="/auth/login-v1">Or sign in as a different user</RouterLink>
      </div>

    </div>
  </div>
</template>
