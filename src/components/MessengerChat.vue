<template>
  <div class="messenger-fallback-widget">
    <SocialChat
      icon
      :attendants="attendants"
    >
      <template #header>
        <div class="support-chat-header">
          Chat with support/admin
        </div>
      </template>
      <template #footer>
        <div class="support-chat-footer">
          If Messenger is unavailable, send us an email.
        </div>
      </template>
    </SocialChat>
  </div>
</template>

<script setup>
import { SocialChat } from 'vue-social-chat'
import image002 from '../assets/ost/image002.jpg'
import { SUPPORT_CONFIG } from '../config/support'

const attendants = [
  {
    app: 'messenger',
    label: 'Messenger support',
    name: SUPPORT_CONFIG.teamName,
    id: SUPPORT_CONFIG.messengerPageId,
    avatar: {
        src: image002,
        alt: 'Support team avatar'
    },
    icon: 'fa-brands fa-facebook-messenger',
    color: 'blue',
    background: 'blue'
  },
  {
    label: 'Email support',
    name: SUPPORT_CONFIG.supportEmail,
    href: `mailto:${SUPPORT_CONFIG.supportEmail}?subject=Website%20Support%20Request`,
    avatar: {
      src: image002,
      alt: 'Support email avatar'
    },
    color: '#374151',
    background: '#374151'
  }
]
</script>

<style scoped>
.support-chat-header {
  font-weight: 600;
}

.support-chat-footer {
  font-size: 0.85rem;
}

/* Keep Messenger launcher above the internal live chat button */
.messenger-fallback-widget :deep(.vsc-popup),
.messenger-fallback-widget :deep(.vsc-popup-button) {
  bottom: 96px;
}
</style>

