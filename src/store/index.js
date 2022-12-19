import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    news: [],
    job: [],
    ask: [],
    user: {},
    item: []
  },
  getters: {
    fetchedItem(state) {
      return state.item
    }
  },

  mutations,
  actions,
})