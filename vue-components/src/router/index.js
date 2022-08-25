//App routing configuration
import Home from '../components/Home.vue'
import HelloWorld from '../components/HelloWorld.vue'
import { createRouter, createWebHistory } from 'vue-router'

//route configuration
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/hello',
        component: HelloWorld
    }

]
//create router object
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})
export default router;