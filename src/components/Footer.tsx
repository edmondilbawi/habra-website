import { Link } from 'react-router-dom'
import { primaryNavigation } from '../data/site'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-habra-black py-10 sm:py-12">
      <div className="site-container">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center sm:gap-10">
          <Link to="/" aria-label="الرئيسية" className="focus-ring">
            <Logo className="h-16 w-16 bg-white object-contain sm:h-20 sm:w-20" />
          </Link>
          <nav aria-label="روابط التذييل" className="flex flex-wrap gap-x-6 gap-y-4 text-sm text-neutral-400">
            {primaryNavigation.map((item) => (
              <Link key={item.label} to={item.to} className="focus-ring transition-colors hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-neutral-600 sm:mt-10 sm:flex-row sm:justify-between sm:pt-7">
          <p>© {new Date().getFullYear()} هبرة</p>
          <p>تصميم وتطوير ILBATECH</p>
        </div>
      </div>
    </footer>
  )
}
