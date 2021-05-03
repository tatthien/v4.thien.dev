import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Post } from '@/types'
import client from '~/plugins/contentful'

export const state = () => ({
  posts: [] as Array<Post>,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  posts: (state) => state.posts,
}

export const mutations: MutationTree<RootState> = {
  UPDATE_POSTS: (state, posts: Array<Post>) => {
    state.posts = posts
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async getPosts({ commit }) {
    try {
      if (!client) {
        return
      }
      const response = await client.getEntries<any>({
        content_type: 'post',
      })

      if (response.items.length > 0) {
        const posts = response.items.map((item) => {
          return {
            id: item.sys.id,
            title: item.fields.title,
            body: item.fields.body,
            description: item.fields.description,
            createdAt: item.fields.createdAt,
            locale: item.fields.isVietnamese ? 'vi' : 'en',
          }
        })
        posts.sort((a: Post, b: Post) => {
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
        })
        commit('UPDATE_POSTS', posts)
      }
    } catch (err) {}
  },
}
