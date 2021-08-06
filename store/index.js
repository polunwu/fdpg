export const state = () => ({
  isOverview: false,
})

export const mutations = {
  showOverview(state) {
    state.isOverview = true
  },
  showHome(state) {
    state.isOverview = false
  },
}
