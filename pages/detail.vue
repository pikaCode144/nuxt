<script setup>
import Banner from '@/components/Banner/index.vue'
import { postInfoAPI, fetchGhostPosts } from '@/utils/posts'

const route = useRoute()
const { id } = route.query
const detailRef = ref({})

const page = await postInfoAPI(id)
detailRef.value = page.data.value.posts[0]
// onMounted(async () => {
//   const page = await postInfoAPI(id)
//   detailRef.value = page
// })
</script>

<template>
  <Banner />
  <div class="detail">
    <div class="inner" v-if="detailRef.title" v-html="detailRef.html"></div>
  </div>
</template>

<style scoped lang="scss">
.detail {
  display: flex;
  justify-content: center;
  max-width: 1400px;

  .inner {
    max-width: 900px;
    padding: 40px 0;
  }
}
</style>
