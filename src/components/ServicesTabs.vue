<script setup>
import { ref, computed } from 'vue'

const tabs = [
  {
    id: 'assignments',
    label: 'Assignments & Projects',
    content:
      'Our experts handle every assignment and project with subject-specific precision. From research papers to lab reports, we deliver work that meets rubric requirements and deadline expectations.',
  },
  {
    id: 'quizzes',
    label: 'Quizzes & Exams',
    content:
      'Proctored or unproctored, timed or untimed — our tutors are experienced across every major LMS platform. We prepare thoroughly and execute under pressure so you get the grade you need.',
  },
  {
    id: 'courses',
    label: 'Online Courses',
    content:
      'Full-course management from enrollment to final grade. We attend discussions, submit weekly work, and keep your gradebook on track for the entire semester.',
  },
  {
    id: 'essays',
    label: 'Essays & Papers',
    content:
      'Original, well-researched essays tailored to your course requirements. Our writers match your academic level and follow citation styles including APA, MLA, and Chicago.',
  },
]

const activeTab = ref(tabs[0].id)

const activeContent = computed(
  () => tabs.find((tab) => tab.id === activeTab.value)?.content ?? ''
)
</script>

<template>
  <section id="services" class="bg-neutral-950 py-16 text-white md:py-20">
    <div class="app-container">
      <div class="mb-10 text-center">
        <h2 class="mb-4 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
          Legit pay someone to take my online class for me service
        </h2>
        <p class="mx-auto max-w-2xl text-base text-neutral-400">
          Why OnduSchool should be your go-to choice for solving your online courses!
        </p>
      </div>

      <div class="mb-8 flex flex-wrap justify-center gap-2" role="tablist">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          role="tab"
          class="rounded-md border px-4 py-2.5 text-sm font-semibold transition-colors"
          :class="
            activeTab === tab.id
              ? 'border-white bg-white text-neutral-950'
              : 'border-neutral-700 text-neutral-400 hover:border-neutral-500 hover:text-white'
          "
          :aria-selected="activeTab === tab.id"
          @click="activeTab = tab.id"
        >
          {{ tab.label }}
        </button>
      </div>

      <div
        class="mx-auto max-w-3xl rounded-xl border border-neutral-800 bg-white/5 p-8 text-center"
        role="tabpanel"
      >
        <p class="text-base leading-relaxed text-neutral-300">{{ activeContent }}</p>
      </div>
    </div>
  </section>
</template>
