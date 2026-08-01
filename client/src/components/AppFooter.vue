<script setup>
import { RouterLink } from 'vue-router'
import { footerLinks } from '../config/navigation'
</script>

<template>
  <footer class="border-t border-neutral-800 bg-neutral-950 py-16 text-white">
    <div class="app-container grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
      <div>
        <RouterLink :to="{ name: 'home' }" class="mb-3 flex items-center gap-2.5 text-lg font-bold">
          <span class="flex h-8 w-8 items-center justify-center rounded-md bg-white text-sm font-extrabold text-neutral-950">
            O
          </span>
          <span>OnduSchool</span>
        </RouterLink>
        <p class="mb-6 text-sm text-neutral-400">Professional Online Exam Assistance</p>
        <p class="text-xs text-neutral-500">&copy; {{ new Date().getFullYear() }} OnduSchool. All rights reserved.</p>
      </div>

      <div>
        <h4 class="mb-4 text-sm font-bold">Get in Touch</h4>
        <address class="space-y-1 text-sm not-italic leading-relaxed text-neutral-400">
          <p>7901 4TH St N., St Petersburg, United States</p>
          <p>
            <a href="mailto:info@onduschool.com" class="transition-colors hover:text-white">
              info@onduschool.com
            </a>
          </p>
          <p>
            <a href="tel:+12068211164" class="transition-colors hover:text-white">
              +1 206 821 1164
            </a>
          </p>
        </address>
      </div>

      <div>
        <h4 class="mb-4 text-sm font-bold">Learn More</h4>
        <ul class="flex flex-col gap-2">
          <li v-for="link in footerLinks" :key="link.label">
            <RouterLink
              :to="link.to"
              class="text-sm text-neutral-400 transition-colors hover:text-white"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
      </div>

      <div>
        <h4 class="mb-4 text-sm font-bold">Our Newsletter</h4>
        <p class="mb-4 text-sm leading-relaxed text-neutral-400">
          Subscribe to our newsletter to get our news &amp; deals delivered to you.
        </p>
        <form class="flex flex-col gap-2.5" @submit.prevent>
          <label for="newsletter-email" class="sr-only">Email Address</label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Email Address"
            class="rounded-md border border-neutral-700 bg-white/5 px-3.5 py-2.5 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-neutral-500"
          />
          <button
            type="submit"
            class="rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-neutral-950 transition-colors hover:bg-neutral-200"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </footer>
</template>
