export default {
  namespaced: true,
  state: {
    goods: []
  },
  mutations: {
    setGoods (state, good) {
      state.goods = good
    }
  },
  actions: {
    getGood ({ commit }) {
      fetch('http://localhost:3000/goods').then(response => response.json()).then(res => {
        commit('setGoods', res)
      })
    }
  }
}
