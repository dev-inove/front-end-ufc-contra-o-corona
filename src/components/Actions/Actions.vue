<template>
    <div class="actions pad-1">
        <SectionTitle title="Nossas Ações">
            Seção destinada as ações realizadas pela UFC e
            por pessoas externas para
            <br />com o enfrentamento aos danos
            causados pelo novo coronavírus (COVID-19)
        </SectionTitle>
        <div class="card-container">
            <ActionCard class="action-card" v-for="i in a" :key="i" />
        </div>
    </div>
</template>

<script>
import SectionTitle from './SectionTitle.vue'
import ActionCard from './ActionCard.vue'

export default {
    components: { SectionTitle, ActionCard },
    data() {
        return {
            a: [1, 2, 3]
        }
    }
}
</script>

<style lang="scss" scoped>
.actions {
    background-color: #fff;
    /* min-height: 70vh; */
}

.card-container {
    display: flex;
    margin-bottom: 8rem;
}

.action-card {
    margin-right: 1.5rem;

    &:last-child {
        margin-right: 0;
    }
}
</style>
