import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Greeter from '../components/Greeter.vue'
import NotFound from '../components/NotFound.vue'
import User from '../components/User.vue'
import UserProfile from '../components/UserProfile.vue'
import UserPost from '../components/UserPost.vue'
import List from '../components/List.vue'
import Product from '../components/Product.vue'
import ProductDetails from '../components/ProductDetails.vue'
import Customer from '../components/Customer.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },

    {
        path: '/hello',
        redirect: '/product'
    },
    {
        path: '/customer',
        component: Customer,
        props: {
            name: 'Subramanian'
        }
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

    {
        path: '/product',
        component: Product,
        name: 'product'
    },
    {
        path: '/product/:id',
        component: ProductDetails,
    }
    ,
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

//router guards implemenations
//to : the target route location
//from ://the current route location
router.beforeEach((to, from) => {
    console.log(to, from)
    //biz logic decides whether routing enabled or not
    return false; // cancel navigation true means continue the navigation
})

export default router
