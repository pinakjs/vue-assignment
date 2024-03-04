<script setup lang="ts">
import { reactive, ref } from 'vue';
import List from './List.vue';
import FormModal from './FormModal.vue';
import User from './User';

const isModalOpened = ref(false)
const currentUpdatingIndex = ref(-1)

const users = reactive<User[]>([])

const onCreateButtonClick = () => {
    isModalOpened.value = true;
}

const onCloseModel = () => {
    isModalOpened.value = false;
}

const onCreateorUpdate = (data: User) => {
    if (currentUpdatingIndex.value == -1) {
        users.push(data);
    } else {
        users[currentUpdatingIndex.value] = data;
        currentUpdatingIndex.value = -1;
    }
}

const onEditUser = (id: number) => {
    const index = users.findIndex(user => user.id == id);
    if (index == -1) {
        return
    }

    currentUpdatingIndex.value = index;
    onCreateButtonClick();
}

const onDeleteUser = (id: number) => {
    const index = users.findIndex(user => user.id == id);
    if (index == -1) {
        return
    }

    users.splice(index, 1);
}

</script>

<template>
    <div class="top">
        <h2>User details</h2>

        <button title="Create new user" type="button" @click="onCreateButtonClick">
            Create
        </button>
    </div>

    <List :users="users" @onEdit="onEditUser" @onDelete="onDeleteUser" />
    <form-modal :isOpen="isModalOpened" :user="users[currentUpdatingIndex]" @close="onCloseModel" @onCreateOrUpdate="onCreateorUpdate"  />
</template>

<style scoped>
.top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
}

.top h2 {
    font-size: 1.2rem;
}

.top button {
    padding: 0.4rem 0.6rem;
    font-size: 0.9rem;
    background: rgb(96, 115, 240);
    color: #fff;
}
</style>