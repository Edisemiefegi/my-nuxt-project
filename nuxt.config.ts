// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/main.css', 'primeicons/primeicons.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'nuxt dojo ',
      meta: [
        {
          name: 'description', content: 'everything about nuxt 3'
        },
      ],
    }
  }

})
