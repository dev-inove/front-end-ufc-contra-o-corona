<template>
    <table class="table">
        <tr class="title-row">
            <th v-for="title in titles" :key="title">{{ title }}</th>
        </tr>
        <tr
            v-for="value in values"
            :key="values.indexOf(value)"
            :class="{ dark: values.indexOf(value) % 2 === 0 }"
        >
            <td v-for="field in value" :key="field">{{ field }}</td>
            <td v-if="editFunction" style="padding: 0 1rem;">
                <svg class="icon edit">
                    <use xlink:href="@/assets/svg/sprites.svg#pencil" />
                </svg>
            </td>
            <td v-if="deleteFunction" style="padding: 0 1rem;">
                <svg class="icon delete" @click="deleteFunction(value.id)">
                    <use xlink:href="@/assets/svg/sprites.svg#delete" />
                </svg>
            </td>
        </tr>
    </table>
</template>

<script>
export default {
    props: {
        titles: {
            type: Array,
            required: false
        },
        values: {
            type: Array,
            required: false
        },
        editFunction: {
            type: Function,
            required: false
        },
        deleteFunction: {
            type: Function,
            required: false
        }
    }
}
</script>

<style lang="scss" scoped>
.dark {
    background-color: #f7f7f7;
}

.table {
    font-size: 1.4rem;
    width: 100%;

    tr {
        height: 60px;
    }
}

.title-row {
    text-transform: uppercase;

    th {
        text-align: start;
    }
}

.icon {
    height: 1.6rem;
    width: 1.6rem;
    fill: rgba($black, 0.45);
    cursor: pointer;

    &:hover.edit {
        fill: #f6e58d;
    }

    &:hover.delete {
        fill: #ff7979;
    }
}
</style>
