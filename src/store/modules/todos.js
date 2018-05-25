/**
 * Created by sushanta on 5/24/18.
 */
import shortid from 'shortid'

const state = [];
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
};
const mutations = {
  addTodo (state, { id, text }) {
    state.push({
      id,
      text,
      completed: false
    })
  },
  toggleTodo (state, { id }) {
    const index = state.findIndex(todo => todo.id === id);
    if(index > -1) {
      const todo = state[index];
      state.splice(index, 1, { ...todo, completed: !todo.completed });
    }
  },
  removeTodo (state, { id }) {
    const index = state.findIndex(todo => todo.id === id);
    if(index > -1) {
      state.splice(index, 1);
    }
  },
};
export default {
  state,
  actions,
  mutations
}