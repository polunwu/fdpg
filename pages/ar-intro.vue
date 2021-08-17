<template>
  <div id="page-ar-intro">
    <nav id="ar-intro-nav">
      <a class="back-link" @click.prevent="$router.back()">
        <img src="@/assets/images/icons/slide-arrow-left.svg" alt="back" />
      </a>
      <NuxtLink class="home-link" to="/" @click.native="handleHomeClick">
        <img src="@/assets/images/icons/home-white.svg" alt="home" />
      </NuxtLink>
      <div class="spacer"></div>
    </nav>
    <div ref="bg" class="bg"></div>
    <img
      ref="floatingBg"
      class="floating-bg"
      src="@/assets/images/ar-intro/floating_bg@2x.png"
      alt="floating_bg"
    />
    <swiper ref="introSwiper" class="swiper" :options="swiperOption">
      <swiper-slide>
        <img
          class="intro-graph"
          src="@/assets/images/ar-intro/intro_1.gif"
          alt="intro_1"
        />
        <p class="describe">
          如果想要得到專屬自己的活動角色，須依循著以下指示才能夠獲得他！首先，你需要找到「物資包」中的神聖印記
          ...
        </p>
      </swiper-slide>
      <swiper-slide>
        <img
          class="intro-graph"
          src="@/assets/images/ar-intro/intro_2.gif"
          alt="intro_2"
        />
        <p class="describe">
          再來你需要將這個印記的資料傳輸至 Fourdesire Playground
          。你只需要授權你的相機，將相機對準印記，系統就可進行分析 ...
        </p>
      </swiper-slide>
      <swiper-slide>
        <img
          class="intro-graph"
          src="@/assets/images/ar-intro/intro_3.gif"
          alt="intro_3"
        />
        <p class="describe">
          經過幾秒的分析，你將獲得你本次 Fourdesire Playground
          專屬角色，你同時能夠了解到自己的各項能力及技能，請將分析結果「截圖」下來，分享至
          instagram
        </p>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="bottom-btns">
      <a class="skip" href="ar-character.html"> 略過 </a>
      <div class="next" @click="handleNext">我知道了</div>
    </div>
  </div>
</template>

<script>
import randomFloating from '@/timelines/randomFloating'
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.next',
        },
      },
    }
  },
  mounted() {
    randomFloating(this.$refs)
  },
  computed: {
    swiper() {
      return this.$refs.introSwiper.$swiper
    },
  },
  methods: {
    handleHomeClick() {
      this.$store.commit('showHome')
    },
    handleNext() {
      if (this.swiper.isEnd) {
        console.log('end')
        // navigate to ar static page
        window.location.href =
          window.location.origin + '/fdpg/ar-character.html'
      }
    },
  },
}
</script>
