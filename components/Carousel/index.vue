<script setup>
import { carouselAPI, fetchGhostPosts } from '@/utils/posts'
// 获取轮播图的数据
const carouselRef = ref([])

const posts = await fetchGhostPosts('carousel')
carouselRef.value = posts.data.value.posts.map((post) => post.title)
// onMounted(async () => {
//   const posts = await carouselAPI()
//   carouselRef.value = posts.map((post) => post.title)
// })

</script>

<template>
  <v-carousel
    hide-delimiters
    v-if="carouselRef.length"
    cycle
    height='20vw'
  >
    <template v-slot:prev="{ props }">
      <img src="@/assets/svg/arrow-left.svg" @click="props.onClick" style="cursor: pointer; width: 4vw;" alt="">
    </template>
    <template v-slot:next="{ props }">
      <img src="@/assets/svg/arrow-right.svg" @click="props.onClick" style="cursor: pointer; width: 4vw;" alt="">
    </template>
    <template v-for="carousel in carouselRef" :key="carousel">
      <v-carousel-item>
        <v-img :src="carousel" />
      </v-carousel-item>
    </template>
  </v-carousel>
</template>

<style scoped></style>
