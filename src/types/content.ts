export type NavigationItem = {
  label: string
  to: string
  pagePath: string
}

export type ContactMethod = {
  id: 'phone' | 'whatsapp' | 'instagram' | 'location'
  label: string
  value: string | null
  href: string | null
}

export type MenuCategory = {
  id: string
  name: string
  subcategories?: MenuSubcategory[]
  items?: MenuItem[]
  presentation?: 'prepared' | 'fresh-meat'
}

export type MenuSubcategory = {
  id: string
  name: string
  items: MenuItem[]
}

export type MenuItem = {
  id: string
  name: string
  description?: string
  price?: string | null
  image?: string
  imageAlt?: string
  featured?: boolean
}
