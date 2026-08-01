<script setup>
const sections = [
  {
    id: 'coursework',
    title: 'Why You Should Consider Hiring Someone to Do Your Coursework?',
    paragraphs: [
      'Trust me, you all will not be using advanced concepts like standard deviation, normal distribution, t test, null hypothesis, chi square test, binomial distribution, confidence interval, descriptive statistics, interquartile range, inferential statistics, geometric mean — or similarly complex topics from various subjects — in your practical life.',
      'We have entered into a rapidly changing world; AI is here and ready to take over the world we live in. Perhaps, in 10 years from now, it will eat our jobs too. Why not invest this time into learning something which cannot be replaced by AI, or earning a few more dollars while we can?',
      'Many subjects can be very complex. They often require a strong foundation in underlying principles, and there are many different tests, formulas, and procedures to learn. Some subjects can be very subjective too.',
    ],
  },
  {
    id: 'helper',
    title: 'Why do I need a Coursework Helper?',
    subtitle: 'Top Grades and Better Future Opportunities',
    paragraphs: [
      'The trend of hiring someone to do online courses is on the rise. We are seeing a daily increase in the number of students approaching us for coursework help; some of them ask to finish their online courses entirely.',
      'When you bring in someone to take your course, they basically become your virtual twin. They attend lectures, complete coursework, and join discussions on your behalf. This lets you concentrate on other important things in your life without sacrificing your grades.',
    ],
  },
  {
    id: 'experts',
    title: 'Subject Matter Experts',
    paragraphs: [
      'You might have poor grades at the moment, or a number of projects past due for a challenging subject, and only the thought of starting them can send chills down your spine. Our expert can finish all that piled-up coursework and projects in a few days.',
      "Having an expert on your side for your online courses doesn't just mean you'll get good grades; it also means they'll efficiently handle all your projects, quizzes, coursework, midterms, and finals.",
    ],
  },
  {
    id: 'grades',
    title: 'Improved Grades & Work-Life Balance',
    paragraphs: [
      "Isn't it better that you are struggling in one subject and you don't even have time to finish your online course, but our experts will get you a top grade — and that too at cheaper prices?",
      "In our crazy world, finding the right balance between work and personal life is vital for our well-being. When you entrust your online coursework to a helper, you're not just lightening your academic load; you're also freeing up time for self-care and for pursuing your other interests and passions.",
    ],
  },
]
</script>

<template>
  <section id="exam-help" class="bg-neutral-100 py-16 md:py-20">
    <div class="app-container">
      <article
        v-for="block in sections"
        :key="block.id"
        class="mx-auto mb-14 max-w-3xl last:mb-0"
      >
        <h2
          v-if="block.id === 'coursework'"
          class="mb-6 text-center text-2xl font-extrabold leading-tight sm:text-3xl"
        >
          {{ block.title }}
        </h2>
        <template v-else>
          <h3 class="mb-2 text-xl font-bold">{{ block.title }}</h3>
          <h4 v-if="block.subtitle" class="mb-4 text-base font-semibold text-neutral-500">
            {{ block.subtitle }}
          </h4>
        </template>
        <p
          v-for="(para, i) in block.paragraphs"
          :key="i"
          class="mb-4 text-sm leading-relaxed text-neutral-500 last:mb-0"
        >
          {{ para }}
        </p>
      </article>
    </div>
  </section>
</template>
