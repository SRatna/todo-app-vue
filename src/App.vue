<template>
  <div id="app" class="container">
    <p class="title">todos</p>
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
</template>

<script>
import AddTodo from './components/AddTodo.vue'
import TodoList from './components/TodoList.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    AddTodo,
    TodoList,
    Footer
  }
}
</script>

<style src="./App.css"></style>
