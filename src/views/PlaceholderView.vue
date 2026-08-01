<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const route = useRoute()

const title = computed(() => route.meta.title ?? 'Page')
const description = computed(
  () => route.meta.description ?? 'This page is coming soon. Check back shortly.'
)
</script>

<template>
  <section class="py-24">
    <div class="app-container max-w-3xl text-center">
      <p class="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-500">
        Coming Soon
      </p>
      <h1 class="mb-4 text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl">
        {{ title }}
      </h1>
      <p class="mb-8 text-base leading-relaxed text-neutral-500">
        {{ description }}
      </p>
      <RouterLink
        to="/"
        class="inline-flex items-center justify-center rounded-md bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
      >
        Back to Home
      </RouterLink>
    </div>
  </section>
</template>
