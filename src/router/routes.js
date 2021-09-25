// Template Components
import AuthTemplate from '../components/templates/AuthTemplate.vue'
import PanelTemplate from '../components/templates/PanelTemplate.vue'
// View Components
import Login from '../components/auth/Login.vue'
import Dashboard from '../components/panel/Dashboard.vue'

const routes = [
    {
        path: '/',
        name: 'AuthTemplate',
        component: AuthTemplate,
        children: [
            { path: '/', name: 'Login', component: Login }
        ]
    },
    {
        path: '/',
        name: 'PanelTemplate',
        component: PanelTemplate,
        children: [
            { path: '/dashboard', name: 'Dashboard', component: Dashboard }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: "/"
    },
]

export default routes;