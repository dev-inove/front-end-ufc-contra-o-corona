<template>
    <div class="actions pad-sm">
        <SectionTitle title="Nossas Ações">
            Seção destinada as ações realizadas pela UFC e por pessoas
            externas para
            <br />com o enfrentamento aos danos causados pelo novo
            coronavírus (COVID-19)
        </SectionTitle>
        <Carrousel :itemsQuantity="items.length">
            <ActionCard v-for="item in items" :key="item" />
        </Carrousel>
    </div>
</template>

<script>
import Carrousel from '../Carrousel/Carrousel.vue'
import SectionTitle from '../utils/SectionTitle.vue'
import ActionCard from './ActionCard.vue'

export default {
    components: { Carrousel, SectionTitle, ActionCard },
    data() {
        return {
            items: [1, 2, 3, 4]
        }
    }
}
</script>

<style lang="scss" scoped>
.actions {
    background-color: #fff;
    /* min-height: 70vh; */
}

.action-card {
    margin-right: 1.5rem;

    &:last-child {
        margin-right: 0;
    }
}
</style>
