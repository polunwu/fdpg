const TIME_1 = new Date('2021/09/04 13:30:00 UTC+8') // Meet 開放進場
const TIME_2 = new Date('2021/09/04 15:20:00 UTC+8') // 中場休息，加入 Playland
const TIME_3 = new Date('2021/09/04 15:40:00 UTC+8') // 下半場，進入 Meet
const TIME_4 = new Date('2021/09/04 16:50:00 UTC+8') // 問券
const TIME_5 = new Date('2021/09/04 16:55:00 UTC+8') // 問券後五分鐘，桌布

// 測試用
// const TIME_1 = new Date('2021/08/23 16:30:00 UTC+8') // Meet 開放進場
// const TIME_2 = new Date('2021/08/23 16:30:05 UTC+8') // 中場休息，加入 Playland
// const TIME_3 = new Date('2021/08/23 16:30:10 UTC+8') // 下半場，進入 Meet
// const TIME_4 = new Date('2021/08/23 16:30:15 UTC+8') // 問券
// const TIME_5 = new Date('2021/08/23 16:30:20 UTC+8') // 問券後五分鐘，桌布

export const calcPhase = () => {
  const currDate = Date.now()
  if (currDate > TIME_5) {
    return 5
  }
  if (currDate > TIME_4) {
    return 4
  }
  if (currDate > TIME_3) {
    return 3
  }
  if (currDate > TIME_2) {
    return 2
  }
  if (currDate > TIME_1) {
    return 1
  }
  return 0
}
