import { createRouter, createWebHistory } from 'vue-router';

import LoginView from './views/LoginView.vue';
import HomeView from './views/HomeView.vue';
import UserPage from './views/UserPage.vue';
import ChangePassword from './views/ChangePassword.vue';
import ChangeUsername from './views/ChangeUsername.vue';
import ActivitiesVue from './views/ActivitiesVue.vue';

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
            component: UserPage,
            path: '/:userName'
        },
        {
            component: ChangePassword,
            path: '/:userName/changepassword'
        },
        {
            component: ChangeUsername,
            path: '/:userName/changeusername'
        },
        {
            component: ActivitiesVue,
            path: '/activities'
        }
    ]
});
