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
   <Contact />
  

    <!-- Chat Components -->
    <InternalLiveChat v-if="useInternalChat" />
    <MetaMessengerChat v-if="useMetaChat" />
    <MessengerChat v-if="useMessengerChat" />

    <!-- footer -->
     <Footer />
  </div>
  
</template>

<script>


import MessengerChat from './components/MessengerChat.vue';
import MetaMessengerChat from './components/MetaMessengerChat.vue';
import InternalLiveChat from './components/InternalLiveChat.vue';

import Header from './components/Header.vue';
import MainContent from './components/MainContent.vue'
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import ProjectCard from './components/ProjectCard.vue';
import About from './components/About.vue';
import StaffSection from './components/StaffSection.vue';
import Contact from './components/Contact.vue';
import { SUPPORT_CONFIG } from './config/support';


export default {
  name: 'App',
  components: {
    MessengerChat,
    MetaMessengerChat,
    InternalLiveChat,
    Header,
     About,
    MainContent,
    Footer,
    Navbar,
    HeroSection,
    ProjectCard,
    StaffSection,
    Contact,
  
  },
  computed: {
    useInternalChat() {
      return SUPPORT_CONFIG.chatProvider === 'internal';
    },
    useMetaChat() {
      if (SUPPORT_CONFIG.chatProvider === 'meta') {
        return Boolean(SUPPORT_CONFIG.messengerPageId);
      }
      return SUPPORT_CONFIG.chatProvider === 'internal' && SUPPORT_CONFIG.enableMetaMessengerAlongsideInternal;
    },
    useMessengerChat() {
      return SUPPORT_CONFIG.chatProvider === 'vue-social-chat';
    },
  },
}
 
</script>
