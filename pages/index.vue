<script lang="ts" setup>
const image = { src: 'https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80', alt: 'Image Description' }
</script>

<template>
  <div>
    <SectionHero :hero-image="image" />
    <SectionLogoGrid />
    <SectionProblemSolution />
    <SectionBenefits />
    <SectionTestimonials />
    <SectionFeatures />
    <SectionFAQ />
    <SectionCTA />
  </div>
</template>
