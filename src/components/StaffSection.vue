<template>
  <section class="max-w-7xl mx-auto px-4 py-16">
    <h2 class="text-3xl font-bold text-brand.brown mb-10 text-center">
      Meet Our Team
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="staff in staffMembers"
        :key="staff.id"
        class="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 bg-brand.white"
      >
        <!-- Staff Image -->
        <img
          :src="staff.image"
          :alt="staff.name"
          class="w-full h-64 object-cover"
        />

        <!-- Name & Position Below Image -->
        <div class="p-6 text-center">
          <h3 class="text-xl font-bold text-brand.brown mb-1">{{ staff.name }}</h3>
          <p class="text-gray-700">{{ staff.position }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// Staff images
import image11  from '../assets/ost/image11.jpg'
import image12  from '../assets/ost/image12.jpg'
import image13  from '../assets/ost/image13.jpg'

const staffMembers = ref([
  { id: 1, name: "Sam", position: "Founder and CEO", image: image13 },
  { id: 2, name: "Delbra B. Ukatu", position: "Head of finance", image: image11 },
  { id: 3, name: "Honey Bunch", position: "Project Team Lead", image: image12},
 
]);
</script>
<style scoped>

</style>