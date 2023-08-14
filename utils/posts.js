import { api } from '@/utils/ghostContentAPI'

// 获取导航栏的数据
export const navBarsAPI = async () => {
  return await api.posts
    .browse({ filter: 'tag:nav-bars', order: 'published_at DESC' })
    .catch((err) => console.error(err))
}

// 获取轮播图、走马灯的数据
export const carouselAPI = async () => {
  return await api.posts
    .browse({ limit: 5, filter: 'tag:carousel' })
    .catch((err) => console.error(err))
}

// 获取新闻中心的大图片
export const newsCenterBanner = async () => {
  return await api.posts
    .browse({ limit: 5, filter: 'tag:news-center-banner' })
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

// 按tag获取数据
export const tagsAPI = async (tag) => {
  return await api.pages
  .browse({
    filter: `tag:${tag}`,
    order: 'published_at DESC',
  })
  .catch((err) => console.error(err))
}
