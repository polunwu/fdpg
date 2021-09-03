<template>
  <div id="page-questions">
    <!-- Embeded Typeform -->
    <div
      data-tf-widget="RYVvx8uY"
      data-tf-on-submit="submit"
      style="width: 100%; height: 100%; color: #ffffff"
    ></div>
    <script src="//embed.typeform.com/next/embed.js"></script>
    <script>
      function submit(event) {
        // this needs to be available on global scope (window)
        window.dispatchEvent(new CustomEvent('typeformSubmit'))
      }
    </script>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  mounted() {
    window.addEventListener('typeformSubmit', () => {
      console.log('typeformSubmit')
      this.$store.dispatch('notifications/enableDownload')
    })
  },
}
</script>
