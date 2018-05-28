/**
 * Created by sushanta on 5/24/18.
 */
import Vue from 'vue'

const state = { name: 'SHOW_ALL' };
const actions = {
  setVisibilityFilter ({ commit }, name) {
    commit({
      type: 'setVisibilityFilter',
      name
    })
  }
};
const mutations = {
  setVisibilityFilter (state, { name }) {
    Vue.set(state, 'name', name)
  }
};
export default {
  state,
  actions,
  mutations
}