import { countDownFrom } from '@/utils/countDownFrom'
// 計數器，計算剩餘時間，指定台北時區
const meetCounter = countDownFrom('2021/09/04 13:30:00 UTC+8') // Meet 開放進場
const gatherCounter = countDownFrom('2021/09/04 15:00:00 UTC+8') // Gather 開放進場
// const gatherCounter = countDownFrom('2021/08/18 16:53:00 UTC+8') // 指定台北時區
// const meetCounter = countDownFrom('2021/08/18 16:59:00 UTC+8')

export const state = () => ({
  gather: {
    timerID: null,
    leftTime: {
      isUp: false,
      dd: 0,
      hh: 0,
      mm: 0,
      ss: 0,
    },
  },
  meet: {
    timerID: null,
    leftTime: {
      isUp: false,
      dd: 0,
      hh: 0,
      mm: 0,
      ss: 0,
    },
  },
})

export const mutations = {
  setLeftTime(state, { name, leftTime }) {
    state[name].leftTime = leftTime
  },
  setTimerID(state, { name, timerID }) {
    state[name].timerID = timerID
  },
  clearTimer(state) {
    clearInterval(state.gather.timerID)
    clearInterval(state.meet.timerID)
  },
}

export const actions = {
  init({ commit }) {
    console.log('timer init')
    // 每秒呼叫一次剩餘時間
    const gatherTimerID = setInterval(() => {
      commit('setLeftTime', { name: 'gather', leftTime: gatherCounter() })
    }, 1000)
    commit('setTimerID', { name: 'gather', timerID: gatherTimerID })

    const meetTimerID = setInterval(() => {
      commit('setLeftTime', { name: 'meet', leftTime: meetCounter() })
    }, 1000)
    commit('setTimerID', { name: 'meet', timerID: meetTimerID })
  },

  clear({ commit }) {
    commit('clearTimer')
  },
}

export const getters = {
  gatherIsUp(state) {
    return state.gather.leftTime.isUp
  },
  meetIsUp(state) {
    return state.meet.leftTime.isUp
  },
}
