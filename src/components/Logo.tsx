import { assets } from '../data/site'

type LogoProps = {
  className?: string
  eager?: boolean
}

export function Logo({ className = '', eager = false }: LogoProps) {
  return (
    <img
      className={className}
      src={assets.logo}
      alt="شعار هبرة"
      width="1254"
      height="1254"
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  )
}
