<template>
    <main id="container">
        <div class="hero">
            <ActivitiesHeroVideo />
            <div class="overplay">
                <h1>ACTIVITIES</h1>
            </div>
        </div>

        <ActivitiesList @customEvent="handleActivityAdded" :url="apiUrl" />
        <!-- i förälder komponent skickar api länk till barn komponent
         vilken i sin tur tas emot och hämtar alla nödvändig information-->
    </main>
</template>

<script setup lang="ts">
    import ActivitiesHeroVideo from '@/components/ActivitiesHeroVideo.vue';
    import ActivitiesList from '@/components/ActivitiesList.vue';
    import { defineEmits } from 'vue';
    // Definiera länken api här
    const apiUrl = 'http://localhost:3000/activities';
    // Funktion för att hantera activity added
    const emit = defineEmits(['customEvent']);
    const handleActivityAdded = () => {
        emit('customEvent');
    };
</script>

<style scoped>
    .overplay {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 1;
        margin-bottom: 35px;
        margin-top: 4%;
    }
    h1 {
        color: yellow;
        font-size: 17vw;
        margin-bottom: 15px;
        font-family: 'Poppins', serif;
        font-weight: 700;
        z-index: 1;
        word-spacing: 1rem;
        margin-bottom: 120px;
    }

    .hero {
        width: 100%;
        height: 98.3vh;
        overflow: hidden;
        display: flex;
        justify-content: center;
        z-index: 1;
    }
</style>
