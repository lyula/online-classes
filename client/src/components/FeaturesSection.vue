<script setup>
const features = [
  {
    id: 'support',
    title: '24/7 Tutor Support',
    text: 'Dedicated online class handlers who respond instantly so you never miss a deadline again.',
  },
  {
    id: 'installments',
    title: 'Affordable Installment Plans',
    text: 'Split payments across the term and keep your budget intact while we maintain your gradebook.',
  },
  {
    id: 'turnaround',
    title: 'Fast Turnaround Times',
    text: 'Rush assignments and quizzes handled the same day — perfect for heavy weeks or unexpected workload spikes.',
  },
  {
    id: 'experts',
    title: 'Specialist Subject Experts',
    text: 'From accounting to nursing labs, every class is managed by a tutor with direct experience in that platform and syllabus.',
  },
  {
    id: 'anonymity',
    title: '100% Anonymity',
    text: 'Secure login vaults, masked IP addresses, and double-auth workflows keep your identity protected.',
  },
  {
    id: 'grades',
    title: 'Better Grades',
    text: 'Weekly status reports, grade forecasts, and on-demand strategy calls so you finish the course with confidence.',
  },
]

const iconClass = 'h-16 w-16 shrink-0'
const stroke = '#334155'
const accent = '#7dd3fc'
</script>

<template>
  <section class="bg-white py-16 md:py-20">
    <div class="app-container">
      <div class="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="feature in features"
          :key="feature.id"
          class="flex items-start gap-5"
        >
          <!-- 24/7 Tutor Support -->
          <svg
            v-if="feature.id === 'support'"
            :class="iconClass"
            viewBox="0 0 64 64"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="32" cy="32" r="28" :stroke="stroke" stroke-width="1.5" />
            <path
              d="M32 8a24 24 0 0 1 0 48"
              :stroke="accent"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M26 38c0-3.3 2.7-8 6-8s6 4.7 6 8v2H26v-2z"
              :stroke="stroke"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
            <path
              d="M24 40h16l-1.5 4H25.5L24 40z"
              :fill="accent"
              :stroke="stroke"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
            <path
              d="M28 28c0-2.2 1.8-4 4-4s4 1.8 4 4"
              :stroke="stroke"
              stroke-width="1.5"
            />
            <text x="32" y="18" text-anchor="middle" :fill="stroke" font-size="9" font-weight="700">24</text>
          </svg>

          <!-- Affordable Installment Plans -->
          <svg
            v-else-if="feature.id === 'installments'"
            :class="iconClass"
            viewBox="0 0 64 64"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M32 6L10 16v16c0 13.3 9.4 25.7 22 28 12.6-2.3 22-14.7 22-28V16L32 6z"
              :stroke="stroke"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
            <path
              d="M32 6v50"
              :stroke="accent"
              stroke-width="1.5"
              opacity="0.6"
            />
            <path
              d="M24 32l5 5 11-12"
              :stroke="stroke"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M32 14l-14 7v12c0 9.5 6.3 18.3 14 20.5"
              :fill="accent"
              opacity="0.35"
            />
          </svg>

          <!-- Fast Turnaround Times -->
          <svg
            v-else-if="feature.id === 'turnaround'"
            :class="iconClass"
            viewBox="0 0 64 64"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M16 36c0-8.8 7.2-20 16-20s16 11.2 16 20"
              :stroke="stroke"
              stroke-width="1.5"
            />
            <path
              d="M12 36h40"
              :stroke="stroke"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <circle cx="12" cy="36" r="3" :fill="accent" :stroke="stroke" stroke-width="1.5" />
            <circle cx="32" cy="36" r="3" :fill="accent" :stroke="stroke" stroke-width="1.5" />
            <circle cx="52" cy="36" r="3" :fill="accent" :stroke="stroke" stroke-width="1.5" />
            <path
              d="M22 24c2-6 8-10 10-10s8 4 10 10"
              :fill="accent"
              opacity="0.4"
              :stroke="stroke"
              stroke-width="1.5"
            />
          </svg>

          <!-- Specialist Subject Experts -->
          <svg
            v-else-if="feature.id === 'experts'"
            :class="iconClass"
            viewBox="0 0 64 64"
            fill="none"
            aria-hidden="true"
          >
            <rect x="8" y="12" width="48" height="32" rx="2" :stroke="stroke" stroke-width="1.5" />
            <path d="M8 40h48" :stroke="stroke" stroke-width="1.5" />
            <path d="M28 40v8h8v-8" :stroke="stroke" stroke-width="1.5" stroke-linejoin="round" />
            <path d="M22 48h20" :stroke="stroke" stroke-width="1.5" stroke-linecap="round" />
            <rect x="18" y="22" width="5" height="12" rx="1" :fill="accent" :stroke="stroke" stroke-width="1" />
            <rect x="29" y="18" width="5" height="16" rx="1" :fill="accent" opacity="0.7" :stroke="stroke" stroke-width="1" />
            <rect x="40" y="24" width="5" height="10" rx="1" :fill="accent" opacity="0.5" :stroke="stroke" stroke-width="1" />
          </svg>

          <!-- 100% Anonymity -->
          <svg
            v-else-if="feature.id === 'anonymity'"
            :class="iconClass"
            viewBox="0 0 64 64"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="32" cy="32" r="10" :stroke="stroke" stroke-width="1.5" />
            <circle cx="32" cy="32" r="4" :fill="accent" :stroke="stroke" stroke-width="1.5" />
            <path
              d="M32 14v8M32 42v8M14 32h8M42 32h8M19.8 19.8l5.6 5.6M38.6 38.6l5.6 5.6M44.2 19.8l-5.6 5.6M25.4 38.6l-5.6 5.6"
              :stroke="stroke"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <circle cx="32" cy="32" r="22" :stroke="accent" stroke-width="1.5" opacity="0.5" stroke-dasharray="4 4" />
          </svg>

          <!-- Better Grades -->
          <svg
            v-else-if="feature.id === 'grades'"
            :class="iconClass"
            viewBox="0 0 64 64"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="32" cy="32" r="24" :stroke="stroke" stroke-width="1.5" />
            <ellipse cx="32" cy="32" rx="24" ry="10" :stroke="stroke" stroke-width="1.5" />
            <ellipse cx="32" cy="32" rx="10" ry="24" :stroke="stroke" stroke-width="1.5" />
            <path d="M8 32h48" :stroke="stroke" stroke-width="1.5" />
            <path
              d="M32 8c6 8 6 40 0 48M32 8c-6 8-6 40 0 48"
              :stroke="accent"
              stroke-width="1.5"
              opacity="0.6"
            />
            <path
              d="M14 22c4 2 10 3 18 3s14-1 18-3"
              :fill="accent"
              opacity="0.25"
            />
          </svg>

          <div>
            <h4 class="mb-2 text-base font-bold leading-snug text-neutral-900">
              {{ feature.title }}
            </h4>
            <p class="text-sm leading-relaxed text-neutral-500">
              {{ feature.text }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
