<script setup>
const testimonials = [
  {
    quote:
      "OnduSchool is my go-to choice for affordable online exam help. Their tutors are friendly and go above and beyond. I'm so glad I found them when I needed someone to take my online exam.",
    name: 'Corbin Colon',
    role: 'Student',
  },
  {
    quote:
      "I had a last-minute deadline for my math class. OnduSchool delivered an A and kept me updated the entire time. I'll definitely use their exam service again.",
    name: 'Nathan M.',
    role: 'Student',
  },
  {
    quote:
      "I've recommended OnduSchool to classmates who needed extra help. Their tutors are professional, fast, and help me prep for every class.",
    name: 'Travis P.',
    role: 'Student',
  },
  {
    quote:
      'Professional online exam takers who make everything easy. I was skeptical at first, but they deliver on time with great grades.',
    name: 'Millie Figueroa',
    role: 'Student',
  },
  {
    quote:
      'I needed help with an accounting exam. The installment plan made it affordable and the tutor nailed the score I needed.',
    name: 'Melissa Roy',
    role: 'Student',
  },
  {
    quote:
      "After struggling with the GED exams I turned to OnduSchool. They made the process seamless and now I'm back on track with my goals.",
    name: 'David M.',
    role: 'Student',
  },
]
</script>

<template>
  <section class="bg-neutral-50 py-16 md:py-20">
    <div class="app-container">
      <div class="mb-12 text-center">
        <span class="mb-3 block text-xs font-semibold uppercase tracking-widest text-neutral-500">
          Guaranteed Exam Success Online
        </span>
        <h2 class="text-2xl font-extrabold tracking-tight text-neutral-950 sm:text-3xl lg:text-4xl">
          Reviews from previous OnduSchool students
        </h2>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <blockquote
          v-for="item in testimonials"
          :key="item.name"
          class="flex flex-col rounded-lg bg-white p-8 shadow-[0_2px_16px_rgba(0,0,0,0.06)]"
        >
          <!-- Star rating -->
          <div class="mb-5 flex gap-0.5" aria-label="5 out of 5 stars">
            <svg
              v-for="star in 5"
              :key="star"
              class="h-4 w-4 text-amber-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>

          <!-- Quote with decorative mark -->
          <div class="relative mb-8 flex-1">
            <span
              class="pointer-events-none absolute -left-1 top-0 select-none font-serif text-7xl leading-none text-neutral-200"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <p class="relative z-10 pl-8 text-sm leading-relaxed text-neutral-600">
              &ldquo;{{ item.quote }}&rdquo;
            </p>
          </div>

          <!-- Reviewer -->
          <footer>
            <strong class="block text-sm font-bold text-neutral-900">{{ item.name }}</strong>
            <span class="text-sm text-neutral-500">{{ item.role }}</span>
          </footer>
        </blockquote>
      </div>
    </div>
  </section>
</template>
