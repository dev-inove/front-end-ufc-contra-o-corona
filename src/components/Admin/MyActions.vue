<template>
    <div class="my-actions">
        <div class="my-actions__header">
            <AdminPageTitle title="Minhas ações" />
            <AddButton />
        </div>
        <div class="my-actions__main">
            <svg v-if="!a" class="not-found">
                <use xlink:href="@/assets/svg/no_data.svg#no-data" />
            </svg>
            <Table v-else :titles="titles" :values="values" />
        </div>
    </div>
</template>

<script>
import AdminPageTitle from './AdminPageTitle'
import AddButton from './AddButton'
import Table from './Table'

export default {
    components: { AdminPageTitle, AddButton, Table },
    data() {
        return {
            a: true,
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
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.not-found {
    height: 262px;
    width: 379px;
}

.my-actions {
    display: flex;
    flex-direction: column;
    height: 100%;

    &__header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 4rem;
    }

    &__main {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
