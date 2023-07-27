<script setup lang="ts"></script>

<template>
  <div class="flex min-h-screen w-full flex-col overflow-hidden">
    <main class="relative flex flex-1 bg-gray-600">
      <div
        class="absolute left-1/2 top-0 -translate-x-1/2 transform bg-black-dark"
      >
        Tempo
      </div>
      <div class="w-full bg-green-300">Pedro</div>
      <div class="absolute bottom-0 right-0 aspect-video w-64 bg-red-400">
        Jackson
      </div>
    </main>
    <footer>
      <div class="flex justify-center space-x-3">
        <!-- WRAP IN A DIV? -->
        <button class="h-12 w-12 rounded-full bg-blue-400"></button>
        <button class="h-12 w-12 rounded-full bg-blue-400"></button>
        <button class="h-12 w-12 rounded-full bg-blue-400"></button>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
