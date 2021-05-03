import { Context } from '@nuxt/types'

export default async (ctx: Context) => {
  await ctx.store.dispatch('getPosts')
}
