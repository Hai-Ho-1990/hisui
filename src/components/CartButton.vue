<template>
    <div>
        <p id="slash">|</p>
        <p id="increament">{{ cartCount }}</p>
        <input id="cart" type="button" value="cart" />
    </div>
</template>

<script setup lang="ts">
    defineProps<{ cartCount: number }>();
</script>

<style scoped>
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        position: absolute;
        top: 30px;
        background-color: yellow;
    }
    #slash {
        margin-bottom: 0;
    }
    #cart,
    #slash {
        background: none;
        color: black;
        font-family: 'Poppins', serif;
        font-weight: 500;
        font-size: 20px;
        border: none;

        z-index: 1;
    }
    #increament {
        color: black;
        font-weight: 700;
        font-family: 'Poppins', serif;
        font-size: 0.8rem;
        position: absolute;
        left: 90%;
        top: -10%;
        background-color: yellow;
        border-radius: 60%;
        padding: 0 6px;
        z-index: 1;
    }
</style>
