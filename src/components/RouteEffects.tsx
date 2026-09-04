import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const titles: Record<string, string> = {
  '/': 'هبرة | الرئيسية',
  '/menu': 'القائمة | هبرة',
  '/about': 'من نحن | هبرة',
}

export function RouteEffects() {
  const location = useLocation()

  useEffect(() => {
    document.title = titles[location.pathname] ?? 'هبرة'

    if (location.hash) {
      window.requestAnimationFrame(() => {
        document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth' })
      })
      return
    }

    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.hash, location.pathname])

  return null
}
