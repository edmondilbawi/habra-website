import type { MenuCategory, MenuItem } from '../types/content'

// جميع عناصر القائمة والأسعار والصور مؤقتة، ومجمعة هنا لسهولة استبدالها.
export const menuCategories: MenuCategory[] = [
  { id: 'grills', name: 'المشاوي' },
  { id: 'sandwiches', name: 'السندويشات' },
  { id: 'starters', name: 'المقبلات' },
]

export const menuItems: MenuItem[] = [
  {
    id: 'mixed-grill',
    categoryId: 'grills',
    name: 'مشاوي مشكلة',
    description: 'تشكيلة لحوم ودجاج مشوية مع بصل وبندورة.',
    price: '١٦',
    image: '/assets/images/mixed-grill.jpg',
    imageAlt: 'طبق مشاوي مشكلة على طبق داكن',
    featured: true,
  },
  {
    id: 'meat-skewers',
    categoryId: 'grills',
    name: 'شقف مشوية',
    description: 'قطع لحم مشوية على الفحم بتتبيلة خفيفة.',
    price: '١٤',
    image: '/assets/images/hero-grill.jpg',
    imageAlt: 'أسياخ لحم مشوية فوق الفحم',
    featured: false,
  },
  {
    id: 'kofta-plate',
    categoryId: 'grills',
    name: 'كفتة على الفحم',
    description: 'كفتة مشوية مع خضار موسمية.',
    price: '١٢',
    image: '/assets/images/mixed-grill.jpg',
    imageAlt: 'كفتة ولحوم مشوية مع خضار',
    featured: false,
  },
  {
    id: 'habra-burger',
    categoryId: 'sandwiches',
    name: 'برغر هبرة',
    description: 'لحم مشوي، جبنة، خضار طازجة، وبطاطا.',
    price: '١٠',
    image: '/assets/images/grilled-burger.jpg',
    imageAlt: 'برغر لحم مشوي مع بطاطا',
    featured: true,
  },
  {
    id: 'kofta-wrap',
    categoryId: 'sandwiches',
    name: 'ساندويش كفتة',
    description: 'كفتة مشوية، بندورة، بصل، وبقدونس.',
    price: '٨',
    image: '/assets/images/kofta-wrap.jpg',
    imageAlt: 'ساندويش كفتة مشوية مقسوم إلى نصفين',
    featured: true,
  },
  {
    id: 'grilled-meat-wrap',
    categoryId: 'sandwiches',
    name: 'ساندويش لحم مشوي',
    description: 'شرائح لحم مشوية مع خضار وصلصة خفيفة.',
    price: '٩',
    image: '/assets/images/kofta-wrap.jpg',
    imageAlt: 'ساندويش لحم مشوي على طبق داكن',
    featured: false,
  },
  {
    id: 'hummus-meat',
    categoryId: 'starters',
    name: 'حمص باللحمة',
    description: 'حمص ناعم مع قطع لحم محمّرة وصنوبر.',
    price: '٧',
    image: '/assets/images/hummus-beef.jpg',
    imageAlt: 'طبق حمص ناعم مغطى بقطع اللحم',
    featured: true,
  },
  {
    id: 'fries',
    categoryId: 'starters',
    name: 'بطاطا مقلية',
    description: 'بطاطا مقرمشة تقدم ساخنة.',
    price: '٤',
    image: '/assets/images/grilled-burger.jpg',
    imageAlt: 'بطاطا مقلية ذهبية على سطح داكن',
    featured: false,
  },
]

export const featuredMenuItems = menuItems.filter((item) => item.featured)
