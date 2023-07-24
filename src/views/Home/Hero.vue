<template>
  <Container class="flex flex-wrap">
    <div class="flex w-full items-center lg:w-1/2">
      <div class="mb-8 max-w-2xl">
        <h1
          class="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight"
        >
          Escreva aqui um título empolgante
        </h1>
        <p class="py-5 text-xl leading-normal text-gray-500 xl:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere rem
          fuga numquam dicta rerum ut hic voluptatem optio laudantium odit.
        </p>
        <div>
          <a
            href=""
            class="rounded-md bg-indigo-600 px-8 py-3 text-center text-lg font-medium text-white"
            >Lorem, ipsum dolor.</a
          >
        </div>
      </div>
    </div>
    <div class="flex w-full items-center justify-center lg:w-1/2">
      <div>
        <img
          loading="lazy"
          src="@/assets/images/hero.png"
          alt="Hero image"
          width="617"
          height="617"
        />
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import Container from '@/components/app/Container.vue'
</script>

<style scoped></style>
