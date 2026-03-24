<script setup lang="ts">
import { ref, computed, useSlots } from 'vue'
import { Minus, Expand, X } from 'lucide-vue-next'
import * as icons from 'lucide-vue-next'
import { useCardWidget } from '@/composables/useCardWidget'

const props = withDefaults(defineProps<{
  title?: string
  icon?: string
  cardClass?: string
  interactive?: boolean
  collapsed?: boolean
  loading?: boolean
}>(), {
  interactive: false,
  collapsed: false,
  loading: false,
})

const emit = defineEmits<{
  collapsed: [value: boolean]
  removed: []
}>()

const slots = useSlots()

function resolveIcon(name: string) {
  const pascal = name.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')
  return (icons as any)[pascal] || null
}

const iconComponent = computed(() => props.icon ? resolveIcon(props.icon) : null)

const cardRef = ref<HTMLElement | null>(null)
const bodyRef = ref<HTMLElement | null>(null)
const footerRef = ref<HTMLElement | null>(null)

const widget = props.interactive
  ? useCardWidget(cardRef, bodyRef, footerRef, { initialCollapsed: props.collapsed })
  : null

function toggleCollapse() {
  if (widget) {
    widget.toggleCollapse()
    // Emit after state change settles
    setTimeout(() => {
      emit('collapsed', widget.collapsed.value)
    }, 600)
  }
}

function toggleMaximize() {
  widget?.toggleMaximize()
}

function remove() {
  if (widget) {
    widget.remove()
    emit('removed')
  }
}
</script>

<template>
  <div class="card" :class="cardClass" ref="cardRef">
    <div class="card-header">
      <template v-if="$slots.header">
        <slot name="header" />
      </template>
      <template v-else>
        <h3 class="card-title">
          <component :is="iconComponent" v-if="iconComponent" class="inline w-4 h-4 mr-1" />
          {{ title }}
        </h3>
        <div class="card-tools" v-if="interactive">
          <slot name="tools" />
          <button class="btn-tool" @click="toggleCollapse()"><Minus class="w-4 h-4" /></button>
          <button class="btn-tool" @click="toggleMaximize()"><Expand class="w-4 h-4" /></button>
          <button class="btn-tool" @click="remove()"><X class="w-4 h-4" /></button>
        </div>
      </template>
    </div>
    <div class="card-body" ref="bodyRef">
      <slot />
    </div>
    <div class="card-footer" v-if="$slots.footer" ref="footerRef">
      <slot name="footer" />
    </div>
    <div v-if="loading" class="overlay">
      <div class="spinner-border"></div>
    </div>
  </div>
</template>
