import Vue from 'vue'
import Vuex from 'vuex'

import AuthService from '../services/AuthService';
import AccountService from '../services/AccountService';
import ErrorResponse from '../services/ErrorResponse'

Vue.use(Vuex)

const jwt = JSON.parse(localStorage.getItem('jwt'));

export default new Vuex.Store({
  state: {
    currentNotification: undefined,
    jwt: jwt ? jwt : undefined
  },
  mutations: {
    loginSuccess(state, jwt) {
      state.jwt = jwt;
    },
    cleanLogin(state) {
      state.jwt = undefined;
    },
    cleanNotification(state) {
      state.currentNotification = undefined;
    },
    saveNotification(state, { data, isError = true }) {
      state.currentNotification = isError ? ErrorResponse.response(data) : data;
    }

  },
  actions: {
    logOut({ commit }) {
      commit('cleanNotification');

      AuthService.logOut().catch(error => commit('saveNotification', { data: error }));
      commit('cleanLogin');
    },
    cleanNotification({ commit }) {
      commit('cleanLogin');
      localStorage.removeItem('jwt')
      return Promise.resolve(true);
    },
    login({ commit }, user) {
      commit('cleanNotification');

      return AuthService.logIn(user).then((jwt) => {
        commit('loginSuccess', jwt);
        return Promise.resolve(jwt)
      }).catch(error => {
        commit('saveNotification', { data: error })
        return Promise.reject(error)
      })
    },
    accountConfirmation({ commit }, hash) {
      commit('cleanNotification');

      return AuthService.accountConfirmation(hash).then((jwt) => {
        commit('loginSuccess', jwt);
        return Promise.resolve(jwt)
      }).catch(error => {
        commit('saveNotification', { data: error })
        return Promise.reject(error)
      })
    },
    register({ commit }, user) {
      commit('cleanNotification');

      return AccountService.register(user).catch(error => {
        commit('saveNotification', { data: error })
        return Promise.reject(error)
      })
    },
    forgotPassword({ commit }, user) {

      return AccountService.forgotPassword(user).catch(error => {
        commit('saveNotification', { data: error })
        return Promise.reject(error)
      })
    },
    confirmForgotPassword({ commit }, { user, hash }) {

      return AccountService.confirmForgotPassword(user, hash).catch(error => {
        commit('saveNotification', { data: error })
        return Promise.reject(error)
      })
    },
    pushNotification({ commit }, data) {
      commit('cleanNotification');
      commit('saveNotification', { data: data, isError: false });
    }
  },
  getters: {
    getError: state => {
      return state.currentNotification;
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
