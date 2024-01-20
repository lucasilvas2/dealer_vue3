import LayoutDefault from './layout/LayoutDefault.vue';
import Navbar from './layout/Navbar.vue';
<template>
    <LayoutDefault class="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <RouterView></RouterView>
      <p>Footer</p>
    </LayoutDefault>
</template>

<style>

</style>
