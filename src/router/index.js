import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Auth from '../views/Auth.vue'
import NecessityPage from '../components/Necessities/NecessityPage.vue'
import ActionPage from '../components/Actions/ActionPage.vue'
import AdminPages from '../components/Admin/AdminPages.vue'
import Dashboard from '../components/Admin/Dashboard.vue'
import Notifications from '../components/Admin/Notifications.vue'
import myActions from '../components/Admin/MyActions.vue'

Vue.use(VueRouter)

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'AdminPages',
        path: '/dashboard',
        component: AdminPages,
        children: [
            {
                path: '/',
                component: Dashboard
            },
            { path: 'notifications', component: Notifications },
            { path: 'my-profile' },
            { path: 'my-actions', component: myActions },
            { path: 'my-productions' },
            { path: 'my-necessities' },
            { path: 'locations' },
            { path: 'users' },
            { path: 'contact' }
        ]
    },
    {
        name: 'actionPage',
        path: '/actions',
        component: ActionPage
    },
    {
        name: 'necessityPage',
        path: '/necessities',
        component: NecessityPage
    },
    {
        name: 'auth',
        path: '/auth',
        component: Auth
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
