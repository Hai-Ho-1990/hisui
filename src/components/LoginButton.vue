<template>
    <div id="button-container">
        <input id="login" type="button" value="login" />
        <p>|</p>
        <input id="cart" type="button" value="cart" />
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
    }
    #button-container > p {
        margin-bottom: 0;
    }
    #login,
    #cart,
    p {
        background: none;
        color: yellow;
        font-family: 'Poppins', serif;
        font-weight: 500;
        font-size: 20px;
        border: none;

        z-index: 11;
    }
</style>
