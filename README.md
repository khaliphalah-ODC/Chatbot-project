# chat

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:

  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Chat Provider Setup

This project supports two website chat options:

- `internal` live chat (default, customer + admin chat directly on website)
- Meta Messenger Customer Chat plugin
- `vue-social-chat` launcher

Use a `.env.local` file to switch provider:

```sh
VITE_CHAT_PROVIDER=internal
VITE_CHAT_SERVER_URL=http://localhost:3001
VITE_SUPPORT_ROOM=support-main
VITE_ENABLE_META_MESSENGER_ALONGSIDE_INTERNAL=true
```

For Meta plugin instead:

```sh
VITE_CHAT_PROVIDER=meta
VITE_META_APP_ID=your_meta_app_id
VITE_META_LOCALE=en_US
```

Notes for Meta Customer Chat:

- `src/config/support.js` contains `messengerPageId` used by the plugin.
- In Meta Business settings, add your website domain to the allowed domains list.
- If domain/page settings are incomplete, the plugin may not render in production.

## Internal Live Chat (Website-to-Website)

Run two terminals:

```sh
npm run chat:server
```

```sh
npm run dev
```

Open the site in two browser windows:

- Window A: choose role `Customer`
- Window B: choose role `Support/Admin`

Both can chat live directly inside the website.

### Admin authentication

Admin role now requires server-side password authentication.

- Default admin password is `admin123`.
- Set your own before starting the chat server:

```sh
CHAT_ADMIN_PASSWORD=your_strong_password npm run chat:server
```
