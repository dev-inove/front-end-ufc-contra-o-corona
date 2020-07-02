<template>
    <header class="header">
        <div class="header__title pad-sm">
            <h1>
                UFC Contra
                <br />o Coronavírus
            </h1>
            <h2>
                Confira os principais destaques quanto as ações promovidas
                pela UFC em combate ao Coronavírus no estado do Ceará.
            </h2>
        </div>
        <div class="header__info">
            <Box title="Confirmados" :num="stats.cases" />
            <Box title="Recuperados" :num="0" />
            <Box title="Mortes" :num="stats.deaths" />
        </div>
    </header>
</template>

<script>
import axios from 'axios'

// import Navbar from './Navbar'
import Box from './Box'

export default {
    name: 'Header',
    components: { Box },
    data() {
        return {
            stats: {}
        }
    },
    mounted() {
        // prettier-ignore
        const url = 'https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/ce'
        axios.get(url).then(res => {
            this.stats = res.data
        })
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

            animation-name: fadeIn;
            animation-duration: 1s;
            animation-timing-function: ease-in;
        }

        h2 {
            font-family: 'Merriweather';
            font-weight: 400;
            font-size: 1.8rem;

            animation-name: fadeIn;
            animation-duration: 1s;
            animation-timing-function: ease-in;
        }
    }

    &__info {
        display: flex;
        align-self: center;
        width: 80rem;
        margin-bottom: 5rem;
    }
}
</style>
