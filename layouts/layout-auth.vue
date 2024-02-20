<template>
  <div class="grid grid-cols-2 h-screen">
    <div class="flex justify-center bg-gradient-to-b from-[#214a74] to-[#1f2f5c]">
        <img
          src="/svg/logo_default.svg"
          class="h-60 self-center"
          alt="Flowbite Logo"
        />
    </div>
    <div class="flex justify-center self-center">
      <slot />
    </div>
  </div>
</template>
