import Vue from 'vue'
import Vuex from 'vuex'

import gauth from './modules/gauth'
import AuthService from '../services/AuthService';
import AccountService from '../services/AccountService';
import ErrorResponse from '../services/ErrorResponse'

Vue.use(Vuex)

const jwt = JSON.parse(localStorage.getItem('jwt'));
const userContext = JSON.parse(localStorage.getItem('userContext'));

export default new Vuex.Store({
  state: {
    loading: undefined,
    currentNotification: undefined,
    jwt: jwt ? jwt : undefined,
    userContext: userContext ? userContext : undefined
  },
  mutations: {
    loginSuccess(state, jwt) {
      state.jwt = jwt;
    },
    cleanLogin(state) {
      state.jwt = undefined;
      state.userContext = undefined;
    },
    cleanNotification(state) {
      state.currentNotification = undefined;
    },
    saveNotification(state, { data, isError = true }) {
      state.currentNotification = isError ? ErrorResponse.response(data) : data;
    },
    cleanLoading(state) {
      state.loading = undefined;
    },
    saveLoading(state, type = 'start') {
      state.loading = type;
    },
    saveUserContext(state, userContext) {
      state.userContext = userContext;
    }
  },
  actions: {
    logOut({ commit }) {
      commit('cleanNotification');
      commit('saveLoading');

      AuthService.logOut()
        .then(() => commit('saveLoading', 'done'))
        .catch(error => {
          commit('saveNotification', { data: error })
          commit('saveLoading', 'fail');
        });

      localStorage.removeItem('jwt')
      localStorage.removeItem('userContext')

      commit('cleanLogin');
    },
    cleanNotification({ commit }) {
      commit('cleanLogin');
      localStorage.removeItem('jwt')
      return Promise.resolve(true);
    },
    login({ commit }, user) {
      commit('saveLoading');
      commit('cleanNotification');

      return AuthService.logIn(user).then((jwt) => {
        commit('loginSuccess', jwt);
        commit('saveLoading', 'done');

        return Promise.resolve(jwt)
      }).catch(error => {
        commit('saveNotification', { data: error })
        commit('saveLoading', 'fail');
        return Promise.reject(error)
      })
    },

    socialLogin({ commit }, { driver, dataAuth }) {
      commit('saveLoading');
      commit('cleanNotification');
      return AuthService.socialLogin(driver, dataAuth).then((jwt) => {
        commit('loginSuccess', jwt);
        commit('saveLoading', 'done');
        return Promise.resolve(jwt)
      }).catch(error => {
        commit('saveNotification', { data: error })
        commit('saveLoading', 'fail');
        return Promise.reject(error)
      })
    },

    updateUser({ commit }, user) {
      commit('saveLoading');
      commit('cleanNotification');
      return AccountService.updateUser(user)
        .then(() => commit('saveLoading', 'done'))
        .catch(error => {
          commit('saveNotification', { data: error })
          commit('saveLoading', 'fail');
          return Promise.reject(error)
        })
    },

    accountConfirmation({ commit }, hash) {
      commit('cleanNotification');
      commit('saveLoading');

      return AuthService.accountConfirmation(hash).then((jwt) => {
        commit('loginSuccess', jwt);
        commit('saveLoading', 'done');
        return Promise.resolve(jwt)
      }).catch(error => {
        commit('saveNotification', { data: error })
        commit('saveLoading', 'fail');
        return Promise.reject(error)
      })
    },
    register({ commit }, user) {
      commit('cleanNotification');
      commit('saveLoading');

      return AccountService.register(user)
        .then(() => commit('saveLoading', 'done'))
        .catch(error => {
          commit('saveNotification', { data: error })
          commit('saveLoading', 'fail');
          return Promise.reject(error)
        })
    },
    forgotPassword({ commit }, user) {
      commit('saveLoading');
      return AccountService.forgotPassword(user)
        .then(() => commit('saveLoading', 'done'))
        .catch(error => {
          commit('saveNotification', { data: error })
          commit('saveLoading', 'fail');
          return Promise.reject(error)
        })
    },
    confirmForgotPassword({ commit }, { user, hash }) {
      commit('saveLoading');
      return AccountService.confirmForgotPassword(user, hash)
        .then(() => commit('saveLoading', 'done'))
        .catch(error => {
          commit('saveNotification', { data: error })
          commit('saveLoading', 'fail');
          return Promise.reject(error)
        })
    },
    loadUserContext({ commit }) {
      return AccountService.loadUserContext()
        .then(userContext => {
          commit('saveUserContext', userContext);
          return Promise.resolve(userContext);
        })
        .catch(error => {
          commit('saveNotification', { data: error })
          return Promise.reject(error)
        })
    },
    pushNotification({ commit }, data) {
      commit('cleanNotification');
      commit('saveNotification', { data: data, isError: false });
    },
    requestPasswordRest({ commit }) {
      commit('saveLoading');
      return AccountService.requestPasswordRest()
        .then(() => commit('saveLoading', 'done'))
        .catch(error => {
          commit('saveNotification', { data: error })
          commit('saveLoading', 'fail')
          return Promise.reject(error)
        })
    },
    updatePassword({commit}, data){
      commit('saveLoading');
      return AccountService.updatePassword(data)
        .then(() => commit('saveLoading', 'done'))
        .catch(error => {
          commit('saveNotification', { data: error })
          commit('saveLoading', 'fail')
          return Promise.reject(error)
        })
    }

  },
  getters: {
    getError: state => state.currentNotification,
    getloading: state => state.loading,
    isAuth: state => {

      if (state.jwt === undefined) {
        return false;
      }

      var date = new Date(state.jwt.expiresIn);
      var now_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
        date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());

      return new Date() <= new Date(now_utc);
    },

    getUserContext: (state) => state.userContext
  },
  modules: {
    gauth
  }
})
