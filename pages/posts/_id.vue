<template lang="pug">
div
  h1 {{ post.title }}
  .prose(v-html="content")
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import marked from 'marked'
import hljs from 'highlight.js'
import { Post } from '~/types'

export default Vue.extend({
  data() {
    return {
      id: this.$route.params.id,
    }
  },
  head(): MetaInfo {
    return {
      title: this.post.title,
      meta: [{ property: 'og:title', content: this.post.title }],
    }
  },
  computed: {
    post(): Post {
      return this.$store.getters.posts.find((el: Post) => el.id === this.id)
    },
    content(): string {
      marked.setOptions({
        renderer: new marked.Renderer(),
        highlight(code: string, lang: string) {
          const language = hljs.getLanguage(lang) ? lang : 'plaintext'
          return hljs.highlight(code, { language }).value
        },
      })

      return marked(this.post.body)
    },
  },
})
</script>

<style scoped>
h1 {
  margin-bottom: 2rem;
}
</style>
