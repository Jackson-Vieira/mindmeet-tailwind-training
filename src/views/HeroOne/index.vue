<template>
  <header class="border-b border-b-gray-200 py-2">
    <!-- NAVBAR -->
    <nav class="container mx-auto flex flex-col items-center p-4 sm:flex-row">
      <div class="self-start">
        <Logo />
      </div>
      <div class="hidden flex-1 items-center justify-end sm:flex">
        <ul
          class="flex flex-1 items-center justify-center space-x-0 text-lg text-gray-600 first-letter:flex-col sm:flex-row sm:space-x-8"
        >
          <li class="cursor-pointer">Feature</li>
          <li class="cursor-pointer">Company</li>
          <li class="cursor-pointer">Features</li>
          <li class="cursor-pointer">Contact</li>
        </ul>
        <button
          class="rounded-md border border-indigo-600 px-8 py-3 text-center text-lg font-medium text-indigo-600 transition duration-300 ease-in-out hover:border-indigo-400 hover:text-indigo-400"
        >
          Sign In
        </button>
      </div>
    </nav>
  </header>
  <main>
    <!-- HERO -->
    <div
      class="container mx-auto mt-8 flex items-center justify-center sm:mt-48"
    >
      <div class="flex flex-col items-start gap-8 p-4 md:items-center">
        <h2
          class="w-3/4 text-start text-5xl font-black text-gray-800 sm:text-6xl md:text-center md:text-7xl"
        >
          The ultimate hero page for
          <span class="font-black text-indigo-600"> Professional </span>
          Websites
        </h2>
        <p
          class="w-3/5 text-start text-lg text-gray-400 md:h-2/4 md:text-center"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
          officiis aperiam minus eaque. Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
        <div class="flex gap-4">
          <button
            class="rounded-md border bg-indigo-600 px-8 py-3 text-center text-xl font-bold text-white transition duration-300 ease-in-out hover:bg-indigo-500"
          >
            Get started
          </button>
          <button
            class="rounded-md border border-indigo-600 px-8 py-3 text-center text-lg font-medium text-indigo-600 transition duration-300 ease-in-out hover:border-indigo-400 hover:text-indigo-400"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Logo from '@/components/app/Logo.vue'
</script>

<style scoped></style>
