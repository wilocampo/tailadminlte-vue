<script setup lang="ts">
import { ref, computed } from 'vue'
import { X } from 'lucide-vue-next'

interface GalleryImage {
  src: string
  title: string
  category: string
  desc: string
}

const filter = ref('all')
const lightbox = ref(false)
const currentImage = ref('')
const currentTitle = ref('')

const categories = ['all', 'nature', 'urban', 'art', 'products'] as const

const images: GalleryImage[] = [
  { src: '/assets/img/photo1.png', title: 'Mountain Sunrise', category: 'nature', desc: 'Beautiful sunrise over the mountains' },
  { src: '/assets/img/photo2.png', title: 'City Skyline', category: 'urban', desc: 'Modern city skyline at dusk' },
  { src: '/assets/img/photo3.jpg', title: 'Forest Path', category: 'nature', desc: 'A winding path through autumn forest' },
  { src: '/assets/img/photo4.jpg', title: 'Abstract Art', category: 'art', desc: 'Colorful abstract digital artwork' },
  { src: '/assets/img/prod-1.jpg', title: 'Product Showcase', category: 'products', desc: 'Featured product photography' },
  { src: '/assets/img/prod-2.jpg', title: 'Tech Gadget', category: 'products', desc: 'Latest tech gadget close-up' },
  { src: '/assets/img/prod-3.jpg', title: 'Office Space', category: 'urban', desc: 'Modern workspace design' },
  { src: '/assets/img/prod-4.jpg', title: 'Creative Design', category: 'art', desc: 'Minimalist creative design' },
  { src: '/assets/img/prod-5.jpg', title: 'Nature Reserve', category: 'nature', desc: 'Peaceful nature reserve landscape' },
  { src: '/assets/img/boxed-bg.jpg', title: 'Texture Pattern', category: 'art', desc: 'Seamless texture pattern background' },
  { src: '/assets/img/photo1.png', title: 'Lakeside View', category: 'nature', desc: 'Calm lake reflecting the sky' },
  { src: '/assets/img/photo2.png', title: 'Downtown Night', category: 'urban', desc: 'City lights at night' },
]

const filteredImages = computed(() =>
  filter.value === 'all' ? images : images.filter(img => img.category === filter.value)
)

function openLightbox(img: GalleryImage) {
  currentImage.value = img.src
  currentTitle.value = img.title
  lightbox.value = true
}

function closeLightbox() {
  lightbox.value = false
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') closeLightbox()
}
</script>

<template>
  <!-- Filter Buttons -->
  <div class="flex flex-wrap gap-2 mb-6">
    <button
      v-for="cat in categories"
      :key="cat"
      @click="filter = cat"
      :class="filter === cat ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'"
      class="px-4 py-2 text-sm rounded transition font-medium capitalize"
    >
      {{ cat === 'all' ? 'All' : cat }}
    </button>
  </div>

  <!-- Gallery Grid -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
    <TransitionGroup
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-for="(img, index) in filteredImages"
        :key="img.title + '-' + index"
        class="card overflow-hidden group cursor-pointer"
        @click="openLightbox(img)"
      >
        <div class="relative aspect-[4/3] overflow-hidden">
          <img :src="img.src" :alt="img.title" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110">
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div>
              <h4 class="text-white font-semibold text-sm">{{ img.title }}</h4>
              <p class="text-white/70 text-xs">{{ img.desc }}</p>
            </div>
          </div>
        </div>
        <div class="p-3">
          <h4 class="text-sm font-medium truncate">{{ img.title }}</h4>
          <span class="text-xs text-gray-500 dark:text-gray-400 capitalize">{{ img.category }}</span>
        </div>
      </div>
    </TransitionGroup>
  </div>

  <!-- Lightbox Modal -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="lightbox"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        @click.self="closeLightbox"
        @keydown.escape="closeLightbox"
        tabindex="0"
        ref="lightboxRef"
      >
        <div class="relative max-w-4xl w-full">
          <button @click="closeLightbox" class="absolute -top-10 right-0 text-white hover:text-gray-300 transition">
            <X class="w-6 h-6" />
          </button>
          <img :src="currentImage" :alt="currentTitle" class="w-full max-h-[80vh] object-contain rounded-lg">
          <p class="text-white text-center mt-3 font-medium">{{ currentTitle }}</p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
