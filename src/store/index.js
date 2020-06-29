/* eslint-disable dot-notation */
import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
        dark: false
    },
    mutations: {
        changeTheme(state, payload) {
            state.dark = payload
        },
        setUser(state, user) {
            state.user = user
            if (user) {
                axios.defaults.headers.common[
                    'Authorization'
                ] = `bearer ${user.token}`
            } else {
                delete axios.defaults.headers.common['Authorization']
            }
        }
    },
    actions: {},
    modules: {}
})
