<script setup lang="ts">
    import LoginButton from './components/LoginButton.vue';
    import Logo from './components/Logo.vue';
</script>

<template>
    <header>
        <RouterLink to="/" class="logo"><Logo /></RouterLink>
        <RouterLink to="/login" class="login"><LoginButton /></RouterLink>
    </header>

    <main>
        <RouterView></RouterView>
    </main>
</template>

<style scoped>
    header {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    .login {
        margin-right: 10%;
    }
    .logo {
        margin-left: 8%;
    }
</style>
