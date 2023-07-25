<template>
  <div class="flex flex-col items-center text-center">
    <div
      class="flex items-center justify-center rounded-full bg-indigo-600 bg-gradient-to-tr p-3 text-white"
    >
      <div>
        <FeatureCalendarIcon class="h-8 w-8" />
      </div>
    </div>
    <div class="mt-2 space-y-2">
      <h2 class="text-2xl font-bold capitalize">Lorem, ipsum.</h2>
      <p class="text-normal font-normal text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit vero illum
        eum?
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FeatureCalendarIcon } from './icons/index'
</script>

<style scoped></style>
