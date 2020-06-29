<template>
    <div class="box">
        <h2 class="box__title">{{ title }}</h2>
        <h2 class="box__state">Ceará</h2>
        <h2 class="box__num">{{ num }}</h2>
    </div>
</template>

<script>
export default {
    name: 'Box',
    props: ['title', 'num']
}
</script>

<style lang="scss" scoped>
.box {
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 10rem;
    width: 24rem;
    background-color: $white;
    padding: 0.5rem;
    border-radius: 0.8rem;
    margin: 0 2rem;

    &__title {
        font-size: 1.8rem;
        font-weight: 500;
        color: rgba($black, 0.87);
    }

    &__state {
        font-size: 1.4rem;
        text-transform: uppercase;
        font-weight: 400;
        line-height: 1.2rem;
        color: rgba($black, 0.6);
    }

    &__num {
        font-size: 3.6rem;
        font-weight: bolder;
        color: $primary-purple;
    }
}
</style>
