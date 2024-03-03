<script setup lang="ts">
import { onUnmounted, ref } from 'vue';

// this is just like that
const {
    start,
    timer
} = defineProps<{
    start: number,
    timer: number
}>()

const counter = ref(start)

let interval: number;
const startCounter = () => {
    interval = setInterval(() => {
        counter.value++;
    }, timer)
}

const resetCounter = () => {
    // this does'nt stops the counter
    counter.value = 0;
}


const stopCounter = () => {
   clearInterval(interval)
}

// clear timer before destroying component
onUnmounted(() => {
    clearInterval(interval)
})

</script>

<template>
    <h1>Counter: {{ counter }}</h1>

    <div class="ctrl">
        <button @click="startCounter" type="button" title="Start timer">Start</button>
        <button @click="resetCounter" type="button" title="Reset timer">Reset</button>
        <button @click="stopCounter" type="button" title="Stop timer">Stop</button>
    </div>
</template>

<style>
    button {
        font-size: 0.9rem;
        padding: 0.4rem 0.6rem;
        margin: 0 0.4rem
    }
</style>