<script lang="ts" setup>
import { useTodosStore } from '~/store/todos';
import { storeToRefs } from 'pinia'

const store = useTodosStore();
const { todos }: any = storeToRefs(store)
const { fetchTodos } = store;
await fetchTodos();

definePageMeta({
    middleware: 'auth'
})
</script>
<template>
    <div>
     <h1>Welcome to the homepage index.vue</h1>
     <div>
      <h1>Todos:</h1>
      <ul v-for="todo in todos" :key="todo.id">
        <li>{{ todo.title }}</li>
      </ul>
    </div>
    </div>
  </template>