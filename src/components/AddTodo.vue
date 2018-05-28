<template>
  <input
    autofocus
    class="todo-input"
    type="text"
    v-model="todoText"
    @keyup.enter="onTodoEntered">
</template>

<script>
  import { mapActions } from 'vuex'

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
        if (this.todoText !== '') {
          this.addTodo(this.todoText);
          this.todoText = '';
        }
      }
    },
    computed: {
    }
  }
</script>

