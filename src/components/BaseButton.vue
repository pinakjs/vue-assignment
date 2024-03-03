<script setup lang="ts">
defineProps<{
    backgroundColor: string,
    textColor: string,
    value: string        
}>()

defineEmits(['click']);
</script>

<template>
    <button
        :style="{ backgroundColor, color: textColor }"
        type="button"
        title="Click on Button"
        @click="$emit('click')"
    >
        {{ value  }}
    </button>
</template>

<style>

</style>