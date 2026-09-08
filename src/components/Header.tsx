import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { primaryNavigation } from '../data/site'
import { Logo } from './Logo'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-habra-black/95 backdrop-blur-sm">
      <div className="site-container flex h-20 items-center justify-between gap-8 sm:h-24">
        <Link
          to="/"
          aria-label="العودة إلى الرئيسية"
          className="focus-ring shrink-0"
          onClick={() => setIsOpen(false)}
        >
          <Logo className="h-14 w-14 bg-white object-contain sm:h-16 sm:w-16" eager />
        </Link>

        <nav aria-label="التنقل الرئيسي" className="hidden items-center gap-8 lg:absolute lg:left-1/2 lg:flex lg:-translate-x-1/2">
          {primaryNavigation.map((item) => {
            const active = item.pagePath === location.pathname
            return (
              <Link
                key={item.label}
                to={item.to}
                className={`nav-link focus-ring ${active ? 'is-active' : ''}`}
                aria-current={active ? 'page' : undefined}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <button
          type="button"
          className="menu-toggle focus-ring lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className={isOpen ? 'translate-y-[6px] rotate-45' : ''} />
          <span className={isOpen ? 'opacity-0' : ''} />
          <span className={isOpen ? '-translate-y-[6px] -rotate-45' : ''} />
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`mobile-nav lg:hidden ${isOpen ? 'is-open' : ''}`}
        aria-hidden={!isOpen}
      >
        <nav aria-label="التنقل عبر الهاتف" className="site-container flex flex-col py-3 sm:py-4">
          {primaryNavigation.map((item) => {
            const active = item.pagePath === location.pathname
            return (
              <Link
                key={item.label}
                to={item.to}
                className={`focus-ring border-b border-white/10 py-4 text-base font-semibold transition-colors last:border-b-0 hover:text-habra-red sm:py-5 ${active ? 'text-habra-red' : 'text-white'}`}
                aria-current={active ? 'page' : undefined}
                tabIndex={isOpen ? 0 : -1}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
