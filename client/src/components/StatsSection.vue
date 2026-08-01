<script setup>
const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '5000+', label: 'Students Satisfied' },
  { value: '98%', label: 'Success Rate' },
]

const bulletItems = [
  'No Upfront Payment — Pay in instalments',
  'Subject Matter Experts related to each field',
  '24/7 support from our online class takers',
  'Confidentiality and full anonymity guaranteed',
]

const images = {
  large: new URL('../assets/ab1@2x.jpg', import.meta.url).href,
  small: [
    new URL('../assets/ab2@2x.jpg', import.meta.url).href,
    new URL('../assets/ab3@2x.jpg', import.meta.url).href,
  ],
}

const imageAlts = [
  'Online exam coordinator reviewing student schedule',
  'Tutor assisting learner with digital coursework',
  'Students satisfied after successful online exams',
]
</script>

<template>
  <section id="about" class="bg-neutral-100 py-16 md:py-20">
    <div class="app-container">
      <div class="grid items-start gap-12 lg:grid-cols-2">
        <div>
          <div class="mb-8 flex flex-wrap gap-8">
            <div v-for="stat in stats" :key="stat.label" class="flex flex-col">
              <span class="text-3xl font-extrabold leading-none">{{ stat.value }}</span>
              <span class="mt-1.5 text-xs text-neutral-500">{{ stat.label }}</span>
            </div>
          </div>
          <h3 class="mb-4 text-2xl font-extrabold leading-tight">
            We are one of the top do my online class taking services
          </h3>
          <p class="mb-4 text-sm leading-relaxed text-neutral-500">
            We have top academic experts from various fields with master's degrees from reputable
            universities, ready to provide you with real-time homework help, assignment assistance,
            and full online course support. At OnduSchool, we also offer a "take my online class for
            me" service, so you don't have to worry about exams, discussions, homework assignments,
            or projects — we handle all your course-related tasks.
          </p>
          <p class="mb-6 text-sm leading-relaxed text-neutral-500">
            That's why our academic assistance is designed specifically for busy students and
            working professionals who don't have the time to complete their coursework on their own.
          </p>
          <ul class="grid gap-2 sm:grid-cols-2">
            <li
              v-for="item in bulletItems"
              :key="item"
              class="relative pl-5 text-sm font-medium before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-neutral-950"
            >
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-4">
          <div class="aspect-[16/10] overflow-hidden rounded-xl border border-neutral-200 bg-white">
            <img
              :src="images.large"
              :alt="imageAlts[0]"
              class="h-full w-full object-cover"
            />
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="(src, index) in images.small"
              :key="src"
              class="aspect-[4/3] overflow-hidden rounded-xl border border-neutral-200 bg-white"
            >
              <img
                :src="src"
                :alt="imageAlts[index + 1]"
                class="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
