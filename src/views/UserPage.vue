<template>
    <div class="welcome">
        <h1>Welcome back, {{ userStore.username }}</h1>
        <div class="button-container">
            <BButton @click="changeUsername" class="button" pill
                >Change Username</BButton
            >
            <BButton @click="changePassword" class="button" pill
                >Change Password</BButton
            >
        </div>
    </div>
    <VideoBeach />
</template>

<script setup lang="ts">
    import { UserStore } from '@/store/user';
    import { useRouter } from 'vue-router';
    const router = useRouter();
    const userStore = UserStore();
    const changePassword = () => {
        router.push(`/${userStore.username}/changepassword`);
    };
    const changeUsername = () => {
        router.push(`/${userStore.username}/changeusername`);
    };
</script>

<style scoped>
    .welcome {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    h1 {
        font-size: 4rem;
        font-family: 'Poppins', serif;
        margin-bottom: 40px;
        font-weight: 700;
        color: yellow;
    }
    .button {
        font-family: 'Poppins', serif;
        padding: 12px 32px;
        background: rgba(255, 255, 255, 0.3);
        border: none;
        color: black;
        font-weight: 400;
        z-index: 1;
        margin-left: 30px;
    }
</style>
