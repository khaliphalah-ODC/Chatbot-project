<template>
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
  <div class="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full cursor-pointer shadow-lg">
    MessengerChat
  </div>
</template>

<script>
export default {
  name: 'MessengerChat',
  props: {
    // Replace with your Facebook Page ID
    pageId: {
      type: String,
      default: '89588222081560' // ⚠️ Replace this!
    },
    themeColor: {
      type: String,
      default: '#0084ff' // Facebook blue
    },
    loggedInGreeting: {
      type: String,
      default: 'Hi! How can we help you today?'
    },
    loggedOutGreeting: {
      type: String,
      default: 'Hi! We\'re here to answer any questions you may have.'
    }
  },
  mounted() {
    // Ensure Facebook SDK is loaded
    if (window.FB) {
      window.FB.XFBML.parse()
    }
  }
}
</script>

