<template lang="pug">
div
  section
    h1 Hey, I'm Thien 👋
    div
      p I'm a software developer based in Ho Chi Minh city. Currently, I work for <a href="https://pangara.com" target="_blank" rel="noopener">Pangara</a>. My stack is <span class="laravel font-bold">Laravel</span>, <span class="vue">Vue.js</span>, and <span class="wp">WordPress</span>.
      p You can follow me on <a href="https://twitter.com/thisisthien" target="_blank" rel="noopener">Twitter</a>, see my code on <a href="https://github.com/tatthien" target="_blank" rel="noopener">Github</a>. I occasionally <a href="#notes">blog</a> too.
      p Outside of programming and helping my wife take care of our son, I enjoy playing soccer, collecting mechanical keycaps.

  section#notes
    h1 Notes
    post-list

  section#versions
    h1 Versions
    nav.tags
      a.btn.btn-sm(href="https://v1.thien.dev/" target="_blank" rel="noopener") v1
      a.btn.btn-sm(href="https://v2.thien.dev/" target="_blank" rel="noopener") v2
      a.btn.btn-sm(href="https://v3.thien.dev/" target="_blank" rel="noopener") v3
</template>

<script lang="ts">
import Vue from 'vue'
import PostList from '@/components/PostList.vue'

export default Vue.extend({
  components: {
    PostList,
  },
  head() {
    return {
      titleTemplate: 'Thien Nguyen - Software developer',
    }
  },
})
</script>

<style>
.laravel {
  color: #ff2d20;
}

.vue {
  color: #42b983;
}

.wp {
  color: #2da5ff;
}
</style>
