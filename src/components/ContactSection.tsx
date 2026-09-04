import { contactConfig } from '../data/site'
import { Reveal } from './Reveal'

const contactMarks = {
  phone: 'هـ',
  whatsapp: 'و',
  instagram: 'إ',
  location: 'م',
} as const

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-white/10 bg-neutral-950 py-24 sm:py-32">
      <div className="site-container">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <h2 className="section-title">تواصل معنا</h2>
              <p className="mt-5 max-w-md text-base leading-8 text-neutral-400">
                اختر وسيلة التواصل المناسبة لك.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
              {contactConfig.methods.map((method) => {
                const content = (
                  <>
                    <span className="flex h-9 w-9 items-center justify-center border border-habra-red/60 text-sm font-bold text-habra-red">
                      {contactMarks[method.id]}
                    </span>
                    <span>
                      <span className="block font-semibold text-white">{method.label}</span>
                      <span className="mt-1 block text-xs text-neutral-500">
                        {method.value ?? '—'}
                      </span>
                    </span>
                  </>
                )

                return method.href ? (
                  <a
                    key={method.id}
                    href={method.href}
                    className="contact-method focus-ring"
                    target={method.id === 'phone' ? undefined : '_blank'}
                    rel={method.id === 'phone' ? undefined : 'noreferrer'}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={method.id} className="contact-method" aria-label={`${method.label}، التفاصيل غير متاحة`}>
                    {content}
                  </div>
                )
              })}
            </div>
          </div>

          {(contactConfig.address || contactConfig.openingHours) && (
            <dl className="mt-10 grid gap-6 border-t border-white/10 pt-8 text-sm sm:grid-cols-2">
              {contactConfig.address ? (
                <div>
                  <dt className="text-neutral-500">العنوان</dt>
                  <dd className="mt-2 text-white">{contactConfig.address}</dd>
                </div>
              ) : null}
              {contactConfig.openingHours ? (
                <div>
                  <dt className="text-neutral-500">ساعات العمل</dt>
                  <dd className="mt-2 text-white">{contactConfig.openingHours}</dd>
                </div>
              ) : null}
            </dl>
          )}
        </Reveal>
      </div>
    </section>
  )
}
