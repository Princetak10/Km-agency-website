import { motion } from 'framer-motion'
import { ChevronRight, Home } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PageHero({ eyebrow, title, text, image }) {
  return (
    <section className="relative mt-[76px] overflow-hidden bg-ink py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 opacity-20">
        <img src={image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
      </div>
      <div className="absolute inset-0 bg-weave bg-[size:30px_30px]" />
      <motion.div className="container-site relative z-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400"><Link to="/" className="transition hover:text-white"><Home size={14} /></Link><ChevronRight size={13} /><span className="text-gold">{eyebrow}</span></div>
        <h1 className="mt-7 max-w-4xl font-display text-4xl font-bold tracking-[-.045em] text-white sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">{text}</p>
      </motion.div>
    </section>
  )
}
