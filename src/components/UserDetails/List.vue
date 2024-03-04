<script setup lang="ts">
import User from './User';

defineProps<{ users: User[] }>()

defineEmits(['onEdit', 'onDelete'])
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Date of birth</th>
                <th>Password</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user of users">
                <td>{{ user.name }}</td>
                <td>{{user.email}}</td>
                <td>{{user.dob}}</td>
                <td>{{user.password}}</td>
                <td>
                    <button type="button" @click="$emit('onEdit', user.id)" title="Edit User details">Edit</button>
                    <button type="button" @click="$emit('onDelete', user.id)" title="Delete User details">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
    table {
        width: 100%;
        border: 1px solid #ccc;
        border-collapse: collapse;
    }

    td,th {
        padding: 0.3rem;
        font-size: 0.9rem;
        border: 1px solid #ccc;
    }

    button {
        font-size: 0.9rem;
        padding: 0.4rem 0.7rem;
        margin: 0 0.4rem;
    }
</style>