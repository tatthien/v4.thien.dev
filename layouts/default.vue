<template lang="pug">
.container
  app-cursor
  header.site-header
    nuxt-link(to="/")
      svg(width="32" height="32" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg")
        circle(cx="34" cy="34" r="34" fill="#A8FF1A")
      span.sr Logo
  main
    nuxt
</template>

<script lang="ts">
import Vue from 'vue'
import AppCursor from '@/components/AppCursor.vue'

export default Vue.extend({
  components: {
    AppCursor,
  },
  head() {
    return {
      titleTemplate: '%s - Thien Nguyen - Web developer',
    }
  },
})
</script>
