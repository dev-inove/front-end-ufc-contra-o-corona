<template>
    <div class="dashboard-table-card" :class="{ selected : isSelected }" @click="selected">
        {{ title }}
        <div v-if="isSelected" class="sub">{{quantity}} Unidades</div>
    </div>
</template>

<script>
export default {
    name: 'DashboardTableCard',
    props: {
        title: {
            type: String,
            required: true
        },
        isSelected: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            quantity: 2
        }
    },
    methods: {
        selected(card) {
            this.$emit('selected', card)
        }
    }
}
</script>

<style lang="scss" scoped>
.dashboard-table-card {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 240px;
    height: 90px;

    font-size: 1.6rem;
    color: rgba(#000000, 0.6);

    padding: 0 2rem;
    margin: 3rem 3rem 3rem 0;

    cursor: pointer;
}

.sub {
    font-size: 1.4rem;
    color: rgba(#000000, 0.6);
}

.selected {
    border-radius: 0.7rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

    color: rgba(#000, 1);
}
</style>
