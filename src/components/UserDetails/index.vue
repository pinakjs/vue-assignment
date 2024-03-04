<script setup lang="ts">
import { reactive, ref, computed } from "vue";
import List from "./List.vue";
import FormModal from "./FormModal.vue";
import User from "./User";

const isModalOpened = ref(false);
const currentUpdatingIndex = ref(-1);

const users = reactive<User[]>([]);

// for sorting and filter
const sortType = ref("asc");
const sortBy = ref("name");
const getSortedData = computed(() => {
  const sortByV = sortBy.value;
  return users
    .sort((a, b) => {
      return sortType.value == "asc"
        ? a[sortByV].localeCompare(b[sortByV])
        : b[sortByV].localeCompare(a[sortByV]);
    })
    .slice(page.value - 1, page.value * total.value);
});

// for paging
const page = ref(1);
const total = ref(10);

const onCreateButtonClick = () => {
  isModalOpened.value = true;
};

const onCloseModel = () => {
  isModalOpened.value = false;
};

const onCreateorUpdate = (data: User) => {
  if (currentUpdatingIndex.value == -1) {
    users.push(data);
  } else {
    users[currentUpdatingIndex.value] = data;
    currentUpdatingIndex.value = -1;
  }
};

const onEditUser = (id: number) => {
  const index = users.findIndex((user) => user.id == id);
  if (index == -1) {
    return;
  }

  currentUpdatingIndex.value = index;
  onCreateButtonClick();
};

const onDeleteUser = (id: number) => {
  const index = users.findIndex((user) => user.id == id);
  if (index == -1) {
    return;
  }

  users.splice(index, 1);
};
</script>

<template>
  <div class="top">
    <h2>User details</h2>

    <div class="">
      <select name="sort by" id="sort-by" v-model="sortBy">
        <option value="name">Name</option>
        <option value="email">Email</option>
        <option value="dob">DOB</option>
      </select>
      <select name="sort type" id="sort-type" v-model="sortType">
        <option value="asc">ASC</option>
        <option value="desc">DESC</option>
      </select>

      <input type="number" min="1" max="20" v-model="total" />
      <button
        title="Create new user"
        type="button"
        @click="onCreateButtonClick"
      >
        Create
      </button>
    </div>
  </div>

  <List
    :page="page"
    :total="users.length"
    :pageSize="total"
    :users="getSortedData"
    @onEdit="onEditUser"
    @onDelete="onDeleteUser"
    @onPage="page = $event"
  />
  <form-modal
    :isOpen="isModalOpened"
    :user="users[currentUpdatingIndex]"
    @close="onCloseModel"
    @onCreateOrUpdate="onCreateorUpdate"
  />
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

.top select,
.top input {
  padding: 0.4rem 0.6rem;
  font-size: 0.9rem;
  margin-right: 1rem;
  display: inline;
}
.top input {
  width: 3rem;
  padding: 0.2rem;
}
</style>
