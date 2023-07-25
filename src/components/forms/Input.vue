<template>
  <div>
    <label
      :for="props.id"
      class="mb-2 block text-sm font-medium text-gray-900"
      >{{ labelText }}</label
    >
    <input
      :type="props.type"
      :id="props.id"
      class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm"
      :placeholder="props.placeholderText"
      required
    />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

type InputType = 'text' | 'email' | 'password'

const props = defineProps({
  labelText: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true,
    validator: (value: string) => {
      return value.trim().length > 0
    }
  },
  name: {
    type: String,
    required: true
  },
  placeholderText: {
    type: String,
    required: true
  },
  type: {
    type: String as PropType<InputType>,
    required: true,
    validator: (value: string) => {
      return ['text', 'email', 'password'].includes(value)
    }
  }
})
</script>

<style scoped></style>
