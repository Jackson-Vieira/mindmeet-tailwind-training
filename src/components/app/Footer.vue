<script setup lang="ts">
import Container from './Container.vue'
</script>

<template>
  <Container>
    <div class="my-10 text-center text-sm text-gray-600">
      Copyright © {{ new Date().getFullYear() }}. Made with ♥ by
      <span class="font-medium">Mind Meet</span>. Illustrations from
      {{ ' ' }}
      <a href="https://storyset.com/" target="_blank" rel="noopener ">
        storyset.
      </a>
    </div>
  </Container>
</template>

<style scoped></style>
