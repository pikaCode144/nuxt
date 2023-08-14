<script setup>
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'
</script>

<template>
  <div>
    <v-app style="margin-top: 60px;">
      <Header />
      <NuxtPage />
      <Footer />
    </v-app>
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
