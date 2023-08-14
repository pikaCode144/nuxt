<script setup>
import { newsCenterBanner } from '@/utils/posts'
// 获取轮播图的数据
const bannersRef = ref([])
onMounted(async () => {
  const posts = await newsCenterBanner()
  bannersRef.value = posts[0].title
})
</script>

<template>
  <div class="banner">
    <v-img :src="bannersRef"></v-img>
  </div>
</template>

<style scoped></style>
