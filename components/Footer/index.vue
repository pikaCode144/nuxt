<script setup></script>

<template>
  <v-footer color="#fff" fixed dark>
    <div class="footer">
      <div class="footer-container">
        <div class="left">
          <div class="top">
            <img
              style="width: 86px"
              src="http://www.srtiu.cn/images/brand2.png"
              alt="" />
          </div>
          <div class="center">
            <div>联系我们</div>
            <div class="circle1"></div>
            <div class="circle2"></div>
            <div class="circle3"></div>
          </div>
          <div class="bottom">123-123-123</div>
        </div>
      </div>
      <div class="footer-container">
        <div class="left">
          <div class="bottom">srtiu@srtiu.cn</div>
        </div>
      </div>
      <div class="footer-container">
        <div class="left">
          <div class="center">
            <img src="http://www.srtiu.cn/images/erweima.jpg" alt="" />
            <img src="http://www.srtiu.cn/images/erweima.jpg" alt="" />
          </div>
          <div class="bottom">成都市锦江区</div>
        </div>
      </div>
    </div>
  </v-footer>
  <!-- <v-footer color="#3c79b0" fixed dark height="80px" style="display: flex; justify-content: center">
    <span>蜀公网安备 31010102006612号</span>
  </v-footer> -->
</template>

<style scoped lang="scss">
.footer {
  width: 100vw;
  display: flex;
  justify-content: space-around;

  .left {
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .center {
      display: flex;
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
}
</style>
