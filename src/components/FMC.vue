<template>
  <!-- SINGLE ROOT -->
  <div>
    <!-- Facebook Customer Chat Plugin -->
    <div
      class="fb-customerchat"
      :page_id="pageId"
      :theme_color="themeColor"
      :logged_in_greeting="loggedInGreeting"
      :logged_out_greeting="loggedOutGreeting"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'MessengerChat',
  props: {
    pageId: {
      type: String,
      default: '20531316728' // Demo Page ID (OK for presentation)
    },
    themeColor: {
      type: String,
      default: '#0084ff'
    },
    loggedInGreeting: {
      type: String,
      default: 'Hi! How can OpenSource Team–Liberia help you today?'
    },
    loggedOutGreeting: {
      type: String,
      default: 'Welcome! Please log in to chat with us.'
    }
  },
  mounted() {
    if (window.FB) {
      window.FB.XFBML.parse()
    }
  }
}
</script>
