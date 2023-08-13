<script setup>
const route = useRoute()
const { index } = route.query
onMounted(() => {

})
</script>

<template>
  <v-container style="max-width: 1400px;">
    <v-row>
      <v-col cols="3" class="py-2">
        <v-btn-toggle
          v-model="text"
          rounded="0"
          color="deep-purple-accent-3"
          group
        >
          <v-btn value="left">
            Left
          </v-btn>

          <v-btn value="center">
            Center
          </v-btn>

          <v-btn value="right">
            Right
          </v-btn>

          <v-btn value="justify">
            Justify
          </v-btn>
        </v-btn-toggle>
      </v-col>
      <v-col>
        
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">

</style>
