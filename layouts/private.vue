<template>
  <div>
    <h1>private</h1>
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
  color: red;
}
</style>
