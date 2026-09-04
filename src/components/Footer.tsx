import { Link } from 'react-router-dom'
import { footerNavigation } from '../data/site'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-habra-black py-12">
      <div className="site-container">
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-center">
          <Link to="/" aria-label="الرئيسية" className="focus-ring">
            <Logo className="h-20 w-20 bg-white object-contain" />
          </Link>
          <nav aria-label="روابط التذييل" className="flex flex-wrap gap-x-6 gap-y-4 text-sm text-neutral-400">
            {footerNavigation.map((item) => (
              <Link key={item.label} to={item.to} className="focus-ring transition-colors hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-neutral-600 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} هبرة</p>
          <p>تصميم وتطوير ILBATECH</p>
        </div>
      </div>
    </footer>
  )
}
