<template>
  <div id="page-playland">
    <img
      class="top-img"
      src="@/assets/images/playland/top-img@2x.png"
      alt="top img"
    />
    <img
      class="pc-top-img"
      src="@/assets/images/playland/pc/top-img@2x.png"
      alt="top img"
    />
    <h2 class="title">Playland 辦公室指南</h2>
    <div class="block-wrapper">
      <div class="block">
        <img
          class="block__img"
          src="@/assets/images/playland/block_1@2x.png"
          alt="block_1"
        />
        <p class="block__text">
          1. 使用電腦/筆電直接點擊【進入 Playland 辦公室】
          <br />
          <span class="light">建議使用 Chrome 瀏覽器，不需安裝其他軟體</span>
        </p>
      </div>
      <div class="block">
        <img
          class="block__img"
          src="@/assets/images/playland/block_2@2x.png"
          alt="block_2"
        />
        <p class="block__text">2. 請選擇角色並輸入ID</p>
      </div>
      <div class="block">
        <img
          class="block__img"
          src="@/assets/images/playland/block_3@2x.png"
          alt="block_3"
        />
        <p class="block__text">
          3. 允許麥克風及相機權限，按 Join the Gathering 進入
        </p>
      </div>
      <div class="block">
        <img
          class="block__img"
          src="@/assets/images/playland/block_4@2x.png"
          alt="block_4"
        />
        <p class="block__text">
          4. 若您曾經使用過 Gather Town，可點擊 Skip Tutorial
        </p>
      </div>
      <div class="block">
        <img
          class="block__img"
          src="@/assets/images/playland/block_5@2x.png"
          alt="block_5"
        />
        <p class="block__text">
          5. 進入 Playland 後，使用鍵盤的「↑→↓←」來移動角色
        </p>
      </div>
      <div class="block">
        <img
          class="block__img"
          src="@/assets/images/playland/block_6@2x.png"
          alt="block_6"
        />
        <p class="block__text">6. 發現發光物件！請按「x」進行互動</p>
      </div>
      <div class="block">
        <img
          class="block__img"
          src="@/assets/images/playland/block_7@2x.png"
          alt="block_7"
        />
        <p class="block__text">
          7. 進入會議空間(private
          space)時，空間外畫面會變暗，這時候空間所有人都能聽到彼此對話，不受距離限制
        </p>
      </div>
      <div class="block">
        <img
          class="block__img"
          src="@/assets/images/playland/block_8@2x.png"
          alt="block_8"
        />
        <p class="block__text">
          8.
          你可以隨時點選下方工具列A編輯角色、B設定狀態、C展開地圖、D顯示表情。放手玩玩吧！
        </p>
      </div>
    </div>
    <div class="rights">© Fourdesire. All Rights Reserved.</div>

    <a class="link" @click="toGather">
      進入 Playland 辦公室
      <div class="lock" v-show="!gatherIsUp">
        <img class="icon" src="@/assets/images/icons/lock.svg" /></div
    ></a>
    <div class="pc-card">
      <img
        class="pc-card__img"
        :src="require(`@/assets/images/char/card/${character}.png`)"
        alt="card"
      />
    </div>
  </div>
</template>

<script>
import { getUser } from '@/utils/user'
import { mapGetters } from 'vuex'
export default {
  layout: 'dashboard',
  data() {
    const { character } = getUser()
    return {
      character: character || 'c1',
    }
  },
  computed: {
    ...mapGetters('timer', ['gatherIsUp']),
  },
  methods: {
    toGather() {
      // 跳轉 gather
      if (this.gatherIsUp) {
        setTimeout(() => {
          window.open(
            'https://gather.town/app/GmGErGjmbATw1eub/playland',
            '_blank'
          )
        }, 500)
      }
    },
  },
}
</script>
