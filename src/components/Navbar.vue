<template>
  <nav class="bg-orange-500 shadow-md fixed w-full z-50">
    <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo -->
      <h1 class="text-xl font-bold text-blue-600">
        <span class="text-red-500"><img src="../assets/ost/logo.jpg"  class="h-10" alt=""></span>  SupportCenter
      </h1>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex gap-6 text-gray-700 font-medium">
        <li class="hover:text-blue-600 cursor-pointer">Home</li>
        <li class="hover:text-blue-600 cursor-pointer"><a href="#faq"></a>FAQs</li>
        <li class="hover:text-blue-600 cursor-pointer">Contact</li>
      </ul>

      <!-- Mobile Menu Toggle -->
      <div class="md:hidden text-gray-700">
        <i
          :class="menuOpen ? 'fas fa-times text-2xl' : 'fas fa-bars text-2xl'"
          @click="toggleMenu"
        ></i>
      </div>
    </div>

    <!-- Mobile Menu -->
    <ul
      v-show="menuOpen"
      class="md:hidden bg-white shadow-md flex flex-col gap-4 px-4 py-4 text-gray-700 font-medium transition-all duration-300"
    >
      <li class="hover:text-blue-600 cursor-pointer" @click="closeMenu">Home</li>
      <li class="hover:text-blue-600 cursor-pointer" @click="closeMenu">FAQs</li>
      <li class="hover:text-blue-600 cursor-pointer" @click="closeMenu">Contact</li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};
</script>

<style>
/* Optional: smooth slide down for mobile menu */
ul[v-cloak] {
  display: none;
}
</style>
