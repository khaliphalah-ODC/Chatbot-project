<template>
  <div class="fixed bottom-24 right-5 z-[60]">
    <button
      v-if="!isOpen"
      @click="isOpen = true"
      class="h-14 w-14 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700"
      aria-label="Open live support chat"
    >
      <i class="fa-solid fa-comments text-xl"></i>
    </button>

    <div v-else class="w-[320px] md:w-[360px] rounded-xl bg-white shadow-2xl border border-gray-200 overflow-hidden">
      <div class="bg-blue-600 text-white px-4 py-3 flex items-center justify-between">
        <div>
          <p class="text-sm font-semibold">Live Support Chat</p>
          <p class="text-xs opacity-90">Chat directly on this website</p>
        </div>
        <button @click="isOpen = false" aria-label="Close chat">✕</button>
      </div>

      <div class="px-4 py-3 border-b border-gray-200 space-y-2">
        <div class="flex items-center gap-2 text-sm">
          <label class="text-gray-600">You are:</label>
          <select v-model="role" @change="onRoleChange" class="border border-gray-300 rounded px-2 py-1">
            <option value="customer">Customer</option>
            <option value="admin">Support/Admin</option>
          </select>
        </div>
        <input
          v-model="displayName"
          @change="rejoinRoom"
          type="text"
          class="w-full border border-gray-300 rounded px-2 py-1 text-sm"
          placeholder="Your name"
        />
        <div v-if="role === 'admin'" class="space-y-2">
          <input
            v-model="adminPassword"
            type="password"
            class="w-full border border-gray-300 rounded px-2 py-1 text-sm"
            placeholder="Admin password"
          />
          <div class="flex items-center gap-2">
            <button
              type="button"
              @click="authenticateAdmin"
              class="bg-gray-900 text-white px-3 py-1 rounded text-sm hover:bg-black"
            >
              Authenticate
            </button>
            <span
              class="text-xs"
              :class="isAdminAuthenticated ? 'text-green-700' : 'text-amber-700'"
            >
              {{ isAdminAuthenticated ? 'Admin authenticated' : 'Admin not authenticated' }}
            </span>
          </div>
        </div>
        <p v-if="authMessage" class="text-xs text-red-600">
          {{ authMessage }}
        </p>
      </div>

      <div class="h-72 overflow-y-auto px-3 py-3 bg-gray-50">
        <div v-if="messages.length === 0" class="text-sm text-gray-500">
          No messages yet. Start the conversation.
        </div>

        <div
          v-for="message in messages"
          :key="message.id"
          class="mb-2"
          :class="message.role === activeRole ? 'text-right' : 'text-left'"
        >
          <p class="text-[11px] text-gray-500 mb-1">
            {{ message.name }} · {{ formatTime(message.timestamp) }}
          </p>
          <span
            class="inline-block rounded-xl px-3 py-2 text-sm"
            :class="message.role === activeRole ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200 text-gray-900'"
          >
            {{ message.text }}
          </span>
        </div>
      </div>

      <div class="p-3 border-t border-gray-200">
        <form class="flex gap-2" @submit.prevent="sendMessage">
          <input
            v-model="draft"
            type="text"
            class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
            placeholder="Type a message..."
          />
          <button type="submit" class="bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700">
            Send
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { io } from 'socket.io-client'

const room = import.meta.env.VITE_SUPPORT_ROOM || 'support-main'
const serverUrl = import.meta.env.VITE_CHAT_SERVER_URL || 'http://localhost:3001'

const isOpen = ref(true)
const role = ref(localStorage.getItem('chat-role') || 'customer')
const displayName = ref(localStorage.getItem('chat-name') || (role.value === 'admin' ? 'Support Admin' : 'Customer'))
const draft = ref('')
const messages = ref([])
const adminPassword = ref('')
const isAdminAuthenticated = ref(false)
const authMessage = ref('')

const socket = io(serverUrl, {
  transports: ['websocket', 'polling'],
  autoConnect: true,
})

const normalizedName = computed(() => {
  return displayName.value.trim() || (role.value === 'admin' ? 'Support Admin' : 'Customer')
})

const activeRole = computed(() => {
  if (role.value === 'admin' && isAdminAuthenticated.value) return 'admin'
  return 'customer'
})

function joinRoom() {
  socket.emit('join_room', {
    room,
    role: activeRole.value,
    name: normalizedName.value,
  })
}

function rejoinRoom() {
  localStorage.setItem('chat-role', role.value)
  localStorage.setItem('chat-name', normalizedName.value)
  joinRoom()
}

function onRoleChange() {
  authMessage.value = ''
  if (role.value !== 'admin') {
    isAdminAuthenticated.value = false
    adminPassword.value = ''
    rejoinRoom()
    return
  }
  joinRoom()
}

function authenticateAdmin() {
  authMessage.value = ''
  socket.emit('authenticate_admin', { password: adminPassword.value })
}

function sendMessage() {
  if (!draft.value.trim()) return
  if (role.value === 'admin' && !isAdminAuthenticated.value) {
    authMessage.value = 'Authenticate as admin before sending admin messages.'
    return
  }
  socket.emit('send_message', { text: draft.value })
  draft.value = ''
}

function formatTime(ts) {
  return new Date(ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

onMounted(() => {
  socket.on('connect', joinRoom)
  socket.on('admin_auth_required', () => {
    if (role.value === 'admin' && !isAdminAuthenticated.value) {
      authMessage.value = 'Admin authentication required.'
    }
  })
  socket.on('admin_auth_result', ({ success }) => {
    isAdminAuthenticated.value = success
    if (!success) {
      authMessage.value = 'Invalid admin password.'
      return
    }
    authMessage.value = ''
    joinRoom()
  })
  socket.on('chat_history', (history) => {
    messages.value = history
  })
  socket.on('new_message', (message) => {
    messages.value.push(message)
  })
})

onBeforeUnmount(() => {
  socket.off('connect', joinRoom)
  socket.off('admin_auth_required')
  socket.off('admin_auth_result')
  socket.off('chat_history')
  socket.off('new_message')
  socket.disconnect()
})
</script>
