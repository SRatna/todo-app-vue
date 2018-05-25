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
};
const mutations = {
  addTodo (state, { id, text }) {
    state.push({
      id,
      text,
      completed: false
    })
  }
};
export default {
  state,
  actions,
  mutations
}