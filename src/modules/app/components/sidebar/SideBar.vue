<template>
  <div
    class="fixed left-0 top-0 flex min-h-screen w-16 flex-col bg-white shadow-lg"
  >
    <!-- TOP SIDEBAR (HOME, EXPLORE, NOTIFICATIONS, MESSAGES) -->
    <SideBarIcon :icon="icons.FireIcon" />
    <SideBarIcon :icon="icons.FireIcon" />
    <SideBarIcon :icon="icons.FireIcon" />
    <SideBarIcon :icon="icons.FireIcon" />

    <!-- BOTTOM SIDEBAR (SETTINGS, PROFILE) -->
  </div>
</template>

<script setup lang="ts">
import { FireIcon } from '@heroicons/vue/24/solid'

import SideBarIcon from './SideBarIcon.vue'

const icons = {
  FireIcon: FireIcon
}
</script>

<style scoped></style>
