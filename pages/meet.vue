<template>
  <div id="page-meet">
    <img
      class="top-img"
      src="@/assets/images/meet/top-img@2x.png"
      alt="top img"
    />
    <img
      class="pc-top-img"
      src="@/assets/images/meet/pc/top-img@2x.png"
      alt="top img"
    />
    <h2 class="title">Meet 大廳指南</h2>
    <div class="block-wrapper">
      <div class="block">
        <img
          class="block__img"
          src="@/assets/images/playland/block_1@2x.png"
          alt="block_1"
        />
        <p class="block__text">
          1. 使用電腦/筆電直接點擊【進入 Meet 大廳】
          <br />
          <span class="light"
            >可使用 Chrome, Edge, Safari, Firefox 瀏覽器，或安裝 Google Meet
            應用程式</span
          >
        </p>
      </div>
      <div class="block">
        <img
          class="block__img"
          src="@/assets/images/meet/block_2@2x.png"
          alt="block_2"
        />
        <p class="block__text">2. 請允許麥克風與相機權限</p>
      </div>
      <div class="block">
        <img
          class="block__img"
          src="@/assets/images/meet/block_3@2x.png"
          alt="block_3"
        />
        <p class="block__text">
          3. 可使用下方工具列開關鏡頭<br />
          <span class="light">Google Meet 會議進行中請保持麥克風關閉喔！</span>
        </p>
      </div>
    </div>
    <div class="rights">© Fourdesire. All Rights Reserved.</div>

    <a class="link" @click="toMeet">
      4. 進入 Meet 大廳
      <div class="lock" v-show="!meetIsUp">
        <img class="icon" src="@/assets/images/icons/lock.svg" />
      </div>
    </a>
    <img class="pc-card" src="@/assets/images/meet/pc/card@2x.png" alt="card" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  layout: 'dashboard',
  computed: {
    ...mapGetters('timer', ['meetIsUp']),
  },
  methods: {
    toMeet() {
      // 跳轉 gather
      if (this.meetIsUp) {
        setTimeout(() => {
          window.open('https://www.google.com/', '_blank')
        }, 500)
      }
    },
  },
}
</script>
