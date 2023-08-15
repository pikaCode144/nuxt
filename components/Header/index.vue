<script setup>
import { navBarsAPI, tagPostsAPI, fetchGhostPosts } from '@/utils/posts'
// 获取导航栏数据
const navBarsRef = ref([])

const posts = await fetchGhostPosts('nav-bars')
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

const router = useRouter()
const toHome = () => router.push({ path: '/' })

const navigator = (bar, baz) => {
  let path = ''
  switch (bar) {
    case '公共服务':
      switch (baz[1]) {
        // 开放实验室预约
        case 'open-laboratory-reservation':
          path = '/open-laboratory-reservation'
          break
        // 仪表仪器共享
        case 'shared-instruments-and-equipment':
          path = '/shared-instruments-and-equipment'
          break
        // 技术咨询
        case 'technical-consultation':
          path = '/technical-consultation'
          break
        // 政策咨询
        case 'policy-consultation':
          path = '/policy-consultation'
          break
      }
      router.push({
        path,
        query: { tag: baz[1] },
      })
      break
    case '联盟中心':
      switch (baz[1]) {
        // 联盟简介
        case 'alliance-introduction':
          path = '/alliance-introduction'
          break
        // 联盟章程
        case 'alliance-charter':
          path = '/alliance-charter'
          break
        // 联盟成员
        case 'alliance-members':
          path = '/alliance-members'
          break
        // 加入我们
        case 'join-us':
          path = '/join-us'
          break
        // 成员中心
        case 'member-center':
          path = '/member-center'
          break
      }
      router.push({
        path,
        query: { tag: baz[1] },
      })
      break
    case '新闻中心':
      router.push({
        path: '/list',
        query: { title: bar, name: baz[0], tag: baz[1] },
      })
      break
    case '关于我们':
      router.push({
        path: '/about',
        query: { title: bar, name: baz[0], tag: baz[1] },
      })
      break
  }
}
</script>

<template>
  <v-app-bar color="#152f86">
    <v-container class="header" fluid>
      <v-row class="content" justify="space-between">
        <v-col cols="auto" align-self="center">
          <v-spacer style="cursor: pointer" @click="toHome">
            <v-img
              width="80"
              src="http://www.srtiu.cn/images/daohang.png"></v-img>
          </v-spacer>
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
                      <v-list-item
                        :value="navBars[index]"
                        @click="navigator(navBars[0][0], navBar)">
                        <v-list-item-title>{{ navBar[0] }}</v-list-item-title>
                      </v-list-item>
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
  </v-app-bar>
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
