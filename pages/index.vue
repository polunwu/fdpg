<template>
  <div id="page-home">Home Dashboard {{ fdid }}</div>
</template>

<script>
import { getUser } from '@/utils/user'
export default {
  layout: 'dashboard',
  data() {
    const fdid = getUser() ? getUser().fdid : ''
    return {
      fdid: fdid,
    }
  },
}
</script>
