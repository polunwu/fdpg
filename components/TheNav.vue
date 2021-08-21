<template>
  <nav id="nav">
    <NuxtLink to="/pedia" class="pedia-link">
      <img src="@/assets/images/icons/awesome-book.svg" alt="icon book" />
    </NuxtLink>
    <NuxtLink to="/" class="home-link">
      <img src="@/assets/images/icons/home.svg" alt="icon home" />
    </NuxtLink>
    <div class="spacer"></div>
    <div
      class="menu-toggle-btn"
      :class="{ 'is-open': isNavOpen }"
      @click="toggleNav"
    >
      <span class="bar top-bar"></span>
      <span class="bar bottom-bar"></span>
    </div>
    <transition name="fade">
      <div v-show="isNavOpen" class="menu-layer">
        <img
          class="home"
          src="@/assets/images/icons/home.svg"
          alt="icon home"
        />
        <div class="online">
          目前 Playground 共有 <strong>{{ onlineCount }}</strong> 人
        </div>
        <NuxtLink to="/" class="menu-link home" @click.native="closeNav">
          <span>活動主頁</span>
        </NuxtLink>
        <div class="link-wrapper">
          <img
            v-if="true"
            class="notification"
            src="@/assets/images/icons/alert.svg"
            alt="alert"
          />
          <NuxtLink
            to="/?overview=true"
            class="menu-link char"
            @click.native="closeNav"
          >
            <span>領取專屬角色</span>
          </NuxtLink>
        </div>

        <div class="link-wrapper">
          <img
            v-if="gatherIsUp"
            class="notification"
            src="@/assets/images/icons/alert.svg"
            alt="alert"
          />
          <NuxtLink
            to="/playland"
            class="menu-link gather"
            @click.native="closeNav"
          >
            <span>Playland 辦公室</span>
          </NuxtLink>
        </div>
        <div class="link-wrapper">
          <img
            v-if="meetIsUp"
            class="notification"
            src="@/assets/images/icons/alert.svg"
            alt="alert"
          />
          <NuxtLink to="meet" class="menu-link meet" @click.native="closeNav">
            <span>Meet 大廳</span>
          </NuxtLink>
        </div>
        <NuxtLink to="/pedia" class="menu-link pedia" @click.native="closeNav">
          <span>Playground 角色百科</span>
        </NuxtLink>
        <div class="rights">© Fourdesire. All Rights Reserved.</div>
      </div>
    </transition>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import { charAcquired } from '@/utils/user'

export default {
  data() {
    return {
      isNavOpen: false,
      isAcquired: charAcquired() ? true : false, // 是否已取得角色
    }
  },
  computed: {
    ...mapGetters('timer', ['gatherIsUp', 'meetIsUp']),
    ...mapGetters('online', ['onlineCount']),
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen
    },
    closeNav() {
      this.isNavOpen = false
    },
  },
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
