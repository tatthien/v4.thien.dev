<template lang="pug">
div
  header.page-header
    h1 Blog
    p.text-muted A place where I share my perspective in life, work & coding.
  div
    post-item(
      v-for='post in posts'
      :key='post.id'
      :post='post'
    )
</template>

<script lang="ts">
import Vue from 'vue'
import PostItem from '@/components/PostItem.vue'
import { Post } from '~/types'

export default Vue.extend({
  components: {
    PostItem,
  },
  head() {
    return {
      title: 'Blog',
      meta: [{ property: 'og:title', content: 'Blog' }],
    }
  },
  computed: {
    posts(): Array<Post> {
      return this.$store.getters.posts
    },
  },
})
</script>
