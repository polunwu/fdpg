<template>
  <div id="home-section">
    <img
      class="bg"
      src="@/assets/images/home/space_grid_bg.svg"
      alt="space_grid_bg"
    />
    <div class="msg-wrapper"></div>
    <div class="fdid">Fourdesire ID_{{ fdid.toUpperCase() }}</div>
    <ResultBlock :character="character" :isAcquired="isAcquired" />
    <div class="gates">
      <div class="gate-wrapper">
        <img
          v-if="!isAcquired"
          class="gate-notification"
          src="@/assets/images/icons/alert.svg"
          alt="alert"
        />
        <div @click="toOverview" class="gate char">
          <span class="gate__name">角色</span>
          <img
            class="gate__bg"
            src="@/assets/images/home/gate_1@2x.png"
            alt="gate_1"
          />
        </div>
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
  data() {
    const {
      fdid,
      character,
      properties: { action, love, money, plan },
    } = getUser()

    return {
      fdid: fdid || '',
      isAcquired: charAcquired() ? true : false, // 是否已取得角色
      character: character || 'c0', // 角色編號
      action: parseInt(action) || 0,
      love: parseInt(love) || 0,
      money: parseInt(money) || 0,
      plan: parseInt(plan) || 0,
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
    const meetCounter = countDownFrom('2021/09/04 11:55:00 UTC+8')
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
    toOverview() {
      this.$store.commit('showOverview')
    },
  },
}
</script>
