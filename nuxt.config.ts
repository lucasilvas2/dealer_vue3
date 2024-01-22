// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    // '~/node_modules/vue-chartjs'
  ],
  css: [
    '~/assets/css/main.css'
  ],
  plugins: [
    // { src: '~/node_modules/chart.js', mode: 'client' },
    // { src: '~/node_modules/vue-chartjs', mode: 'client' }
 ],
})
