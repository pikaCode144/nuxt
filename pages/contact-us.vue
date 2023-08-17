<script setup>
import Banner from '@/components/Banner'
import { tagPostsAPI, tagPagesAPI, fetchGhostPosts, fetchGhostPages } from '@/utils/posts'

const route = useRoute()
const { title, name, tag } = route.query

// 小标题
const nameRef = ref('联系我们')
// 保存侧边栏里的数据
const asideDataRef = ref([])
// 右边的信息
const rightDataRef = ref([])

const [navBars, pages] = await Promise.all([
  fetchGhostPosts('nav-bars'),
  fetchGhostPages('contact-us'),
])
// console.log(navBars.data.value.posts, pages.data.value.pages)
asideDataRef.value = navBars.data.value.posts
  .map((item) => item.title.split('/'))
  .filter((item) => item.includes('关于我们'))[0]
  .map((str) => str.split('+'))
rightDataRef.value = pages.data.value.pages

// onMounted(async () => {
//   //   const navBars = await tagPostsAPI('nav-bars')
//   const [navBars, pages] = await Promise.all([
//     tagPostsAPI('nav-bars'),
//     tagPagesAPI(tag),
//   ])
//   asideDataRef.value = navBars
//     .map((item) => item.title.split('/'))
//     .filter((item) => item.includes(title))[0]
//     .map((str) => str.split('+'))
//   rightDataRef.value = pages
// })

const changeName = async (info) => {
  console.log(info)
  nameRef.value = info[0]
  const pages = await fetchGhostPages(info[1])
  rightDataRef.value = pages.data.value.pages
}
</script>

<template>
  <Banner />
  <v-container>
    <v-row no-gutters>
      <v-col cols="3">
        <v-sheet class="pa-2 ma-2">
          <v-card class="mx-auto card" v-if="asideDataRef.length">
            <div class="title">
              <span class="subtitle">{{ asideDataRef[0][0] }}</span>
              <span class="circle1"></span>
              <span class="circle2"></span>
              <span class="circle2"></span>
            </div>
            <v-list class="item" color="#152f86">
              <template v-for="list in asideDataRef.slice(1)" :key="list[1]">
                <NuxtLink :to="list[1]" :external="true">
                  <v-list-item
                    :active="nameRef === list[0]"
                    :title="list[0]"
                  ></v-list-item>
                </NuxtLink>
              </template>
            </v-list>
          </v-card>
        </v-sheet>
      </v-col>
      <v-col cols="9">
        <v-sheet class="pa-2 ma-2">
          <div class="title1">
            <div class="subtitle1">{{ nameRef }}</div>
            <div class="vertical-line"></div>
          </div>
          <div
            class="article"
            v-if="rightDataRef.length"
            v-html="rightDataRef[0].html"></div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.card {
  width: 200px;
  height: 300px;
  text-align: center;

  .item :hover {
    background-color: #152f86;
    color: #fff;
  }
}

.title {
  margin-top: 30px;

  .subtitle {
    margin: 0 auto;
    font-size: 21px;
    color: rgb(23, 49, 142);
    font-weight: 600;
  }
}

.title1 {
  display: flex;

  .subtitle1 {
    position: relative;
    padding-right: 10px;
    font-size: 25px;
    font-weight: 600;
    color: rgb(21, 47, 134);
  }

  .vertical-line {
    border-left: 3px solid rgb(21, 47, 134);
    height: 30px;
  }
}

.article {
  text-indent: 2em;
  margin-top: 20px;
}

.circle1::before {
  content: '';
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-right: 5px;
  border-radius: 50%;
  background-color: rgb(23, 49, 142);
  margin-bottom: 1px;
  margin-left: 4px;
}

.circle2::before {
  content: '';
  display: inline-block;
  width: 6px;
  height: 6px;
  margin-right: 5px;
  border-radius: 50%;
  background-color: rgb(23, 49, 142);
  margin-bottom: 3px;
  margin-left: 4px;
}

.circle3::before {
  content: '';
  display: inline-block;
  width: 4px;
  height: 4px;
  margin-right: 5px;
  border-radius: 50%;
  background-color: rgb(23, 49, 142);
  margin-bottom: 4px;
  margin-left: 4px;
}
</style>
