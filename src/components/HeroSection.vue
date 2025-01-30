<template>
    <div class="hero">
        <VideoBeach />
        <div class="overplay">
            <h1>DISCOVER HISUI ISLAND</h1>
            <BButton class="activity" pill>Book Activities</BButton>
        </div>
    </div>
</template>

<script setup lang="ts">
    import VideoBeach from './VideoBeach.vue';
</script>

<style scoped>
    .activity {
        font-family: 'Poppins', serif;
        padding: 12px 32px;
        background: rgba(255, 255, 255, 0.3);
        border: none;
        color: black;
        font-weight: 400;
        z-index: 1;
    }
    .overplay {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 1;
        margin-bottom: 35px;
    }
    h1 {
        color: yellow;
        font-size: 105px;
        margin-bottom: 15px;
        font-family: 'Poppins', serif;
        font-weight: 700;
        z-index: 1;
        word-spacing: 1rem;
    }

    .hero {
        width: 100%;
        height: 100vh;
        overflow: hidden;
        display: flex;
        justify-content: center;
        z-index: 1;
    }
</style>
