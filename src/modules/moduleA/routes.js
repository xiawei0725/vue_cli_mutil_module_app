export  default [
    {
        path:'/moduleA',
        component:() => import('./App.vue'),
        children:[
            {
                path:'home',
                component: () => import('./views/Home.vue')
            }
        ]
    }
]
