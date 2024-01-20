<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
 title: String,
 info: String,
 text: String
})
</script>

<template>
  <div class="flex flex-col h-40 w-40 bg-slate-500 rounded p-2">
    <div class="flex flex-row">
      <p class="text-white font-medium">{{ title }}</p>
    </div>
    <div class="grid grid-cols-1 h-full content-evenly">
      <div class="grid justify-items-center">
        <h1 class="text-white font-bold text-2xl">{{ info }}</h1>
        <p class="text-slate-300">{{ text }}</p>
      </div>
    </div>
  </div>
</template>
