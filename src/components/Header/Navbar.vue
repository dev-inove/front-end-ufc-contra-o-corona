<template>
    <nav class="navbar pad-1">
        <img src="@/assets/logo_purple.svg" alt="logo-combate-ao-covid-19" />
        <ul class="navbar__list">
            <li class="active">Home</li>
            <li>Ações</li>
            <li>Produções</li>
            <li>Necessidades</li>
            <li>Contatos</li>
        </ul>
        <div class="navbar__actions">
            <a>Cadastrar</a>
            <button>Login</button>
        </div>
    </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $white;
    height: 7rem;

    &__list {
        display: flex;
        flex: 1;
        justify-content: flex-end;
        list-style-type: none;

        border-right: 1px solid rgba($black, 0.25);

        li {
            font-size: 1.6rem;
            color: rgba($black, 0.6);

            margin: 0 2.5rem;
            cursor: pointer;

            &:hover {
                color: rgba($black, 0.8);
            }

            &.active {
                color: rgba($black, 0.87);
                font-weight: 700;
            }
        }
    }

    &__actions {
        button {
            background-color: $primary-purple;
            color: $white;

            font-size: 1.4rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.2rem;

            padding: 1rem 5rem;
            border: none;
            border-radius: 4rem;

            cursor: pointer;
            outline: none;
        }

        a {
            color: $primary-purple;

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
