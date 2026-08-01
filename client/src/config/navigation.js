export const navLinks = [
  { label: 'Home', to: { name: 'home' } },
  { label: 'Services', to: { name: 'services' } },
  {
    label: 'Exam Help',
    to: { name: 'exam-help' },
    children: [
      { label: 'Exam Help', to: { name: 'exam-help' } },
      { label: 'Certification Exams', to: { name: 'certification-exams' } },
      { label: 'AWS Exam Help', to: { name: 'aws-exam-help' } },
      { label: 'GED Exam Help', to: { name: 'ged-exam-help' } },
      { label: 'ATI TEAS Exam Help', to: { name: 'ati-teas-exam-help' } },
      { label: 'Praxis Exam Help', to: { name: 'praxis-exam-help' } },
      { label: 'PMP Exam Help', to: { name: 'pmp-exam-help' } },
      { label: 'CLEP Exam Help', to: { name: 'clep-exam-help' } },
      { label: 'More Services', to: { name: 'services' } },
    ],
  },
  { label: 'About', to: { name: 'about' } },
  { label: 'Contact', to: { name: 'contact' } },
  { label: 'Blog', to: { name: 'blog' } },
  { label: 'Take my online class', to: { name: 'online-class' }, highlight: true },
]

export const footerLinks = [
  { label: 'Certification Exam Help', to: { name: 'certification-exams' } },
  { label: 'GED Exam Help', to: { name: 'ged-exam-help' } },
  { label: 'ATI TEAS Exam Help', to: { name: 'ati-teas-exam-help' } },
  { label: 'AWS Exam Help', to: { name: 'aws-exam-help' } },
  { label: 'Praxis Exam Help', to: { name: 'praxis-exam-help' } },
  { label: 'PMP Exam Help', to: { name: 'pmp-exam-help' } },
  { label: 'Online Class Support', to: { name: 'online-class' } },
  { label: 'Our Blog', to: { name: 'blog' } },
]
