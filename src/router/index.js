import Vue from 'vue'
import VueRouter from 'vue-router'

import { userKey } from '@/global'

import Home from '../views/Home.vue'
import Auth from '../views/Auth.vue'
import NecessityPage from '../components/Necessities/NecessityPage.vue'
import ActionPage from '../components/Actions/ActionPage.vue'
import AdminPages from '../components/Admin/AdminPages.vue'
import Dashboard from '../components/Admin/Dashboard/Dashboard.vue'
import Notifications from '../components/Admin/Notifications/Notifications.vue'
import myActions from '../components/Admin/MyActions/MyActions.vue'
import notFound from '../views/notFound.vue'
import Users from '../components/Admin/Users/Users.vue'

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
        meta: { requiresAdmin: true },
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
            { path: 'users', component: Users },
            { path: 'contact' }
        ]
    },
    {
        name: 'actionById',
        path: '/actions/:id',
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
    },
    {
        name: 'notFound',
        path: '*',
        component: notFound
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    const json = localStorage.getItem(userKey)

    if (to.matched.some(record => record.meta.requiresAdmin)) {
        const user = JSON.parse(json)
        // eslint-disable-next-line no-unused-expressions
        user ? next() : next({ path: '/auth' })
    } else {
        next()
    }
})

export default router
