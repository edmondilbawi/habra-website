type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'start' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'start',
}: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow ? (
        <p className="mb-4 text-sm font-semibold tracking-[0.12em] text-habra-red">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="section-title">{title}</h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-neutral-400 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
