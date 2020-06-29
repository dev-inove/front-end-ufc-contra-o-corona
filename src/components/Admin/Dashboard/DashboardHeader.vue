<template>
    <div class="dashboard-header">
        <div class="dashboard-header__text-area">
            <h1>Olá, {{ userName }}</h1>
            <h2>Bem-vindo a seção destinada a todas as atividades dos administradores</h2>
        </div>
        <svg>
            <use xlink:href="@/assets/svg/undraw_personal.svg#undraw" />
        </svg>
    </div>
</template>

<script>
export default {
    computed: {
        userName: {
            get() {
                return this.$store.state.user.user.fullname
            }
        }
    }
}
</script>

<style lang="scss">
.dashboard-header {
    display: flex;
    justify-content: space-between;
    background-color: #f7f7f7;
    border-radius: 1.5rem;
    padding: 1rem;

    &__text-area {
        padding: 2rem 1rem;
    }

    h1 {
        font-size: 3.6rem;
        font-weight: 700;
    }

    h2 {
        font-family: 'Merriweather';
        font-weight: 500;
        font-size: 1.8rem;
        color: rgba($black, 0.45);
    }
}
</style>
