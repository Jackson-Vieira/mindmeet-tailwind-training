<template>
  <Container>
    <div class="flex flex-col items-center">
      <div class="overflow-hidden rounded-full">
        <img
          src="https://avatars.githubusercontent.com/u/85802038?v=4"
          width="150"
          alt="Team member"
        />
      </div>
      <div class="mt-2 text-center">
        <h3 class="text-grat-500 text-xl font-medium capitalize">
          Member name
        </h3>
        <p class="text-md font-medium uppercase text-indigo-600">Member role</p>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import { Container } from '@/components/app'
</script>

<style scoped></style>
