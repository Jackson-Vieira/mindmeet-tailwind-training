<script setup lang="ts">
import Container from '@/components/app/Container.vue'
import Feature from './Feature.vue'

const features = [
  {
    icon: 'icon',
    title: 'Lorem, ipsum.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quae nesciunt laboriosam vel corrupti dicta molestias ea commodi animi soluta.'
  },
  {
    icon: 'icon',
    title: 'Lorem, ipsum.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quae nesciunt laboriosam vel corrupti dicta molestias ea commodi animi soluta.'
  },
  {
    icon: 'icon',
    title: 'Lorem, ipsum.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quae nesciunt laboriosam vel corrupti dicta molestias ea commodi animi soluta.'
  },
  {
    icon: 'icon',
    title: 'Lorem, ipsum.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quae nesciunt laboriosam vel corrupti dicta molestias ea commodi animi soluta.'
  },
  {
    icon: 'icon',
    title: 'Lorem, ipsum.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quae nesciunt laboriosam vel corrupti dicta molestias ea commodi animi soluta.'
  },
  {
    icon: 'icon',
    title: 'Lorem, ipsum.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quae nesciunt laboriosam vel corrupti dicta molestias ea commodi animi soluta.'
  },
  {
    icon: 'icon',
    title: 'Lorem, ipsum.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quae nesciunt laboriosam vel corrupti dicta molestias ea commodi animi soluta.'
  },
  {
    icon: 'icon',
    title: 'Lorem, ipsum.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quae nesciunt laboriosam vel corrupti dicta molestias ea commodi animi soluta.'
  }
]
</script>

<template>
  <Container class="mt-2 flex flex-wrap items-center justify-center gap-12">
    <Feature
      v-for="feature in features"
      :key="feature.title"
      :title="feature.title"
      :description="feature.description"
      :icon="feature.icon"
    />
  </Container>
</template>

<style scoped></style>
