import { calcPhase } from '@/utils/notifications'

export const state = () => ({
  phase: 0,
  timerID: null,
  showDownloadLink: false, // 顯示桌布下載連結
})

export const mutations = {
  setPhase(state, { phase }) {
    state.phase = phase
  },
  setTimerID(state, { timerID }) {
    state.timerID = timerID
  },
  clearTimer(state) {
    clearInterval(state.timerID)
  },
  enableDownload(state) {
    state.showDownloadLink = true
  },
}

export const actions = {
  init({ commit }) {
    console.log('notifications init')
    const notificationTimerID = setInterval(() => {
      const newPhase = calcPhase()
      commit('setPhase', { phase: newPhase })
    }, 1000)
    commit('setTimerID', { timerID: notificationTimerID })
  },
  clear({ commit }) {
    commit('clearTimer')
  },
  enableDownload({ commit }) {
    commit('enableDownload')
  },
}

export const getters = {
  phase(state) {
    return state.phase
  },
  showDownloadLink(state) {
    return state.showDownloadLink
  },
}
