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

export default {}
</script>

<style lang="scss">
#app {
    -webkit-font-smoothing: antialiased;
}
</style>
