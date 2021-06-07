export default {
  target: 'server',
  ssr: true,
  head: {
    titleTemplate: '%s - Thien Nguyen - Software developer',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `I'm a web developer living in Ho Chi Minh city. I'm currently working at Pangara.`,
      },
      {
        property: 'og:image',
        content:
          'https://user-images.githubusercontent.com/72242664/120949675-3c2fe080-c76f-11eb-87b6-ae2215ba0e30.jpg',
      },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:site', content: '@thisisthien' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Roboto+Slab:wght@400;700&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap',
      },
      {
        rel: 'stylesheet',
        href: '/css/hljs.css',
      },
    ],
  },
  css: ['@/assets/styles/app'],
  plugins: [
    '@/plugins/contentful',
    '@/plugins/posts',
    '@/plugins/filters',
    '@/plugins/isMobile',
  ],
  buildModules: ['@nuxt/typescript-build'],
  modules: ['@nuxtjs/axios'],
  axios: {},
  build: {},
}
