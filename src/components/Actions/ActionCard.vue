<template>
    <div class="action-card" :theme="this.$store.state.dark ? 'dark' : 'light'">
        <img class="action-card__image" :src="action.image_url" alt="post-image" />
        <div class="action-card__text">
            <h1 class="action-card__text--title">{{ action.title }}</h1>
            <h2 class="action-card__text--sub">{{ action.subtitle }}</h2>
            <a class="action-card__text--link" :href="`/actions/${action.id}`">Saiba mais →</a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        action: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
/* Color Variables & Theme Definitions */
[theme*='light'] {
    --border-color: var(--black-8);
    --title-color: var(--black-4);
    --description-color: var(--black-5);
}

[theme*='dark'] {
    --border-color: var(--white-4);
    --title-color: var(--white-1);
    --description-color: var(--white-2);
}

* {
    transition: 0.2s ease-out;
}

/* Elements Styling */
.action-card {
    display: grid;
    grid-template-rows: 1fr 1fr;

    height: 32.5rem;
    width: 39.3rem;

    border: 1px solid;
    border-color: var(--border-color);
    border-radius: 0.8rem;
    overflow: hidden;

    &__image {
        width: 100%;
        height: 100%;
    }

    &__text {
        padding: 1rem 0.8rem;

        &--title {
            font-weight: 700;
            font-size: 2.4rem;
            color: var(--title-color);

            margin: 0.2rem 0;
        }

        &--sub {
            font-family: 'Merriweather';
            font-weight: 400;
            color: var(--title-color);

            margin: 1rem 0;
        }

        &--link {
            font-size: 1.8rem;
            font-weight: 500;
            text-transform: uppercase;
            text-decoration: none;
            color: #2f80ed;

            margin-top: 0.2rem;

            cursor: pointer;
        }
    }
}
</style>
