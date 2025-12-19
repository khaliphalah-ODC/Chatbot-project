<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    
<!-- navbar -->
 <Navbar />

 <!-- header -->
   <Header />

<!-- Hero section -->
 <HeroSection />
   <!-- main -->
    <About />
   
     <ProjectCard />
   <MainContent />

   <!-- Staff Section -->
   <StaffSection />
  

    <!-- Messenger Chat Component -->
    <MessengerChat />

    <!-- footer -->
     <Footer />
  </div>
  
</template>

<script>


import MessengerChat from './components/MessengerChat.vue';

import Header from './components/Header.vue';
import MainContent from './components/MainContent.vue'
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import ProjectCard from './components/ProjectCard.vue';
import About from './components/About.vue';
import StaffSection from './components/StaffSection.vue';


export default {
  name: 'App',
  components: {
    MessengerChat,
    Header,
     About,
    MainContent,
    Footer,
    Navbar,
    HeroSection,
    ProjectCard,
    StaffSection,
   



  },
}
 
</script>



