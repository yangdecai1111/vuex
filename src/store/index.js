import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  inputVal: '',
  todos: []
}
const getters = {

}
const mutations = {
  chgInputVal (state, payload) {
    state.inputVal = payload
  },
  addTodo (state) {
    let todo = {
      name: state.inputVal
    }
    state.todos.push(todo)
  },
  initTodo (state, todo) {
    state.todos = todo
  },
  delTodo (state, payload) {
    let index = state.todos.findIndex(item => item.id === payload)
    state.todos.splice(index, 1)
  }
}
const actions = {
  fn1 ({ state, commit }) {
    fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: state.inputVal })
    }).then(response => response.json()).then(res => {
      commit({
        type: 'addTodo'
      })
    })
  },
  initTodo ({ commit }) {
    fetch('http://localhost:3000/todos').then(response => response.json()).then(res => {
      console.log(res)
      commit('initTodo', res)
    })
  },
  delTodo ({ commit, state }, todo) {
    let newTodo = [...state.todos]
    commit('delTodo', todo.id)
    setTimeout(() => {
      fetch(`http://localhost:30001/todos/${todo.id}`, { method: 'delete' }).then(response => response.json()).then(res => {
        console.log(res)
      }).catch(error => {
        console.log(error)
        commit('initTodo', newTodo)
      })
    }, 2000)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
