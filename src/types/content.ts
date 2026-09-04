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
}

export type MenuItem = {
  id: string
  categoryId: MenuCategory['id']
  name: string
  description: string
  price: string
  image: string
  imageAlt: string
  featured: boolean
}
