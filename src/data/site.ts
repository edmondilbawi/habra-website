import type { ContactMethod, NavigationItem } from '../types/content'

const assetBase = import.meta.env.BASE_URL

export const assets = {
  logo: `${assetBase}assets/brand/habra-logo.png`,
  logoSource: `${assetBase}assets/brand/habra-logo-source.pdf`,
  hero: `${assetBase}assets/images/hero-grill.jpg`,
  restaurantInterior: `${assetBase}assets/images/restaurant-interior.jpg`,
  contactHero: `${assetBase}assets/images/open-grill.jpg`,
} as const

export const primaryNavigation: NavigationItem[] = [
  { label: 'الرئيسية', to: '/', pagePath: '/' },
  { label: 'القائمة', to: '/menu', pagePath: '/menu' },
  { label: 'تواصل معنا', to: '/contact', pagePath: '/contact' },
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
      'نكهات مشوية بعناية، أطباق محضّرة لتُقدَّم كما يجب،',
      'وتجربة نريدها أن تبقى في الذاكرة.',
    ],
  },
  restaurant: {
    eyebrow: 'على نار هادئة',
    title: 'التفاصيل تصنع الفرق.',
    body: 'من الشواية إلى المائدة، نهتم بكل تفصيل في التحضير والتقديم والنكهة.',
  },
  contact: {
    title: 'تواصل معنا',
    description: 'اختر وسيلة التواصل المناسبة لك.',
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
    { id: 'location', label: 'العنوان', value: null, href: null },
  ],
  address: null,
  openingHours: null,
}
