<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { X } from 'lucide-vue-next'

const props = withDefaults(defineProps<{
  variant?: string
  title: string
  message: string
  autoDismiss?: boolean
  delay?: number
}>(), {
  autoDismiss: false,
  delay: 5000,
})

const emit = defineEmits<{
  close: []
}>()

const visible = ref(true)
let timer: ReturnType<typeof setTimeout> | null = null

function dismiss() {
  visible.value = false
  emit('close')
}

onMounted(() => {
  if (props.autoDismiss) {
    timer = setTimeout(dismiss, props.delay)
  }
})

onUnmounted(() => {
  if (timer) {
    clearTimeout(timer)
  }
})
</script>

<template>
  <Transition
    enter-active-class="transition ease-out duration-300"
    enter-from-class="opacity-0 translate-x-full"
    enter-to-class="opacity-100 translate-x-0"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="opacity-100 translate-x-0"
    leave-to-class="opacity-0 translate-x-full"
  >
    <div
      v-show="visible"
      class="toast"
      :class="[variant ? `toast-${variant}` : '', { show: visible }]"
    >
      <div class="toast-header">
        <span class="toast-icon"></span>
        <span class="toast-title">{{ title }}</span>
        <button class="toast-close" @click="dismiss">
          <X class="w-3.5 h-3.5" />
        </button>
      </div>
      <div class="toast-body">{{ message }}</div>
    </div>
  </Transition>
</template>
