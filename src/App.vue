<script setup lang="ts">
    import LoginButton from './components/LoginButton.vue';
    import Logo from './components/Logo.vue';
</script>

<template>
    <b-container fluid>
        <header>
            <RouterLink to="/" class="logo"><Logo /></RouterLink>
            <RouterLink to="/login" class="login"><LoginButton /></RouterLink>
        </header>

        <main>
            <RouterView></RouterView>
        </main>
    </b-container>
</template>

<style scoped>
    .container-fluid {
        padding-left: 0;
        padding-right: 0;
    }
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
