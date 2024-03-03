<script setup lang="ts">
import Customer from './Customer';

defineEmits(['onEditCustomer', 'onDeleteCustomer'])

defineProps<{
    customers: Customer[]
}>()
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(customer, index) in customers">
                <td>{{customer.fname}}</td>
                <td>{{customer.lname}}</td>
                <td>{{customer.address}}</td>
                <td>
                    <button type="button" title="Edit customer" @click="$emit('onEditCustomer',index)">Edit</button>
                    <button type="button" title="Delete customer" @click="$emit('onDeleteCustomer', index)">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style>
table {
    width: 100%;
    border: 1px solid #f4f4f4;
    border-collapse: collapse;
}

td, th {
    border: 1px solid #f4f4f4;
    padding: 0.2rem 0.4rem;
}

tbody tr:nth-child(2n) {
    background-color: #f4f4f428;
}

table button {
    font-size: 0.9rem;
    padding: 0.4rem 0.6rem;
    margin: 0 0.4rem;
}
</style>