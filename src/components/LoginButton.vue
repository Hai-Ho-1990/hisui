<template>
    <div id="button-container">
        <input id="login" type="button" value="login" />
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
    #button-container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        position: absolute;
        top: 30px;
        background-color: yellow;
    }

    #login {
        background: none;
        color: black;
        font-family: 'Poppins', serif;
        font-weight: 500;
        font-size: 20px;
        border: none;

        z-index: 1;
    }
</style>
