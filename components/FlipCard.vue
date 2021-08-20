<template>
  <div class="card">
    <img
      class="card-img"
      :class="{ show: isShow }"
      :src="require(`@/assets/images/pedia/card/${index}.png`)"
      @click="toggle"
      alt="card-img"
    />
    <div class="card-bottom-layer" v-show="isShow">
      <div class="close-btn" @click="isShow = false">
        <img src="@/assets/images/icons/arrow-left.svg" alt="arrow-left" />
      </div>
    </div>
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
  },
}
</script>
