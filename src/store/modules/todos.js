/**
 * Created by sushanta on 5/24/18.
 */
import shortid from 'shortid'

const state = {
  items: []
};
const actions = {
  addTodo ({ commit }, text) {
    commit({
      type: 'addTodo',
      id: shortid.generate(),
      text
    })
  },
  toggleTodo ({ commit }, id) {
    commit({
      type: 'toggleTodo',
      id
    })
  },
  removeTodo ({ commit }, id) {
    commit({
      type: 'removeTodo',
      id
    })
  },
  removeDoneTodos ({ commit }) {
    commit({
      type: 'removeDoneTodos'
    })
  },
  editTodo ({ commit }, { id, text }) {
    commit({
      type: 'editTodo',
      id,
      text
    })
  },
};
const mutations = {
  addTodo (state, { id, text }) {
    state.items.push({
      id,
      text,
      completed: false
    })
  },
  editTodo (state, { id, text }) {
    const index = state.items.findIndex(todo => todo.id === id);
    if(index > -1) {
      const todo = state.items[index];
      state.items.splice(index, 1, { ...todo, text });
    }
  },
  toggleTodo (state, { id }) {
    const index = state.items.findIndex(todo => todo.id === id);
    if(index > -1) {
      const todo = state.items[index];
      state.items.splice(index, 1, { ...todo, completed: !todo.completed });
    }
  },
  removeTodo (state, { id }) {
    const index = state.items.findIndex(todo => todo.id === id);
    if(index > -1) {
      state.items.splice(index, 1);
    }
  },
  removeDoneTodos (state) {
    state.items = state.items.filter(todo => todo.completed === false)
  },
};
const getters = {
  doneTodosCount (state) {
    return state.items.reduce((n, todo) => n + (todo.completed === true), 0);
  },
  leftTodosCount (state) {
    return state.items.reduce((n, todo) => n + (todo.completed === false), 0);
  },
  totalTodosCount (state) {
    return state.items.length;
  },
};
export default {
  state,
  actions,
  mutations,
  getters
}