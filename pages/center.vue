<script setup>
import Banner from '@/components/Banner/index.vue'
import { ref } from 'vue'
const info = ref(
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fuga doloribus vero! Voluptate, labore. Nonlaudantium deserunt quam molestiae, labore unde dicta ad corporis tempora esse earum quasi harum odit!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quaerat modi vitae molestias itaque impeditquam soluta rem, id autem aut inventore quis quia ea ab fugit exercitationem nisi voluptatem!Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus architecto ullam accusantiumexpedita, deserunt, officia suscipit aut exercitationem veniam placeat odio harum ducimus natus, animi nonmagni quas cumque. Molestias?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe cumque nihil error aliquid exercitationemipsam aperiam eos, veritatis nulla cupiditate deserunt dolor atque accusantium rem. Unde atque magnamquibusdam quidem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam voluptatem qui magnam, sint architectoeum doloribus a! Adipisci earum eum sint porro minus, repellendus nesciunt sequi beatae iste quae quisquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente placeat accusantium deserunt odio fuga,repellat reiciendis natus consequatur vel nisi sit aliquid itaque dolore quae laboriosam dicta beatae exdolorum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quasi veritatis sunt accusamus, vitaequidem esse saepe eveniet officia nihil placeat delectus voluptatem dignissimos iusto cupiditate repudiandaeautem sint praesentium!'
)
</script>

<template>
  <Banner />
  <v-container class="container">
    <v-row>
      <v-col cols="12">
        {{ info }}
      </v-col>
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
