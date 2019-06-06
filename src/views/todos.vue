<template>
  <div>
    <input type="text" v-model="inputVal"><button @click="fn1">添加</button>
    <ul>
      <todoItem v-for="(item, index) in todos" :key="index" :todo="item" :index="index"></todoItem>
    </ul>
    <h2>商品列表</h2>
      <ul>
        <li v-for='good in goods' :key='good.id'>
          {{good.id}}--{{good.name}}--{{good.price}}<button>-</button><button @click='addCard(good)'>+</button>
        </li>
      </ul>
      <router-link to='/card'>去购物车</router-link>
  </div>
</template>
<script>
import todoItem from './todoItem.vue'
import { mapState, mapActions, mapMutations} from 'vuex'
export default {
  computed: {
    ...mapState('todo', ['todos']),
    ...mapState('good', ['goods']),
    inputVal: {
      get () {
        return this.$store.state.inputVal
      },
      set (value) {
        this.$store.commit('todo/chgInputVal', value)
      }
    }
  },
  components: {
    todoItem
  },
  methods: {
    ...mapActions('todo', ['fn1', 'initTodo']),
    ...mapActions('good', ['getGood']),
    ...mapMutations('card', ['addCard'])
  },
  created () {
    this.initTodo()
    this.getGood()
  }
}
</script>
