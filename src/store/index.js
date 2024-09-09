import { createStore } from 'vuex';

export default createStore({
  state: {
    user: null,
    messages: [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    addMessage(state, message) {
      state.messages.push(message);
    },
  },
  actions: {
    login({ commit }, user) {
      // Simulate login
      commit('setUser', user);
    },
    sendMessage({ commit, state }, text) {
      const message = {
        id: state.messages.length + 1,
        user: state.user.name,
        text,
      };
      commit('addMessage', message);
    },
  },
  getters: {
    getMessages: (state) => state.messages,
  },
});
