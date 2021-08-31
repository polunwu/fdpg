<template>
  <div class="card" :id="`c${index}`" :class="{ show: isShow }">
    <img
      class="card-img"
      :class="{ show: isShow }"
      :src="require(`@/assets/images/char/card/c${index}.png`)"
      @click="toggle"
      alt="card-img"
    />
    <transition name="fade">
      <div class="card-bottom-layer" v-show="isShow" @click="close">
        <div class="close-btn" @click="close">
          <img src="@/assets/images/icons/arrow-left.svg" alt="arrow-left" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ['index'],
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow
    },
    close() {
      this.isShow = false
    },
  },
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
