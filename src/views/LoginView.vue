<template>
    <div class="background-container">
        <div v-if="!isLogin" class="login-form">
            <h1>login</h1>
            <BForm>
                <BFormFloatingLabel
                    label="User name"
                    label-for="floatingUsername"
                    class="my-2"
                >
                    <BFormInput
                        v-model="username"
                        id="floatingUsername"
                        type="text"
                        placeholder="User name"
                        :state="validation"
                    />
                    <BFormInvalidFeedback :state="validation">
                        Username is required.
                    </BFormInvalidFeedback>
                </BFormFloatingLabel>
                <BFormFloatingLabel
                    label="Password"
                    label-for="floatingPassword"
                    class="my-2"
                >
                    <BFormInput
                        v-model="password"
                        id="floatingPassword"
                        type="password"
                        placeholder="Password"
                        :state="validationPassword"
                    />
                    <BFormInvalidFeedback :state="validationPassword">
                        Password is required.
                    </BFormInvalidFeedback>
                </BFormFloatingLabel>
            </BForm>
            <BButton class="login-button" pill variant="primary" @click="login"
                >Login</BButton
            >
        </div>
        <VideoBeach />
        <div class="welcome" v-if="isLogin">
            <h1>Welcome back, {{ username }}</h1>
        </div>
    </div>
</template>

<script setup lang="ts">
    import VideoBeach from '@/components/VideoBeach.vue';
    import { ref, computed } from 'vue';

    const isLogin = ref(false);
    const password = ref('');
    const username = ref('');
    const validation = computed(() => username.value.length > 0);
    const validationPassword = computed(() => password.value.length > 0);
    const login = () => {
        if (username.value.length > 0 && password.value.length > 0) {
            isLogin.value = true;
        }
    };
</script>

<style scoped>
    .background-container {
        height: 100vh;
    }
    .login-form {
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #floatingUsername,
    #floatingPassword {
        padding-left: 25px;
        width: 400px;
        border-radius: 25px;
    }
    h1 {
        font-size: 4rem;
        font-family: 'Poppins', serif;
        margin-bottom: 60px;
        font-weight: 700;
        color: white;
    }
    .welcome {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .login-button {
        padding: 7px 50px;
        margin-top: 30px;
    }
</style>
