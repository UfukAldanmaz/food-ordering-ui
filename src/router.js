import HomepageItem from './views/HomepageItem.vue'
import AboutItem from './views/AboutItem.vue'
import { createRouter, createWebHistory } from "vue-router"
const routeInfos = [
    {
        path: "/",
        component: HomepageItem
    },
    {
        path: "/about",
        component: AboutItem
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routeInfos
})

export default router;