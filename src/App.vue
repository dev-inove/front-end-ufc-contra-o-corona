<template>
    <div id="app">
        <Header />
        <Actions />
    </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import Actions from './components/Actions/Actions.vue'

export default {
    components: { Header, Actions }
}
</script>

<style lang="scss">
#app {
    -webkit-font-smoothing: antialiased;
}
</style>
