import { ContactSection } from '../components/ContactSection'
import { assets, siteContent } from '../data/site'

export function ContactPage() {
  return (
    <>
      <section className="relative isolate flex min-h-[52svh] items-end overflow-hidden border-b border-white/10 sm:min-h-[58svh]">
        <img
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          src={assets.contactHero}
          alt="شواية فحم مفتوحة داخل مطعم داكن"
          width="1536"
          height="1024"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 -z-10 bg-black/60" />
        <div className="site-container w-full py-12 sm:py-24">
          <p className="eyebrow-label mb-4">هبرة</p>
          <h1 className="page-title">{siteContent.contact.title}</h1>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
