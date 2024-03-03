<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import Customer from './Customer';

const fname = ref('');
const lname = ref('');
const address = ref('');

const props = defineProps<{
    customer?: Customer
}>()

const emit = defineEmits(['onAddOrUpdate'])

const onFormSubmit = () => {
    // Do nothing if any input is empty
    if (!fname.value || !lname.value || !address.value) {
        return
    }

    // Current customer data
    const data: Customer = {
        fname: fname.value,
        lname: lname.value,
        address: address.value
    }

    // make inputs empty again
    fname.value = lname.value = address.value = '';
    emit('onAddOrUpdate', data)
}

// watch changes in props
watchEffect(() => {
    if (props.customer) {
        fname.value = props.customer.fname;
        lname.value = props.customer.lname;
        address.value = props.customer.address;
    }
})

</script>

<template>
    <form action="/" method="post" @submit.prevent="onFormSubmit">
        <input type="text" placeholder="Enter first name" name="fname" v-model="fname" />
        <input type="text" placeholder="Enter last name" name="lname" v-model="lname" />
        <input type="text" placeholder="Enter address" name="address" v-model="address" />

        <button type="submit" title="Add or update customer">
            {{ !customer  ? "Add" : "Update" }}
        </button>
    </form>
</template>

<style scoped>
    form {
        width: 100%;
        margin-bottom: 2rem;
        border-top: 1px solid #f4f4f4;
        border-bottom: 1px solid #f4f4f4;
        padding: 1rem 0;
    }

    form input {
        cursor: unset;
    }

    form input,
    form button {
        padding: 0.4rem 0.6rem;
        font-size: 0.9rem;
        margin: 0 0.4rem;
    }
</style>