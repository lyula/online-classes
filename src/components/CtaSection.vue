<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section id="contact" class="bg-neutral-950 py-16 text-white md:py-20">
    <div class="app-container text-center">
      <h2 class="mx-auto mb-8 max-w-2xl text-2xl font-extrabold leading-snug sm:text-3xl">
        Contact us now &amp; find out how seamlessly we can take an exam for you.
      </h2>
      <RouterLink
        :to="{ name: 'contact' }"
        class="inline-flex items-center justify-center rounded-md bg-white px-8 py-3.5 text-base font-semibold text-neutral-950 transition-colors hover:bg-neutral-200"
      >
        Get A Quote
      </RouterLink>
    </div>
  </section>
</template>
