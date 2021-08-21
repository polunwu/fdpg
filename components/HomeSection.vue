<template>
  <div id="home-section">
    <img
      class="bg"
      src="@/assets/images/home/space_grid_bg.svg"
      alt="space_grid_bg"
    />
    <div class="msg-wrapper">
      <div class="msg">
        歡迎進入 2021 Fourdesire Playground<br />
        在活動開始前，快去領取自己的專屬角色吧
      </div>
      <!-- <div class="msg msg-half">下載桌布</div>
      <div class="msg msg-half">填寫問卷</div> -->
    </div>
    <div class="fdid">Fourdesire ID_{{ fdid.toUpperCase() }}</div>
    <ResultBlock :character="character" :isAcquired="isAcquired" />
    <div class="online">
      目前 Playground 共有 <strong>{{ onlineCount }}</strong> 人
    </div>
    <div class="gates">
      <div class="gate-wrapper">
        <img
          v-if="!isAcquired"
          class="notification"
          src="@/assets/images/icons/alert.svg"
          alt="alert"
        />
        <div @click="toOverview" class="gate char">
          <span class="gate__name">專屬角色</span>
        </div>
      </div>
      <div class="gate-wrapper">
        <img
          v-if="gatherIsUp"
          class="notification"
          src="@/assets/images/icons/alert.svg"
          alt="alert"
        />
        <NuxtLink to="/playland" class="gate gather">
          <span class="gate__name">Playland<br />辦公室</span>
        </NuxtLink>
      </div>
      <div class="gate-wrapper">
        <img
          v-if="meetIsUp"
          class="notification"
          src="@/assets/images/icons/alert.svg"
          alt="alert"
        />
        <NuxtLink to="/meet" class="gate meet">
          <span class="gate__name">Meet<br />大廳</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getUser, charAcquired } from '@/utils/user'

export default {
  data() {
    const { fdid, character } = getUser()

    return {
      fdid: fdid || '',
      isAcquired: charAcquired() ? true : false, // 是否已取得角色
      character: character || 'c0', // 角色編號
    }
  },
  computed: {
    ...mapGetters('timer', ['gatherIsUp', 'meetIsUp']),
    ...mapGetters('online', ['onlineCount']),
  },
  methods: {
    toOverview() {
      this.$router.push({ path: '', query: { overview: true } })
    },
  },
}
</script>
