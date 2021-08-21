<template>
  <div id="overview-section">
    <a href="/ar-intro" class="ar-intro-link">解鎖專屬活動角色</a>
    <NuxtLink to="/" class="top-btn" :class="{ show: isOverview }">
      <img src="@/assets/images/icons/arrow-up.svg" alt="arrow_up" />
    </NuxtLink>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <img
          class="slide-img"
          src="@/assets/images/overview/slide_1@2x.png"
          alt="slide_1"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="slide-img"
          src="@/assets/images/overview/slide_2@2x.png"
          alt="slide_2"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="slide-img"
          src="@/assets/images/overview/slide_3@2x.png"
          alt="slide_3"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="slide-img"
          src="@/assets/images/overview/slide_4@2x.png"
          alt="slide_4"
        />
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev">
        <img
          src="@/assets/images/icons/slide-arrow-left.svg"
          alt="slide_arrow_left"
        />
      </div>
      <div class="swiper-button-next" slot="button-next">
        <img
          src="@/assets/images/icons/slide-arrow-right.svg"
          alt="slide_arrow_right"
        />
      </div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  props: {
    isOverview: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    handleUpClick() {
      this.$router.push({ path: '' })
    },
  },
}
</script>
