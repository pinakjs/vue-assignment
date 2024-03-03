<script setup lang="ts">
import { reactive, ref } from 'vue';

const fname = ref('');
const lname = ref('');
const address = ref('');

interface Customer {
    fname: string,
    lname: string, 
    address: string
}

const customersArray = reactive<Customer[]>([])
const currentEditIndex = ref(-1); // Hold index of current customer

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

    if (currentEditIndex.value == -1) {
        console.log("New customer is added: ", data)
        customersArray.push(data)
    } else {
        console.log("Customer is updated from ", customersArray[currentEditIndex.value], "to", data)
        customersArray[currentEditIndex.value] = data;
        currentEditIndex.value = -1;
    }

    // make inputs empty again
    fname.value = lname.value = address.value = '';
}

// edit customer details
const onEditCustomer = (index: number) => {
    const data = customersArray[index];
    currentEditIndex.value = index;

    fname.value = data.fname;
    lname.value = data.lname;
    address.value = data.address;

    console.log("Editing customer: ", customersArray[index])
}

const onDeleteCustomer = (index: number) => {
    console.log("Deleting customer: ", customersArray[index])
    customersArray.splice(index, 1);
}

</script>

<template>
    <h1>Customer Details</h1>
    <form action="/" method="post" @submit.prevent="onFormSubmit">
        <input type="text" placeholder="Enter first name" name="fname" v-model="fname" />
        <input type="text" placeholder="Enter last name" name="lname" v-model="lname" />
        <input type="text" placeholder="Enter address" name="address" v-model="address" />

        <button type="submit" title="Add or update customer">
            {{ currentEditIndex == -1 ? "Add" : "Update" }}
        </button>
    </form>

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
            <tr v-for="(customer, index) in customersArray">
                <td>{{customer.fname}}</td>
                <td>{{customer.lname}}</td>
                <td>{{customer.address}}</td>
                <td>
                    <button type="button" title="Edit customer" @click="onEditCustomer(index)">Edit</button>
                    <button type="button" title="Delete customer" @click="onDeleteCustomer(index)">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
    h1 {
        margin-bottom: 2.5rem;
        margin-top: 0.6rem;
        font-size: 1.5rem;
    }
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