<template>
  <div>
    <input type="text" v-model="inputVal"><button @click="fn1">添加</button>
    <ul>
      <todoItem v-for="(item, index) in todos" :key="index" :todo="item" :index="index"></todoItem>
    </ul>
  </div>
</template>
<script>
import todoItem from './todoItem.vue'
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState(['todos']),
    inputVal: {
      get () {
        return this.$store.state.inputVal
      },
      set (value) {
        this.$store.commit('chgInputVal', value)
      }
    }
  },
  components: {
    todoItem
  },
  methods: {
    ...mapActions(['fn1', 'initTodo'])
  },
  created () {
    this.initTodo()
  }
}
</script>
