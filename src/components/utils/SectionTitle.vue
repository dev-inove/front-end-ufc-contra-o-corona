<template>
    <div
        class="section-title"
        :theme="this.$store.state.dark ? 'dark' : 'light'"
    >
        <h1 class="section-title__main">{{ title }}</h1>
        <h2 class="section-title__sub">
            <slot></slot>
        </h2>
        <hr class="section-title__underline" />
    </div>
</template>

<script>
export default {
    name: 'SectionTitle',
    props: ['title']
}
</script>

<style lang="scss" scoped>
/* Color Variables & Theme Definitions */
[theme*='light'] {
    --title-color: var(--black-2);
}

[theme*='dark'] {
    --title-color: var(--white-1);
}

* {
    transition: 0.2s ease-out;
}

.section-title {
    margin: 5rem 0;

    &__main {
        font-weight: 700;
        font-size: 3.6rem;
        margin-bottom: 0.2rem;

        color: var(--title-color);
    }

    &__sub {
        font-family: 'Merriweather';
        font-size: 1.8rem;
        font-weight: 400;

        color: rgba($black, 0.6);

        margin-bottom: 2rem;
    }

    &__underline {
        width: 35rem;
        border-bottom: 2px solid $primary-purple;
    }
}
</style>
