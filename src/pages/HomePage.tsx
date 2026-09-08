import { Link } from 'react-router-dom'
import { ContactSection } from '../components/ContactSection'
import { FoodCard } from '../components/FoodCard'
import { Logo } from '../components/Logo'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { featuredMenuItems } from '../data/menu'
import { assets, siteContent } from '../data/site'

export function HomePage() {
  return (
    <>
      <section className="relative isolate flex min-h-[calc(100svh-5rem)] items-end overflow-hidden sm:min-h-[calc(100svh-6rem)]">
        <img
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[42%_center]"
          src={assets.hero}
          alt="لحوم مشوية على الفحم"
          width="1536"
          height="1024"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 -z-10 bg-black/60" />
        <div className="site-container w-full py-16 sm:py-24 lg:py-28">
          <div className="hero-content max-w-2xl">
            <Logo className="mb-8 h-28 w-28 bg-white object-contain shadow-2xl sm:h-36 sm:w-36" eager />
            <p className="mb-4 text-sm font-bold tracking-[0.16em] text-habra-red">
              {siteContent.hero.eyebrow}
            </p>
            <h1 className="max-w-xl text-4xl font-black leading-[1.35] text-white sm:text-6xl lg:text-7xl">
              {siteContent.hero.title}
            </h1>
            <p className="mt-5 max-w-lg text-base leading-8 text-neutral-200 sm:text-lg">
              {siteContent.hero.description}
            </p>
            <div className="mt-9 flex">
              <Link to="/menu" className="button-primary focus-ring">
                استعرض القائمة
                <span aria-hidden="true">←</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-24">
        <div className="site-container">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
              <div className="lg:col-start-2">
                <h2 className="section-title">{siteContent.introduction.title}</h2>
                <div className="mt-6 max-w-3xl space-y-2 text-lg leading-9 text-neutral-300 sm:text-xl sm:leading-10">
                  {siteContent.introduction.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/10 bg-neutral-950 py-16 sm:py-20 lg:py-24">
        <div className="site-container">
          <Reveal>
            <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
              <SectionHeading title="من قائمتنا" />
              <Link to="/menu" className="text-link focus-ring shrink-0">
                استعرض القائمة
                <span aria-hidden="true">←</span>
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {featuredMenuItems.map((item) => (
              <Reveal key={item.id}>
                <FoodCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="site-container">
          <Reveal>
            <div className="grid overflow-hidden border border-white/10 bg-neutral-950 lg:grid-cols-[1.3fr_0.7fr]">
              <div className="min-h-[320px] overflow-hidden lg:min-h-[480px]">
                <img
                  className="h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.02]"
                  src={assets.restaurantInterior}
                  alt="مساحة مطعم داكنة مع شواية فحم مفتوحة"
                  width="1536"
                  height="1024"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                <SectionHeading
                  eyebrow={siteContent.restaurant.eyebrow}
                  title={siteContent.restaurant.title}
                  description={siteContent.restaurant.body}
                />
                <Link to="/about" className="text-link focus-ring mt-8 w-fit">
                  من نحن
                  <span aria-hidden="true">←</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
