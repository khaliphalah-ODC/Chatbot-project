<template>
  <div id="fb-root"></div>
  <div
    ref="customerChatRef"
    class="fb-customerchat"
    attribution="biz_inbox"
    :page_id="SUPPORT_CONFIG.messengerPageId"
  ></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { SUPPORT_CONFIG } from '../config/support'

const customerChatRef = ref(null)
const sdkId = 'facebook-jssdk'

function loadMetaSdk() {
  window.fbAsyncInit = function () {
    const initOptions = {
      xfbml: true,
      version: 'v20.0',
    }

    if (SUPPORT_CONFIG.metaAppId) {
      initOptions.appId = SUPPORT_CONFIG.metaAppId
      initOptions.autoLogAppEvents = true
    }

    window.FB.init(initOptions)

    window.FB?.XFBML?.parse()
  }

  if (document.getElementById(sdkId)) {
    window.FB?.XFBML?.parse()
    return
  }

  const urls = [
    `https://connect.facebook.net/${SUPPORT_CONFIG.metaLocale}/sdk/xfbml.customerchat.js`,
    `https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js`,
    `https://connect.facebook.net/en_US/sdk.js`,
  ]

  let index = 0
  const script = document.createElement('script')
  const tryLoad = () => {
    if (index >= urls.length) {
      // eslint-disable-next-line no-console
      console.error(
        'Failed to load Meta Messenger SDK from all fallback URLs. Check DNS/adblock/firewall and Meta domain settings.'
      )
      return
    }

    script.id = sdkId
    script.async = true
    script.defer = true
    script.src = urls[index]
    script.onerror = () => {
      // eslint-disable-next-line no-console
      console.error(`Failed to load Meta Messenger SDK from: ${urls[index]}`)
      index += 1
      tryLoad()
    }
  }

  tryLoad()
  document.body.appendChild(script)
}

onMounted(() => {
  // Ensure runtime attributes are present before SDK parsing.
  if (customerChatRef.value) {
    customerChatRef.value.setAttribute('page_id', SUPPORT_CONFIG.messengerPageId)
  }

  loadMetaSdk()
})
</script>
