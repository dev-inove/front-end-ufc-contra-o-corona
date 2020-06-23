<template>
    <div class="necessities pad-sm">
        <SectionTitle title="Nossas Necessidades">
            Seção destinada aos materiais, produtos, serviços ou insumos
            necessários
            <br />para que as ações sejam feitas.
        </SectionTitle>
        <Carrousel
            :itemsQuantity="items.length"
            :windowSize="2"
            :paginationFactor="412"
        >
            <NecessityCard v-for="item in items" :key="item" />
        </Carrousel>
    </div>
</template>

<script>
import Carrousel from '../Carrousel/Carrousel.vue'
import SectionTitle from '../utils/SectionTitle.vue'
import NecessityCard from './NecessityCard.vue'

export default {
    components: { SectionTitle, Carrousel, NecessityCard },
    data() {
        return {
            items: [1, 2, 3, 4, 5, 6]
        }
    }
}
</script>

<style></style>
