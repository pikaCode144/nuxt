import { api } from '@/utils/ghostContentAPI'

export const navBarsAPI = async () => {
  return await api.posts.browse({ filter: 'tag:nav-bars', order: 'published_at DESC' }).catch((err) => console.error(err))
}

export const BannerAPI = async () => {
  return await api.posts.browse({ limit: 5, filter: 'tag:banner' }).catch((err) => console.error(err))
}

export const bulletinBoardAPI = async () => {
  return await api.posts.browse({ limit: 5, filter: 'tag:bulletin-board', order: 'published_at DESC' }).catch((err) => console.error(err))
}

export const newsExpressAPI = async () => {
  return await api.posts.browse({ limit: 5, filter: 'tag:news-express', order: 'published_at DESC' }).catch((err) => console.error(err))
}
