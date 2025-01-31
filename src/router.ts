import { createRouter, createWebHistory } from 'vue-router';

import LoginView from './views/LoginView.vue';
import HomeView from './views/HomeView.vue';
import UserName from './views/UserName.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            component: LoginView,
            path: '/login'
        },
        {
            component: HomeView,
            path: '/'
        },
        {
            component: UserName,
            path: '/:userName'
        }
    ]
});
