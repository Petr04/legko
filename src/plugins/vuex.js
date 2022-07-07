import Vue from 'vue';
import Vuex from 'vuex';
import axios from '@/plugins/axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state() {
    return {
      articles: [],
    };
  },
  mutations: {
    updateArticles(state, newValue) {
      state.articles = newValue;
    },
  },
  actions: {
    updateArticles(context) {
      axios.get('articles')
        .then(response => {
          context.commit('updateArticles', response.data);
        }).catch(console.error);
    },
  },
});

export default store;
