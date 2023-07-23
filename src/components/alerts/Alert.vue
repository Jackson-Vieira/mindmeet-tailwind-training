<template>
  <div :class="containerClass">
    <div>
      <div :class="iconContainerClass">
        <!-- TODO: Change this default icon to and use dinamic render -->
        <InformationCircleIcon class="h-6 w-6" />
      </div>
    </div>
    <div class="min-w-0 flex-1 space-y-2">
      <p class="text-base font-normal">{{ message }}</p>
    </div>
    <div>
      <button class="flex rounded-md p-0.5 hover:bg-white">
        <XMarkIcon class="h-4 w-4" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { InformationCircleIcon, XMarkIcon } from '@heroicons/vue/24/solid'
import { cva } from 'class-variance-authority'
import { computed, type PropType } from 'vue'

type Intent = 'info' | 'success' | 'danger' | 'warning'

const props = defineProps({
  intent: {
    type: String as PropType<Intent>,
    validator(value: string) {
      return ['info', 'success', 'danger', 'warning'].includes(value)
    },
    default: 'danger'
  },
  message: {
    type: String,
    default: 'Default message',
    validator(value: string) {
      return value.trim().length > 0
    }
  }
})

const containerClass = computed(() => {
  return cva('flex p-2 border rounded-md space-x-3 items-center', {
    variants: {
      intent: {
        info: 'bg-blue-100 border-blue-300',
        success: 'bg-green-100 border-green-300',
        warning: 'bg-orange-100 border-orange-300',
        danger: 'bg-red-100 border-red-300'
      }
    }
  })({
    intent: props.intent
  })
})

const iconContainerClass = computed(() => {
  return cva('rounded-xl p-1 text-white', {
    variants: {
      intent: {
        info: 'bg-blue-600',
        success: 'bg-green-600',
        warning: 'bg-orange-600',
        danger: 'bg-red-600'
      }
    }
  })({
    intent: props.intent
  })
})
</script>
