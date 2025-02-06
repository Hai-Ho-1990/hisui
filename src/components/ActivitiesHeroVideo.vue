<template>
    <div>
        <video class="hero-video" autoplay muted loop playsinline>
            <source v-bind:src="ActivitiesVideo" type="video/mp4" />
        </video>
    </div>
</template>

<script setup lang="ts">
    import ActivitiesVideo from '../assets/activities.mp4';
</script>

<style scoped>
    .hero-video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
        position: absolute;
        right: 0;
    }
</style>
