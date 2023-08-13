import { api } from '@/utils/ghostContentAPI'

// 获取导航栏的数据
export const navBarsAPI = async () => {
  return await api.posts
    .browse({ filter: 'tag:nav-bars', order: 'published_at DESC' })
    .catch((err) => console.error(err))
}

// 获取轮播图的数据
export const BannerAPI = async () => {
  return await api.posts
    .browse({ limit: 5, filter: 'tag:banner' })
    .catch((err) => console.error(err))
}

// 获取公告栏的数据
export const bulletinBoardAPI = async () => {
  return await api.pages
    .browse({
      limit: 5,
      filter: 'tag:bulletin-board',
      order: 'published_at DESC',
    })
    .catch((err) => console.error(err))
}

// 获取新闻速递的数据
export const newsExpressAPI = async () => {
  return await api.pages
    .browse({
      limit: 5,
      filter: 'tag:news-express',
      order: 'published_at DESC',
    })
    .catch((err) => console.error(err))
}

// 获取详细页面的数据
export const pageInfoAPI = async (id) => {
  return await api.pages.read({ id }).catch((err) => console.error(err))
}
