<script setup>
import { fetchGhostPosts } from '@/utils/posts'
// 获取导航栏数据
const navBarsRef = ref([])

const posts = await fetchGhostPosts('nav-bars')
// console.log(posts)
navBarsRef.value = posts.data.value.posts.map((post) => {
  const bar = post.title.split('/').map((str) => str.split('+'))
  return bar
})

// onMounted(async () => {
//   const posts = await tagPostsAPI('nav-bars')
//   navBarsRef.value = posts.map((post) => {
//     const bar = post.title.split('/').map((str) => str.split('+'))
//     return bar
//   })
// })

</script>

<template>
  <!-- <v-app-bar color="#152f86"> -->
    <v-container class="header" fluid>
      <v-row class="content" justify="space-between">
        <v-col cols="auto" align-self="center">
          <NuxtLink to="/">
            <v-spacer style="cursor: pointer">
              <v-img
                width="80"
                src="http://www.srtiu.cn/images/daohang.png"></v-img>
            </v-spacer>
          </NuxtLink>
        </v-col>

        <v-col cols="auto" align-self="center">
          <v-spacer class="section">
            <template v-for="navBars in navBarsRef" :key="navBars[0]">
              <v-sheet class="pa-1 ma-2">
                <v-menu open-on-hover>
                  <template v-slot:activator="{ props }">
                    <v-btn class="menu-item-title" v-bind="props">
                      {{ navBars[0][0] }}
                    </v-btn>
                  </template>
                  <v-list
                    style="
                      background-color: #4f68aa;
                      color: #fff;
                      text-align: start;
                    ">
                    <template
                      v-for="(navBar, index) in navBars.slice(1)"
                      :key="navBars[0]">
                      <NuxtLink :to="navBar[1]" :external="true">
                        <v-list-item
                          :value="navBars[index]"
                        >
                          <v-list-item-title>{{ navBar[0] }}</v-list-item-title>
                        </v-list-item>
                      </NuxtLink>
                    </template>
                  </v-list>
                </v-menu>
              </v-sheet>
            </template>
          </v-spacer>
        </v-col>

        <v-col cols="auto" align-self="center">
          <v-spacer>
            <v-text-field
              class="search"
              active
              clearable
              density="compact"
              base-color="#fff"
              bg-color="#fff"
              color="primary"></v-text-field>
          </v-spacer>
        </v-col>
      </v-row>
    </v-container>
  <!-- </v-app-bar> -->
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: center;
  background: $primaryBackgroundColor;

  .content {
    max-width: 1400px;

    .section {
      display: flex;

      .v-sheet {
        background: none;

        .menu-item-title {
          color: #fff;
          background: #152f86;
          margin: 0 4px;
        }
      }
    }

    .search {
      width: 150px;
      height: 30px;
    }
  }
}
</style>
