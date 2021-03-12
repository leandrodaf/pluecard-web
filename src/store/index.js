import Vue from 'vue'
import Vuex from 'vuex'

import AuthService from '../services/AuthService';
import AccountService from '../services/AccountService';
import ErrorResponse from '../services/ErrorResponse'

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
    },
    cleanError(state) {
      state.currentError = undefined;
    },
    saveError(state, error) {
      state.currentError = ErrorResponse.response(error)
    }
  },
  actions: {
    logOut({ commit }) {
      commit('cleanError');

      AuthService.logOut().catch(error => commit('saveError', error));
      commit('cleanLogin');
    },
    cleanError({ commit }) {
      commit('cleanLogin');
      localStorage.removeItem('jwt')
      return Promise.resolve(true);
    },
    login({ commit }, user) {
      commit('cleanError');

      return AuthService.logIn(user).then((jwt) => {
        commit('loginSuccess', jwt);
        return Promise.resolve(jwt)
      }).catch(error => commit('saveError', error))
    },
    register({ commit }, user) {
      commit('cleanError');

      return AccountService.register(user).catch(error => {
        commit('saveError', error)
      });
    }
  },
  getters: {
    getError: state => {
      return state.currentError;
    },

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
