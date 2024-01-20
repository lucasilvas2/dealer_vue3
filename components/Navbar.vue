<template>
    <nav class="flex w-full px-2 bg-white border-gray-200 dark:bg-gray-900 text-white min-h-10 align-middle ">
      <ul class="grid grid-cols-2 w-full">
        <div class="flex">
            <li class="self-center hover:text-blue-700 ml-6">Logo</li>
        </div>
        <div class="flex justify-evenly">
          <li class="self-center hover:text-blue-700"><NuxtLink to="/">Home</NuxtLink></li>
          <li class="self-center hover:text-blue-700"><NuxtLink to="/clients">Clients</NuxtLink></li>
        </div>
      </ul>
    </nav>
</template>

<style>
</style>
