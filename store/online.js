import { getUser } from '@/utils/user'

const requestOnlineStatus = async function ($axios, commit, $honeybadger) {
  try {
    const { online_count } = await $axios.$post(
      'https://j9dh3ne194.execute-api.ap-northeast-2.amazonaws.com/fdpg2021/online_status',
      {
        fdid: getUser().fdid,
      },
      { progress: false }
    )
    console.log(online_count)
    commit('setCount', { count: online_count })
  } catch (error) {
    $honeybadger.notify(error)
    console.log(error)
  }
}

export const state = () => ({
  count: 0,
  timerID: null,
})

export const mutations = {
  setCount(state, { count }) {
    state.count = count
  },
  setTimerID(state, { timerID }) {
    state.timerID = timerID
  },
  clearTimer(state) {
    clearInterval(state.timerID)
  },
}

export const actions = {
  poll({ commit }) {
    commit('clearTimer')
    requestOnlineStatus(this.$axios, commit, this._vm.$honeybadger)
    const timerID = setInterval(() => {
      requestOnlineStatus(this.$axios, commit, this._vm.$honeybadger)
    }, 5000)
    commit('setTimerID', { timerID: timerID })

    // 計時三小時，閒置過久清空計數器
    setTimeout(() => {
      commit('clearTimer')
    }, 10800000)
  },

  clear({ commit }) {
    commit('clearTimer')
  },
}

export const getters = {
  onlineCount(state) {
    return state.count
  },
}
