import Vue from 'vue'
import Vuex from 'vuex'

import AuthService from '../services/AuthService';

Vue.use(Vuex)

const jwt = JSON.parse(localStorage.getItem('jwt'));

export default new Vuex.Store({
  state: {
    currentError: undefined,
    jwt: jwt ? jwt : undefined
  },
  mutations: {
    loginSuccess(state, jwt) {
      state.jwt = jwt;
    },
    cleanLogin(state) {
      state.jwt = undefined;
    }
  },
  actions: {
    logOut({ commit }) {
        commit('cleanLogin');
        localStorage.removeItem('jwt');
    },
    login({ commit }, user) {
      return AuthService.logIn(user).then((jwt) => {
        commit('loginSuccess', jwt);
        return Promise.resolve(jwt)
      })
    },
  },
  getters: {
    isAuth: state => {

      if (state.jwt === undefined) {
        return false;
      }

      var date = new Date(state.jwt.expiresIn);
      var now_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
        date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());

      return new Date() <= new Date(now_utc);
    }
  }
})
