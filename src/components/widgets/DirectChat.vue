<script setup lang="ts">
import { ref } from 'vue'
import { Contact } from 'lucide-vue-next'
import type { ChatMessage, ChatContact } from '@/types'

const props = withDefaults(defineProps<{
  title: string
  variant?: 'primary' | 'success' | 'warning' | 'danger'
  messages: ChatMessage[]
  contacts: ChatContact[]
  badgeCount?: number
}>(), {
  variant: 'primary',
})

const emit = defineEmits<{
  send: [text: string]
}>()

const contactsOpen = ref(false)
const inputText = ref('')

function send() {
  const text = inputText.value.trim()
  if (text) {
    emit('send', text)
    inputText.value = ''
  }
}
</script>

<template>
  <div
    class="card direct-chat"
    :class="[`direct-chat-${variant}`, { 'direct-chat-contacts-open': contactsOpen }]"
  >
    <div class="card-header">
      <h3 class="card-title">{{ title }}</h3>
      <div class="card-tools">
        <span class="text-xs mr-2" v-if="badgeCount">{{ badgeCount }} Messages</span>
        <button class="btn-tool" @click="contactsOpen = !contactsOpen">
          <Contact class="w-4 h-4" />
        </button>
      </div>
    </div>
    <div class="card-body">
      <div class="direct-chat-messages">
        <div
          v-for="(msg, index) in messages"
          :key="index"
          class="direct-chat-msg"
          :class="{ right: msg.side === 'right' }"
        >
          <img :src="msg.avatar" class="direct-chat-img" alt="">
          <div>
            <div class="direct-chat-infos">
              <span class="direct-chat-name">{{ msg.name }}</span>
              <span class="direct-chat-timestamp">{{ msg.time }}</span>
            </div>
            <div class="direct-chat-text">{{ msg.text }}</div>
          </div>
        </div>
      </div>
      <div class="direct-chat-contacts">
        <ul class="direct-chat-contacts-list">
          <li v-for="(contact, index) in contacts" :key="index">
            <img :src="contact.avatar" alt="">
            <div class="contacts-info">
              <span class="contact-name">{{ contact.name }}</span>
              <span class="contact-status">{{ contact.status }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="direct-chat-input-area">
      <input
        v-model="inputText"
        type="text"
        placeholder="Type Message ..."
        @keyup.enter="send"
      >
      <button @click="send">Send</button>
    </div>
  </div>
</template>
