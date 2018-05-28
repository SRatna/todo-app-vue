<template>
  <div class="todo-task">
    <input
      autofocus
      class="todo-input-edit"
      type="text"
      v-model="todoText"
      @keyup.enter="onTodoEntered">
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'EditTodo',
    props: {
      todo: Object
    },
    data: function () {
      return {
        todoText: this.todo.text
      }
    },
    methods: {
      ...mapActions([
        'editTodo',
        'resetBeingEditedTodo'
      ]),
      onTodoEntered: function () {
        if (this.todoText !== '') {
          this.editTodo({
            id: this.todo.id,
            text: this.todoText
          });
          this.resetBeingEditedTodo();
          this.todoText = '';
        }
      }
    },
    computed: {
    }
  }
</script>

