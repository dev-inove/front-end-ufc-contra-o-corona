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
import axios from 'axios'

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
                'ID',
                'Título',
                'Criado em',
                'Última Atualização',
                'Responsável',
                ' ',
                ' '
            ],
            values: [],
            cards: [
                { title: 'Todas as ações', selected: true },
                { title: 'Todas as produções', selected: false },
                { title: 'Todas as necessidades', selected: false }
            ]
        }
    },
    methods: {
        getTableData() {
            const url = 'https://backend-ucc.herokuapp.com/actions'
            axios.get(url).then(res => {
                this.values = res.data.map(el => {
                    const fields = {}

                    fields.id = el.id
                    fields.title = el.title
                    fields.createdAt = el.created_at
                    fields.updatedAt = el.updated_at
                    fields.user = el.user.fullname

                    return fields
                })
            })
        },
        changeCardSelected(card) {
            /* eslint-disable no-param-reassign */
            /* eslint-disable no-return-assign */
            this.cards.forEach(el => (el.selected = false))
            card.selected = true
        }
    },
    mounted() {
        this.getTableData()
    }
}
</script>

<style lang="scss" scoped>
.card-row {
    display: flex;
}
</style>
