<script setup>
const route = useRoute()
const { index } = route.query

const items = ref([
  {
    name: '公告栏',
    id: 1,
  },
  {
    name: '工作动态',
    id: 2,
  },
  {
    name: '要闻速递',
    id: 3,
  },
  {
    name: '行业新闻',
    id: 4,
  }
])

const infoList = ref([
  {
    day: '21',
    month: 'Feb.',
    info: '“筑牢数字底座 助力质量提升系列交流活动（第一期）'
  },
  {
    day: '22',
    month: 'Aug.',
    info: '<<上海无线电>>专刊征稿通知'
  },
  {
    day: '23',
    month: 'Jan.',
    info: '“成都大运会开始'
  },
  {
    day: '24',
    month: 'Feb.',
    info: '“今天中午吃啥'
  },
  {
    day: '24',
    month: 'Feb.',
    info: '“今天中午吃啥'
  },
  {
    day: '24',
    month: 'Feb.',
    info: '“今天中午吃啥'
  },
  {
    day: '24',
    month: 'Feb.',
    info: '“今天中午吃啥'
  },
  {
    day: '24',
    month: 'Feb.',
    info: '“今天中午吃啥'
  },
  {
    day: '24',
    month: 'Feb.',
    info: '“今天中午吃啥'
  },
  {
    day: '24',
    month: 'Feb.',
    info: '“今天中午吃啥'
  },

])

</script>

<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="3">
        <v-sheet class="pa-2 ma-2">
          <v-card class="mx-auto card">
            <div class="title">
              <span class="subtitle">新闻中心</span>
              <span class="circle1"></span>
              <span class="circle2"></span>
              <span class="circle2"></span>
            </div>
            <v-list class="item" :items="items" item-title="name" item-value="id"></v-list>
          </v-card>
        </v-sheet>
      </v-col>
      <v-col cols="9">
        <v-sheet class="pa-2 ma-2" style="height: 800px;overflow-y: hidden;">
          <div class="title1">
            <div class="subtitle1">公告栏</div>
            <div class="vertical-line"></div>
          </div>
          <div class="list" v-for="item in infoList">
            <div class="left">
              <div class="top">{{ item.day }}</div>
              <div class="bottom">{{ item.month }}</div>
            </div>
            <div class="right">{{ item.info }}</div>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.card {
  width: 200px;
  height: 400px;
  text-align: center;

  .item {}

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
    height: 36px;
  }
}

.list {
  display: flex;
  margin-top: 30px;

  .left {
    .top {
      width: 45px;
      height: 46px;
      background-color: #eabd30;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 21px;
    }

    .bottom {
      height: 28px;
      background-color: #152f86;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .right {
    line-height: 70px;
    margin-left: 40px;
  }
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
