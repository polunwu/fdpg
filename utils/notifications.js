const TIME_1 = new Date('2021/09/04 13:30:00 UTC+8') // Meet 開放進場
const TIME_2 = new Date('2021/09/04 15:25:00 UTC+8') // 中場休息，加入 Playland
const TIME_3 = new Date('2021/09/04 15:40:00 UTC+8') // 下半場，進入 Meet
const TIME_4 = new Date('2021/09/04 16:40:00 UTC+8') // 問券

// 測試用
// const TIME_1 = new Date('2021/08/25 14:09:00 UTC+8') // Meet 開放進場
// const TIME_2 = new Date('2021/08/25 14:09:05 UTC+8') // 中場休息，加入 Playland
// const TIME_3 = new Date('2021/08/25 14:09:10 UTC+8') // 下半場，進入 Meet
// const TIME_4 = new Date('2021/08/25 14:09:15 UTC+8') // 問券

export const calcPhase = () => {
  const currDate = Date.now()
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
