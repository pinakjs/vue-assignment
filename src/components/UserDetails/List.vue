<script setup lang="ts">
import User from "./User";

defineProps<{
  users: User[];
  page: number;
  total: number;
  pageSize: number;
}>();

defineEmits(["onEdit", "onDelete", "onPage"]);
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
        <td>{{ user.email }}</td>
        <td>{{ user.dob }}</td>
        <td>{{ user.password }}</td>
        <td>
          <button
            type="button"
            @click="$emit('onEdit', user.id)"
            title="Edit User details"
          >
            Edit
          </button>
          <button
            type="button"
            @click="$emit('onDelete', user.id)"
            title="Delete User details"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>

  <div class="paging">
    <button
      type="button"
      @click="$emit('onPage', page - 1)"
      :disabled="page === 1"
    >
      Previous
    </button>
    <span>Page {{ page }}</span>
    <button
      type="button"
      @click="$emit('onPage', page + 1)"
      :disabled="page * pageSize >= total"
    >
      Next
    </button>
  </div>
</template>

<style scoped>
table {
  width: 100%;
  border: 1px solid #ccc;
  border-collapse: collapse;
}

td,
th {
  padding: 0.3rem;
  font-size: 0.9rem;
  border: 1px solid #ccc;
}

button {
  font-size: 0.9rem;
  padding: 0.4rem 0.7rem;
  margin: 0 0.4rem;
}

.paging {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
}

.paging span {
  font-size: 1rem;
  margin: 0 0.4rem;
}
.paging button {
  padding: 0.2rem 0.6rem;
  margin: 0 0.4rem;
  font-size: 0.8rem;
}
</style>
