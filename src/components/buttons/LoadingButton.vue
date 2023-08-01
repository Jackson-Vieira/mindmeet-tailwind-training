<script setup lang="ts">
import BaseButton from './BaseButton.vue'

const props = defineProps({
  isLoading: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <BaseButton :disabled="props.isLoading">
    <span v-if="props.isLoading"> Loading... </span>
    <span v-else>
      <slot></slot>
    </span>
  </BaseButton>
</template>
