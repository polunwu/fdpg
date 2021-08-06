<template>
  <div id="page-home" :class="{ 'show-overview': isOverview }">
    <HomeSection />
    <OverviewSection />
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  computed: {
    isOverview() {
      return this.$store.state.isOverview
    },
  },
}
</script>
