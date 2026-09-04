import { FoodCard } from '../components/FoodCard'
import { Reveal } from '../components/Reveal'
import { menuCategories, menuItems } from '../data/menu'

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
        <div className="site-container no-scrollbar flex gap-8 overflow-x-auto py-5">
          {menuCategories.map((category) => (
            <a key={category.id} href={`#${category.id}`} className="category-link focus-ring">
              {category.name}
            </a>
          ))}
        </div>
      </nav>

      <div className="site-container py-20 sm:py-28">
        {menuCategories.map((category, categoryIndex) => {
          const items = menuItems.filter((item) => item.categoryId === category.id)
          return (
            <section
              key={category.id}
              id={category.id}
              className={`scroll-mt-44 ${categoryIndex > 0 ? 'mt-24 border-t border-white/10 pt-20 sm:mt-32 sm:pt-24' : ''}`}
              aria-labelledby={`${category.id}-title`}
            >
              <Reveal>
                <div className="flex items-center gap-4">
                  <span className="h-px w-10 bg-habra-red" aria-hidden="true" />
                  <h2 id={`${category.id}-title`} className="text-3xl font-black text-white sm:text-4xl">
                    {category.name}
                  </h2>
                </div>
              </Reveal>
              <div className="mt-10 grid gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                  <Reveal key={item.id}>
                    <FoodCard item={item} showPrice />
                  </Reveal>
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </>
  )
}
