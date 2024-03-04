<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import User from './User';

// form inputs
const name = ref('')
const email = ref('')
const dob = ref('')
const password = ref('')
const cpassword = ref('')

const modal = ref<HTMLDivElement>(null!)

// props
const props = defineProps<{
    isOpen: boolean,
    user?: User
}>();

//emits
const emit = defineEmits(['onCreateOrUpdate', 'close'])

const onFormSubmit = () => {
    if (!name.value || !email.value || !dob.value || !password.value || !cpassword.value) {
        return
    }

    if (password.value != cpassword.value) {
        alert("Passwod and confirm password does'nt match.")
        return
    }

    const data: User = {
        name: name.value,
        email: email.value,
        dob: dob.value,
        password: password.value,
        id: Math.random()
    }

    emit('onCreateOrUpdate', data);
    name.value = email.value = dob.value = password.value = cpassword.value = '';
    emit('close');
}

watchEffect(() => {
    if (props.user) {
        name.value = props.user.name;
        email.value = props.user.email;
        dob.value = props.user.dob as string;
        password.value = props.user.password;
        cpassword.value = props.user.password;
    }

    if (!modal.value) {
        return
    }

    if (props.isOpen) {
        modal.value.style.display = 'flex';
    } else {
        modal.value.style.display = 'none';
    }
})

</script>

<template>
    <div class="modal" ref="modal" style="display: none">
        <div class="modal__dailog">
            <button type="button" class="close" title="Close model" @click="$emit('close')">&times;</button>

            <h2>Create new user</h2>
            <form action="/create-user" method="post" @submit.prevent="onFormSubmit">
                <input required type="text" name="name" id="name" placeholder="Name" v-model="name">
                <input required type="email" name="email" id="email" placeholder="Email" v-model="email">
                <input required type="date" name="dob" id="dob" placeholder="Date of birth" v-model="dob">
                <input required type="password" name="password" id="password" placeholder="Password" v-model="password">
                <input required type="password" name="c_password" id="c_password" placeholder="Confirm password" v-model="cpassword">

                <button type="submit" title="Create new user">
                    {{ user ? "Update" : "Create" }}
                </button>
            </form>
        </div>
    </div>
</template>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    background: rgba(0, 0, 0, 0.25);
}

.modal__dailog {
    background: #fff;
    padding: 0.8rem;
    width: 100%;
    max-width: 400px;
}

.close {
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    font-size: 1.5rem;
    width: 40px;
    padding: 0 0.4rem;
    padding-bottom: 0.2rem;
}

.modal__dailog h2 {
    font-size: 1.5rem;
    text-align: center
}

form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0.8rem;
}

input,
button {
    max-width: 100%;
    padding: 0.4rem 0.6rem;
    margin-top: 0.8rem;
    display: block;
    width: 100%;
}

input {
    cursor: unset;
}

form button {
    background: rgb(80, 125, 171);
    color: #fff;
}
</style>