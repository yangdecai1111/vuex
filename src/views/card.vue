<template>
  <div>
    <h1>我是购物车哦</h1>
    <ul>
      <li v-for='card in cards' :key='card.id'>
        {{card.id}}--{{card.name}}--{{card.price}}--{{card.nums}}
      </li>
    </ul>
    <p>总价是: ¥{{ getTotal }} </p>
  </div>
</template>
<script>
import { mapState, mapGetters} from 'vuex'
export default {
  computed: {
    ...mapState('card', ['cards']),
    ...mapGetters('card', ['getTotal'])
  }
}
</script>

