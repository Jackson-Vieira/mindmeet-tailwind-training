<!-- NavMenuResponsive.vue -->
<template>
  <nav
    class="fixed left-0 top-0 z-10 flex min-h-screen w-full flex-col items-start space-x-6 bg-black-dark p-6 opacity-95"
  >
    <!-- Close button -->
    <div class="flex w-full items-center justify-end">
      <button
        class="text-3xl text-white focus:outline-none"
        @click="emit('onClose')"
      >
        &times;
      </button>
    </div>

    <ul class="space-y-4 text-white">
      <li class="cursor-pointer text-xl font-bold hover:text-indigo-600">
        Feature
      </li>
      <li class="cursor-pointer text-xl font-bold hover:text-indigo-600">
        About
      </li>
      <li class="cursor-pointer text-xl font-bold hover:text-indigo-600">
        Contact
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const emit = defineEmits(['onClose'])
</script>

<style lang="scss" scoped></style>
