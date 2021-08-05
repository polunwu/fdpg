<template>
  <div id="page-home">
    <img
      class="bg"
      src="@/assets/images/home/space_grid_bg.svg"
      alt="space_grid_bg"
    />
    <div class="vip">
      <p v-if="!isAcquired" class="vip__msg">
        <NuxtLink to="/characters-overview">前往 </NuxtLink>取得專屬角色
      </p>
      <img v-else class="vip__char" src="@/assets/images/home/char_1@2x.png" />
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
    <div class="gates">
      <div class="gate-wrapper">
        <span v-if="!isAcquired" class="gate-notification"></span>
        <NuxtLink to="/characters-overview" class="gate char">
          <span class="gate__name">角色</span>
          <img
            class="gate__bg"
            src="@/assets/images/home/gate_1@2x.png"
            alt="gate_1"
          />
        </NuxtLink>
        <span class="gate-time"></span>
      </div>
      <div class="gate-wrapper">
        <a class="gate gather">
          <span class="gate__name">廣場</span>
          <img
            class="gate__bg"
            src="@/assets/images/home/gate_2@2x.png"
            alt="gate_1"
          />
          <div class="gate__block">
            <img src="@/assets/images/icons/lock.svg" alt="lock" />
          </div>
        </a>
        <span v-show="isGatherLocked" class="gate-time">10天 22:10:00</span>
      </div>
      <div class="gate-wrapper">
        <a class="gate meet">
          <span class="gate__name">大廳</span>
          <img
            class="gate__bg"
            src="@/assets/images/home/gate_3@2x.png"
            alt="gate_1"
          />
          <div class="gate__block">
            <img src="@/assets/images/icons/lock.svg" alt="lock" />
          </div>
        </a>
        <span v-show="isMeetLocked" class="gate-time">10天 22:10:00</span>
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
      isGatherLocked: true,
      isMeetLocked: true,
    }
  },
}
</script>
