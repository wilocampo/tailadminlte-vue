<script setup lang="ts">
import { ref, computed } from 'vue'
import { Search, Mail, Phone, MessageCircle, Twitter, Github, Linkedin } from 'lucide-vue-next'

interface Contact {
  name: string
  role: string
  email: string
  phone: string
  avatar: string
  social: { twitter: boolean; github: boolean; linkedin: boolean }
}

const search = ref('')

const contacts: Contact[] = [
  { name: 'Alexander Pierce', role: 'Software Engineer', email: 'alex.pierce@example.com', phone: '+1 (555) 012-3456', avatar: '/assets/img/user1-128x128.jpg', social: { twitter: true, github: true, linkedin: true } },
  { name: 'Sarah Johnson', role: 'UI/UX Designer', email: 'sarah.j@example.com', phone: '+1 (555) 234-5678', avatar: '/assets/img/user3-128x128.jpg', social: { twitter: true, github: false, linkedin: true } },
  { name: 'Michael Chen', role: 'Project Manager', email: 'm.chen@example.com', phone: '+1 (555) 345-6789', avatar: '/assets/img/user4-128x128.jpg', social: { twitter: false, github: true, linkedin: true } },
  { name: 'Emily Davis', role: 'Data Analyst', email: 'emily.d@example.com', phone: '+1 (555) 456-7890', avatar: '/assets/img/user5-128x128.jpg', social: { twitter: true, github: true, linkedin: false } },
  { name: 'Robert Wilson', role: 'DevOps Engineer', email: 'r.wilson@example.com', phone: '+1 (555) 567-8901', avatar: '/assets/img/user6-128x128.jpg', social: { twitter: false, github: true, linkedin: true } },
  { name: 'Jessica Martinez', role: 'Marketing Lead', email: 'j.martinez@example.com', phone: '+1 (555) 678-9012', avatar: '/assets/img/user7-128x128.jpg', social: { twitter: true, github: false, linkedin: true } },
  { name: 'Daniel Thompson', role: 'Backend Developer', email: 'd.thompson@example.com', phone: '+1 (555) 789-0123', avatar: '/assets/img/user8-128x128.jpg', social: { twitter: true, github: true, linkedin: true } },
  { name: 'Amanda Brown', role: 'QA Engineer', email: 'a.brown@example.com', phone: '+1 (555) 890-1234', avatar: '/assets/img/user1-128x128.jpg', social: { twitter: false, github: true, linkedin: false } },
]

const filtered = computed(() => {
  if (!search.value) return contacts
  const q = search.value.toLowerCase()
  return contacts.filter(
    c => c.name.toLowerCase().includes(q) || c.role.toLowerCase().includes(q) || c.email.toLowerCase().includes(q)
  )
})
</script>

<template>
  <!-- Search Bar -->
  <div class="mb-4">
    <div class="relative max-w-md">
      <Search class="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        v-model="search"
        placeholder="Search contacts..."
        class="w-full pl-9 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
    </div>
  </div>

  <!-- Contact Cards Grid -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
    <div v-for="(contact, i) in filtered" :key="i" class="card text-center">
      <div class="card-body pt-6">
        <img :src="contact.avatar" :alt="contact.name" class="w-20 h-20 rounded-full mx-auto mb-3 border-2 border-gray-200 dark:border-gray-700">
        <h4 class="font-semibold text-base">{{ contact.name }}</h4>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">{{ contact.role }}</p>

        <div class="space-y-1.5 text-sm text-gray-600 dark:text-gray-400 mb-4">
          <div class="flex items-center justify-center gap-2">
            <Mail class="w-3.5 h-3.5 text-gray-400" />
            <span class="truncate text-xs">{{ contact.email }}</span>
          </div>
          <div class="flex items-center justify-center gap-2">
            <Phone class="w-3.5 h-3.5 text-gray-400" />
            <span class="text-xs">{{ contact.phone }}</span>
          </div>
        </div>

        <!-- Social Links -->
        <div class="flex justify-center gap-2 mb-4">
          <a v-if="contact.social.twitter" href="#" class="w-8 h-8 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-600 flex items-center justify-center hover:bg-sky-200 dark:hover:bg-sky-900/50 transition">
            <Twitter class="w-3.5 h-3.5" />
          </a>
          <a v-if="contact.social.github" href="#" class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition">
            <Github class="w-3.5 h-3.5" />
          </a>
          <a v-if="contact.social.linkedin" href="#" class="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center hover:bg-blue-200 dark:hover:bg-blue-900/50 transition">
            <Linkedin class="w-3.5 h-3.5" />
          </a>
        </div>

        <!-- Action Buttons -->
        <div class="flex gap-2 justify-center pt-3 border-t border-gray-100 dark:border-gray-700">
          <button class="px-3 py-1.5 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition inline-flex items-center gap-1">
            <Mail class="w-3 h-3" /> Email
          </button>
          <button class="px-3 py-1.5 bg-green-600 text-white text-xs rounded hover:bg-green-700 transition inline-flex items-center gap-1">
            <Phone class="w-3 h-3" /> Call
          </button>
          <button class="px-3 py-1.5 bg-gray-200 dark:bg-gray-700 text-xs rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition inline-flex items-center gap-1">
            <MessageCircle class="w-3 h-3" /> Chat
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
