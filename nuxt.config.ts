// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/ui', 'nuxt-module-eslint-config'],
  colorMode: {
    preference: 'light',
  },
  vue: {
    propsDestructure: true,
  },
})
