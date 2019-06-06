import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/todos',
      name: 'todos',
      component: () => import('./views/todos.vue')
    },
    {
      path: '*',
      redirect: 'todos'
    }
  ]
})
