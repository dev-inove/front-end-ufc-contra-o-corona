<template>
    <div class="not-found">
        <svg class="not-found__icon">
            <use xlink:href="@/assets/svg/not_found.svg#not-found" />
        </svg>
        <h1>
            Ops! A página que você está
            <br />procurando não foi encontrada...
        </h1>
        <p>Lugares que você pode tentar ir</p>
        <a href="/">Home</a>
        <a href="/dashboard">Dashboard</a>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.not-found {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__icon {
        height: 235px;
        width: 434px;
    }

    h1 {
        font-size: 3.6rem;
        line-height: 4.2rem;
        font-weight: 500;
        text-align: center;
        color: rgba($black, 0.6);
        padding: 2rem 0;
    }

    p {
        font-size: 2.4rem;
        padding-bottom: 1rem;
        color: rgba($black, 0.45);
    }

    a {
        font-size: 1.4rem;
        text-decoration: none;
        font-weight: 500;
        padding: 0.5rem 0;
        text-transform: uppercase;
        color: #66288e;
    }
}
</style>
