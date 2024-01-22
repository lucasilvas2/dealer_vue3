<script setup lang="ts">
definePageMeta({
  layout: "layout-default",
});
</script>

<template>
  <div
    class="bg-no-repeat bg-cover bg-[url('/img/background-top.png')] h-screen"
  >
    <header>
      <Navbar></Navbar>
    </header>
    <div class="grid grid-cols-2">
      <div class="flex flex-col justify-center items-center h-auto">
        <div class="w-2/3">
          <h1 class="text-white font-bold text-4xl text-justify text-wrap mb-4">
            Monitor your business on real-time dashboard
          </h1>
          <p
            class="text-gray-500 font-bold text-sm text-justify text-wrap mb-8"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
            vitae nibh nunc mattis imperdiet sed nullam.
          </p>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get started
          </button>
        </div>
      </div>
      <div class="flex justify-end">
        <img src="/img/main-screen.png" alt="" />
      </div>
    </div>
  </div>
  <div class="flex justify-center px-10 py-8">
    <div class="flex flex-col w-4/5">
      <div class="flex justify-center mb-4">
        <h1 class="text-4xl font-bold text-blue-950 h-auto">Main Features</h1>
      </div>
      <div class="flex mb-14">
        <p class="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae
          nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus
          pulvinar sit amet. Id vel in nam malesuada.
        </p>
      </div>
      <div class="grid grid-cols-3 gap-4 mb-28">
        <div class="flex flex-row justify-center">
          <div class="flex flex-col items-center">
            <img class=" mb-3" src="/svg/clock.svg" alt="" />
            <h3 class="font-medium text-blue-950 mb-3">Monitoring 24/7</h3>
            <p class="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipis cing elit.
              Elementum nisi aliquet volutpat.
            </p>
          </div>
        </div>
        <div class="flex flex-row justify-center">
          <div class="flex flex-col items-center">
            <img class=" mb-3" src="/svg/display.svg" alt="" />
            <h3 class="font-medium text-blue-950 mb-3">Widget System</h3>
            <p class="text-gray-600">
              Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae
              et, tortor pulvinar risus pulvinar.
            </p>
          </div>
        </div>
        <div class="flex flex-row justify-center">
          <div class="flex flex-col items-center">
            <img class=" mb-3" src="/svg/rocket.svg" alt=""/>
            <h3 class="font-medium text-blue-950 mb-3">Best Performance</h3>
            <p class="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipis cing elit.
              Elementum nisi aliquet volutpat.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
