import { Reveal } from '../components/Reveal'
import { menuCategories } from '../data/menu'
import type { MenuItem } from '../types/content'

function PreparedItems({ items, nested = false }: { items: MenuItem[]; nested?: boolean }) {
  return (
    <div className="mt-6 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article key={item.id} className="prepared-menu-item min-w-0 border-t border-white/10 py-7">
          <div className="mb-4 h-0.5 w-7 bg-habra-red" aria-hidden="true" />
          {nested ? (
            <h4 className="text-lg font-bold leading-8 text-white sm:text-xl">{item.name}</h4>
          ) : (
            <h3 className="text-lg font-bold leading-8 text-white sm:text-xl">{item.name}</h3>
          )}
          {item.description ? (
            <p className="mt-3 text-sm leading-8 text-neutral-400">{item.description}</p>
          ) : null}
        </article>
      ))}
    </div>
  )
}

export function MenuPage() {
  return (
    <>
      <section className="border-b border-white/10 py-20 sm:py-28">
        <div className="site-container">
          <p className="mb-4 text-sm font-semibold tracking-[0.12em] text-habra-red">اختر ما تحب</p>
          <h1 className="page-title">القائمة</h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-neutral-400 sm:text-lg">
            نكهات مباشرة وأطباق مصنوعة لتصل إلى المائدة كما يجب.
          </p>
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

      <div className="site-container py-20 sm:py-28">
        {menuCategories.map((category, categoryIndex) => (
          <section
            key={category.id}
            id={category.id}
            className={`scroll-mt-44 ${categoryIndex > 0 ? 'mt-24 border-t border-white/10 pt-20 sm:mt-32 sm:pt-24' : ''}`}
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
              <div className="mt-12 space-y-14 sm:mt-16 sm:space-y-20">
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
              <Reveal className="mt-12 sm:mt-16">
                <div className="border border-white/10 bg-neutral-950 px-6 py-2 sm:px-10 lg:px-12">
                  <div className="grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                    {category.items?.map((item) => (
                      <div key={item.id} className="fresh-meat-item flex min-w-0 items-center gap-4 border-t border-white/10 py-5">
                        <span className="h-2 w-2 shrink-0 bg-habra-red" aria-hidden="true" />
                        <p className="font-semibold leading-7 text-white">{item.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ) : (
              <Reveal className="mt-6 sm:mt-10">
                <PreparedItems items={category.items ?? []} />
              </Reveal>
            )}
          </section>
        ))}
      </div>
    </>
  )
}
