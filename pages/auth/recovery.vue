<script setup lang="ts">
definePageMeta({
  layout: "layout-auth",
});
</script>
<template>
  <div class="flex flex-col w-2/3">
    <h1 class="text-xl font-semibold mb-1">Esqueceu a sua senha?</h1>
    <p class="text-xs text-gray-500 mb-3">
      Por favor, informe suas credenciais.
    </p>
    <form action="recovery">
      <div class="mb-3">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Seu email</label
        >
        <input
          type="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@email.com"
          required
        />
      </div>
      <button
        type="submit"
        class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Recuperar
      </button>
    </form>
  </div>
</template>
