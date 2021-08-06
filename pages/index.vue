<template>
  <div id="page-home">
    <img
      class="bg"
      src="@/assets/images/home/space_grid_bg.svg"
      alt="space_grid_bg"
    />
    <div class="vip">
      <p v-if="!isAcquired" class="vip__msg">
        <NuxtLink to="/overview">前往 </NuxtLink>取得專屬角色
      </p>
      <img v-else class="vip__char" src="@/assets/images/home/char_1@2x.png" />
      <!-- 結果數值 -->
      <ResultBlock
        keyName="plan"
        name="計畫狂"
        :isAcquired="isAcquired"
        :value="90"
      />
      <ResultBlock
        keyName="move"
        name="行動力"
        :isAcquired="isAcquired"
        :value="100"
      />
      <ResultBlock
        keyName="money"
        name="理財力"
        :isAcquired="isAcquired"
        :value="80"
      />
      <ResultBlock
        keyName="life"
        name="愛生活"
        :isAcquired="isAcquired"
        :value="70"
      />
      <div class="vip__fdid">
        {{ fdid.toUpperCase() }}
      </div>
    </div>
    <div class="gates">
      <div class="gate-wrapper">
        <span v-if="!isAcquired" class="gate-notification"></span>
        <NuxtLink to="/overview" class="gate char">
          <span class="gate__name">角色</span>
          <img
            class="gate__bg"
            src="@/assets/images/home/gate_1@2x.png"
            alt="gate_1"
          />
        </NuxtLink>
        <span class="gate-time"></span>
      </div>
      <div class="gate-wrapper">
        <a @click="toGather" class="gate gather">
          <span class="gate__name">廣場</span>
          <img
            class="gate__bg"
            src="@/assets/images/home/gate_2@2x.png"
            alt="gate_1"
          />
          <div v-show="!gather.leftTime.isUp" class="gate__block">
            <img src="@/assets/images/icons/lock.svg" alt="lock" />
          </div>
        </a>
        <span
          v-show="!gather.leftTime.isUp && gather.timerReady"
          class="gate-time"
          >{{ gather.leftTime.dd }}天 {{ gather.leftTime.hh }}:{{
            gather.leftTime.mm
          }}:{{ gather.leftTime.ss }}</span
        >
      </div>
      <div class="gate-wrapper">
        <a @click="toMeet" class="gate meet">
          <span class="gate__name">大廳</span>
          <img
            class="gate__bg"
            src="@/assets/images/home/gate_3@2x.png"
            alt="gate_1"
          />
          <div v-show="!meet.leftTime.isUp" class="gate__block">
            <img src="@/assets/images/icons/lock.svg" alt="lock" />
          </div>
        </a>
        <span v-show="!meet.leftTime.isUp && meet.timerReady" class="gate-time"
          >{{ meet.leftTime.dd }}天 {{ meet.leftTime.hh }}:{{
            meet.leftTime.mm
          }}:{{ meet.leftTime.ss }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { getUser, charAcquired } from '@/utils/user'
import { countDownFrom } from '@/utils/countDownFrom'
export default {
  layout: 'dashboard',
  data() {
    const fdid = getUser() ? getUser().fdid : ''
    const characterNum = getUser() ? getUser().character : -1
    const isAcquired = charAcquired() ? true : false
    return {
      fdid: fdid,
      isAcquired: isAcquired, // 是否已取得角色
      characterNum: characterNum, // 角色編號
      gather: {
        timerReady: false,
        timerID: null,
        leftTime: {
          isUp: false,
          dd: 0,
          hh: 0,
          mm: 0,
          ss: 0,
        },
      },
      meet: {
        timerReady: false,
        timerID: null,
        leftTime: {
          isUp: false,
          dd: 0,
          hh: 0,
          mm: 0,
          ss: 0,
        },
      },
    }
  },
  created() {
    // 計數器，計算剩餘時間
    const gatherCounter = countDownFrom('2021/09/04 16:20:00 UTC+8') // 指定台北時區
    const meetCounter = countDownFrom('2021/08/06 11:55:00 UTC+8')
    // 每秒呼叫一次剩餘時間
    this.gather.timerID = setInterval(() => {
      this.gather.leftTime = gatherCounter()
    }, 1000)
    this.meet.timerID = setInterval(() => {
      this.meet.leftTime = meetCounter()
    }, 1000)
    // Timer Ready 後才顯示，避免數字從 0 閃一下
    setTimeout(() => {
      this.gather.timerReady = true
      this.meet.timerReady = true
    }, 1000)
  },
  beforeDestroy() {
    // 清理
    clearInterval(this.gather.timerID)
    clearInterval(this.meet.timerID)
  },
  methods: {
    toMeet() {
      // 跳轉 google meet
      if (this.meet.leftTime.isUp) {
        window.open('https://www.google.com/', '_blank')
      }
    },
    toGather() {
      // 跳轉 gather
      if (this.meet.leftTime.isUp) {
        window.open('https://www.google.com/', '_blank')
      }
    },
  },
}
</script>
