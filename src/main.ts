import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Chart, registerables } from 'chart.js'
import App from './App.vue'
import router from './router'

import './assets/css/app.css'

// Register all Chart.js components globally
Chart.register(...registerables)

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

// Initialize stores that need to run on app start
import { useDarkModeStore } from './stores/darkMode'
import { useLayoutStore } from './stores/layout'
import { useSidebarStore } from './stores/sidebar'
import { useAccessibilityStore } from './stores/accessibility'

const darkMode = useDarkModeStore()
darkMode.apply()
useLayoutStore()
useSidebarStore()
useAccessibilityStore()

app.mount('#app')
