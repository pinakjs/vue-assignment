<script setup lang="ts">
    import Counter from './components/Counter.vue';
</script>

<template>
    <!-- <h1>Hello World!</h1> -->
    <Counter :start="0" :timer="1000" />
    <Counter :start="10" :timer="2000" />
</template>

<style>

</style>