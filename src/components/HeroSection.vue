<template>
  <section
    class="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
    :style="{ backgroundImage: `url(${image07})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
  >
    <!-- Hero Text -->
    <div>
      <h2 class="text-4xl font-extrabold text-gray-900 leading-tight">
        Open-Source Innovation <br />
        Empowering Communities
      </h2>

      <p class="mt-4 text-gray-600 text-lg">
        OpenSource Team–Liberia builds accessible technology using open-source
        tools, STEM education, and innovation in engineering, environment,
        climate, and robotics.
      </p>

      <div class="mt-6 flex gap-4">
        <button
          class="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Join the Community
        </button>

        <button
          class="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
        >
          Explore Projects
        </button>
      </div>
    </div>

    <!-- Hero Swiper -->
    <div class="rounded-xl overflow-hidden shadow-lg">
      <Swiper
        :modules="[Autoplay, Pagination]"
        :autoplay="{ delay: 3500, disableOnInteraction: false }"
        :loop="true"
        pagination
        class="h-[260px] md:h-[350px] lg:h-[400px]"
      >
        <SwiperSlide
          v-for="(image, index) in heroImages"
          :key="index"
        >
          <img
            :src="image"
            class="w-full h-full object-cover"
            alt="OpenSource Team Liberia project"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Images (Open-source, tech, STEM, environment, robotics)
import image1 from '../assets/heroImages/image1.jpeg'
import image2 from '../assets/heroImages/image2.png'
import image07 from '../assets/ost/image07.jpg'
//import image08 from '../assets/ost/image08.jpg'
import image09 from '../assets/ost/image09.jpg'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const heroImages = ref([image1, image2, image09])
</script>
