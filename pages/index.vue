<template>
  <div id="page-home">
    <div class="vip">
      <p v-if="!isAcquired" class="vip__msg">
        <NuxtLink to="/characters">前往 </NuxtLink>取得專屬角色
      </p>
      <div v-else class="vip__char">角色圖</div>
      <!-- 結果數值 -->
      <ResultBlock
        keyName="plan"
        name="計畫狂"
        :isAcquired="isAcquired"
        :value="90"
      />
      <ResultBlock
        keyName="move"
        name="行動力"
        :isAcquired="isAcquired"
        :value="100"
      />
      <ResultBlock
        keyName="money"
        name="理財力"
        :isAcquired="isAcquired"
        :value="80"
      />
      <ResultBlock
        keyName="life"
        name="愛生活"
        :isAcquired="isAcquired"
        :value="70"
      />
      <div class="vip__fdid">
        {{ fdid.toUpperCase() }}
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
