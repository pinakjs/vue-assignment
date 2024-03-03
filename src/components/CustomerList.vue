<script setup lang="ts">
import { reactive, ref } from 'vue';
import Customer from './Customer';
import Form from './Form.vue';
import List from './List.vue';

const customersArray = reactive<Customer[]>([])
const currentEditIndex = ref(-1); // Hold index of current customer

const onFormSubmit = (data: Customer) => {
    if (currentEditIndex.value == -1) {
        console.log("New customer is added: ", data)
        customersArray.push(data)
    } else {
        console.log("Customer is updated from ", customersArray[currentEditIndex.value], "to", data)
        customersArray[currentEditIndex.value] = data;
        currentEditIndex.value = -1;
    }
}

// edit customer details
const onEditCustomer = (index: number) => {
    const data = customersArray[index];
    currentEditIndex.value = index;

    console.log("Editing customer: ", customersArray[index])
}

const onDeleteCustomer = (index: number) => {
    console.log("Deleting customer: ", customersArray[index])
    customersArray.splice(index, 1);
}

</script>

<template>
    <h1>Customer Details</h1>
    <Form 
        :customer="customersArray[currentEditIndex]" 
        @on-add-or-update="onFormSubmit"
    />

    <list 
        :customers="customersArray"
        @on-edit-customer="onEditCustomer"
        @on-delete-customer="onDeleteCustomer"
    />
</template>

<style scoped>
    h1 {
        margin-bottom: 2.5rem;
        margin-top: 0.6rem;
        font-size: 1.5rem;
    }
</style>