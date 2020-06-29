<template>
    <div class="admin-users">
        <AdminPageTitle title="Todos Usuários" />
        <div class="card-container">
            <UserCard />
            <UserCard />
            <UserCard />
        </div>
    </div>
</template>

<script>
import UserCard from './UserCard'
import AdminPageTitle from '../General/AdminPageTitle'

export default {
    components: { UserCard, AdminPageTitle }
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
