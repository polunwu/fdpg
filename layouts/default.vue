<template>
  <div>
    <h1>default</h1>
    <div>
      <nuxt-link to="/"> home </nuxt-link>
      <nuxt-link to="/login"> login </nuxt-link>
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  middleware: 'auth',
}
</script>

<style lang="scss" scoped>
h1 {
  color: $primary;
}
</style>
