// dateString format: '2021/09/04 12:00:00'
export function countDown(dateString) {
  const wishDate = new Date(dateString)

  return function counter() {
    const currDate = Date.now()
    const diff = wishDate - currDate
    const dd = Math.floor(diff / 1000 / 60 / 60 / 24)
    let hh = Math.floor(diff / 1000 / 60 / 60) % 24
    let mm = Math.floor(diff / 1000 / 60) % 60
    let ss = Math.floor(diff / 1000) % 60

    // 小時、分鐘、秒的個位數補零
    if (hh < 10) {
      hh = '0' + hh.toString()
    }
    if (mm < 10) {
      mm = '0' + mm.toString()
    }
    if (ss < 10) {
      ss = '0' + ss.toString()
    }

    return {
      isUp: diff < 0 ? true : false,
      dd,
      hh,
      mm,
      ss,
    }
  }
}
