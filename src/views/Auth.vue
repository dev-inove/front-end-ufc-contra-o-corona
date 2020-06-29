<template>
    <div class="auth">
        <div class="auth__cover">
            <img class="logo" src="@/assets/svg/logo_purple.svg" alt="logo-combate-ao-covid-19" />
            <svg>
                <use xlink:href="@/assets/svg/co-working.svg#coworking" />
            </svg>
        </div>
        <div class="auth__login">
            <SectionTitle title="Login">Faça login para gerenciar ações.</SectionTitle>

            <div>
                <input
                    v-model="user.email"
                    class="auth__login--email"
                    type="email"
                    placeholder="Digite seu e-mail"
                />

                <svg class="input-icon email">
                    <use xlink:href="@/assets/svg/sprites.svg#user" />
                </svg>

                <input
                    v-model="user.password"
                    class="auth__login--password"
                    type="password"
                    placeholder="Digite sua senha"
                />

                <svg class="input-icon password">
                    <use xlink:href="@/assets/svg/sprites.svg#invisible" />
                </svg>

                <div class="login-options">
                    <span class="remember-me">
                        <input type="checkbox" name="remember-me" id="remember-me" />
                        <label for="remember-me">Lembrar de mim</label>
                    </span>

                    <span class="forgot-password">Esqueci minha senha</span>
                </div>

                <button @click="signin">Entrar</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

import { baseApiUrl, userKey } from '@/global'
import SectionTitle from '../components/utils/SectionTitle.vue'

export default {
    name: 'Auth',
    data() {
        return {
            user: {}
        }
    },
    methods: {
        signin() {
            axios
                .post(`${baseApiUrl}/sessions`, this.user)
                .then(res => {
                    this.$store.commit('setUser', res.data)
                    localStorage.setItem(userKey, JSON.stringify(res.data))
                    this.$router.push({ path: '/dashboard' })
                })
                .catch(err => console.log(err))
        }
    },
    components: { SectionTitle }
}
</script>

<style lang="scss" scoped>
.input-icon {
    position: relative;
    fill: rgba($black, 0.45);
    width: 1.8rem;
    height: 1.8rem;

    &.email {
        bottom: 2.8rem;
        left: 32rem;
    }

    &.password {
        bottom: 2.8rem;
        left: 32rem;
    }
}

.auth {
    display: grid;
    grid-template-columns: 60% 1fr;
    height: 100vh;

    &__login {
        padding: 0 8rem;

        .login-options {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 1.4rem;
            font-weight: 500;
            margin-top: 2rem;
        }

        .remember-me {
            color: rgba($black, 0.45);
            text-transform: uppercase;
            margin-left: 0.5rem;

            label {
                margin-left: 0.5rem;
            }
        }

        .forgot-password {
            color: #66288e;
        }

        input[type*='email'],
        input[type*='password'] {
            font-family: 'Roboto', sans-serif;
            font-size: 1.6rem;
            font-weight: lighter;
            border: none;
            height: 4rem;
            border-radius: 0.7rem;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0 1rem;
            width: 100%;
        }

        button {
            border: none;
            border-radius: 0.7rem;
            padding: 1rem 3rem;
            margin: 2.5rem 0;
            width: 100%;

            font-family: 'Roboto', sans-serif;
            font-size: 1.8rem;
            font-weight: 700;
            text-transform: uppercase;

            color: $white;
            background-color: #2f80ed;
            cursor: pointer;
        }

        // &--email {
        // }

        // &--password {
        // }
    }

    &__cover {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #f5f5f5;
        padding: 4rem;

        .logo {
            align-self: flex-start;
            margin-bottom: 2rem;
        }

        svg {
            width: 60rem;
            height: 46.1rem;
        }
    }
}
</style>
