<script setup lang="ts">
import { ref, computed } from 'vue'
import AppCard from '@/components/widgets/AppCard.vue'
import {
  Activity, AlertCircle, AlertTriangle, Archive, ArrowDown, ArrowLeft,
  ArrowRight, ArrowUp, BarChart3, Bell, Bookmark, Calendar, Camera,
  Check, CheckCircle, ChevronDown, ChevronRight, Circle, Clipboard,
  Clock, Cloud, Code, Copy, CreditCard, Database, Download, Edit,
  Expand, Eye, EyeOff, File, FileText, Filter, Folder, Gauge, Globe,
  Grid3x3, Hash, Heart, Home, Image, Inbox, Info, Key, Layers, Layout,
  Link, List, Loader2, Lock, LogOut, Mail, Map, MapPin, Menu,
  MessageCircle, Minus, Monitor, Moon, MoreHorizontal, MoreVertical,
  Package, Palette, Phone, PieChart, Plus, Power, Printer, Puzzle,
  RefreshCw, Save, Search, Settings, Share, Shield, ShoppingCart, Star,
  Sun, Table, Tag, Trash, TrendingUp, TrendingDown, Upload, User, Users,
  X, Zap
} from 'lucide-vue-next'

const search = ref('')

const iconList = [
  { name: 'activity', component: Activity },
  { name: 'alert-circle', component: AlertCircle },
  { name: 'alert-triangle', component: AlertTriangle },
  { name: 'archive', component: Archive },
  { name: 'arrow-down', component: ArrowDown },
  { name: 'arrow-left', component: ArrowLeft },
  { name: 'arrow-right', component: ArrowRight },
  { name: 'arrow-up', component: ArrowUp },
  { name: 'bar-chart-3', component: BarChart3 },
  { name: 'bell', component: Bell },
  { name: 'bookmark', component: Bookmark },
  { name: 'calendar', component: Calendar },
  { name: 'camera', component: Camera },
  { name: 'check', component: Check },
  { name: 'check-circle', component: CheckCircle },
  { name: 'chevron-down', component: ChevronDown },
  { name: 'chevron-right', component: ChevronRight },
  { name: 'circle', component: Circle },
  { name: 'clipboard', component: Clipboard },
  { name: 'clock', component: Clock },
  { name: 'cloud', component: Cloud },
  { name: 'code', component: Code },
  { name: 'copy', component: Copy },
  { name: 'credit-card', component: CreditCard },
  { name: 'database', component: Database },
  { name: 'download', component: Download },
  { name: 'edit', component: Edit },
  { name: 'expand', component: Expand },
  { name: 'eye', component: Eye },
  { name: 'eye-off', component: EyeOff },
  { name: 'file', component: File },
  { name: 'file-text', component: FileText },
  { name: 'filter', component: Filter },
  { name: 'folder', component: Folder },
  { name: 'gauge', component: Gauge },
  { name: 'globe', component: Globe },
  { name: 'grid', component: Grid3x3 },
  { name: 'hash', component: Hash },
  { name: 'heart', component: Heart },
  { name: 'home', component: Home },
  { name: 'image', component: Image },
  { name: 'inbox', component: Inbox },
  { name: 'info', component: Info },
  { name: 'key', component: Key },
  { name: 'layers', component: Layers },
  { name: 'layout', component: Layout },
  { name: 'link', component: Link },
  { name: 'list', component: List },
  { name: 'loader-2', component: Loader2 },
  { name: 'lock', component: Lock },
  { name: 'log-out', component: LogOut },
  { name: 'mail', component: Mail },
  { name: 'map', component: Map },
  { name: 'map-pin', component: MapPin },
  { name: 'menu', component: Menu },
  { name: 'message-circle', component: MessageCircle },
  { name: 'minus', component: Minus },
  { name: 'monitor', component: Monitor },
  { name: 'moon', component: Moon },
  { name: 'more-horizontal', component: MoreHorizontal },
  { name: 'more-vertical', component: MoreVertical },
  { name: 'package', component: Package },
  { name: 'palette', component: Palette },
  { name: 'phone', component: Phone },
  { name: 'pie-chart', component: PieChart },
  { name: 'plus', component: Plus },
  { name: 'power', component: Power },
  { name: 'printer', component: Printer },
  { name: 'puzzle', component: Puzzle },
  { name: 'refresh-cw', component: RefreshCw },
  { name: 'save', component: Save },
  { name: 'search', component: Search },
  { name: 'settings', component: Settings },
  { name: 'share', component: Share },
  { name: 'shield', component: Shield },
  { name: 'shopping-cart', component: ShoppingCart },
  { name: 'star', component: Star },
  { name: 'sun', component: Sun },
  { name: 'table', component: Table },
  { name: 'tag', component: Tag },
  { name: 'trash', component: Trash },
  { name: 'trending-up', component: TrendingUp },
  { name: 'trending-down', component: TrendingDown },
  { name: 'upload', component: Upload },
  { name: 'user', component: User },
  { name: 'users', component: Users },
  { name: 'x', component: X },
  { name: 'zap', component: Zap },
]

