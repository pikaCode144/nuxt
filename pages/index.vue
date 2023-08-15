<script setup>
import Carousel from '@/components/Carousel/index.vue'
import { bulletinBoardAPI, newsExpressAPI, tagPostsAPI, fetchGhostPosts } from '@/utils/posts'
import { formatDate } from '@/utils/format'

// 动态路由跳转
const router = useRouter()

// 视频左边的数据
const leftRef = ref([])
// 视频右边的数据
const rightRef = ref([])
// 三栏的布局
const threeColRef = ref([])
// 公共服务数据
const publicServiceRef = ref([])

// 去详情页面
const toDetail = (id) => router.push({ path: '/detail', query: { id } })

// 去查看更多页面
const toList = (name, tag) =>
  router.push({ path: '/list', query: { title: '新闻中心', name, tag } })

// 同时获取三栏布局和公共服务数据
const [threeCol, publicService] = await Promise.all([
  fetchGhostPosts('three-col'),
  fetchGhostPosts('public-service'),
])

// 存储公共服务数据
publicServiceRef.value = publicService.data.value.posts
const arr = threeCol.data.value.posts[0].title.split('/').map((item) => item.split('+'))
const [left, right] = await Promise.all([
  fetchGhostPosts(arr[0][1]),
  fetchGhostPosts(arr[2][1])
])
arr[0].push(formatDate(left.data.value.posts[0].created_at))
arr[1].push('')
arr[2].push(formatDate(right.data.value.posts[0].created_at))
threeColRef.value = arr
leftRef.value = left.data.value.posts
rightRef.value = right.data.value.posts
  
// onMounted(async () => {
//   // 同时获取三栏布局和公共服务数据
//   const [threeCol, publicService] = await Promise.all([
//     tagPostsAPI('three-col'),
//     tagPostsAPI('public-service'),
//   ])
//   // 存储公共服务数据
//   publicServiceRef.value = publicService
//   const arr = threeCol[0].title.split('/').map((item) => item.split('+'))
//   const [left, right] = await Promise.all([
//     tagPostsAPI(arr[0][1]),
//     tagPostsAPI(arr[2][1]),
//   ])
//   arr[0].push(formatDate(left[0].created_at))
//   arr[1].push('')
//   arr[2].push(formatDate(right[0].created_at))
//   threeColRef.value = arr
//   leftRef.value = left
//   rightRef.value = right
// })

// 跳转到公共服务
const toPublicService = (info) => {
  let path = ''
  let tag = ''
  switch (info.title) {
    case '开放实验室预约':
      path = '/open-laboratory-reservation'
      tag = 'open-laboratory-reservation'
      break
    case '仪表仪器共享':
      path = '/shared-instruments-and-equipment'
      tag = 'shared-instruments-and-equipment'
      break
    case '技术咨询':
      path = '/technical-consultation'
      tag = 'technical-consultation'
      break
    case '政策咨询':
      path = '/policy-consultation'
      tag = 'policy-consultation'
      break
  }
  router.push({ path, query: { tag } })
}

const imgUrl = ref([
  { url: 'http://www.srtiu.cn/images/comlogo1.png' },
  { url: 'http://www.srtiu.cn/images/comlogo2.png' },
  { url: 'http://www.srtiu.cn/images/comlogo3.png' },
  { url: 'http://www.srtiu.cn/images/comlogo4.png' },
  { url: 'http://www.srtiu.cn/images/comlogo1.png' },
  { url: 'http://www.srtiu.cn/images/comlogo2.png' },
  { url: 'http://www.srtiu.cn/images/comlogo3.png' },
  { url: 'http://www.srtiu.cn/images/comlogo4.png' },
  { url: 'http://www.srtiu.cn/images/comlogo1.png' },
  { url: 'http://www.srtiu.cn/images/comlogo2.png' },
  { url: 'http://www.srtiu.cn/images/comlogo3.png' },
  { url: 'http://www.srtiu.cn/images/comlogo4.png' },
])
</script>

