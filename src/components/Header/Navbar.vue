<template>
    <nav class="navbar pad-sm" :theme="this.$store.state.dark ? 'dark' : 'light'">
        <img
            v-if="!this.$store.state.dark"
            @click="$router.push('/')"
            src="@/assets/svg/logo_purple.svg"
            alt="logo-combate-ao-covid-19"
        />
        <img v-else src="@/assets/svg/logo_white.svg" alt="logo-combate-ao-covid-19" />
        <ul class="navbar__list">
            <li class="active">Home</li>
            <li>Ações</li>
            <li>Produções</li>
            <li>Necessidades</li>
            <li>Contatos</li>
        </ul>
        <div class="navbar__actions">
            <a>Cadastrar</a>
            <button @click="$router.push('dashboard')">Login</button>
        </div>
    </nav>
</template>

<script>
export default {
    computed: {}
}
</script>

<style lang="scss" scoped>
/* Color Variables & Theme Definitions */
[theme*='light'] {
    --nav-bg: var(--white-1);

    --li: var(--black-4);
    --li-hover: var(--black-3);
    --li-selected: var(--black-2);

    --sign-up: var(--primary-purple);

    --menu-border: var(--black-6);
}

[theme*='dark'] {
    --nav-bg: var(--grey-3);

    --li: var(--white-1);
    --li-hover: var(--white-1);
    --li-selected: var(--white-1);

    --sign-up: var(--white-1);

    --menu-border: var(--white-1);
}

* {
    transition: 0.2s ease-out;
}

/* Elements styling */
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--nav-bg);
    height: 7rem;

    position: fixed;
    top: 0;
    z-index: 1000;
    width: 100%;

    &__list {
        display: flex;
        flex: 1;
        justify-content: flex-end;
        list-style-type: none;

        border-right: 1px solid var(--menu-border);

        li {
            font-size: 1.6rem;
            color: var(--li);

            margin: 0 2.5rem;
            cursor: pointer;

            &:hover {
                color: var(--li-hover);
            }

            &.active {
                color: var(--li-selected);
                font-weight: 700;
            }
        }
    }

    &__actions {
        button {
            background-color: var(--primary-purple);
            color: var(--white-1);

            font-size: 1.4rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.2rem;

            padding: 1rem 5rem;
            border: none;
            border-radius: 4rem;

            cursor: pointer;
            outline: none;

            transition: 0.2s ease-out;

            &:hover {
                transform: scale(1.1);
            }
        }

        a {
            color: var(--sign-up);

            font-size: 1.4rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.2rem;

            margin: 0 3rem;

            cursor: pointer;
        }
    }
}
</style>
