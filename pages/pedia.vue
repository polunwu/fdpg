<template>
  <div id="page-pedia">
    <img
      class="bg"
      src="@/assets/images/home/space_grid_bg.svg"
      alt="space_grid_bg"
    />
    <img
      class="pc-bg"
      src="@/assets/images/pedia/pc/bg.png"
      alt="space_grid_bg"
    />
    <img class="top-img" src="@/assets/images/pedia/top@2x.png" alt="top" />
    <img
      class="pc-top-img"
      src="@/assets/images/pedia/pc/top@2x.png"
      alt="top"
    />
    <div class="cards-container">
      <FlipCard v-for="index in 12" :key="index" :index="index" />
    </div>
    <div class="rights">© Fourdesire. All Rights Reserved.</div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
}
</script>
