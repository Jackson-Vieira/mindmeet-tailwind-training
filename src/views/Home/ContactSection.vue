<template>
  <Container>
    <section class="bg-white">
      <div class="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
        <h2
          class="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-800"
        >
          Contact Us
        </h2>
        <p
          class="mb-8 text-center font-light text-gray-500 sm:text-xl lg:mb-16"
        >
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form action="#" class="space-y-8">
          <Input
            id="email"
            name="email"
            labelText="Your Email"
            placeholderText="youremail@gmail.com"
            type="email"
          />
          <Input
            id="subject"
            name="subject"
            labelText="Subject"
            placeholderText="Let us know how we can help you"
            type="text"
          />

          <div class="sm:col-span-2">
            <label
              for="message"
              class="mb-2 block text-sm font-medium text-gray-900"
              >Your message</label
            >
            <textarea
              id="message"
              rows="6"
              class="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            class="hover:bg-primary-400 focus:ring-primary-300 rounded-lg bg-indigo-600 px-5 py-3 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 sm:w-fit"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  </Container>
</template>

<script setup lang="ts">
import Container from '@/components/app/Container.vue'
import { Input } from '@/components/forms'
</script>

<style scoped></style>
