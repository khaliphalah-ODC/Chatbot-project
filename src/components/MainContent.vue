<template>
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="#fag">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Left Side: FAQs -->
      <div class="bg-white rounded-lg shadow-lg p-6 lg:p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>
        
        <div class="space-y-4">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="border-b border-gray-200 pb-4 last:border-0"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full text-left flex justify-between items-center focus:outline-none"
            >
              <h3 class="text-lg font-semibold text-gray-800 pr-4">
                {{ faq.question }}
              </h3>
              <span class="text-blue-600 text-xl font-bold flex-shrink-0">
                {{ activeFaq === index ? '−' : '+' }}
              </span>
            </button>
            <div
              v-if="activeFaq === index"
              class="mt-3 text-gray-600 leading-relaxed"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>

        <!-- Info Box -->
        <div class="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p class="text-sm text-blue-800">
            <strong> <i class="fa-solid fa-lightbulb"></i> Tip:</strong> Can't find what you're looking for? 
            Click the Messenger icon in the bottom right corner to chat with our team!
          </p>
        </div>
      </div>

      <!-- Right Side: Information Card -->
      <div class="bg-white rounded-lg shadow-lg p-6 lg:p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">
          How to Get Help
        </h2>
        
        <div class="space-y-6">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100">
                <span class="text-blue-600 text-xl"><i class="fa-solid fa-message"></i></span>
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-semibold text-gray-900">
                Live Chat Support
              </h3>
              <p class="text-gray-600 mt-1">
                Click the Messenger icon to start a conversation. Our team is available 24/7.
              </p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-10 w-10 rounded-full bg-green-100">
                <span class="text-green-600 text-xl"><i class="fa-solid fa-bolt"></i></span>
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-semibold text-gray-900">
                Quick Response
              </h3>
              <p class="text-gray-600 mt-1">
                Get instant answers to your questions from our automated assistant.
              </p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-10 w-10 rounded-full bg-purple-100">
                <span class="text-purple-600 text-xl"><i class="fa-solid fa-mobile-screen"></i>
               </span>
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-semibold text-gray-900">
                Mobile Friendly
              </h3>
              <p class="text-gray-600 mt-1">
                Chat with us from any device - desktop, tablet, or mobile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'

// FAQ data
const faqs = ref([
  {
    question: 'What is OpenSource Team–Liberia?',
    answer:
      'OpenSource Team–Liberia is a community-driven organization focused on technology, engineering, climate action, robotics, and open-source innovation. We build solutions that empower communities through digital literacy and STEM.'
  },
  {
    question: 'What kind of projects do you work on?',
    answer:
      'We work on open-source software, robotics projects, environmental and climate-tech solutions, educational platforms, and real-world engineering initiatives that solve local challenges.'
  },
  {
    question: 'Who can join OpenSource Team–Liberia?',
    answer:
      'Anyone interested in technology, engineering, environment, climate, robotics, or open-source collaboration can join — students, professionals, and beginners are all welcome.'
  },
  {
    question: 'Do you offer training or mentorship?',
    answer:
      'Yes. We provide mentorship, hands-on learning, and digital literacy training to help members grow their skills in software development, engineering, and emerging technologies.'
  },
  {
    question: 'How can I contact or collaborate with the team?',
    answer:
      'You can reach us through the Messenger chat, social media, or by joining our open-source projects and community discussions.'
  }
])


// Track which FAQ is currently open
const activeFaq = ref(null)

// Toggle FAQ open/close
const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}
</script>
