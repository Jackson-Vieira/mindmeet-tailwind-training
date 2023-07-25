<template>
  <Navbar />
  <Hero />
  <FeatureSession />
  <TeamSection />
  <ContactSection />
  <Footer />
</template>

<script setup lang="ts">
import Navbar from '@/components/app/Navbar.vue'
import Hero from './Hero.vue'
import Footer from '@/components/app/Footer.vue'
import ContactSection from './ContactSection.vue'
import FeatureSession from './FeaturesSection.vue'
import TeamSection from './TeamSection.vue'
</script>

<style scoped></style>
