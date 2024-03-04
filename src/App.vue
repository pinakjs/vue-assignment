<script setup lang="ts">
    import Card from './components/Card.vue';
    import Image from './assets/peakpx.jpg'
</script>

<template>
    <h1>Hello World!</h1>
    <Card />

    <Card>
        <template #header>
            <img :src="Image" alt="Buttefly" />
        </template>
        <template #title>
            A Butterfly
        </template>
        <template #body>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum facere...</p>
        </template>
        <template #footer>
            <button type="button" title="Click here">
                See more
            </button>
        </template>
    </Card>
</template>

<style scoped>
    img {
        max-width: 100%;
        border-radius: 5px;
        user-select: none;
    }

    p {
        font-size: 0.9rem;
        margin-top: 0.5rem;
    }
</style>