import { defineStore } from 'pinia';
import { ref } from 'vue';

export const UserStore = defineStore('user', () => {
    const username = ref('');

    const storeUsername = (name: string) => {
        username.value = name;
    };

    return { username, storeUsername };
});
