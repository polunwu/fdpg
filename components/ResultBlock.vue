<template>
  <div :class="`vip__result ${keyName}`">
    <img
      class="result-img"
      :src="require(`@/assets/images/home/result_${keyName}@2x.png`)"
    />
    <div class="result-block">
      <span class="name">{{ name }}</span>
      <span class="value">{{ isAcquired ? `${value}%` : '-' }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    keyName: String,
    name: String,
    value: Number,
    isAcquired: Boolean,
  },
}
</script>
