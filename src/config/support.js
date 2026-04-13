export const SUPPORT_CONFIG = {
  // internal = in-website realtime chat.
  // meta = Meta Customer Chat plugin.
  // any other value falls back to vue-social-chat.
  chatProvider: import.meta.env.VITE_CHAT_PROVIDER || 'internal',
  enableMetaMessengerAlongsideInternal:
    String(import.meta.env.VITE_ENABLE_META_MESSENGER_ALONGSIDE_INTERNAL || 'true') === 'true',
  teamName: 'OpenSource Team-Liberia',
  supportEmail: 'opensource@gmail.com',
  messengerPageId: import.meta.env.VITE_MESSENGER_PAGE_ID || '910048368859450',
  messengerUrl: import.meta.env.VITE_MESSENGER_URL || 'https://m.me/910048368859450',
  metaAppId: import.meta.env.VITE_META_APP_ID || '',
  metaLocale: import.meta.env.VITE_META_LOCALE || 'en_US',
}

export const getSupportMailto = ({ name = '', email = '', message = '' } = {}) => {
  const subject = encodeURIComponent(`Support request from ${name || 'website visitor'}`)
  const body = encodeURIComponent(
    `Name: ${name || '-'}\nEmail: ${email || '-'}\n\nMessage:\n${message || '-'}`
  )

  return `mailto:${SUPPORT_CONFIG.supportEmail}?subject=${subject}&body=${body}`
}
