import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Greeter from '../components/Greeter.vue'
import NotFound from '../components/NotFound.vue'
import User from '../components/User.vue'
import UserProfile from '../components/UserProfile.vue'
import UserPost from '../components/UserPost.vue'
import List from '../components/List.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },

    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/AboutView.vue')
    },
    {
        path: '/greet/:message',
        name: 'greet',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Greeter
    },
    //programmetic navigation
    {
        path: '/list',
        component: List
    },
    // Nested Routing
    {
        path: '/user/:name',
        component: User,
        //nested routing
        children: [
            {
                path: 'profile',
                component: UserProfile
            },
            {
                path: 'posts',
                component: UserPost
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
