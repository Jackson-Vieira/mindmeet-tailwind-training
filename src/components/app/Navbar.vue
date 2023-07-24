<template>
  <div class="w-full">
    <nav
      class="container relative mx-auto flex flex-wrap items-center justify-between p-8 lg:justify-between xl:px-0"
    >
      <div class="flex-shrink-0">
        <Logo />
      </div>
      <div class="text-center lg:flex lg:items-center">
        <ul class="list-none items-center justify-end pt-6 lg:flex lg:pt-0">
          <li v-for="link in links" :key="link.label" class="mr-3">
            <a
              class="inline-block rounded-md px-4 py-2 text-lg font-normal text-gray-800 no-underline hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none"
              :href="link.href"
              >{{ link.label }}</a
            >
          </li>
        </ul>
      </div>
      <div class="mr-3">
        <button class="rounded-md bg-indigo-600 px-6 py-2 text-white md:ml-5">
          Login
        </button>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import Logo from './Logo.vue'

const links = [
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Contact',
    href: '#contact'
  },
  {
    label: 'Help',
    href: '#home'
  }
]

// TODO: Responsive navbar
</script>

<style scoped></style>
