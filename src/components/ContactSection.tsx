import { contactConfig, siteContent } from '../data/site'
import type { ContactMethod } from '../types/content'
import { Reveal } from './Reveal'

function ContactIcon({ id }: Pick<ContactMethod, 'id'>) {
  if (id === 'phone') {
    return (
      <svg
        aria-hidden="true"
        className="h-[1.35rem] w-[1.35rem]"
        fill="none"
        focusable="false"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
      </svg>
    )
  }

  if (id === 'whatsapp') {
    return (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="currentColor"
        focusable="false"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
    )
  }

  if (id === 'instagram') {
    return (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="currentColor"
        focusable="false"
        viewBox="0 0 24 24"
      >
        <path d="M7.03.084c-1.277.06-2.149.264-2.911.563-.789.308-1.458.72-2.123 1.388C1.33 2.703.92 3.372.616 4.162.32 4.926.12 5.8.064 7.076.007 8.354-.005 8.765.001 12.023c.006 3.259.021 3.667.083 4.947.061 1.277.264 2.149.563 2.911.308.789.72 1.458 1.388 2.123.668.665 1.336 1.074 2.128 1.38.763.295 1.636.496 2.913.552 1.277.056 1.688.069 4.946.063 3.258-.006 3.668-.021 4.948-.081s2.147-.265 2.91-.563c.789-.308 1.458-.72 2.123-1.388.665-.668 1.074-1.338 1.38-2.128.295-.763.496-1.636.551-2.912.056-1.281.07-1.69.063-4.948-.006-3.258-.02-3.667-.081-4.947-.061-1.28-.264-2.148-.563-2.912-.309-.789-.72-1.457-1.388-2.123C21.298 1.33 20.628.921 19.838.617 19.074.321 18.202.12 16.924.065 15.647.009 15.236-.005 11.977.001 8.718.008 8.31.022 7.03.084m.14 21.693c-1.17-.051-1.805-.245-2.228-.408-.561-.216-.96-.477-1.382-.895-.422-.418-.681-.819-.9-1.378-.164-.423-.362-1.058-.417-2.228-.06-1.265-.072-1.644-.079-4.848-.007-3.204.005-3.583.061-4.848.05-1.169.245-1.805.408-2.228.216-.561.476-.96.895-1.382.419-.422.818-.681 1.378-.9.423-.165 1.058-.361 2.227-.417 1.265-.06 1.645-.072 4.848-.079 3.203-.007 3.584.005 4.85.061 1.168.051 1.805.244 2.228.408.56.216.96.475 1.381.895.422.419.682.818.9 1.379.166.422.362 1.056.417 2.226.06 1.266.074 1.645.08 4.848.006 3.203-.006 3.584-.061 4.848-.051 1.17-.245 1.806-.408 2.23-.216.56-.477.96-.896 1.381-.419.422-.818.681-1.378.9-.422.165-1.058.362-2.226.417-1.266.06-1.645.072-4.85.079-3.204.007-3.582-.006-4.848-.061M16.953 5.586a1.44 1.44 0 1 0 1.437-1.442 1.44 1.44 0 0 0-1.437 1.442M5.839 12.012a6.162 6.162 0 1 0 12.323-.024 6.162 6.162 0 0 0-12.323.024M8 12.008A4 4 0 1 1 12.008 16 4 4 0 0 1 8 12.008" />
      </svg>
    )
  }

  return (
    <svg
      aria-hidden="true"
      className="h-[1.35rem] w-[1.35rem]"
      fill="none"
      focusable="false"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-white/10 bg-neutral-950 py-14 sm:py-20 lg:py-24">
      <div className="site-container">
        <Reveal>
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <h2 className="section-title">{siteContent.contact.title}</h2>
              <p className="mt-5 max-w-md text-base leading-8 text-neutral-400">
                {siteContent.contact.description}
              </p>
            </div>

            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
              {contactConfig.methods.map((method) => {
                const content = (
                  <>
                    <span className="flex h-9 w-9 items-center justify-center border border-habra-red/60 text-sm font-bold text-habra-red">
                      <ContactIcon id={method.id} />
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
