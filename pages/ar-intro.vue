<template>
  <div id="page-ar-intro">
    <nav id="ar-intro-nav">
      <a class="back-link" @click.prevent="$router.back()">
        <img src="@/assets/images/icons/slide-arrow-left.svg" alt="back" />
      </a>
      <NuxtLink class="home-link" to="/">
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
          這是解鎖的色的第 1 步，首先找到玩心盒當中的神聖印記 ...
        </p>
      </swiper-slide>
      <swiper-slide>
        <img
          class="intro-graph"
          src="@/assets/images/ar-intro/intro_2.gif"
          alt="intro_2"
        />
        <p class="describe">
          接著，授權相機，對準印記，系統就會開始辨識分析...
        </p>
      </swiper-slide>
      <swiper-slide>
        <img
          class="intro-graph"
          src="@/assets/images/ar-intro/intro_3.gif"
          alt="intro_3"
        />
        <p class="describe">
          分析完成！查看你專屬角色的各項數值和技能，還能將分析結果拍照分享到
          IG！
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
  layout: 'dashboard',
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
    handleNext() {
      if (this.swiper.isEnd) {
        console.log('end')
        // navigate to ar static page
        window.location.href = window.location.origin + '/ar-character.html'
      }
    },
  },
}
</script>
