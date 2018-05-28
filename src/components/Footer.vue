<template>
  <div v-if="totalTodosCount > 0" class="todo-tasks-status">
    <span>{{leftTodosCount}}{{statusSuffix}}</span>
    <div class="tasks-status-btns">
      <button
        @click="setVisibilityFilter('SHOW_ALL')"
        :class="{'active': filter.name === 'SHOW_ALL'}">
        All
      </button>
      <button
        @click="setVisibilityFilter('SHOW_ACTIVE')"
        :class="{'active': filter.name === 'SHOW_ACTIVE'}">
        Active
      </button>
      <button
        @click="setVisibilityFilter('SHOW_DONE')"
        :class="{'active': filter.name === 'SHOW_DONE'}">
        Done
      </button>
    </div>
    <button
      @click="removeDoneTodos"
      v-if="doneTodosCount > 0"
      class="task-clear-btn">
        Clear Done
    </button>
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapState } from 'vuex'

  export default {
    name: 'Footer',
    props: {
      todo: Object
    },
    data: function () {
      return {
      }
    },
    methods: {
      ...mapActions([
        'setVisibilityFilter',
        'removeDoneTodos'
      ])
    },
    computed: {
      ...mapGetters([
        'doneTodosCount',
        'leftTodosCount',
        'totalTodosCount',
      ]),
      ...mapState([
        'filter'
      ]),
      statusSuffix: function () {
        return this.leftTodosCount > 1 ? ' items left' : ' item left';
      }
    }
  }
</script>
