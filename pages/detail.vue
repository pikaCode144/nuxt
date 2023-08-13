<script setup>
import { pageInfoAPI } from '@/utils/posts'

const route = useRoute()
const { id } = route.query
const detailRef = ref({})
onMounted(async () => {
  const page = await pageInfoAPI(id)
  console.log(page)
  detailRef.value = page
})

</script>

<template>
  <v-container style="max-width: 1400px;" class="detail">
    <div v-if="detailRef.title" v-html="detailRef.html"></div>
  </v-container>
</template>

<style scoped lang="scss">

</style>
