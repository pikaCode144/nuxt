<script setup>
import { BannerAPI } from '@/utils/posts'
// 获取轮播图的数据
const bannersRef = ref([])
onMounted(async () => {
  const posts = await BannerAPI()
  bannersRef.value = posts.map((post) => post.title)
})

</script>

<template>
  <v-carousel
    hide-delimiters
    v-if="bannersRef.length"
    cycle
    height='40vh'
  >
    <template v-slot:prev="{ props }">
      <img src="@/assets/svg/arrow-left.svg" @click="props.onClick" style="cursor: pointer;" alt="">
    </template>
    <template v-slot:next="{ props }">
      <img src="@/assets/svg/arrow-right.svg" @click="props.onClick" style="cursor: pointer;" alt="">
    </template>
    <template v-for="banner in bannersRef" :key="banner">
      <v-carousel-item>
        <v-img :src="banner" />
      </v-carousel-item>
    </template>
  </v-carousel>
</template>

<style scoped></style>
