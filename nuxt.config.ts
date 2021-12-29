import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    css: [
        '@/node_modules/element-plus/theme-chalk/index.css',
        '@/node_modules/element-plus/theme-chalk/display.css'
      ],
      typescript: {
        strict: true
      },
})
