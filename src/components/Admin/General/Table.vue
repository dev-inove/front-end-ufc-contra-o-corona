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
            <td v-for="a in value" :key="a">{{ a }}</td>
            <td>
                <svg class="icon">
                    <use xlink:href="@/assets/svg/sprites.svg#pencil" />
                </svg>
            </td>
            <td>
                <svg class="icon">
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
}
</style>
