<template lang="pug">
div
  section
    h1 Hey, I'm Thien 👋
    div
      p I'm a web developer living in Ho Chi Minh city. Currently, I work for <a href="https://pangara.com" target="_blank">Pangara</a>. My choice of stack is <span class="laravel font-bold">Laravel</span>, <span class="vue">Vue.js</span> and <span class="wp">WordPress</span>.
      p You can follow me on <a href="https://twitter.com/thisisthien" target="_blank">Twitter</a>, see my code on <a href="https://github.com/tatthien" target="_blank">Github</a>. I occasionally <a href="#notes">blog</a> too.
      p Out side of programming and helping my wife take care of our son, I enjoy playing soccer, collecting machanical keycaps.

  section#notes
    h1 Notes
    post-list

  section#versions
    h1 Versions
    nav.tags
      a.btn.btn-sm(href="https://v1.thien.dev/" target="_blank") v1
      a.btn.btn-sm(href="https://v2.thien.dev/" target="_blank") v2
      a.btn.btn-sm(href="https://v3.thien.dev/" target="_blank") v3
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
      title: 'Thien Nguyen',
      titleTemplate: '%s - Web developer',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `I'm a web developer living in Ho Chi Minh city. I'm currently working at Pangara.`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/img/home.jpg',
        },
      ],
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
  color: #117ac9;
}
</style>
