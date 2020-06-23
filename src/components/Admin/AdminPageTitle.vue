<template>
    <div class="admin-page-title">
        <h1 class="admin-page-title__main">{{ title }}</h1>
        <h2 class="admin-page-title__sub" v-if="units">{{ units }} Unidades</h2>
        <h2 class="admin-page-title__sub" v-else>Nenhuma unidade encontrada</h2>
    </div>
</template>

<script>
export default {
    name: 'AdminPageTitle',
    props: {
        title: {
            type: String,
            required: true
        },
        units: {
            type: Number,
            required: false
        }
    }
}
</script>

<style lang="scss" scoped>
.admin-page-title {
    &__main {
        font-size: 3.6rem;
        font-weight: 700;
        color: rgba($black, 0.87);
    }

    &__sub {
        font-size: 1.8rem;
        color: rgba($black, 0.45);
    }
}
</style>
