import { motion } from 'framer-motion'
import { ArrowRight, SlidersHorizontal } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import ProductCard from '../components/ProductCard'
import SectionHeading from '../components/SectionHeading'
import { products } from '../data/siteData'

export default function Products() {
  return <motion.main id="main-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <SEO title="Products" description="Krishna Madhav Agency deals in sarees, lehengas, suits, readymade garments and garments." />
    <PageHero eyebrow="Products" title="Focused textile and garment categories for active markets." text="Explore the categories handled by Krishna Madhav Agency across Surat, Delhi and Jaipur." image="https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=1800&q=85" />
    <section className="section-space"><div className="container-site"><div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"><Reveal><SectionHeading eyebrow="Our range" title="Sarees, lehengas, suits and garments." text="Commission agency support across the product categories listed in the company profile." /></Reveal><Reveal delay={.1}><div className="inline-flex items-center gap-2 rounded-full bg-gold-light/20 px-4 py-2 text-xs font-bold text-gold-dark"><SlidersHorizontal size={15} /> Trade enquiries welcome</div></Reveal></div><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{products.map((product, i) => <ProductCard key={product.title} product={product} index={i} />)}</div></div></section>
    <section className="section-space bg-mist"><div className="container-site grid items-center gap-12 lg:grid-cols-2"><Reveal><div className="grid grid-cols-2 gap-4"><img src="https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?auto=format&fit=crop&w=800&q=85" alt="Detailed textile material" className="h-80 w-full rounded-3xl object-cover" /><img src="https://images.unsplash.com/photo-1598030304671-5aa1d6f21128?auto=format&fit=crop&w=800&q=85" alt="Colourful textile rolls" className="mt-10 h-80 w-full rounded-3xl object-cover" /></div></Reveal><Reveal delay={.1}><SectionHeading eyebrow="Trade enquiries" title="Tell us the category and market you need." text="Share your product category, expected quantity and preferred market. Our team will respond through the most relevant office and contact." /><div className="mt-8 grid grid-cols-2 gap-4">{['Saree enquiries', 'Lehenga enquiries', 'Suit enquiries', 'Garment enquiries'].map(x => <div key={x} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-bold text-ink">{x}</div>)}</div><Link to="/contact" className="btn-primary mt-8">Send a trade enquiry <ArrowRight size={17} /></Link></Reveal></div></section>
  </motion.main>
}
