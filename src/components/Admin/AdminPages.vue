<template>
    <div class="admin-pages">
        <Sidebar />
        <div class="pad-sm pad-xs-vr">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Sidebar from './Sidebar.vue'

export default {
    components: { Sidebar }
}
</script>

<style lang="scss" scoped>
.admin-pages {
    display: grid;
    grid-template-columns: 20% 1fr;

    background-color: #fcfcfc;
    height: 100vh;
}
</style>
