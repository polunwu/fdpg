<template>
  <div id="page-home" :class="{ 'show-overview': isOverview }">
    <HomeSection />
    <OverviewSection :isOverview="isOverview" />
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  data() {
    return {
      isOverview: !!this.$route.query.overview,
    }
  },
  watch: {
    '$route.query.overview': {
      immediate: true,
      handler(newVal) {
        this.isOverview = newVal ? true : false
      },
    },
  },
}
</script>
