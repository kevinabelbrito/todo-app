// Template Components
import AuthTemplate from '@/components/templates/AuthTemplate.vue'
import PanelTemplate from '@/components/templates/PanelTemplate.vue'
// View Components
import Login from '@/components/auth/Login.vue'
import Dashboard from '@/components/panel/Dashboard.vue'
import Users from '@/components/panel/Users.vue'
import Tasks from '@/components/panel/Tasks.vue'
// Store
import store from '@/store'

const routes = [
    {
        path: '/',
        name: 'AuthTemplate',
        component: AuthTemplate,
        beforeEnter: (to, from, next) => {
            if (store.getters.loggedIn) {
                next('/dashboard')
            }
            console.log(store.getters.loggedIn)
            next()
        },
        children: [
            { path: '/', name: 'Login', component: Login }
        ]
    },
    {
        path: '/',
        name: 'PanelTemplate',
        component: PanelTemplate,
        beforeEnter: (to, from, next) => {
            if (!store.getters.loggedIn) {
                store.dispatch('setAlertLogoutTime')
                next('/')
            }
            console.log(store.getters.loggedIn)
            next()
        },
        children: [
            { path: '/dashboard', name: 'Dashboard', component: Dashboard },
            { path: '/users', name: 'Users', component: Users },
            { path: '/tasks', name: 'Tasks', component: Tasks }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: "/"
    },
]

export default routes;