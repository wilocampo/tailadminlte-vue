<script setup lang="ts">
import * as icons from 'lucide-vue-next'

const props = withDefaults(defineProps<{
  modelValue: string
  type?: string
  placeholder?: string
  icon?: string
  iconPosition?: 'left' | 'right'
  disabled?: boolean
}>(), {
  type: 'text',
  iconPosition: 'right',
})

defineEmits<{
  'update:modelValue': [value: string]
}>()

const iconComponent = props.icon ? (icons as Record<string, any>)[props.icon] : null
</script>

<template>
  <div class="auth-input-group" :class="{ 'icon-left': iconPosition === 'left' }">
    <template v-if="iconPosition === 'left'">
      <span class="auth-input-icon" v-if="iconComponent">
        <component :is="iconComponent" class="w-5 h-5" />
      </span>
      <input
        :type="type"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :placeholder="placeholder"
        :disabled="disabled"
        class="form-control"
      >
    </template>
    <template v-else>
      <input
        :type="type"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :placeholder="placeholder"
        :disabled="disabled"
        class="form-control"
      >
      <span class="auth-input-icon" v-if="iconComponent">
        <component :is="iconComponent" class="w-5 h-5" />
      </span>
    </template>
  </div>
</template>
