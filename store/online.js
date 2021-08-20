import { getUser } from '@/utils/user'

const requestOnlineStatus = async function ($axios, commit) {
  try {
    const { online_count } = await $axios.$post(
      'https://j9dh3ne194.execute-api.ap-northeast-2.amazonaws.com/fdpg2021/online_status',
      {
        fdid: getUser().fdid,
      }
    )
    console.log(online_count)
    commit('setCount', { count: online_count })
  } catch (error) {
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
    requestOnlineStatus(this.$axios, commit)
    const timerID = setInterval(() => {
      requestOnlineStatus(this.$axios, commit)
    }, 5000)
    commit('setTimerID', { timerID: timerID })
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
