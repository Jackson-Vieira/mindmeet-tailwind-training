<template>
  <div class="sidebar-icon group">
    <props.icon class="w-full" />
    <!-- <span>
      {{ props.text }}
    </span> -->
  </div>
</template>

<script setup lang="ts">
import { FireIcon } from '@heroicons/vue/24/solid'

import type { PropType } from 'vue'

const props = defineProps({
  // text: {
  //   type: String,
  //   required: true
  // },
  icon: {
    type: FireIcon as PropType<typeof FireIcon>,
    required: true
  }
})
</script>

<style lang="postcss" scoped>
.sidebar-icon {
  @apply relative flex h-auto w-full cursor-pointer 
  items-center justify-center bg-opacity-0 text-slate-800
  transition-all duration-200 ease-linear hover:rounded-lg hover:bg-green-600
  hover:text-white;
}
</style>
