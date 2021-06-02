<template lang="pug">
div
  nav
    a(
      v-for="item in collection"
      :key="item"
      href="#"
      :class="{ active: item === selectedCollection }"
      @click.prevent="selectedCollection = item"
    ) {{ item }}
  post-item(
    v-for='post in filteredPosts'
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
  data() {
    return {
      collection: ['all', 'en', 'vi'],
      selectedCollection: 'all',
    }
  },
  computed: {
    posts(): Array<Post> {
      return this.$store.getters.posts
    },
    filteredPosts(): Array<Post> {
      return this.posts.filter((post) => {
        if (this.selectedCollection === 'all') {
          return post
        }

        return post.locale === this.selectedCollection
      })
    },
  },
})
</script>

<style lang="scss" scoped>
nav {
  margin-bottom: 1rem;
  a {
    border: none;
    font-weight: normal;
    margin-right: 0.5rem;
    opacity: 0.6;
    &.active {
      opacity: 1;
    }
  }
}
</style>
