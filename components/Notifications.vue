<template>
  <div class="msg-wrapper">
    <!-- 通知 -->
    <template v-if="!isClosed">
      <transition name="fade" mode="out-in">
        <div v-if="phase === 0 && !isAcquired" class="msg">
          歡迎進入 2021 Fourdesire Playground
          <br />
          在活動開始前，快去領取自己的專屬角色吧
          <NotificationClose @close="handleClose" />
        </div>
      </transition>
      <transition name="fade" mode="out-in">
        <div v-if="phase === 0 && isAcquired" class="msg">
          記得在 9/4（六）下午 2 點準時進入 Meet
          <br />
          大廳，參加 2021 Fourdesire 生活遊樂場！
          <NotificationClose @close="handleClose" />
        </div>
      </transition>
      <transition name="fade" mode="out-in">
        <div v-if="phase === 1" class="msg">
          Meet 大廳 已經開放進場了！
          <br />
          請手刀進入！
          <NotificationClose @close="handleClose" />
        </div>
      </transition>
      <transition name="fade" mode="out-in">
        <div v-if="phase === 2" class="msg">
          現在是中場時間，大家都在 Playland 辦公室
          <br />
          休息聊天！點擊Playland加入我們！
          <NotificationClose @close="handleClose" />
        </div>
      </transition>
      <transition name="fade" mode="out-in">
        <div v-if="phase === 3" class="msg">
          下半場活動開始囉，請進入 Meet 大廳
          <NotificationClose @close="handleClose" />
        </div>
      </transition>
      <transition name="fade" mode="out-in">
        <div v-if="phase === 4" class="msg">
          謝謝您今天的參與！歡迎到 Playland 辦公室<br />
          和我們聊聊。別忘了填寫活動問卷，有小驚喜喔！
          <NuxtLink to="/questions" class="questions-link">會後問卷</NuxtLink>
          <NotificationClose @close="handleClose" />
        </div>
      </transition>
    </template>
    <!-- 桌布 -->
    <transition name="fade" mode="out-in">
      <a
        v-if="showDownloadLink"
        class="msg-download"
        href="https://drive.google.com/drive/folders/1ocLF1xFzZ1biye6JH8pHmiw0U-wJgE83"
        target="_blank"
      >
        <img class="gift" src="@/assets/images/icons/gift.svg" alt="gif" />
        <div>2021 Fourdesire Playground<br />限定玩心桌布下載</div>
        <div class="arrow-wrapper">
          <img src="@/assets/images/icons/gift-arrow.svg" alt="arrow" />
        </div>
      </a>
    </transition>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    isAcquired: {
      type: Boolean,
    },
  },
  computed: {
    ...mapGetters('notifications', ['phase', 'showDownloadLink']),
  },
  watch: {
    phase: {
      immediate: true,
      handler() {
        this.isClosed = false
      },
    },
  },
  data() {
    return {
      // phase: 4,
      isClosed: false,
    }
  },
  methods: {
    handleClose() {
      this.isClosed = true
    },
  },
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
  transform: translateY(0);
}
.fade-enter {
  transition: all 0.3s;
  transform: translateY(20px);
  opacity: 0;
}
.fade-leave-to {
  transition: all 0.3s;
  transform: translateY(-20px);
  opacity: 0;
}
</style>
