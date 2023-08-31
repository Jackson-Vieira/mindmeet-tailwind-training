<template>
  <!-- NAVBAR -->
  <nav class="flex items-center justify-between p-5 shadow">
    <div class="self-start">
      <Logo />
    </div>

    <div class="md:hidden">
      <button class="focus:outline-none" @click="toggleMenuResponsive">
        <svg
          class="h-6 w-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </div>
    <NavMenuResponsive
      v-if="isMenuResponsiveOpen"
      @on-close="toggleMenuResponsive"
    />

    <ul
      class="hidden items-center justify-end py-4 text-lg text-gray-600 md:flex"
    >
      <li class="mx-4 cursor-pointer md:my-0">Feature</li>
      <li class="mx-4 cursor-pointer md:my-0">About</li>
      <li class="mx-4 cursor-pointer md:my-0">Contact</li>
    </ul>
  </nav>
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
import NavMenuResponsive from './NavMenuResponsive.vue'

import Logo from '@/components/app/Logo.vue'

import { ref } from 'vue'

const isMenuResponsiveOpen = ref(false)

const toggleMenuResponsive = () => {
  isMenuResponsiveOpen.value = !isMenuResponsiveOpen.value
}
</script>

<style scoped></style>
