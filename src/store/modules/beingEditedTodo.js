/**
 * Created by sushanta on 5/24/18.
 */
import Vue from 'vue'

const state = { id: '0' };
const actions = {
  setBeingEditedTodo ({ commit }, id) {
    commit({
      type: 'setBeingEditedTodo',
      id
    })
  },
  resetBeingEditedTodo ({ commit }) {
    commit({
      type: 'resetBeingEditedTodo'
    })
  },
};
const mutations = {
  setBeingEditedTodo (state, { id }) {
    Vue.set(state, 'id', id)
  },
  resetBeingEditedTodo (state) {
    Vue.set(state, 'id', '0')
  },
};
export default {
  state,
  actions,
  mutations
}