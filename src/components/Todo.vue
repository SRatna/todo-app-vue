<template>
  <div class="todo-task">
    <input
      @click="toggleTodo(todo.id)"
      type="checkbox"
      class="todo-checkbox"> &nbsp;
    <span
      class="todo-text"
      :class="{ 'todo-task-done': todo.completed }">
        {{todo.text}}
    </span>
    <span
      @click="removeTodo(todo.id)"
      class="todo-cross">
      &#10005;
    </span>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'Todo',
    props: {
      todo: Object
    },
    data: function () {
      return {
      }
    },
    methods: {
      ...mapActions([
        'toggleTodo',
        'removeTodo',
      ])
    },
    computed: {

    }
  }
</script>