<template>
  <div class="home">
    <Carousel />
    <v-container style="max-width: 1400px">
      <!-- 三栏 -->
      <v-row justify="center" align="center">
        <v-col cols="4" md="4">
          <v-card>
            <v-card-text>
              <ul v-if="leftRef.length">
                <template v-for="left in leftRef" :key="left">
                  <li @click="toDetail(left.id)">
                    <p class="character">{{ left.title }}</p>
                  </li>
                </template>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4" md="4">
          <v-card>
            <v-card-text>
              <div class="center-top">解码实验室</div>
              <v-responsive>
                <video controls style="width: 100%; height: 100%">
                  <source
                    src="http://cloud.video.taobao.com/play/u/3459968589/p/1/e/6/t/1/50046750855.mp4"
                    type="video/mp4" />
                </video>
              </v-responsive>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4" md="4">
          <v-card>
            <v-card-text>
              <ul v-if="rightRef.length">
                <template v-for="right in rightRef" :key="right">
                  <li @click="toDetail(right.id)">
                    <p class="character">{{ right.title }}</p>
                  </li>
                </template>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- 查看更多 -->
      <v-row v-if="threeColRef.length">
        <template v-for="(item, index) in threeColRef" :key="item[0]">
          <v-col cols="12" md="4">
            <div
              class="container"
              style="display: flex; justify-content: space-evenly">
              <span class="left"> {{ item[0] }}</span>
              <span class="center"> {{ item[2] }}</span>
              <span class="right" @click="toList(item[0], item[1])"
                >查看更多></span
              >
            </div>
          </v-col>
        </template>
      </v-row>

      <!-- 公共服务 -->
      <v-row>
        <v-col cols="12" class="subTitle">
          <div class="circle3"></div>
          <div class="circle2"></div>
          <div class="circle1"></div>
          <div>公共服务</div>
          <div class="circle1"></div>
          <div class="circle2"></div>
          <div class="circle3"></div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3" v-for="item in publicServiceRef" :key="item">
          <v-card class="boxInfo">
            <v-card-title class="title">{{ item.title }}</v-card-title>
            <v-card-text class="info" v-html="item.html"></v-card-text>
            <v-btn
              class="btn"
              color="medium-emphasis"
              min-width="92"
              rounded
              variant="outlined"
              @click="toPublicService(item)">
              查看详情
            </v-btn>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" class="subTitle">
          <div class="circle3"></div>
          <div class="circle2"></div>
          <div class="circle1"></div>
          <div>联盟服务</div>
          <div class="circle1"></div>
          <div class="circle2"></div>
          <div class="circle3"></div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="3" v-for="item in imgUrl" :key="item">
          <v-card class="imgBox">
            <img :src="item.url" alt="" />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
.home {
  ul {
    .character {
      width: 100%;
      color: #000;
      text-indent: 1em;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    .character:hover {
      color: #ebbd30;
      cursor: pointer;
    }

    li {
      font-size: 20px;
      letter-spacing: 0.12em;
      margin: 10px 0 18px 0;
      list-style-type: none;
      position: relative;
    }

    li:hover {
      color: #ebbd30;
      cursor: pointer;
    }

    li:before {
      content: '\2022';
      color: #ebbd30;
      font-size: 30px;
      position: absolute;
      left: 0;
      top: -0.2em;
    }
  }

  .center-top {
    text-align: center;
    background-color: #000;
    line-height: 30px;
    color: #fff;
    position: relative;
    top: 3px;
  }

  .container {
    border-bottom: 2px solid rgb(23, 49, 142);

    .left {
      font-size: 23px;
      color: #616161;
      display: flex;
    }

    .right {
      font-size: 23px;
      color: #616161;
      display: flex;
      cursor: pointer;
      font-weight: 600;
    }

    .right:hover {
      color: rgb(23, 49, 142);
      font-weight: 600;
    }
  }

  .subTitle {
    font-size: 23px;
    color: rgb(23, 49, 142);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    width: 100vw;

    .circle1::before {
      content: '';
      display: inline-block;
      width: 10px;
      height: 10px;
      margin-right: 5px;
      border-radius: 50%;
      background-color: rgb(23, 49, 142);
      margin-bottom: 1px;
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
    }
  }

  .boxInfo {
    height: 310px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .title {
      text-align: center;
      font-size: 23px;
      color: rgb(23, 49, 142);
      padding-bottom: 10px;
      margin-bottom: 20px;
    }

    .info {
      width: 86%;
      margin: 20px auto 0;
    }

    .btn {
      width: 60%;
      margin: 0 auto;
      margin-bottom: 30px;
    }
  }

  .imgBox {
    height: 160px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
}
</style>
