<template>
    <div>
        <button
            class="action-button"
            :class="{ filled: filled }"
            @click="action"
        >
            {{ title }}
        </button>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        action: {
            type: Function,
            required: false
        },
        filled: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style lang="scss" scoped>
.action-button {
    border: none;
    font-weight: 500;
    letter-spacing: 0.05rem;
    border-radius: 0.4rem;
    padding: 0.8rem 1.6rem;
    text-transform: uppercase;
    background-color: transparent;
    color: #2f80ed;
    cursor: pointer;

    &.filled {
        color: #fff;
        background-color: #2f80ed;
    }
}
</style>
