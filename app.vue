<script setup>
import Header from '@/components/Header/index.vue'
import Banner from '@/components/Banner/index.vue'
import Footer from '@/components/Footer/index.vue'
</script>

<template>
  <div>
    <v-layout class="rounded rounded-md app-layout">
      <Header />
      <v-main class="d-flex align-center justify-center app-main">
        <Banner />
        <NuxtPage />
      </v-main>
      <Footer />
    </v-layout>
  </div>
</template>

<style scoped lang="scss">
.app-layout {
  flex-direction: column;

  .app-main {
    flex-direction: column;
  }
}

</style>
