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
        :src="require(`@/assets/images/char/${character}.png`)"
        :alt="character"
      />
      <img
        @click="playAgain"
        class="result__again"
        src="@/assets/images/icons/scan.svg"
        alt="scan"
      />
      <NuxtLink :to="`/pedia#${character}`" class="result__pedia">
        <img src="@/assets/images/icons/pedia-white.svg" alt="pedia" />
      </NuxtLink>
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
      window.location.href = window.location.origin + '/ar-character.html'
    },
  },
}
</script>
