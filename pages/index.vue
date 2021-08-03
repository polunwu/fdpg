<template>
  <div>Home Dashboard {{ fdid }}</div>
</template>

<script>
import { getUser } from '@/utils/user'
export default {
  data() {
    const fdid = getUser() ? getUser().fdid : ''
    return {
      fdid: fdid,
    }
  },
}
</script>
