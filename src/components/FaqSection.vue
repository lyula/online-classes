<script setup>
import { ref } from 'vue'

const faqs = [
  {
    question: 'Why is your online class service the best?',
    answer:
      'Affordable pricing, zero hidden fees, on-time delivery, and installment plans built around your semester schedule.',
  },
  {
    question: 'Will you have an expert for my course?',
    answer:
      'Yes. Our roster includes subject matter experts from top universities. We never overload a tutor so they stay focused on your class.',
  },
  {
    question: "What if I'm not satisfied with the class progress?",
    answer:
      "Request revisions anytime. If we miss the grade target agreed at signup, we'll either refund you or retake the work — your choice.",
  },
  {
    question: 'Are your services confidential?',
    answer:
      'Absolutely. We operate under strict NDAs, encrypted communications, and masked IP addresses for every session.',
  },
]

const openIndex = ref(null)

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section class="bg-neutral-100 py-16 md:py-20">
    <div class="app-container">
      <h2 class="mb-10 text-center text-2xl font-extrabold tracking-tight sm:text-3xl">
        Frequently Asked Questions
      </h2>
      <div class="mx-auto max-w-3xl">
        <div
          v-for="(item, index) in faqs"
          :key="index"
          class="border-b border-neutral-200 first:border-t"
        >
          <button
            class="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold"
            :aria-expanded="openIndex === index"
            @click="toggle(index)"
          >
            <span>{{ item.question }}</span>
            <svg
              class="h-4 w-4 shrink-0 transition-transform"
              :class="openIndex === index && 'rotate-180'"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
          </button>
          <div v-show="openIndex === index" class="pb-5">
            <p class="text-sm leading-relaxed text-neutral-500">{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
