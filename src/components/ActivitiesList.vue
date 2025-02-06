<template>
    <div class="activities-container">
        <div class="activities">
            <ul>
                <li
                    class="activity"
                    v-for="activity in activities"
                    :key="activity.id"
                >
                    <h2>{{ activity.name }}</h2>
                    <img
                        :src="`http://localhost:3000/activities/${activity.picture}`"
                        alt=""
                        loading="lazy"
                    />
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
    import axios from 'axios';
    import { ref } from 'vue';

    const activities = ref<Activity[]>([]);

    interface Activity {
        id: number;
        name: string;
        picture: string;
    }
    // syntax för defineProps i Typescript (barnkomponent tar emot)
    const props = defineProps<{ url: string }>();

    //props.url måste användas ist för url

    axios.get(props.url).then((response) => {
        activities.value = response.data;
    });
</script>

<style scoped>
    .activities-container {
        height: 300vh;
        background-color: black; /* #e8e4cf;*/
        display: flex;

        justify-content: center;
    }

    li {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    li > h2 {
        font-family: 'Poppins', serif;
        font-size: 4rem;
    }
    .activity {
        border: 2px solid white;
        color: white;
        height: 100vh;
        width: 100vw;
    }

    img {
        height: 100vh;
        object-fit: cover;
    }
</style>
