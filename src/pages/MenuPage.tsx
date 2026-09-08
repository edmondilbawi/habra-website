import { Reveal } from '../components/Reveal'
import { menuCategories } from '../data/menu'
import type { MenuItem } from '../types/content'

function PreparedItems({ items, nested = false }: { items: MenuItem[]; nested?: boolean }) {
  return (
    <div className="mt-4 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article key={item.id} className="prepared-menu-item min-w-0 border-t border-white/10 py-5">
          <div className="mb-3 h-0.5 w-7 bg-habra-red" aria-hidden="true" />
          {nested ? (
            <h4 className="text-lg font-bold leading-8 text-white sm:text-xl">{item.name}</h4>
          ) : (
            <h3 className="text-lg font-bold leading-8 text-white sm:text-xl">{item.name}</h3>
          )}
          {item.description ? (
            <p className="mt-2 text-sm leading-7 text-neutral-400">{item.description}</p>
          ) : null}
        </article>
      ))}
    </div>
  )
}

export function MenuPage() {
  return (
    <>
      <section className="border-b border-white/10 py-10 sm:py-14 lg:py-16">
        <div className="site-container">
          <h1 className="page-title">القائمة</h1>
        </div>
      </section>

      <nav aria-label="أقسام القائمة" className="sticky top-20 z-30 border-b border-white/10 bg-habra-black/95 backdrop-blur-sm sm:top-24">
        <div className="site-container no-scrollbar flex flex-wrap gap-x-6 gap-y-3 py-5 sm:flex-nowrap sm:gap-8 sm:overflow-x-auto">
          {menuCategories.map((category) => (
            <a key={category.id} href={`#${category.id}`} className="category-link focus-ring">
              {category.name}
            </a>
          ))}
        </div>
      </nav>

      <div className="site-container py-12 sm:py-16 lg:py-20">
        {menuCategories.map((category, categoryIndex) => (
          <section
            key={category.id}
            id={category.id}
            className={`scroll-mt-52 sm:scroll-mt-44 ${categoryIndex > 0 ? 'mt-16 border-t border-white/10 pt-14 sm:mt-20 sm:pt-16' : ''}`}
            aria-labelledby={`${category.id}-title`}
          >
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 shrink-0 bg-habra-red" aria-hidden="true" />
                <h2 id={`${category.id}-title`} className="text-3xl font-black leading-relaxed text-white sm:text-4xl">
                  {category.name}
                </h2>
              </div>
            </Reveal>

            {category.subcategories ? (
              <div className="mt-8 space-y-8 sm:mt-10 sm:space-y-10">
                {category.subcategories.map((subcategory) => (
                  <Reveal key={subcategory.id}>
                    <section aria-labelledby={`${subcategory.id}-title`}>
                      <h3
                        id={`${subcategory.id}-title`}
                        className="menu-subcategory-title text-xl font-bold text-habra-red sm:text-2xl"
                      >
                        {subcategory.name}
                      </h3>
                      <PreparedItems items={subcategory.items} nested />
                    </section>
                  </Reveal>
                ))}
              </div>
            ) : category.presentation === 'fresh-meat' ? (
              <Reveal className="mt-8 sm:mt-10">
                <div className="border border-white/10 bg-neutral-950 px-6 py-1 sm:px-10 lg:px-12">
                  <div className="grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                    {category.items?.map((item) => (
                      <div key={item.id} className="fresh-meat-item flex min-w-0 items-center gap-4 border-t border-white/10 py-4">
                        <span className="h-2 w-2 shrink-0 bg-habra-red" aria-hidden="true" />
                        <p className="font-semibold leading-7 text-white">{item.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ) : (
              <Reveal className="mt-2 sm:mt-4">
                <PreparedItems items={category.items ?? []} />
              </Reveal>
            )}
          </section>
        ))}
      </div>
    </>
  )
}
