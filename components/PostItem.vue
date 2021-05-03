<template lang="pug">
nuxt-link.post-item( :to='`/posts/${post.id}`')
  span {{ post.title }}
  small.text-muted {{ post.createdAt | date }}
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Post } from '@/types'

export default Vue.extend({
  props: {
    post: {
      type: Object,
      required: true,
    } as PropOptions<Post>,
  },
})
</script>
