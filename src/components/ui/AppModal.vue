<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { X } from 'lucide-vue-next'

const props = withDefaults(defineProps<{
  open: boolean
  title: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  centered?: boolean
  scrollable?: boolean
  headerClass?: string
}>(), {
  size: 'md',
  centered: false,
  scrollable: false,
})

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const sizeMap: Record<string, string> = {
  sm: 'max-w-sm',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
}

function onEscape(e: KeyboardEvent) {
  if (e.key === 'Escape' && props.open) {
    emit('update:open', false)
  }
}

onMounted(() => {
  document.addEventListener('keydown', onEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', onEscape)
})
</script>

<template>
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
        v-show="open"
        class="fixed inset-0 z-[9998] flex justify-center p-4"
        :class="{ 'items-center': centered, 'items-start pt-16': !centered }"
      >
        <!-- Backdrop -->
        <div
          class="absolute inset-0 bg-black/50"
          @click="$emit('update:open', false)"
        ></div>

        <!-- Panel -->
        <Transition
          enter-active-class="transition ease-out duration-200"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition ease-in duration-150"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div
            v-show="open"
            class="relative w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl z-[9999]"
            :class="[sizeMap[size], { 'max-h-[85vh] flex flex-col': scrollable }]"
            @click.stop
          >
            <!-- Header -->
            <div
              class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700"
              :class="headerClass"
            >
              <h3
                class="text-lg font-semibold"
                :class="headerClass ? 'text-white' : 'text-gray-900 dark:text-gray-100'"
              >
                {{ title }}
              </h3>
              <button
                @click="$emit('update:open', false)"
                class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                :class="headerClass ? 'text-white/70 hover:text-white' : ''"
              >
                <X class="w-5 h-5" />
              </button>
            </div>

            <!-- Body -->
            <div class="p-4" :class="{ 'overflow-y-auto flex-1': scrollable }">
              <slot />
            </div>

            <!-- Footer -->
            <div
              v-if="$slots.footer"
              class="flex items-center justify-end gap-2 p-4 border-t border-gray-200 dark:border-gray-700"
            >
              <slot name="footer" />
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
