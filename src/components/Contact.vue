<template>
  <section class="max-w-6xl mx-auto px-4 py-16">
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900">
        Contact OpenSource-ODC
      </h1>
      <p class="mt-4 text-gray-600">
        Let's collaborate and build open solutions together.
      </p>
    </div>

    <!-- Contact Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      <!-- Messenger -->
      <a
        href="https://m.me/910048368859450"
        target="_blank"
        class="group bg-white rounded-2xl p-6 shadow hover:shadow-lg transition text-center"
      >
        <div class="text-4xl mb-4"><i class="fas fa-message"></i>
</div>
        <h3 class="text-lg font-semibold text-gray-800">
          Messenger
        </h3>
        <p class="text-gray-500 mt-2">
          Chat with us in real time
        </p>
      </a>

      <!-- Email -->
      <a
        href="mailto:opensource@odc.org"
        class="group bg-white rounded-2xl p-6 shadow hover:shadow-lg transition text-center"
      >
        <div class="text-4xl mb-4"><i class="fas fa-envelope"></i>
</div>
        <h3 class="text-lg font-semibold text-gray-800">
          Email
        </h3>
        <p class="text-gray-500 mt-2">
          opensource@gmail.com
        </p>
      </a>

      <!-- GitHub -->
      <a
        href="https://github.com/opensource-odc"
        target="_blank"
        class="group bg-white rounded-2xl p-6 shadow hover:shadow-lg transition text-center"
      >
        <div class="text-4xl mb-4"><i class="fab fa-github"></i>
</div>
        <h3 class="text-lg font-semibold text-gray-800">
          GitHub
        </h3>
        <p class="text-gray-500 mt-2">
          Contribute or report issues
        </p>
      </a>
    </div>

    <!-- Contact Form -->
    <div class="max-w-2xl mx-auto bg-white rounded-2xl shadow p-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Send Us a Message
      </h2>

      <form @submit.prevent="submitForm" class="space-y-4">
        <input
          v-model="name"
          type="text"
          placeholder="Your Name"
          required
          class="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          v-model="email"
          type="email"
          placeholder="Your Email"
          required
          class="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          v-model="message"
          placeholder="Your Message"
          required
          rows="4"
          class="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <button
          type="submit"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const submitForm = () => {
  console.log({
    name: name.value,
    email: email.value,
    message: message.value
  })

  alert('Message sent successfully!')
  name.value = ''
  email.value = ''
  message.value = ''
}
</script>
