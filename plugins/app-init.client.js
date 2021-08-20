import { getUser } from '@/utils/user'

export default (context) => {
  // 啟用倒數計時器
  context.store.dispatch('timer/init')
  // 輪詢上線人數
  if (getUser()) {
    context.store.dispatch('online/poll')
  }

  window.onbeforeunload = function () {
    console.log('unloaded')
    // 清除 timer
    context.store.dispatch('timer/clear')
    context.store.dispatch('online/clear')
    return null
  }
}
