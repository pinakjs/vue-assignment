<script setup lang="ts">
import { ref } from 'vue';
import BaseButton from './components/BaseButton.vue';

const name = ref("World!")

const reverseName = () => {
    name.value = name.value.split("").reverse().join("")
}

const showAlert = () => {
    alert("This is an alert")
}
</script>

<template>
    <h1>Hello {{  name  }}</h1>
    <base-button @click="showAlert" value="Show Alert" background-color="#e0a800" text-color="#fff" /> 
    <base-button @click="reverseName"  value="Reverse Name" background-color="#c823333" text-color="#e0a800" /> 
</template>
<style>

</style>