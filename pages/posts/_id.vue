<template lang="pug">
div
  h1 {{ post.title }}
  .prose(v-html="$md.render(post.body)")
</template>

<script lang="ts">
import Vue from 'vue'
import { Post } from '@/types'
import { MetaInfo } from 'vue-meta'

export default Vue.extend({
  data() {
    return {
      id: this.$route.params.id,
    }
  },
  head(): MetaInfo {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/img/home.jpg',
        },
      ],
    }
  },
  computed: {
    post(): Post {
      return this.$store.getters.posts.find((el: Post) => el.id === this.id)
    },
  },
})
</script>

<style scoped>
h1 {
  margin-bottom: 2rem;
}
</style>
