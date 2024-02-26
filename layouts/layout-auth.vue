<template>
  <div class="grid grid-cols-2 h-screen">
    <div
      class="flex bg-gradient-to-b from-[#0675E5] to-[#1f2f5c]"
    >
      <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse ml-40">
        <img
          src="/svg/logo.svg"
          class="h-12"
          alt="Flowbite Logo"
        />
        
        <span
          class="self-center text-4xl font-semibold whitespace-nowrap text-white"
          >Venda360</span
        >
      </NuxtLink>
    </div>
    <div class="flex justify-center self-center">
      <slot />
    </div>
  </div>
</template>
