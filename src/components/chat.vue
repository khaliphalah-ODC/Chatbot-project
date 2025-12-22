<template>

  <div>
    <!-- Floating chat button -->
    <div
      v-if="!open"
      @click="open = true"
      class="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg cursor-pointer z-50"
    >
   <i class="fa-solid fa-message"></i>
    </div>

    <!-- Chat window -->
    <div
      v-if="open"
      class="fixed bottom-4 right-4 w-72 bg-white rounded-lg shadow-xl flex flex-col z-50"
    >
      <!-- Header -->
      <div class="bg-blue-600 text-white p-3 flex justify-between items-center">
        <span>Messenger</span>
        <button @click="open = false">✕</button>
      </div>

      <!-- Messages -->
      <div class="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
        <div
          v-for="(msg, index) in messages"
          :key="index"
          :class="msg.from === 'user' ? 'text-right' : 'text-left'"
        >
          <span
            :class="msg.from === 'user'
              ? 'inline-block bg-blue-600 text-white px-3 py-1 rounded-lg'
              : 'inline-block bg-gray-200 text-black px-3 py-1 rounded-lg'"
          >
            {{ msg.text }}
          </span>
        </div>

        <!-- Typing indicator -->
        <div v-if="typing" class="text-left">
          <span class="inline-block bg-gray-200 px-3 py-1 rounded-lg italic">
            ...
          </span>
        </div>
      </div>

      <!-- Input -->
      <div class="p-2 border-t flex gap-2">
        <input
          v-model="input"
          @keyup.enter="send"
          placeholder="Type a message..."
          class="flex-1 border rounded px-2 py-1 text-sm"
        />
        <button
          @click="send"
          class="bg-blue-600 text-white px-3 rounded"
        >
          Send
        </button>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'

/* Controls whether the chat window is open */
const open = ref(false)

/* Stores the user input */
const input = ref('')

/* Controls the typing indicator */
const typing = ref(false)

/* Stores all chat messages */
const messages = ref([
  { from: 'bot', text: 'Hi! How can I help you?' }
])

/* Sends a message */
function send() {
  if (!input.value.trim()) return

  // Add user message
  const userText = input.value
  messages.value.push({ from: 'user', text: userText })
  input.value = ''

  // Show typing indicator
  typing.value = true

  // Simulate bot thinking time
  setTimeout(() => {
    typing.value = false
    messages.value.push({
      from: 'bot',
      text: getReply(userText)
    })
  }, 900)
}

/* Simple rule-based chatbot */
function getReply(text) {
  const response = text.toLowerCase()

  if (response.includes('hi') || response.includes('hello'))
    return 'Hello  How can I help you?'

  if (response.includes('price'))
    return 'Our prices are affordable '

  if (response.includes('service'))
    return 'We offer web and chatbot services.'

  if (response.includes('contact'))
    return 'You can contact us via Messenger or email.'

  if (response.includes('tell me more about your product'))
     return 'We are looking for a professional website developer to design and develop a fully functional e-commerce website with a powerful admin pane'


  return 'Thanks for your message! We will respond shortly.'
}
</script>



<template>
  <SocialChat
    icon
    position="right"
    :attendants="attendants"
  />
</template>

