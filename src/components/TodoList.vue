<template>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      <Todo :todo="todo" />
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Todo from './Todo.vue'

  export default {
    name: 'TodoList',
    components: {
      Todo,
    },
    data: function () {
      return {
      }
    },
    methods: {

    },
    computed: {
      ...mapState([
        'todos'
      ])
    }
  }
</script>
