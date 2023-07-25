<script setup lang="ts">
import { cva } from 'class-variance-authority'
import { computed } from 'vue'

const ButtonClass = computed(() =>
  cva(
    'inline-flex min-h-[32px] items-center justify-center rounded-md text-white hover:cursor-pointer',
    {
      variants: {
        intent: {
          primary: 'bg-blue-600 hover:bg-blue-500',
          secondary: 'bg-gray-600 hover:bg-gray-500',
          tertiary: 'bg-green-600 hover:bg-green-500'
        },
        size: {
          large: 'px-8 py-3 text-lg font-bold',
          medium: 'px-6 py-1 text-md font-semibold',
          small: 'px-4 py-0.5 text-sm font-semibold'
        }
      }
    }
  )({
    intent: 'primary',
    size: 'medium'
  })
)
</script>

<template>
  <button :class="ButtonClass">
    <slot></slot>
  </button>
</template>

<style scoped></style>
