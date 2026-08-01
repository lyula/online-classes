<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { navLinks } from '../config/navigation'

const route = useRoute()
const mobileOpen = ref(false)
const examDropdownOpen = ref(false)
const mobileExamOpen = ref(false)
const scrolled = ref(false)

function isActive(link) {
  if (link.children) {
    return link.children.some((child) => child.to.name === route.name)
  }
  return link.to.name === route.name
}

function toggleMobile() {
  mobileOpen.value = !mobileOpen.value
  if (!mobileOpen.value) mobileExamOpen.value = false
}

function closeMobile() {
  mobileOpen.value = false
  mobileExamOpen.value = false
}

function onScroll() {
  scrolled.value = window.scrollY > 10
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
watch(() => route.path, closeMobile)
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 h-[72px] bg-white transition-shadow"
    :class="scrolled || mobileOpen ? 'border-b border-neutral-200 shadow-sm' : 'border-b border-transparent'"
  >
    <div class="app-container flex h-[72px] items-center justify-between gap-6">
      <RouterLink
        :to="{ name: 'home' }"
        class="flex shrink-0 items-center gap-2.5 text-lg font-bold"
        @click="closeMobile"
      >
        <span class="flex h-9 w-9 items-center justify-center rounded-md bg-neutral-950 text-base font-extrabold text-white">
          O
        </span>
        <span>OnduSchool</span>
      </RouterLink>

      <nav class="hidden flex-1 justify-center lg:flex" aria-label="Main navigation">
        <ul class="flex items-center gap-1">
          <li
            v-for="link in navLinks"
            :key="link.label"
            class="relative"
            @mouseenter="link.children && (examDropdownOpen = true)"
            @mouseleave="link.children && (examDropdownOpen = false)"
          >
            <RouterLink
              :to="link.to"
              class="flex items-center gap-1 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-neutral-100"
              :class="[
                isActive(link) ? 'font-semibold text-neutral-950' : 'text-neutral-700',
                link.highlight && 'font-semibold',
              ]"
            >
              {{ link.label }}
              <svg
                v-if="link.children"
                class="h-3 w-3"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
              </svg>
            </RouterLink>

            <ul
              v-if="link.children"
              class="absolute left-1/2 top-[calc(100%+0.5rem)] min-w-[220px] -translate-x-1/2 rounded-lg border border-neutral-200 bg-white p-2 shadow-lg transition-all"
              :class="examDropdownOpen ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-2 opacity-0'"
            >
              <li v-for="child in link.children" :key="child.label">
                <RouterLink
                  :to="child.to"
                  class="block rounded-md px-3.5 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100"
                  :class="route.name === child.to.name && 'bg-neutral-100 font-semibold text-neutral-950'"
                >
                  {{ child.label }}
                </RouterLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div class="flex shrink-0 items-center gap-3">
        <RouterLink
          :to="{ name: 'contact' }"
          class="hidden rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-800 lg:inline-flex"
        >
          Contact
        </RouterLink>
        <button
          class="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md transition-colors hover:bg-neutral-100 lg:hidden"
          :aria-expanded="mobileOpen"
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          @click="toggleMobile"
        >
          <span
            class="block h-0.5 w-5 rounded bg-neutral-950 transition-all duration-200"
            :class="mobileOpen && 'translate-y-[7px] rotate-45'"
          />
          <span
            class="block h-0.5 w-5 rounded bg-neutral-950 transition-all duration-200"
            :class="mobileOpen && 'opacity-0'"
          />
          <span
            class="block h-0.5 w-5 rounded bg-neutral-950 transition-all duration-200"
            :class="mobileOpen && '-translate-y-[7px] -rotate-45'"
          />
        </button>
      </div>
    </div>

    <div
      id="mobile-menu"
      class="fixed inset-x-0 bottom-0 top-[72px] z-50 overflow-y-auto bg-white transition-transform duration-300 lg:hidden"
      :class="mobileOpen ? 'translate-x-0' : 'translate-x-full'"
      :aria-hidden="!mobileOpen"
    >
      <div class="app-container pb-8 pt-6">
        <ul class="mb-6 flex flex-col gap-1">
          <li v-for="link in navLinks" :key="'m-' + link.label">
            <template v-if="link.children">
              <button
                class="flex w-full items-center justify-between border-b border-neutral-200 px-2 py-3.5 text-left text-base font-medium"
                :aria-expanded="mobileExamOpen"
                @click="mobileExamOpen = !mobileExamOpen"
              >
                {{ link.label }}
                <svg
                  class="h-3 w-3 transition-transform"
                  :class="mobileExamOpen && 'rotate-180'"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                </svg>
              </button>
              <ul v-show="mobileExamOpen" class="py-1 pl-4">
                <li v-for="child in link.children" :key="child.label">
                  <RouterLink
                    :to="child.to"
                    class="block px-2 py-2.5 text-sm text-neutral-500 transition-colors hover:text-neutral-950"
                    @click="closeMobile"
                  >
                    {{ child.label }}
                  </RouterLink>
                </li>
              </ul>
            </template>
            <RouterLink
              v-else
              :to="link.to"
              class="block border-b border-neutral-200 px-2 py-3.5 text-base font-medium transition-colors"
              :class="link.highlight && 'font-bold'"
              @click="closeMobile"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
        <RouterLink
          :to="{ name: 'contact' }"
          class="flex w-full items-center justify-center rounded-full bg-neutral-950 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
          @click="closeMobile"
        >
          Contact
        </RouterLink>
      </div>
    </div>

    <div
      v-if="mobileOpen"
      class="fixed inset-x-0 bottom-0 top-[72px] z-40 bg-black/40 lg:hidden"
      aria-hidden="true"
      @click="closeMobile"
    />
  </header>
</template>
