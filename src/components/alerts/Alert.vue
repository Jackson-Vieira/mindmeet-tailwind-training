<template>
  <div class="m-5" :class="containerClass">
    <!-- TODO: alerts/ProgressBar.vue -->
    <div class="absolute left-0 top-0 h-0.5 w-full bg-red-200">
      <div
        class="h-0.5 rounded-full bg-red-400"
        :style="{ width: `${progressPercent}%` }"
      ></div>
    </div>

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
import { computed, onMounted, ref, type PropType } from 'vue'

type Intent = 'info' | 'success' | 'danger' | 'warning'

const progressPercent = ref(100)

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
  },

  onClose: {
    type: Function as PropType<() => void>,
    default: () => {}
  }
})

const containerClass = computed(() => {
  return cva(
    'relative flex p-2 rounded-md space-x-3 items-center overflow-hidden',
    {
      variants: {
        intent: {
          info: 'bg-blue-100 border-blue-300',
          success: 'bg-green-100 border-green-300',
          warning: 'bg-orange-100 border-orange-300',
          danger: 'bg-red-100 border-red-300'
        }
      }
    }
  )({
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

/* Default timeout in miliseconds to close the alert */
const DEFAULT_ALERT_TIMEOUT = 5000

// TODO: Make a algorithm antialiasing to make the progress bar more smooth
onMounted(() => {
  // setup tick function to update progress bar
  const progressBarInterval = setInterval(() => {
    progressPercent.value -= 100 / (DEFAULT_ALERT_TIMEOUT / 100)

    // if progress bar is 0, clear interval and close alert
    if (progressPercent.value <= 0) {
      clearInterval(progressBarInterval)
      props.onClose()
    }
  }, 100)
})
</script>