const filteredIcons = computed(() => {
  if (!search.value) return iconList
  const q = search.value.toLowerCase()
  return iconList.filter(icon => icon.name.includes(q))
})
</script>

<template>
  <div>
    <!-- Icon Search -->
    <div class="card mb-6">
      <div class="card-header">
        <h3 class="card-title">Lucide Icons</h3>
        <div class="card-tools">
          <div class="relative">
            <input
              v-model="search"
              type="text"
              placeholder="Search icons..."
              class="px-3 py-1.5 text-sm border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-48"
            >
            <Search class="w-4 h-4 absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-3">
          <div
            v-for="icon in filteredIcons"
            :key="icon.name"
            class="text-center p-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
          >
            <component :is="icon.component" class="w-6 h-6 mx-auto mb-1" />
            <p class="text-xs truncate">{{ icon.name }}</p>
          </div>
        </div>
        <p v-if="filteredIcons.length === 0" class="text-center text-gray-500 dark:text-gray-400 py-8">
          No icons found matching "{{ search }}"
        </p>
      </div>
    </div>

    <!-- Icon Sizes -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
      <AppCard title="Icon Sizes">
        <div class="flex items-end gap-6">
          <div class="text-center">
            <Home class="w-4 h-4 mx-auto mb-1" />
            <p class="text-xs text-gray-500">w-4 h-4</p>
          </div>
          <div class="text-center">
            <Home class="w-5 h-5 mx-auto mb-1" />
            <p class="text-xs text-gray-500">w-5 h-5</p>
          </div>
          <div class="text-center">
            <Home class="w-6 h-6 mx-auto mb-1" />
            <p class="text-xs text-gray-500">w-6 h-6</p>
          </div>
          <div class="text-center">
            <Home class="w-8 h-8 mx-auto mb-1" />
            <p class="text-xs text-gray-500">w-8 h-8</p>
          </div>
          <div class="text-center">
            <Home class="w-10 h-10 mx-auto mb-1" />
            <p class="text-xs text-gray-500">w-10 h-10</p>
          </div>
          <div class="text-center">
            <Home class="w-12 h-12 mx-auto mb-1" />
            <p class="text-xs text-gray-500">w-12 h-12</p>
          </div>
          <div class="text-center">
            <Home class="w-16 h-16 mx-auto mb-1" />
            <p class="text-xs text-gray-500">w-16 h-16</p>
          </div>
        </div>
      </AppCard>

      <AppCard title="Icon Colors">
        <div class="flex flex-wrap items-center gap-6">
          <div class="text-center">
            <Heart class="w-8 h-8 mx-auto mb-1 text-blue-600" />
            <p class="text-xs text-gray-500">Primary</p>
          </div>
          <div class="text-center">
            <Heart class="w-8 h-8 mx-auto mb-1 text-gray-600" />
            <p class="text-xs text-gray-500">Secondary</p>
          </div>
          <div class="text-center">
            <Heart class="w-8 h-8 mx-auto mb-1 text-green-600" />
            <p class="text-xs text-gray-500">Success</p>
          </div>
          <div class="text-center">
            <Heart class="w-8 h-8 mx-auto mb-1 text-red-600" />
            <p class="text-xs text-gray-500">Danger</p>
          </div>
          <div class="text-center">
            <Heart class="w-8 h-8 mx-auto mb-1 text-yellow-500" />
            <p class="text-xs text-gray-500">Warning</p>
          </div>
          <div class="text-center">
            <Heart class="w-8 h-8 mx-auto mb-1 text-cyan-500" />
            <p class="text-xs text-gray-500">Info</p>
          </div>
          <div class="text-center">
            <Heart class="w-8 h-8 mx-auto mb-1 text-gray-900 dark:text-white" />
            <p class="text-xs text-gray-500">Dark</p>
          </div>
        </div>
      </AppCard>
    </div>
  </div>
</template>
