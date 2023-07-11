<script setup lang="ts">
import { ref } from 'vue'

interface TabItem {
  name: string
  component: string
}

interface Components {
  [key: string]: () => Promise<any>
}

const components: Components = {
  buttons: () => import('./components/buttons/ButtonsView.vue'),
  alerts: () => import('./components/alerts/AlertsView.vue')
}

const tabs: TabItem[] = [
  {
    name: 'Buttons',
    component: 'buttons'
  },
  {
    name: 'Alerts',
    component: 'alerts'
  }
]

const activeTab = ref(0)
</script>

<template>
  <!-- HeaderApp -->
  <!-- TabsList -->
  <!-- TabItem -->
  <main>
    <span> Active tab index: {{ activeTab }}</span>
    <ul>
      <li v-for="(tab, index) in tabs" :key="index">
        <p @click="activeTab = index">{{ tab.name }}</p>
      </li>
    </ul>
    <component :is="components[tabs[activeTab].component]" />
  </main>
</template>

<style scoped></style>
