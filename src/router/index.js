import Vue from 'vue'
import Router from 'vue-router'

const DashboardLayout = () => import(/* webpackChunkName: "dashboard" */ '../components/DashboardLayout.vue')
const Homepage = () => import(/* webpackChunkName: "homepage" */ '../components/Homepage.vue')
const About = () => import(/* webpackChunkName: "about" */ '../components/About.vue')
const Contact = () => import(/* webpackChunkName: "contact" */ '../components/Contact.vue')
const Gallery = () => import(/* webpackChunkName: "gallery" */ '../components/Gallery.vue')

function loadView(view){
    return() => import(/* webpackChunkName: "view-[request]" */ `../components/DashboardContents/${view}.vue`)
}

const routes = [
    {
        name: 'Homepage',
        path: '/',
        component: Homepage,
        children: [
            {
                name: 'About',
                path: '/about',
                component: About
            },
            {
                name: 'Contact',
                path: '/contact',
                component: Contact
            },
            {
                name: 'Gallery',
                path: '/gallery',
                component: Gallery
            }
        ]
    },
    {
        name: 'DashboardLayout',
        path: '/dashboard',
        component: DashboardLayout,
        children: [
            {
                name: 'Market',
                path: '/dashboard/market',
                component: loadView('Market')
            },
            {
                name: 'Favorite',
                path: '/dashboard/favorites',
                component: loadView('Favorite')
            },
            {
                name: 'Apartment',
                path: '/dashboard/apartment',
                component: loadView('Apartment')
            },
            {
                name: 'Office',
                path: '/dashboard/office',
                component: loadView('Office')
            },
            {
                name: 'Housing',
                path: '/dashboard/housing',
                component: loadView('Housing')
            },
            {
                name: 'Detail',
                path: '/dashboard/Detail',
                component: loadView('buildingDetail')
            }
        ]
    },
]

Vue.use(Router)

const router = new Router({mode:'history', routes: routes})

export default router