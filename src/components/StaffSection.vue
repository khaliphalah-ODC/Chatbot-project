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
import image1 from '../assets/heroImages/image1.jpeg'
import image2 from '../assets/heroImages/image2.png'
import image3 from '../assets/heroImages/image3.png'

const staffMembers = ref([
  { id: 1, name: "Khaliphalah Bility", position: "Founder & CEO", image: image1 },
  { id: 2, name: "Davina Johnson", position: "Head of STEM Programs", image: image2 },
  { id: 3, name: "Samuel Doe", position: "Lead Developer", image: image3 },
  { id: 3, name: "Samuel Doe", position: "Lead Developer", image: image3 },
]);
</script>
<style scoped>

</style>