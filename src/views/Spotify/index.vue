<template>
  <div class="flex h-screen w-full flex-col bg-blue-400 sm:flex-row">
    <div class="flex-1 bg-yellow-400">Opa</div>
    <div class="flex-1 bg-red-400">Hello world</div>
  </div>
  <SpinLoader icon-width="32" icon-height="32" />
</template>

<script setup lang="ts">
import SpinLoader from '@/components/loaders/SpinLoader.vue'
</script>

<style scoped></style>
