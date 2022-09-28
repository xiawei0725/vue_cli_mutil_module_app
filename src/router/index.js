import Vue from 'vue'
import VueRouter from 'vue-router'

import moduleARoutes from '@/modules/moduleA/routes.js'
import moduleBRoutes from '@/modules/moduleB/routes.js'
const routeConfig = {
  moduleA: moduleARoutes,
  moduleB: moduleBRoutes
}
Vue.use(VueRouter)

const routes = [
    ...routeConfig[process.env.moduleName]
]

const router = new VueRouter({
  routes
})

export default router
