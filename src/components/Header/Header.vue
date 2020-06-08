<template>
    <header class="header">
        <Navbar />
        <div class="header__title pad-1">
            <h1>
                UFC Contra
                <br />o Coronavírus
            </h1>
            <h2>
                Confira os principais destaques quanto as ações promovidas pela
                UFC em combate ao Coronavírus no estado do Ceará.
            </h2>
        </div>
        <div class="header__info">
            <Box v-for="box in boxes" :key="box.title" :box="box" />
        </div>
    </header>
</template>

<script>
import Navbar from './Navbar'
import Box from './Box'

export default {
    name: 'Header',
    components: { Navbar, Box },
    data() {
        return {
            boxes: [
                {
                    title: 'Confirmados',
                    num: '34.573'
                },
                {
                    title: 'Recuperados',
                    num: '6.748'
                },
                {
                    title: 'Mortes',
                    num: '2.251'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    flex-direction: column;

    height: 100vh;
    background-image: url('../../assets/img/purple-effect.png'),
        url('../../assets/img/banner.jpg');

    &__title {
        width: 80rem;
        margin: auto 0;
        color: $white;

        h1 {
            font-family: 'Raleway';
            font-size: 7.2rem;
            font-weight: bolder;
            line-height: 7.5rem;
            text-transform: uppercase;
            margin-bottom: 1rem;
        }

        h2 {
            font-family: 'Merriweather';
            font-weight: 400;
            font-size: 1.8rem;
        }
    }

    &__info {
        display: flex;
        align-self: center;
        width: 80rem;
        margin-bottom: 4rem;
    }
}
</style>
