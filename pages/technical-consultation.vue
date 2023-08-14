<script setup>
import { tagPagesAPI } from '@/utils/posts'

const route = useRoute()
const { tag } = route.query
// 信息
const info = ref([])

onMounted(async () => {
  const pages = await tagPagesAPI(tag)
  info.value = pages
})

</script>

<template>
  <v-container class="container">
    <v-row v-if="info.length">
      <v-col cols="12" v-html="info[0].html"></v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.container {
  width: 60%;
  background-color: #f7f7f7;
  margin-top: 20px;
}
</style>
