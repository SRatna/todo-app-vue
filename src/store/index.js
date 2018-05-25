/**
 * Created by sushanta on 5/24/18.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import todos from './modules/todos'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todos
  }
})
