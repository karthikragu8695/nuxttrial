// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  
  devtools: { enabled: true },
  
  
  build: {
    transpile: ['vuetify'],
  },

  modules: [
    '@nuxt/content',
    
    '@nuxtjs/supabase',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    }, 
    '@nuxtjs/tailwindcss',
  ],

  supabase: {
    url: 'https://myizzcmzjfnzaldgrqgw.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15aXp6Y216amZuemFsZGdycWd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ5NTU0NDYsImV4cCI6MjAyMDUzMTQ0Nn0.HndRyeK439BZTIxCNv02NFXExsalHFvZnHhR2YES34E',
    redirectOptions: {
      login: '/auth',
      callback: '/',
      exclude: [],
    }
  },
  
  

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

})
