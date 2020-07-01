<template>
    <div
        id="app"
        :style="
            this.$store.state.dark
                ? 'background-color: var(--grey-1);'
                : 'background-color: var(--white-1);'
        "
    >
        <router-view></router-view>
    </div>
</template>

<script>
// import Home from './views/Home.vue'
import { userKey } from '@/global'

export default {
    methods: {
        validateToken() {
            const json = localStorage.getItem(userKey)
            const userData = JSON.parse(json)
            this.$store.commit('setUser', userData)
        }
    },
    created() {
        this.validateToken()
    }
}
</script>

<style lang="scss">
#app {
    -webkit-font-smoothing: antialiased;
}
</style>
