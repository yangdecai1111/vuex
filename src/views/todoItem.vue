<template>
  <li>{{ todo.name }}-- <button @click="delTodo(todo)">删除</button></li>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    todo: Object,
    index: Number
  },
  methods: {
    ...mapActions('todo', ['delTodo'])
  }
}
</script>
