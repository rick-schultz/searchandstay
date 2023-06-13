// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Search & Stay - A happier way',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.css'
  ],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
  ],
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL,
      API_TOKEN: process.env.API_TOKEN,
    }
  },
  plugins: [
    { src: "@/plugins/aos", ssr: false, mode: "client" }
  ],
})
