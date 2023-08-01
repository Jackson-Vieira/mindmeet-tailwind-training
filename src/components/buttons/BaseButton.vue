<script setup lang="ts">
import { cva } from 'class-variance-authority'
import { computed, type PropType } from 'vue'

type ButtonIntent = 'primary' | 'secondary' | 'tertiary'
type ButtonSize = 'large' | 'medium' | 'small'

const props = defineProps({
  intent: {
    type: String as PropType<ButtonIntent>,
    validator: (value: string) =>
      ['primary', 'secondary', 'tertiary'].includes(value),
    default: 'primary'
  },

  size: {
    type: String as PropType<ButtonSize>,
    validator: (value: string) => ['large', 'medium', 'small'].includes(value),
    default: 'medium'
  },

  disabled: {
    type: Boolean,
    default: false
  }
})

const ButtonClass = computed(() =>
  cva(
    'inline-flex items-center justify-center rounded-md text-white hover:cursor-pointer disabled:cursor-not-allowed',
    {
      variants: {
        intent: {
          primary: 'bg-blue-600 hover:bg-blue-500',
          secondary: 'bg-gray-600 hover:bg-gray-500',
          tertiary: 'bg-green-600 hover:bg-green-500'
        },
        size: {
          large: 'px-8 py-3 text-lg font-medium',
          medium: 'px-6 py-1 text-md',
          small: 'px-4 py-0.5 text-sm'
        }
      }
    }
  )({
    intent: props.intent,
    size: props.size
  })
)
</script>

<template>
  <button :class="ButtonClass" :disabled="props.disabled">
    <slot></slot>
  </button>
</template>

<style scoped></style>
