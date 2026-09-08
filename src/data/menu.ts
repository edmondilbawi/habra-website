import type { MenuCategory, MenuItem } from '../types/content'

export const menuCategories: MenuCategory[] = [
  {
    id: 'lamb-sandwiches',
    name: 'ساندويش لحم غنم',
    presentation: 'prepared',
    subcategories: [
      {
        id: 'arayes-sandwiches',
        name: 'ساندويش عرايس',
        items: [
          {
            id: 'arayes-kofta',
            name: 'كفتة',
            description: 'كفتة غنم - كريم ثوم - بندورة - مخلل - تقدّم مع البطاطا المقلية',
            image: '/assets/images/kofta-wrap.jpg',
            imageAlt: 'ساندويش كفتة مشوية مع البطاطا',
            featured: true,
          },
          {
            id: 'arayes-sausage',
            name: 'نقانق',
            description: 'نقانق غنم - عصرة ليمون - مخلل - تقدّم مع البطاطا المقلية',
          },
          {
            id: 'arayes-soujouk',
            name: 'سجق',
            description: 'سجق غنم - كريم ثوم - بندورة - مخلل - تقدّم مع البطاطا المقلية',
          },
          {
            id: 'raw-habra',
            name: 'هبرة نية',
            description: 'هبرة غنم - نعناع - زيت زيتون',
          },
        ],
      },
      {
        id: 'lamb-sandwiches-standard',
        name: 'ساندويش',
        items: [
          {
            id: 'lamb-cubes',
            name: 'شقف',
            description: 'شقف غنم - طرطور - بيواظ - بندورة - مخلل - تقدّم مع البطاطا المقلية',
          },
          {
            id: 'lamb-kebab',
            name: 'كباب',
            description: 'كباب غنم - طرطور - بندورة - مخلل - تقدّم مع البطاطا المقلية',
          },
          {
            id: 'pepper-kebab',
            name: 'كباب فليفلة',
            description: 'كباب غنم مع الفليفلة - كريم ثوم - مخلل - تقدّم مع البطاطا المقلية',
            image: '/assets/images/hero-grill.jpg',
            imageAlt: 'أسياخ لحوم متنوعة فوق الفحم',
            featured: true,
          },
        ],
      },
      {
        id: 'burgers',
        name: 'برغر',
        items: [
          {
            id: 'classic-smoked-burger',
            name: 'برغر كلاسيك مدخّن',
            description: 'قرص لحم غنم - صلصة كلاسيكية خاصة - خس - بندورة - مخلل - تقدّم مع البطاطا المقلية',
            image: '/assets/images/grilled-burger.jpg',
            imageAlt: 'برغر لحم مشوي مع البطاطا',
            featured: true,
          },
          {
            id: 'cheeseburger',
            name: 'تشيز برغر',
            description: 'قرص لحم غنم - صلصة كلاسيكية خاصة - جبنة شيدر - خس - تقدّم مع البطاطا المقلية',
          },
        ],
      },
    ],
  },
  {
    id: 'chicken-sandwiches',
    name: 'ساندويش دجاج',
    presentation: 'prepared',
    items: [
      {
        id: 'red-shish-tawook',
        name: 'شيش طاووق أحمر',
        description: 'شيش طاووق أحمر - كريم ثوم - مخلل - تقدّم مع البطاطا المقلية',
        image: '/assets/images/mixed-grill.jpg',
        imageAlt: 'طبق مشاوي متنوعة مع قطع دجاج',
        featured: true,
      },
      {
        id: 'white-shish-tawook',
        name: 'شيش طاووق أبيض',
        description: 'شيش طاووق أبيض - كريم ثوم - مخلل - تقدّم مع البطاطا المقلية',
      },
      {
        id: 'mustard-honey-shish-tawook',
        name: 'شيش طاووق بالخردل والعسل',
        description: 'شيش طاووق بالخردل والعسل - صلصة خاصة - مخلل - تقدّم مع البطاطا المقلية',
      },
      {
        id: 'classic-chicken',
        name: 'دجاج كلاسيك',
        description: 'صدر دجاج مشوي - صلصة كلاسيكية خاصة - مخلل - تقدّم مع البطاطا المقلية',
      },
    ],
  },
  {
    id: 'salads',
    name: 'السلطات',
    presentation: 'prepared',
    items: [
      {
        id: 'oriental-salad',
        name: 'سلطة شرقية',
        description: 'خس - بندورة - خيار',
      },
      {
        id: 'arugula-salad',
        name: 'سلطة جرجير',
        description: 'جرجير - بندورة كرزية - فطر فريش',
      },
    ],
  },
  {
    id: 'fresh-lamb',
    name: 'لحوم الغنم الطازجة',
    presentation: 'fresh-meat',
    items: [
      { id: 'fresh-head-sparrow', name: 'رأس العصفور' },
      { id: 'fresh-cooking-cubes', name: 'شقف للطبخ' },
      { id: 'fresh-grilling-cubes', name: 'شقف للشوي' },
      { id: 'fresh-shanks', name: 'موزات' },
      { id: 'fresh-habra', name: 'هبرة' },
      { id: 'fresh-minced-meat', name: 'لحمة مفرومة' },
      { id: 'fresh-matleh', name: 'متلة' },
      { id: 'fresh-kibbeh-habra', name: 'هبرة كبة' },
      { id: 'fresh-kebab', name: 'كباب' },
      { id: 'fresh-basmashkat', name: 'باسمشكات' },
      { id: 'fresh-shahbayat', name: 'شهبايات' },
      { id: 'fresh-fat', name: 'شحمة' },
      { id: 'fresh-tail-fat', name: 'لية' },
      { id: 'fresh-marrow', name: 'نخاعات' },
      { id: 'fresh-chains', name: 'سناسل' },
      { id: 'fresh-lamb-testicles', name: 'بيض غنم' },
      { id: 'fresh-raw-kibbeh', name: 'كبة نية' },
    ],
  },
]

export const menuItems: MenuItem[] = menuCategories.flatMap((category) => [
  ...(category.items ?? []),
  ...(category.subcategories?.flatMap((subcategory) => subcategory.items) ?? []),
])

export const featuredMenuItems = menuItems.filter((item) => item.featured)
