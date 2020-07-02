<template>
    <div class="admin-users">
        <AdminPageTitle title="Todos Usuários" />
        <div class="card-container">
            <UserCard :key="user.email" v-for="user in users" :user="user" />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { baseApiUrl } from '@/global'

import UserCard from './UserCard'
import AdminPageTitle from '../General/AdminPageTitle'

export default {
    components: { UserCard, AdminPageTitle },
    data() {
        return {
            users: []
        }
    },
    methods: {
        loadUsers() {
            const url = `${baseApiUrl}/users`
            axios.get(url).then(res => {
                this.users = res.data
            })
        }
    },
    mounted() {
        this.loadUsers()
    }
}
</script>

<style>
.card-container {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;

    margin-top: 4rem;
}
</style>
