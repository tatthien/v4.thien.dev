import { Context } from '@nuxt/types'

declare module 'vue/types/vue' {
  interface Vue {
    $isMobile(): boolean
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $isMobile(): boolean
  }
  interface Context {
    $isMobile(): boolean
  }
}

const isMobile = (context: Context, inject: any) => {
  const ua = process.server
    ? context.req.headers['user-agent']
    : navigator.userAgent
  const regex = /Android|Mobi/i
  inject('isMobile', () => regex.test(ua || ''))
}

export default isMobile
