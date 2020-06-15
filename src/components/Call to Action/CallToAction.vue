<template>
    <div class="call-to-action">
        <img id="purple-effect" src="../../assets/img/purple-effect.png" alt="purple-background" />
        <img
            id="call-to-action-img"
            src="../../assets/img/call-to-action-cover.jpg"
            alt="call-to-action-cover"
        />
        <h2>
            Precisamos de sua ajuda para combater esse vírus, juntos
            <br />somos mais fortes.
        </h2>
        <button>Envie sua ação de combate ao covid-19</button>
    </div>
</template>

<script>
export default {
    name: 'CallToAction'
}
</script>

<style lang="scss" scoped>
.call-to-action {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    height: 30.8rem;
    width: 100%;

    h2 {
        font-family: 'Roboto', sans-serif;
        font-size: 2rem;
        text-align: center;
        font-weight: 400;

        letter-spacing: 0.15rem;

        color: $white;
    }

    button {
        border: none;
        border-radius: 0.7rem;
        padding: 1rem 3rem;
        margin: 2.5rem 0;

        font-family: 'Roboto', sans-serif;
        font-size: 1.8rem;
        font-weight: 700;
        text-transform: uppercase;

        color: $white;
        background-color: #2f80ed;
    }
}

#purple-effect {
    position: absolute;
    z-index: -1;
}

#call-to-action-img {
    position: absolute;
    width: 100%;
    z-index: -2;
}
</style>
