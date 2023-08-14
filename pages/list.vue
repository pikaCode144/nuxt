<script setup>
const route = useRoute()
const { index } = route.query
const pageKeyRef = ref('')
onMounted(() => {
  switch (index) {
    case 0:
      pageKeyRef.value = ''
  }
})
</script>

<template>
  <v-row>
    <v-col cols="3" class="py-2">
      <v-btn-toggle
        rounded="0"
        color="deep-purple-accent-3"
        group
        class="change-btn"
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
</template>

<style scoped lang="scss">
.change-btn {
  display: flex;
  flex-direction: column;
}
</style>
