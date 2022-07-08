import Vue from 'vue';
import Vuex from 'vuex';
import axios from '@/plugins/axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state() {
    return {
      groups: [],
    };
  },
  mutations: {
    updateGroups(state, newValue) {
      state.groups = newValue;
    },
  },
  actions: {
    updateGroups(context) {
      axios.get('groups')
        .then(response => {
          context.commit('updateGroups', response.data);
        }).catch(alert);
    },
  },
});

export default store;
