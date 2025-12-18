<template>
  <section class="max-w-7xl mx-auto p-8">
    <h2 class="text-3xl font-bold text-brand.brown mb-8 text-center">
      Our Projects
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-brand.white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-300"
      >
        <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover" />
        <div class="p-6">
          <h3 class="text-xl font-bold text-brand.brown mb-2">{{ project.title }}</h3>
          <p class="text-brand.brown">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>

import { ref } from "vue";
import image01 from '../assets/ost/image01.jpg'
import image02 from '../assets/ost/image02.jpg'
import image03 from '../assets/ost/image03.jpg'
import image04 from '../assets/ost/image04.jpg'
import image07 from '../assets/ost/image07.jpg'
import image08 from '../assets/ost/image08.jpg'


const projects = ref([
  {
    id: 1,
    title: "Digital Literacy Program",
    description:
      "Empowering communities with skills in coding, digital tools, and open-source technology.",
    image: image01,
  },
  {
    id: 2,
    title: "Open-Source STEM Kits",
    description:
      "Providing hands-on STEM kits to schools and learning centers in underserved areas.",
    image: image02,
  },
  {
    id: 3,
    title: "Community App Development",
    description:
      "Building mobile apps that solve real-world problems for local communities.",
    image: image03,
  },

  {
    id: 4,
    title: "Community App Development",
    description:
      "Building mobile apps that solve real-world problems for local communities.",
    image: image04,
  },
    {
        id: 5,
        title: "Digital Literacy Program",
        description:
        "Empowering communities with skills in coding, digital tools, and open-source technology.",
        image: image07,
    },
    {
        id: 6,
        title: "Open-Source STEM Kits",
        description:
        "Providing hands-on STEM kits to schools and learning centers in underserved areas.",
        image: image08,
    },
]);

</script>
