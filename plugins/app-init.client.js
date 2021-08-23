import { getUser } from '@/utils/user'

export default (context) => {
  // 啟用倒數計時器
  context.store.dispatch('timer/init')
  // 輪詢上線人數
  if (getUser()) {
    context.store.dispatch('online/poll')
  }
  // 啟用通知計時器
  context.store.dispatch('notifications/init')

  window.onbeforeunload = function () {
    console.log('unloaded')
    // 清除 timer
    context.store.dispatch('timer/clear')
    context.store.dispatch('online/clear')
    context.store.dispatch('notifications/clear')
    return null
  }
}
