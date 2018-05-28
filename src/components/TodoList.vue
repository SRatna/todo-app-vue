<template>
  <div>
    <div v-for="todo in filteredTodos" :key="todo.id">
      <Todo v-if="beingEditedTodo.id !== todo.id" :todo="todo" />
      <EditTodo v-else :todo="todo" />
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Todo from './Todo.vue'
  import EditTodo from './EditTodo.vue'

  export default {
    name: 'TodoList',
    components: {
      Todo,
      EditTodo
    },
    data: function () {
      return {
      }
    },
    methods: {

    },
    computed: {
      ...mapState([
        'todos',
        'beingEditedTodo',
        'filter'
      ]),
      filteredTodos: function () {
        if (this.filter.name === 'SHOW_ACTIVE') {
          return this.todos.items.filter(todo => todo.completed === false);
        }
        if (this.filter.name === 'SHOW_DONE') {
          return this.todos.items.filter(todo => todo.completed === true);
        }
        return this.todos.items;
      }
    }
  }
</script>
