<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import {
  Menu,
  Search,
  Sun,
  Moon,
  Monitor,
  Mail,
  Bell,
  Clock,
  Maximize,
  Minimize,
  User,
  Settings,
  LogOut,
  Users,
  FileText,
} from 'lucide-vue-next'
import { useSidebarStore } from '@/stores/sidebar'
import { useDarkModeStore } from '@/stores/darkMode'
import { useFullscreen } from '@/composables/useFullscreen'

const sidebar = useSidebarStore()
const darkMode = useDarkModeStore()
const fullscreen = useFullscreen()

const searchOpen = ref(false)
const messagesOpen = ref(false)
const notificationsOpen = ref(false)
const userMenuOpen = ref(false)
</script>

<template>
  <nav class="app-header flex items-center justify-between px-4 bg-white dark:bg-gray-800 dark:text-gray-200">
    <!-- Left: Sidebar Toggle + Links -->
    <ul class="flex items-center list-none m-0 p-0">
      <li>
        <a class="nav-link cursor-pointer" role="button" tabindex="0" aria-label="Toggle sidebar" @click="sidebar.toggle()">
          <Menu class="w-5 h-5" />
        </a>
      </li>
      <li class="hidden md:block">
        <RouterLink to="/" class="nav-link">Home</RouterLink>
      </li>
      <li class="hidden md:block">
        <a class="nav-link" href="#">Contact</a>
      </li>
    </ul>

    <!-- Right: Search, Dark Mode, Messages, Notifications, Fullscreen, User Menu -->
    <ul class="flex items-center list-none m-0 p-0">
      <!-- Search -->
      <li class="relative">
        <a class="nav-link cursor-pointer" role="button" tabindex="0" aria-label="Search" @click="searchOpen = !searchOpen">
          <Search class="w-5 h-5" />
        </a>
        <div v-show="searchOpen" @click="searchOpen = false" class="fixed inset-0 z-0"></div>
        <div v-show="searchOpen" class="absolute right-0 top-full mt-1 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 z-10 p-3">
          <form class="flex">
            <input type="text" class="flex-1 px-3 py-2 border dark:border-gray-600 rounded-l-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Search...">
            <button type="submit" class="px-3 py-2 bg-primary text-white rounded-r-md hover:bg-primary/90">
              <Search class="w-4 h-4" />
            </button>
          </form>
        </div>
      </li>

      <!-- Dark Mode Toggle -->
      <li>
        <a class="nav-link cursor-pointer" role="button" tabindex="0" aria-label="Toggle dark mode" @click="darkMode.toggle()" title="Toggle dark mode">
          <Sun v-show="darkMode.mode === 'light'" class="w-5 h-5" />
          <Moon v-show="darkMode.mode === 'dark'" class="w-5 h-5" />
          <Monitor v-show="darkMode.mode === 'auto'" class="w-5 h-5" />
        </a>
      </li>

      <!-- Messages Dropdown -->
      <li class="relative">
        <a class="nav-link cursor-pointer" @click="messagesOpen = !messagesOpen">
          <Mail class="w-5 h-5" />
          <span class="navbar-badge bg-danger text-white">4</span>
        </a>
        <div v-show="messagesOpen" @click="messagesOpen = false" class="fixed inset-0 z-0"></div>
        <div v-show="messagesOpen" class="absolute right-0 top-full mt-1 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 z-10">
          <div class="px-3 py-2 border-b dark:border-gray-700">
            <span class="text-sm font-semibold">4 New Messages</span>
          </div>
          <a href="#" class="flex items-start gap-3 px-3 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 border-b dark:border-gray-700">
            <img src="/assets/img/user1-128x128.jpg" alt="User" class="w-10 h-10 rounded-full flex-shrink-0">
            <div class="min-w-0">
              <div class="flex items-center justify-between">
                <h6 class="text-sm font-semibold m-0 truncate">Brad Diesel</h6>
                <span class="text-xs text-gray-400 flex-shrink-0 ml-2">
                  <Clock class="inline w-3 h-3" /> 4 Hours Ago
                </span>
              </div>
              <p class="text-xs text-gray-500 m-0 truncate">Call me whenever you can...</p>
            </div>
          </a>
          <a href="#" class="flex items-start gap-3 px-3 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 border-b dark:border-gray-700">
            <img src="/assets/img/user8-128x128.jpg" alt="User" class="w-10 h-10 rounded-full flex-shrink-0">
            <div class="min-w-0">
              <div class="flex items-center justify-between">
                <h6 class="text-sm font-semibold m-0 truncate">John Pierce</h6>
                <span class="text-xs text-gray-400 flex-shrink-0 ml-2">
                  <Clock class="inline w-3 h-3" /> 5 Hours Ago
                </span>
              </div>
              <p class="text-xs text-gray-500 m-0 truncate">I got your message bro</p>
            </div>
          </a>
          <a href="#" class="flex items-start gap-3 px-3 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 border-b dark:border-gray-700">
            <img src="/assets/img/user3-128x128.jpg" alt="User" class="w-10 h-10 rounded-full flex-shrink-0">
            <div class="min-w-0">
              <div class="flex items-center justify-between">
                <h6 class="text-sm font-semibold m-0 truncate">Nora Silvester</h6>
                <span class="text-xs text-gray-400 flex-shrink-0 ml-2">
                  <Clock class="inline w-3 h-3" /> 8 Hours Ago
                </span>
              </div>
              <p class="text-xs text-gray-500 m-0 truncate">The subject goes here</p>
            </div>
          </a>
          <a href="#" class="flex items-start gap-3 px-3 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 border-b dark:border-gray-700">
            <img src="/assets/img/user5-128x128.jpg" alt="User" class="w-10 h-10 rounded-full flex-shrink-0">
            <div class="min-w-0">
              <div class="flex items-center justify-between">
                <h6 class="text-sm font-semibold m-0 truncate">Sarah Bullock</h6>
                <span class="text-xs text-gray-400 flex-shrink-0 ml-2">
                  <Clock class="inline w-3 h-3" /> Yesterday
                </span>
              </div>
              <p class="text-xs text-gray-500 m-0 truncate">I'll be waiting for...</p>
            </div>
          </a>
          <a href="#" class="block text-center text-sm text-primary hover:underline py-2">See All Messages</a>
        </div>
      </li>

      <!-- Notifications Dropdown -->
      <li class="relative">
        <a class="nav-link cursor-pointer" @click="notificationsOpen = !notificationsOpen">
          <Bell class="w-5 h-5" />
          <span class="navbar-badge bg-warning text-dark">15</span>
        </a>
        <div v-show="notificationsOpen" @click="notificationsOpen = false" class="fixed inset-0 z-0"></div>
        <div v-show="notificationsOpen" class="absolute right-0 top-full mt-1 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 z-10">
          <div class="px-3 py-2 border-b dark:border-gray-700">
            <span class="text-sm font-semibold">15 Notifications</span>
          </div>
          <a href="#" class="flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-gray-700 border-b dark:border-gray-700">
            <Mail class="w-5 h-5 text-primary flex-shrink-0" />
            <div class="min-w-0">
              <p class="text-sm font-medium m-0">4 new messages</p>
              <p class="text-xs text-gray-400 m-0">3 mins ago</p>
            </div>
          </a>
          <a href="#" class="flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-gray-700 border-b dark:border-gray-700">
            <Users class="w-5 h-5 text-info flex-shrink-0" />
            <div class="min-w-0">
              <p class="text-sm font-medium m-0">8 friend requests</p>
              <p class="text-xs text-gray-400 m-0">12 hours ago</p>
            </div>
          </a>
          <a href="#" class="flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-gray-700 border-b dark:border-gray-700">
            <FileText class="w-5 h-5 text-danger flex-shrink-0" />
            <div class="min-w-0">
              <p class="text-sm font-medium m-0">3 new reports</p>
              <p class="text-xs text-gray-400 m-0">2 days ago</p>
            </div>
          </a>
          <a href="#" class="block text-center text-sm text-primary hover:underline py-2">See All Notifications</a>
        </div>
      </li>

      <!-- Fullscreen Toggle (hidden on mobile) -->
      <li class="hidden md:block">
        <a class="nav-link cursor-pointer" @click="fullscreen.toggle()">
          <Maximize v-show="!fullscreen.isFullscreen" class="w-5 h-5" />
          <Minimize v-show="fullscreen.isFullscreen" class="w-5 h-5" />
        </a>
      </li>

      <!-- User Menu -->
      <li class="relative">
        <a class="nav-link cursor-pointer flex items-center gap-2" @click="userMenuOpen = !userMenuOpen">
          <img src="/assets/img/user2-160x160.jpg" alt="User" class="w-8 h-8 rounded-full object-cover">
        </a>
        <div v-show="userMenuOpen" @click="userMenuOpen = false" class="fixed inset-0 z-0"></div>
        <div v-show="userMenuOpen" class="absolute right-0 top-full mt-1 w-60 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 z-10">
          <!-- User Info -->
          <div class="flex items-center gap-3 px-4 py-3 border-b dark:border-gray-700">
            <img src="/assets/img/user2-160x160.jpg" alt="User" class="w-12 h-12 rounded-full object-cover">
            <div>
              <p class="font-semibold text-sm m-0">Alexander Pierce</p>
              <p class="text-xs text-gray-400 m-0">Web Developer</p>
            </div>
          </div>
          <!-- Stats -->
          <div class="grid grid-cols-3 text-center text-xs border-b dark:border-gray-700 py-2">
            <div><p class="font-semibold m-0">1,322</p><p class="text-gray-400 m-0">Followers</p></div>
            <div><p class="font-semibold m-0">543</p><p class="text-gray-400 m-0">Sales</p></div>
            <div><p class="font-semibold m-0">13,287</p><p class="text-gray-400 m-0">Friends</p></div>
          </div>
          <!-- Links -->
          <RouterLink to="/examples/profile" class="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm" @click="userMenuOpen = false">
            <User class="w-4 h-4 text-gray-400" /> Profile
          </RouterLink>
          <a href="#" class="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm">
            <Settings class="w-4 h-4 text-gray-400" /> Settings
          </a>
          <div class="border-t dark:border-gray-700"></div>
          <RouterLink to="/auth/login-v1" class="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm rounded-b-lg" @click="userMenuOpen = false">
            <LogOut class="w-4 h-4 text-gray-400" /> Sign Out
          </RouterLink>
        </div>
      </li>
    </ul>
  </nav>
</template>
