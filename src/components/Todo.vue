<script setup lang="ts">
import { ref, reactive } from "vue";

interface Todo {
  todo: string;
  isCompleted: boolean;
  id: number;
}

const value = ref("");
const editIndex = ref(-1);
const todos = reactive<Todo[]>([]);

// Delete a todo item
const deleteTodo = (id: number) => {
  const index = todos.findIndex((todo) => todo.id == id);
  if (index != -1) {
    todos.splice(index, 1);
  }
};

// Add a todo item
const addTodo = () => {
  if (!value.value) {
    return;
  }

  const todo: Todo = {
    todo: value.value,
    isCompleted: false,
    id: Math.random(),
  };

  if (editIndex.value == -1) {
    todos.push(todo);
  } else {
    todos[editIndex.value] = todo;
    editIndex.value = -1;
  }

  value.value = "";
};

// Edit a todo item
const editTodo = (id: number) => {
  const index = todos.findIndex((todo) => todo.id == id);
  if (index != -1) {
    editIndex.value = index;
    value.value = todos[index].todo;
  }
};
</script>

<template>
  <div class="card todo">
    <div class="todo__header">
      <input
        type="text"
        name="message"
        id="message"
        placeholder="Add something..."
        v-model="value"
      />
      <button type="button" title="Add" @click="addTodo">
        {{ editIndex != -1 ? "Update" : "Add" }}
      </button>
    </div>

    <div class="todo__body">
      <ul>
        <li
          v-for="todo in todos"
          class="todo__item"
          :class="{ completed: todo.isCompleted }"
          :key="todo.id"
        >
          <input
            type="checkbox"
            v-model="todo.isCompleted"
            name="todo"
            :id="todo.id + ''"
          />
          <label :for="todo.id + ''">{{ todo.todo }}</label>

          <div class="todo__item_ctrl">
            <button @click="editTodo(todo.id)" type="button" title="Edit">
              Edit
            </button>
            <button @click="deleteTodo(todo.id)" type="button" title="Delete">
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.todo {
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.15);
  max-height: 400px;
}

.todo__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.todo__header button,
.todo__header input {
  padding: 0.4rem 0.6rem;
  font-size: 0.9rem;
}

.todo__header input {
  width: 100%;
  margin-right: 1rem;
  cursor: unset;
}

.todo__body {
  padding: 10px;
  oveflow-y: auto;
  scrollbar-gutter: stable;
  padding: 0.5rem 0;
}

.todo__body ul {
  list-style-type: none;
  padding: 0;
}

.todo__item {
  display: flex;
  align-items: center;
  padding: 0.2rem;
}

.todo__item label {
  font-size: 0.9rem;
  font-weight: 500;
  text-align: left;
  margin-left: 0.5rem;
}

.todo__item.completed label {
  text-decoration: line-through;
}

.todo__item_ctrl {
  display: flex;
  gap: 0.5rem;
  margin-left: auto;
}

.todo__item_ctrl button {
  padding: 0.4rem 0.6rem;
  font-size: 0.8rem;
}
</style>
