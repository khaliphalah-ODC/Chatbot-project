<template>
  <SocialChat
    icon
    position="right"
    :attendants="attendants"
  />
</template>

<script setup>
import { SocialChat } from 'vue-social-chat'
import image001 from '../assets/ost/image001.png'

const attendants = [
  {
    app: 'messenger',
    label: 'Chat with OpenSource Team–Liberia',
    name: 'OpenSource Team–Liberia',
    url: 'https://m.me/910048368859450',
    avatar: {
        src: image001,
        alt: 'OpenSource Team–Liberia Avatar'
    },
    icon: 'fa-brands fa-facebook-messenger',
    color: '#0084ff'
  }
]
</script>
