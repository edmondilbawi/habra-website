import type { MenuItem } from '../types/content'

type FoodCardProps = {
  item: MenuItem
  showPrice?: boolean
}

export function FoodCard({ item, showPrice = false }: FoodCardProps) {
  return (
    <article className="food-card group">
      {item.image && item.imageAlt ? (
        <div className="aspect-[4/3] overflow-hidden bg-neutral-900">
          <img
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
            src={item.image}
            alt={item.imageAlt}
            width="1536"
            height="1024"
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : null}
      <div className="flex items-start justify-between gap-5 border-t border-white/10 pt-5">
        <div>
          <h3 className="text-lg font-bold text-white sm:text-xl">{item.name}</h3>
          {item.description ? (
            <p className="mt-2 text-sm leading-7 text-neutral-400">{item.description}</p>
          ) : null}
        </div>
        {showPrice && item.price ? (
          <span className="shrink-0 text-lg font-bold text-habra-red" aria-label={`السعر ${item.price}`}>
            {item.price}
          </span>
        ) : null}
      </div>
    </article>
  )
}
