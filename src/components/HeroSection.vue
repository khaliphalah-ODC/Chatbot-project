<template>
  <section
    class="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
    :style="{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
  >
    <!-- Hero Text -->
    <div>
      <h2 class="text-4xl font-extrabold text-black leading-tight">
        Open-Source Innovation <br />
        Empowering Communities
      </h2>

      <p class="mt-4 text-black text-lg font-bold leading-relaxed">
        OpenSource Team–Liberia builds accessible technology using open-source
        tools, STEM education, and innovation in engineering, environment,
        climate, and robotics.
      </p>

      <div class="mt-6 flex gap-4">
        <button
          class="border border-white-600 bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-black-700 transition"
        >
          Join the Community
        </button>

        <button
          class="border border-black bg-orange-600 text-white px-6 py-3 rounded-lg shadow hover:bg-black-700 transition"
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
import image01 from '../assets/ost/image01.jpg'
import image02 from '../assets/ost/image02.jpg'
import image03 from '../assets/ost/image03.jpg'
import image04 from '../assets/ost/image04.jpg'
import image05 from '../assets/ost/image05.jpg'
import image06 from '../assets/ost/image06.jpg'
import image07 from '../assets/ost/image07.jpg'
import image08 from '../assets/ost/image08.jpg'
import image09 from '../assets/ost/image09.jpg'
import image10 from '../assets/ost/image10.jpg'
import background from '../assets/ost/background.png'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const heroImages = ref([image07, image08, image05, image09, image03, image01, image04, image02, image06, image10])
</script>
