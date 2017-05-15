import Vue from 'vue'
import VueReouter from 'vue-router'
import App from './App.vue'

const routes = [{
        path: '/',
        component: ProductList
    },
    // {
    //     path: '/products/:id',
    //     component: Product
    // }
];

const router = new VueReouter({
    routes
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})