<script setup>
import { bulletinBoardAPI, newsExpressAPI } from '@/utils/posts'
import { api } from '@/utils/ghostContentAPI'

// 存储公告栏的数据
const bulletinBoardRef = ref([])
// 存储要问速递的数据
const newsExpressRef = ref([])
onMounted(async () => {
  const [bulletinBoard, newsExpress] = await Promise.all([bulletinBoardAPI(), newsExpressAPI()])
  bulletinBoardRef.value = bulletinBoard
  newsExpressRef.value = newsExpress
})

const router = useRouter()
const toDetail = (id) => router.push({ path: '/detail', query: { id } })

const title = ref([
  {
    title: '开放实验室预约',
    info: '为中小企业提供无线通信测试所需的免费仪器仪表使用和现场技术支持。'
  },
  {
    title: '仪器仪表共享',
    info: ' 为中小企业在研发过程中的测试需求提供无线通信仪表的免费共享和使用。'
  },
  {
    title: '技术咨询',
    info: ' 针对无线通信领域的认证测试技术问题进行答疑和讨论。'
  },
  {
    title: '政策咨询',
    info: '为中小企业提供无线通信测试所需的免费仪器仪表使用和现场技术支持。'
  }
])
const introduce = ref([
  {
    left: '公告栏',
    center: '2023-2-2',
    right: '查看更多>'
  },
  {
    left: '工作动态',
    center: '',
    right: '查看更多>'
  },
  {
    left: '要问速递',
    center: '2023-2-2',
    right: '查看更多>'
  },
])

const toList = (index) => router.push({ path: '/list', query: { index } })
</script>

<template>
  <div class="home">
    <v-container style="max-width: 1400px;">
      <v-row justify="center" align="center">
        <v-col cols="4">
          <v-card>
            <v-card-text>
              <ul v-if="bulletinBoardRef.length">
                <template v-for="bullentin in bulletinBoardRef" :key="bullentin">
                  <li @click="toDetail(bullentin.id)"><p class="character">{{ bullentin.title }}</p></li>
                </template>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card>
            <v-card-text>
              <div class="center-top">解码实验室</div>
              <v-responsive>
                <video controls style="width: 100%; height: 100%">
                  <source src="http://cloud.video.taobao.com/play/u/3459968589/p/1/e/6/t/1/50046750855.mp4"
                    type="video/mp4" />
                </video>
              </v-responsive>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card>
            <v-card-text>
              <ul v-if="newsExpressRef.length">
                <template v-for="newsExpress in newsExpressRef" :key="newsExpress">
                  <li @click="toDetail(newsExpress.id)"><p class="character">{{ newsExpress.title }}</p></li>
                </template>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4" v-for="(i, index) in introduce" :key="i">
          <div class="container" style="display: flex;justify-content: space-evenly;">
            <span class="left"> {{ i.left }}</span>
            <span class="center"> {{ i.center }}</span>
            <span class="right" @click="toList(index)"> {{ i.right }}</span>
          </div>
        </v-col>
      </v-row>

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
        <v-col cols="12" md="3" v-for="item in title" :key="item">
          <v-card class="boxInfo">
            <v-card-title class="title"> {{ item.title }}</v-card-title>
            <v-card-text class="info">{{ item.info }}</v-card-text>
            <v-btn class="btn" color="medium-emphasis" min-width="92" rounded variant="outlined">
              查看详情
            </v-btn>
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
      content: "\2022";
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
      content: "";
      display: inline-block;
      width: 10px;
      height: 10px;
      margin-right: 5px;
      border-radius: 50%;
      background-color: rgb(23, 49, 142);
      margin-bottom: 1px;
    }

    .circle2::before {
      content: "";
      display: inline-block;
      width: 6px;
      height: 6px;
      margin-right: 5px;
      border-radius: 50%;
      background-color: rgb(23, 49, 142);
      margin-bottom: 3px;
    }

    .circle3::before {
      content: "";
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
      margin-bottom: 20px
    }

    .info {
      width: 86%;
      margin: 0 auto;
      text-indent: 1.5em;
    }

    .btn {
      width: 60%;
      margin: 0 auto;
      margin-bottom: 30px;
    }
  }
}
</style>
