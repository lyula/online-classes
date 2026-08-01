<script setup>
import { ref } from 'vue'

const heroImage = new URL('../assets/hero.jpg', import.meta.url).href
const imageLoaded = ref(false)
const imageError = ref(false)

function onLoad() {
  imageLoaded.value = true
}

function onError() {
  imageError.value = true
}
</script>

<template>
  <section id="home" class="bg-white py-14 md:py-16">
    <div class="app-container grid items-center gap-8 md:grid-cols-2 md:gap-12">
      <div>
        <h1 class="mb-5 text-3xl font-extrabold leading-tight tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl">
          Put your education on AutoPilot with our best take my online class service
        </h1>
        <p class="max-w-lg text-base leading-relaxed text-neutral-500 sm:text-lg">
          If you are looking for someone to take your online classes you are at the right place.
          OnduSchool is a pioneer at providing academic assistance to students and working
          professionals who want to hire someone to do their classes.
        </p>
      </div>
      <div class="relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
        <img
          v-show="!imageError"
          :src="heroImage"
          alt="Student learning online with OnduSchool"
          class="h-full w-full object-cover"
          @load="onLoad"
          @error="onError"
        />
        <div
          v-if="imageError || !imageLoaded"
          class="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center text-sm text-neutral-500"
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5" />
            <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
            <path d="M21 15l-5-5L5 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
          </svg>
          <span>Add hero.jpg to src/assets/</span>
        </div>
      </div>
    </div>
  </section>
</template>
