<script setup lang="ts">
definePageMeta({
  layout: "layout-auth",
});
</script>
<template>
    <div class="flex flex-col w-2/3">
        <h1 class="text-xl font-semibold mb-1">Bem Vindo</h1>
        <p class="text-xs text-gray-500 mb-3">
          Por favor, informe suas credenciais.
        </p>
        <form action="login">
          <div class="mb-1">
            <label
              for="login"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Login</label
            >
            <input
              type="text"
              id="login"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div class="mb-1">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Senha</label
            >
            <input
              type="password"
              id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
              required
            />
            <div class="flex justify-end">
              <NuxtLink
                to="/auth/recovery"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >Esqueceu senha</NuxtLink
              >
            </div>
            <button
              type="submit"
              class=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Login
            </button>
          </div>
        </form>
        <div class="flex justify-center self-center">
          <p class="self-center">Não tem um a conta?</p>
          <NuxtLink
            to="/auth/singup"
            class="flex items-center p-2 text-blue-700 rounded-lg dark:text-white hover:text-blue-900"
            >Assinar</NuxtLink
          >
        </div>
      </div>
</template>