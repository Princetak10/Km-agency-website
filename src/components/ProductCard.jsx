import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function ProductCard({ product, index = 0 }) {
  return (
    <Reveal delay={(index % 4) * .07}>
      <Link to="/contact" className="group block overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-card transition-all duration-300 hover:shadow-gold hover:-translate-y-1">
        <div className="relative h-[400px] w-full overflow-hidden sm:h-[450px]">
          <img src={product.image} alt={product.title} loading="lazy" className="h-full w-full object-cover object-center transition duration-1000 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
        </div>
        <div className="flex flex-col items-start p-8 sm:p-10 gap-6">
          <div><h3 className="font-display text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-ink leading-tight">{product.title}</h3><p className="mt-3 text-[14px] sm:text-[16px] font-semibold uppercase tracking-wider text-gray-500">{product.type}</p></div>
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-bold text-ink transition duration-300 group-hover:border-gold group-hover:text-gold-dark group-hover:shadow-card">Enquire Now <ArrowUpRight size={16} /></span>
        </div>
      </Link>
    </Reveal>
  )
}
