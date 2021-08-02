export default {
  created() {
    if (this.$route.name === 'login' && isAuth()) {
      this.$router.push('/')
    }
    if (!isAuth()) {
      this.$router.push('/login')
    }
  },
}

function isAuth() {
  // Check if user session exists somehow
  return false
}
