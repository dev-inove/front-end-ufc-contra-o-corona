<template>
    <div class="sidebar">
        <img src="@/assets/svg/logo_purple.svg" alt="logo-combate-covid" />
        <div class="list__area">
            <ul class="sidebar__list">
                <router-link
                    tag="li"
                    to="/dashboard"
                    exact-active-class="selected"
                    class="sidebar__list--li"
                >
                    <svg class="icon">
                        <use xlink:href="@/assets/svg/sprites.svg#dashboard" />
                    </svg>
                    Painel de Controle
                </router-link>
                <router-link
                    tag="li"
                    to="/dashboard/notifications"
                    exact-active-class="selected"
                    class="sidebar__list--li"
                >
                    <svg class="icon">
                        <use xlink:href="@/assets/svg/sprites.svg#notification" />
                    </svg>
                    Notificações
                </router-link>
            </ul>

            <ul class="sidebar__list">
                <h2>Área do Usuário</h2>
                <router-link
                    tag="li"
                    to="/dashboard/my-profile"
                    exact-active-class="selected"
                    class="sidebar__list--li"
                >
                    <svg class="icon">
                        <use xlink:href="@/assets/svg/sprites.svg#user" />
                    </svg>
                    Meu Perfil
                </router-link>
                <router-link
                    tag="li"
                    to="/dashboard/my-actions"
                    exact-active-class="selected"
                    class="sidebar__list--li"
                >
                    <svg class="icon">
                        <use xlink:href="@/assets/svg/sprites.svg#double-tick-indicator" />
                    </svg>
                    Minhas Ações
                </router-link>
                <router-link
                    tag="li"
                    to="/dashboard/my-productions"
                    exact-active-class="selected"
                    class="sidebar__list--li"
                >
                    <svg class="icon">
                        <use xlink:href="@/assets/svg/sprites.svg#bar-chart" />
                    </svg>
                    Minhas Produções
                </router-link>

                <router-link
                    tag="li"
                    to="/dashboard/my-necessities"
                    exact-active-class="selected"
                    class="sidebar__list--li"
                >
                    <svg class="icon">
                        <use xlink:href="@/assets/svg/sprites.svg#cart" />
                    </svg>
                    Minhas Necessidades
                </router-link>

                <router-link
                    tag="li"
                    to="/dashboard/locations"
                    exact-active-class="selected"
                    class="sidebar__list--li"
                >
                    <svg class="icon">
                        <use xlink:href="@/assets/svg/sprites.svg#pin" />
                    </svg>
                    Locais
                </router-link>
            </ul>

            <ul class="sidebar__list">
                <h2>Administração</h2>
                <router-link
                    tag="li"
                    to="/dashboard/users"
                    exact-active-class="selected"
                    class="sidebar__list--li"
                >
                    <svg class="icon">
                        <use xlink:href="@/assets/svg/sprites.svg#friends" />
                    </svg>
                    Usuários
                </router-link>

                <router-link
                    tag="li"
                    to="/dashboard/contact"
                    exact-active-class="selected"
                    class="sidebar__list--li"
                >
                    <svg class="icon">
                        <use xlink:href="@/assets/svg/sprites.svg#call" />
                    </svg>
                    Contato
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.list__area {
    width: 100%;
}

.sidebar {
    img {
        align-self: flex-start;
    }

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #fff;
    height: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 3rem 0;
    padding-left: 4rem;

    &__list {
        display: flex;
        flex-direction: column;
        list-style: none;
        margin: 1rem 0;
        color: rgba($black, 0.6);

        h2 {
            margin: 1rem 0;
            font-size: 1.2rem;
            font-weight: 400;
            text-transform: uppercase;
        }

        &--li {
            position: relative;
            cursor: pointer;

            &::before {
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                height: 100%;
                width: 2px;
                background-color: #66288e;
                transform: scaleY(0);
                transition: transform 0.4s, background-color 0.1s;
            }

            &:hover::before {
                transform: scaleY(1);
            }

            &:hover {
                color: black;

                & .icon {
                    fill: black;
                }
            }

            &.selected {
                color: black;
                background-color: #f7f7f7;
                border-right: 2px solid #66288e;

                & .icon {
                    fill: black;
                }
            }

            // background-color: aliceblue;
            width: 100%;
            display: flex;
            align-items: center;
            font-family: 'Roboto', sans-serif;
            font-size: 1.4rem;
            font-weight: 500;
            color: rgba($black, 0.6);
            padding: 1rem;

            .icon {
                height: 1.8rem;
                width: 1.8rem;
                margin: 0.5rem;
                margin-right: 1rem;
                fill: rgba($black, 0.6);
            }
        }
    }
}
</style>
