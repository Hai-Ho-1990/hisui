<template>
    <div class="activities-container">
        <div class="slogan">
            <h1>
                WHATEVER YOUR BUDGET, WE HAVE THE PERFECT OPTION TO MAKE YOUR
                TRIP UNIQUE.
            </h1>
            <h4>
                Discover exciting activities on our beautiful island! Whether
                you're seeking adventure or relaxation, there's something for
                everyone. Hike through lush nature, or enjoy a stunning sunset
                on a paradise beach. Below, we introduce the best experiences to
                make your trip unforgettable. Which adventure will you choose?
            </h4>
        </div>
        <div class="activities">
            <ul>
                <li
                    class="activity"
                    v-for="activity in activities"
                    :key="activity.id"
                >
                    <div class="description">
                        <h2>{{ activity.name }}</h2>
                        <p>{{ activity.description }}</p>
                    </div>

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
        description: string;
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
        height: 350vh;
        width: 99vw;

        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .slogan {
        display: flex;
        flex-direction: row;
        margin-top: 100px;
    }
    .slogan > h1 {
        width: 52%;
        font-family: 'Poppins', serif;
        font-weight: 800;
        font-size: 4rem;
        padding-left: 50px;
    }
    .slogan > h4 {
        font-family: 'Poppins', serif;
        padding-left: 50px;
        width: 38%;
        margin-top: 20px;
        font-size: 1.4rem;
        line-height: 2rem;
    }
    .activities {
        position: relative;
        top: 12%;
    }
    ul {
        padding-left: 0;
    }
    li {
        width: 100%;
    }
    .description {
        width: 100vw;
        height: 100 vh;
        position: absolute;
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .description > h2 {
        font-family: 'Poppins', serif;
        text-align: center;
        font-size: 7rem;
        font-weight: 800;

        padding-top: 300px;

        color: yellow;
    }
    .description > p {
        font-family: 'Poppins', serif;
        text-align: center;

        width: 45%;
        font-weight: 600;
        color: yellow;
    }
    .activity {
        color: black;

        height: 100vh;
        width: 100%;
    }

    img {
        object-fit: cover;
        margin-left: 5%;
        width: 90%;
        height: 100vh;
        z-index: -10;
    }
</style>
