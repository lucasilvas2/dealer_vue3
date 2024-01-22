<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
 title: String,
 info: String,
 text: String,
 color: String
})
</script>

<template>
  <div class="flex flex-col" >
    <div class="flex flex-row">
      <p class= "font-medium">{{ title }}</p>
    </div>
    <div class="grid grid-cols-1 h-full content-evenly">
      <div class="grid justify-items-center">
        <h1 class=" font-bold text-2xl">{{ info }}</h1>
        <p class="text-gray-500">{{ text }}</p>
      </div>
    </div>
  </div>
</template>
