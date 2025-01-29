<template>
    <div class="hero">
        <div class="overplay"><h1>DISCOVER HISUI ISLAND</h1></div>
        <video class="hero-video" autoplay muted loop playsinline>
            <source src="../assets/heroes.mp4" type="video/mp4" />
        </video>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
    .overplay {
        display: flex;
        align-items: center;

        z-index: 1;
    }
    h1 {
        color: yellow;
        font-size: 100px;

        font-family: 'Poppins', serif;
        font-weight: 700;

        word-spacing: 1rem;
    }

    .hero {
        width: 100%;
        height: 100vh;
        overflow: hidden;
        display: flex;
        justify-content: center;
    }
    .hero-video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
        position: absolute;
    }
</style>
