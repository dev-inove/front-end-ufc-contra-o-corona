<template>
    <div>
        <DashboardHeader />
        <div class="card-row">
            <DashboardTableCard
                v-for="card in cards"
                :key="card.title"
                :title="card.title"
                :isSelected="card.selected"
                @selected="changeCardSelected(card)"
            />
        </div>
        <div class="table-container">
            <Table :titles="titles" :values="values" />
        </div>
    </div>
</template>

<script>
// import axios from 'axios'

import DashboardHeader from './DashboardHeader'
import DashboardTableCard from './DashboardTableCard'
import Table from '../General/Table'

export default {
    name: 'Dashboard',
    components: {
        DashboardHeader,
        DashboardTableCard,
        Table
    },
    data() {
        return {
            titles: [
                'Titulo',
                'Inicio',
                'Termino',
                'Responsavel',
                'Situacao'
            ],
            values: [
                {
                    title: 'Masks',
                    startDate: '1',
                    endDate: '2',
                    responsible: 'saas',
                    situation: 'hard'
                },
                {
                    title: 'Sasuke',
                    startDate: '1',
                    endDate: '2',
                    responsible: 'saas',
                    situation: 'hard'
                },
                {
                    title: 'Basket',
                    startDate: '1',
                    endDate: '2',
                    responsible: 'saas',
                    situation: 'hard'
                }
            ],
            cards: [
                { title: 'Todas as ações', selected: true },
                { title: 'Todas as produções', selected: false },
                { title: 'Todas as necessidades', selected: false }
            ]
        }
    },
    methods: {
        changeCardSelected(card) {
            /* eslint-disable no-param-reassign */
            /* eslint-disable no-return-assign */
            this.cards.forEach(el => (el.selected = false))
            card.selected = true
        }
    }
}
</script>

<style lang="scss" scoped>
.card-row {
    display: flex;
}
</style>
