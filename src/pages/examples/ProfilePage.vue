<script setup lang="ts">
import { ref } from 'vue'
import {
  UserPlus, Mail, Briefcase, GraduationCap, MapPin, Calendar, Globe,
  Activity, Settings, MessageCircle, GitPullRequest, Clock, Star, Upload, Bug
} from 'lucide-vue-next'

const activeTab = ref<'activity' | 'settings'>('activity')

const skills = [
  { name: 'JavaScript / TypeScript', pct: 95, color: 'bg-primary' },
  { name: 'PHP / Laravel', pct: 90, color: 'bg-success' },
  { name: 'Python', pct: 75, color: 'bg-warning' },
  { name: 'UI / UX Design', pct: 65, color: 'bg-info' },
  { name: 'DevOps / CI/CD', pct: 80, color: 'bg-danger' },
]

const form = ref({
  firstName: 'Alexander',
  lastName: 'Pierce',
  email: 'alex.pierce@example.com',
  bio: 'Full-stack developer with 10+ years of experience building web applications.',
  location: 'San Francisco, California',
  website: 'https://alexpierce.dev',
})
</script>

<template>
  <!-- Cover / Banner -->
  <div class="card overflow-hidden mb-4">
    <div class="h-48 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 relative">
      <div class="absolute inset-0 bg-black/10"></div>
    </div>
    <div class="card-body relative -mt-16 pb-4">
      <div class="flex flex-col sm:flex-row items-center sm:items-end gap-4">
        <img src="/assets/img/user2-160x160.jpg" alt="User Avatar" class="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 shadow-lg">
        <div class="flex-1 text-center sm:text-left">
          <h2 class="text-2xl font-bold">Alexander Pierce</h2>
          <p class="text-gray-500 dark:text-gray-400">Senior Software Engineer</p>
        </div>
        <div class="flex gap-2">
          <button class="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition">
            <UserPlus class="w-4 h-4 inline mr-1" /> Follow
          </button>
          <button class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-sm rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition">
            <Mail class="w-4 h-4 inline mr-1" /> Message
          </button>
        </div>
      </div>

      <!-- Stats -->
      <div class="flex justify-center sm:justify-start gap-8 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div class="text-center">
          <div class="text-xl font-bold text-blue-600">1,247</div>
          <div class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Posts</div>
        </div>
        <div class="text-center">
          <div class="text-xl font-bold text-blue-600">8,394</div>
          <div class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Followers</div>
        </div>
        <div class="text-center">
          <div class="text-xl font-bold text-blue-600">542</div>
          <div class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Following</div>
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">

    <!-- Left Column: About -->
    <div class="lg:col-span-1 space-y-4">

      <!-- About Me Card -->
      <div class="card">
        <div class="card-header"><h3 class="card-title">About Me</h3></div>
        <div class="card-body text-sm">
          <p class="mb-4 text-gray-600 dark:text-gray-400">
            Full-stack developer with 10+ years of experience building web applications. Passionate about clean code, user experience, and open-source contributions.
          </p>
          <ul class="space-y-3">
            <li class="flex items-center gap-3">
              <Briefcase class="w-4 h-4 text-gray-400" />
              <span>Software Engineer at <strong>Tech Corp</strong></span>
            </li>
            <li class="flex items-center gap-3">
              <GraduationCap class="w-4 h-4 text-gray-400" />
              <span>B.Sc. in Computer Science, <strong>MIT</strong></span>
            </li>
            <li class="flex items-center gap-3">
              <MapPin class="w-4 h-4 text-gray-400" />
              <span>San Francisco, California</span>
            </li>
            <li class="flex items-center gap-3">
              <Calendar class="w-4 h-4 text-gray-400" />
              <span>Member since <strong>Jan 2019</strong></span>
            </li>
            <li class="flex items-center gap-3">
              <Globe class="w-4 h-4 text-gray-400" />
              <a href="#" class="text-blue-600 hover:underline">alexpierce.dev</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Skills Card -->
      <div class="card">
        <div class="card-header"><h3 class="card-title">Skills</h3></div>
        <div class="card-body">
          <div class="space-y-3">
            <div v-for="skill in skills" :key="skill.name">
              <div class="flex justify-between text-sm mb-1">
                <span>{{ skill.name }}</span>
                <span class="text-gray-500">{{ skill.pct }}%</span>
              </div>
              <div class="progress progress-sm">
                <div class="progress-bar" :class="skill.color" :style="{ width: skill.pct + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Notes Card -->
      <div class="card">
        <div class="card-header"><h3 class="card-title">Notes</h3></div>
        <div class="card-body text-sm text-gray-600 dark:text-gray-400">
          <p>Available for freelance projects. Preferred communication via email. Currently working on open-source admin dashboard templates.</p>
        </div>
      </div>

    </div>

    <!-- Right Column: Activity & Tabs -->
    <div class="lg:col-span-2">
      <div class="card">
        <div class="card-header border-b-0">
          <ul class="flex gap-4 border-b border-gray-200 dark:border-gray-700 -mb-px">
            <li>
              <button @click="activeTab = 'activity'"
                :class="activeTab === 'activity' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'"
                class="py-2 px-1 border-b-2 text-sm font-medium transition">
                <Activity class="w-4 h-4 inline mr-1" /> Activity
              </button>
            </li>
            <li>
              <button @click="activeTab = 'settings'"
                :class="activeTab === 'settings' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'"
                class="py-2 px-1 border-b-2 text-sm font-medium transition">
                <Settings class="w-4 h-4 inline mr-1" /> Settings
              </button>
            </li>
          </ul>
        </div>

        <!-- Activity Tab -->
        <div v-show="activeTab === 'activity'" class="card-body">
          <ul class="timeline">
            <li class="time-label"><span>Today</span></li>
            <li>
              <div class="timeline-item">
                <div class="timeline-icon bg-primary">
                  <MessageCircle class="w-3 h-3" />
                </div>
                <div class="timeline-header">
                  Commented on <a href="#">Project Alpha</a>
                  <span class="time"><Clock class="w-3 h-3 inline mr-1" />25 mins ago</span>
                </div>
                <div class="timeline-body">
                  Looks great! The new dashboard layout is much cleaner. Let's ship this in the next release.
                </div>
              </div>
            </li>
            <li>
              <div class="timeline-item">
                <div class="timeline-icon bg-success">
                  <GitPullRequest class="w-3 h-3" />
                </div>
                <div class="timeline-header">
                  Merged pull request <a href="#">#482</a>
                  <span class="time"><Clock class="w-3 h-3 inline mr-1" />2 hours ago</span>
                </div>
                <div class="timeline-body">
                  feat: Add dark mode toggle to navigation bar
                </div>
              </div>
            </li>
            <li class="time-label"><span>Yesterday</span></li>
            <li>
              <div class="timeline-item">
                <div class="timeline-icon bg-warning">
                  <Star class="w-3 h-3" />
                </div>
                <div class="timeline-header">
                  Starred repository <a href="#">tailadminlte/core</a>
                  <span class="time"><Clock class="w-3 h-3 inline mr-1" />1 day ago</span>
                </div>
              </div>
            </li>
            <li>
              <div class="timeline-item">
                <div class="timeline-icon bg-info">
                  <Upload class="w-3 h-3" />
                </div>
                <div class="timeline-header">
                  Uploaded 4 new photos to <a href="#">Spring Campaign</a>
                  <span class="time"><Clock class="w-3 h-3 inline mr-1" />1 day ago</span>
                </div>
                <div class="timeline-body">
                  <div class="flex gap-2 mt-2">
                    <img src="/assets/img/photo1.png" alt="Photo" class="w-16 h-16 rounded object-cover">
                    <img src="/assets/img/photo2.png" alt="Photo" class="w-16 h-16 rounded object-cover">
                    <img src="/assets/img/photo3.jpg" alt="Photo" class="w-16 h-16 rounded object-cover">
                    <img src="/assets/img/photo4.jpg" alt="Photo" class="w-16 h-16 rounded object-cover">
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="timeline-item">
                <div class="timeline-icon bg-danger">
                  <Bug class="w-3 h-3" />
                </div>
                <div class="timeline-header">
                  Reported a bug in <a href="#">authentication module</a>
                  <span class="time"><Clock class="w-3 h-3 inline mr-1" />2 days ago</span>
                </div>
                <div class="timeline-body">
                  Session tokens are not being properly invalidated on logout when using the "Remember Me" feature.
                </div>
              </div>
            </li>
          </ul>
        </div>

        <!-- Settings Tab -->
        <div v-show="activeTab === 'settings'" class="card-body">
          <form @submit.prevent>
            <div class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium mb-1">First Name</label>
                  <input type="text" v-model="form.firstName" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1">Last Name</label>
                  <input type="text" v-model="form.lastName" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Email</label>
                <input type="email" v-model="form.email" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Bio</label>
                <textarea rows="3" v-model="form.bio" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Location</label>
                <input type="text" v-model="form.location" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Website</label>
                <input type="url" v-model="form.website" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>
              <div class="pt-2">
                <button type="button" class="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition">Save Changes</button>
                <button type="button" class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-sm rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition ml-2">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

  </div>
</template>
