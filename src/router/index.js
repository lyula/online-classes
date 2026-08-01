import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlaceholderView from '../views/PlaceholderView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Home' },
    },
    {
      path: '/services',
      name: 'services',
      component: PlaceholderView,
      meta: { title: 'Services', description: 'Explore our full range of online class and exam support services.' },
    },
    {
      path: '/exam-help',
      name: 'exam-help',
      component: PlaceholderView,
      meta: { title: 'Exam Help', description: 'Professional exam assistance across every major certification and academic platform.' },
    },
    {
      path: '/exam-help/certification',
      name: 'certification-exams',
      component: PlaceholderView,
      meta: { title: 'Certification Exams', description: 'Expert support for professional certification exams.' },
    },
    {
      path: '/exam-help/aws',
      name: 'aws-exam-help',
      component: PlaceholderView,
      meta: { title: 'AWS Exam Help', description: 'Pass your AWS certification exams with expert guidance.' },
    },
    {
      path: '/exam-help/ged',
      name: 'ged-exam-help',
      component: PlaceholderView,
      meta: { title: 'GED Exam Help', description: 'GED exam preparation and support to get you back on track.' },
    },
    {
      path: '/exam-help/ati-teas',
      name: 'ati-teas-exam-help',
      component: PlaceholderView,
      meta: { title: 'ATI TEAS Exam Help', description: 'Targeted ATI TEAS exam assistance from nursing specialists.' },
    },
    {
      path: '/exam-help/praxis',
      name: 'praxis-exam-help',
      component: PlaceholderView,
      meta: { title: 'Praxis Exam Help', description: 'Praxis exam support for aspiring educators.' },
    },
    {
      path: '/exam-help/pmp',
      name: 'pmp-exam-help',
      component: PlaceholderView,
      meta: { title: 'PMP Exam Help', description: 'PMP certification exam help from project management experts.' },
    },
    {
      path: '/exam-help/clep',
      name: 'clep-exam-help',
      component: PlaceholderView,
      meta: { title: 'CLEP Exam Help', description: 'CLEP exam assistance to earn college credit faster.' },
    },
    {
      path: '/about',
      name: 'about',
      component: PlaceholderView,
      meta: { title: 'About', description: 'Learn about OnduSchool and our mission to support students worldwide.' },
    },
    {
      path: '/contact',
      name: 'contact',
      component: PlaceholderView,
      meta: { title: 'Contact', description: 'Get in touch with our team for a free quote.' },
    },
    {
      path: '/blog',
      name: 'blog',
      component: PlaceholderView,
      meta: { title: 'Blog', description: 'Tips, guides, and insights for online learners.' },
    },
    {
      path: '/online-class',
      name: 'online-class',
      component: HomeView,
      meta: { title: 'Take My Online Class' },
    },
  ],
})

router.afterEach((to) => {
  document.title = to.meta.title
    ? `${to.meta.title} | OnduSchool`
    : 'OnduSchool'
})

export default router
