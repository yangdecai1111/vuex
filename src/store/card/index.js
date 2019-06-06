export default {
  namespaced: true,
  state: {
    cards: []
  },
  getters: {
    getTotal (state) {
      let total = 0
      state.cards.forEach(item => {
        total += item.price * item.nums
      })
      return total
    }
  },
  mutations: {
    addCard (state, good) {
      let id = good.id
      let index = state.cards.findIndex(good => good.id === id)
      if (index >= 0) {
        state.cards[index].nums += 1
      } else {
        state.cards.push({ ...good, nums: 1 })
      }
    }
  }
}
