import { ContactSection } from '../components/ContactSection'
import { Reveal } from '../components/Reveal'
import { assets, siteContent } from '../data/site'

export function AboutPage() {
  return (
    <>
      <section className="relative isolate flex min-h-[52svh] items-end overflow-hidden border-b border-white/10 sm:min-h-[58svh]">
        <img
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          src={assets.aboutInterior}
          alt="شواية فحم مفتوحة داخل مطعم داكن"
          width="1536"
          height="1024"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 -z-10 bg-black/60" />
        <div className="site-container w-full py-12 sm:py-24">
          <p className="eyebrow-label mb-4">هبرة</p>
          <h1 className="page-title">{siteContent.about.title}</h1>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32">
        <div className="site-container">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
              <p className="eyebrow-label">طعم في الواجهة</p>
              <div className="max-w-3xl">
                <h2 className="editorial-title">
                  {siteContent.about.lead}
                </h2>
                <div className="mt-6 space-y-4 text-base leading-9 text-neutral-300 sm:mt-8 sm:text-lg">
                  {siteContent.about.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
