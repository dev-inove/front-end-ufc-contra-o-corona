import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        dark: false
    },
    mutations: {
        changeTheme(state, payload) {
            state.dark = payload
        }
    },
    actions: {},
    modules: {}
})
