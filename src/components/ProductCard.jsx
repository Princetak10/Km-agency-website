import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function ProductCard({ product, index = 0 }) {
  return (
    <Reveal delay={(index % 4) * .07}>
      <Link to="/contact" className="group block overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-card transition-all duration-300 hover:shadow-gold hover:-translate-y-1">
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          <img src={product.image} alt={product.title} loading="lazy" className="h-full w-full object-cover transition duration-1000 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
        </div>
        <div className="flex items-start justify-between p-8 sm:p-10 gap-6">
          <div><h3 className="font-display text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-ink leading-tight">{product.title}</h3><p className="mt-3 text-[14px] sm:text-[16px] font-semibold uppercase tracking-wider text-gray-500">{product.type}</p></div>
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-mist text-ink transition-all duration-300 group-hover:bg-gold group-hover:text-white group-hover:rotate-45"><ArrowUpRight size={22} /></span>
        </div>
      </Link>
    </Reveal>
  )
}
