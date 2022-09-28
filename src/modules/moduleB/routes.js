export  default [
    {
        path:'/moduleB',
        component:() => import('./App.vue'),
        children:[
            {
                path:'home',
                component: () => import('./views/Home.vue')
            }
        ]
    }
]
