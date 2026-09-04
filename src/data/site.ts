import type { ContactMethod, NavigationItem } from '../types/content'

export const assets = {
  logo: '/assets/brand/habra-logo.png',
  logoSource: '/assets/brand/habra-logo-source.pdf',
  hero: '/assets/images/hero-grill.jpg',
  restaurantInterior: '/assets/images/restaurant-interior.jpg',
  aboutInterior: '/assets/images/open-grill.jpg',
} as const

export const navigation: NavigationItem[] = [
  { label: 'الرئيسية', to: '/', pagePath: '/' },
  { label: 'القائمة', to: '/menu', pagePath: '/menu' },
  { label: 'من نحن', to: '/about', pagePath: '/about' },
  { label: 'تواصل معنا', to: '/#contact', pagePath: '/#contact' },
]

export const siteContent = {
  hero: {
    eyebrow: 'هبرة',
    title: 'اللحم كما تحبّه.',
    description: 'نكهة واضحة. نار هادئة. طبق يستحق الانتظار.',
  },
  introduction: {
    title: 'هبرة',
    body: [
      'مائدة بسيطة تبدأ من نار الفحم وتنتهي بطعم يبقى في البال.',
      'أطباق واضحة، تحضير متأنٍ، ومساحة تجمع من نحب.',
    ],
  },
  restaurant: {
    eyebrow: 'على نار هادئة',
    title: 'التفاصيل البسيطة تصنع الفرق.',
    body: 'من الشواية إلى المائدة، نحافظ على بساطة الطبق ووضوح نكهته.',
  },
  about: {
    title: 'من نحن',
    lead: 'هبرة مطعم يضع الطعم في الواجهة.',
    body: [
      'قائمة مباشرة، أطباق سخية، ومكان بسيط يجمع الناس حول مائدة واحدة.',
      'نركّز على التحضير المتأنّي والتقديم الذي يترك للنكهة مساحتها.',
    ],
  },
} as const

// أضف القيم المعتمدة فقط. يتحول العنصر تلقائياً إلى رابط عند إضافة href.
export const contactConfig: {
  methods: ContactMethod[]
  address: string | null
  openingHours: string | null
} = {
  methods: [
    { id: 'phone', label: 'اتصل بنا', value: null, href: null },
    { id: 'whatsapp', label: 'واتساب', value: null, href: null },
    { id: 'instagram', label: 'إنستغرام', value: null, href: null },
    { id: 'location', label: 'الموقع', value: null, href: null },
  ],
  address: null,
  openingHours: null,
}
