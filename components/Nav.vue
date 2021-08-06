<template>
  <nav id="nav">
    <NuxtLink to="/pedia" class="pedia-link">
      <img src="~/assets/images/icons/awesome-book.svg" alt="icon book" />
    </NuxtLink>
    <NuxtLink to="/" class="home-link" @click.native="handleHomeClick">
      <img src="~/assets/images/icons/home.svg" alt="icon home" />
    </NuxtLink>
    <div
      class="menu-toggle-btn"
      :class="{ 'is-open': isNavOpen }"
      @click="toggleNav"
    >
      <span class="bar top-bar"></span>
      <span class="bar bottom-bar"></span>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isNavOpen: false,
    }
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen
    },
    handleHomeClick() {
      this.$store.commit('showHome')
    },
  },
}
</script>
