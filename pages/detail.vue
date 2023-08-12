<script setup>
const route = useRoute()
const { id } = route.query
console.log(id)
const detailRef = ref({})
onMounted(async () => {
  const post = await api.posts.read({id})
  console.log(post)
  detailRef.value = post
})

</script>

<template>
  <v-container style="max-width: 1400px;" class="detail">
    <div v-if="detailRef.title" v-html="detailRef.html"></div>
  </v-container>
</template>

<style scoped lang="scss">

</style>
