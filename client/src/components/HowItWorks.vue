<script setup>
const steps = [
  {
    number: '01',
    title: 'Contact our academic experts',
    text: 'Complete a quote request with details of your online exam. Let us know as much information as possible—exam name, browser, and deadline.',
  },
  {
    number: '02',
    title: 'Discuss your online exam or essay',
    text: 'One of our exam experts will review your request and send a tailored quote. We usually reply within a few hours, so include your deadline.',
  },
  {
    number: '03',
    title: 'Confirm your price',
    text: "We keep pricing flexible with installment options. Approve the quote, set your grade target, and we'll handle the logistics.",
  },
  {
    number: '04',
    title: 'Secure your top grade',
    text: 'Relax while your assigned expert completes the exam, project, or course. We aim for at least a B and keep you updated throughout.',
  },
]
</script>

<template>
  <section id="how-it-works" class="py-16 md:py-20">
    <div class="app-container">
      <div class="mb-12 text-center">
        <h2 class="mb-4 text-2xl font-extrabold tracking-tight text-neutral-950 sm:text-3xl lg:text-4xl">
          How to hire our experts for your online classes?
        </h2>
        <p class="mx-auto max-w-2xl text-base text-neutral-500">
          No upfront fee for do my online class — you can pay in instalments throughout the course.
        </p>
      </div>
      <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <article
          v-for="step in steps"
          :key="step.number"
          class="rounded-xl border border-neutral-200 bg-white p-7 transition-shadow hover:border-neutral-950 hover:shadow-lg"
        >
          <span class="mb-4 block text-3xl font-extrabold leading-none text-neutral-400">
            {{ step.number }}
          </span>
          <h4 class="mb-2.5 text-base font-bold leading-snug">{{ step.title }}</h4>
          <p class="text-sm leading-relaxed text-neutral-500">{{ step.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
