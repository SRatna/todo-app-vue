<template>
  <div id="app" class="container">
    <p class="title">todos</p>
    <AddTodo />
    <TodoList />
  </div>
</template>

<script>
import AddTodo from './components/AddTodo.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'app',
  components: {
    AddTodo,
    TodoList
  }
}
</script>

<style src="./App.css"></style>
