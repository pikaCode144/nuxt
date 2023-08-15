<script setup>
import { newsCenterBanner, fetchGhostPosts } from '@/utils/posts'
// 获取轮播图的数据
const bannersRef = ref([])

const posts = await fetchGhostPosts('news-center-banner')
bannersRef.value = posts.data.value.posts[0].title
// onMounted(async () => {
//   const posts = await newsCenterBanner()
//   bannersRef.value = posts[0].title
// })
</script>

<template>
  <div class="banner">
    <v-img :src="bannersRef"></v-img>
  </div>
</template>

<style scoped></style>
