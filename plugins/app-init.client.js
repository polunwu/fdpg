export default (context) => {
  // 啟用 timer
  context.store.dispatch('timer/init')

  window.onbeforeunload = function () {
    console.log('unloaded')
    // 清除 timer
    context.store.dispatch('timer/clear')
    return null
  }
}
