<template>
  <div class="result">
    <img
      class="result__img"
      v-if="!isAcquired"
      src="@/assets/images/home/result_c0@2x.png"
      alt="c0"
    />
    <template v-else>
      <img
        class="result__img"
        :src="require(`@/assets/images/home/result_${character}@2x.png`)"
        :alt="character"
      />
      <img
        @click="playAgain"
        class="result__again"
        src="@/assets/images/icons/scan.svg"
        alt="scan"
      />
    </template>
  </div>
</template>

<script>
export default {
  props: {
    character: String,
    isAcquired: Boolean,
  },
  methods: {
    playAgain() {
      window.location.href = window.location.origin + '/fdpg/ar-character.html'
    },
  },
}
</script>
