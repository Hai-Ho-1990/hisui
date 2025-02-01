import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';
import { createBootstrap } from 'bootstrap-vue-next';

// Add the necessary CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';

const pinia = createPinia();
createApp(App).use(router).use(pinia).use(createBootstrap()).mount('#app');
