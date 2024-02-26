
<script setup lang="ts">
import users from '../../../assets/data/users'; 
definePageMeta({
  layout: "layout-vertical",
  isAdmin: true
});
</script>

<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">Usuário nome</th>
          <th scope="col" class="px-6 py-3">Email</th>
          <th scope="col" class="px-6 py-3">Status</th>
          <th scope="col" class="px-6 py-3">Mensalidade</th>
          <th scope="col" class="px-6 py-3">Acões</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
          v-for="user in users"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ user.first_name }}
          </th>
          <td class="px-6 py-4">{{ user.email }}</td>
          <td class="px-6 py-4">
            <span
              v-if="user.status"
              class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300"
              >Ativo</span
            >
            <span
              v-else
              class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300"
              >Desativado</span
            >
          </td>
          <td class="px-4 py-4">{{ user.price }}</td>
          <td class="px-6 py-4">
            <NuxtLink
            :to="`/admin/users/${user.id}-edit`"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >Edit</NuxtLink
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
