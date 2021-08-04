<template>
  <div id="page-home">
    <div class="vip">
      <p v-if="!isAcquired" class="vip__msg">
        <NuxtLink to="/characters">前往 </NuxtLink>取得專屬角色
      </p>
      <div v-else>角色圖</div>
      <div class="vip__fdid">
        {{ fdid }}
      </div>
    </div>
  </div>
</template>

<script>
import { getUser, charAcquired } from '@/utils/user'
export default {
  layout: 'dashboard',
  data() {
    const fdid = getUser() ? getUser().fdid : ''
    const characterNum = getUser() ? getUser().character : -1
    const isAcquired = charAcquired() ? true : false
    return {
      fdid: fdid,
      isAcquired: isAcquired, // 是否已取得角色
      characterNum: characterNum, // 角色編號
    }
  },
}
</script>
