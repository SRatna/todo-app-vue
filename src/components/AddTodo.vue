<template>
  <div>
    <input type="text" v-model="todoText" @keyup.enter="onTodoEntered">
    <ul>
      <li v-for="(todo, index) in todos" :key="todo.id">
      <span>
        {{index + 1}}. {{todo.text}}
      </span>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  export default {
    name: 'AddTodo',
    data: function () {
      return {
        todoText: ''
      }
    },
    methods: {
      ...mapActions([
        'addTodo'
      ]),
      onTodoEntered: function () {
        this.addTodo(this.todoText);
        this.todoText = '';
      }
    },
    computed: {
      ...mapState([
        'todos'
      ])
    }
  }
</script>

<style scoped lang="scss">
</style>
