<template>
    <div class="productions pad-1">
        <SectionTitle title="Produções em Números">
            Seção destinada aos resultados numéricos de
            todos os produtos que foram ou estão
            <br />sendo produzidos para distribuição da população
        </SectionTitle>
        <!-- <Carrousel>
            <ProductionCard v-for="item in items" :key="item" />
        </Carrousel>-->
    </div>
</template>

<script>
import SectionTitle from '../Actions/SectionTitle.vue'
// import Carrousel from '../Carrousel/Carrousel.vue'
// import ProductionCard from './ProductionCard.vue'

export default {
    name: 'Productions',
    components: { SectionTitle },
    data() {
        return {
            items: [1]
        }
    }
}
</script>

<style></style>
