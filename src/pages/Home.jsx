import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, CheckCircle2, Quote, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import StatCounter from '../components/StatCounter'
import ProductCard from '../components/ProductCard'
import ContactSection from '../components/ContactSection'
import { features, gallery, industries, process, products, services, stats, testimonials } from '../data/siteData'

import HeroCarousel from '../components/HeroCarousel'

function AboutPreview() {
  return (
    <section className="section-space overflow-hidden">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="absolute -left-8 -top-8 h-44 w-44 rounded-full bg-gold-light/40 blur-3xl" />
          <div className="relative grid grid-cols-[1fr_.68fr] gap-4">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=85" alt="Textile machinery in operation" className="h-[430px] w-full rounded-[2rem] object-cover shadow-soft sm:h-[540px]" loading="lazy" />
            <div className="flex flex-col gap-4 pt-12">
              <img src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=700&q=85" alt="Detailed woven fabric" className="h-48 w-full rounded-3xl object-cover sm:h-60" loading="lazy" />
              <div className="rounded-3xl bg-gold p-5 text-ink sm:p-7"><p className="font-display text-3xl font-extrabold sm:text-4xl">3 Cities</p><p className="mt-1 text-xs font-bold uppercase tracking-wider">Surat • Delhi • Jaipur</p></div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={.12}>
          <SectionHeading eyebrow="Built on relationships" title="Textile trade, made more direct and dependable." text="Krishna Madhav Agency is a textile commission agency with offices in Surat, Delhi and Jaipur. Led by Mahendra Bhai and Ramavtar Sharma, we deal in sarees, lehengas, suits, readymade garments and garments." />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5"><span className="text-xs font-bold uppercase tracking-wider text-gold-dark">Our role</span><p className="mt-2 text-sm leading-6 text-slate-600">Represent textile trade requirements with clear, responsive coordination.</p></div>
            <div className="rounded-2xl border border-slate-200 p-5"><span className="text-xs font-bold uppercase tracking-wider text-gold-dark">Our presence</span><p className="mt-2 text-sm leading-6 text-slate-600">Local access across the key textile markets of Surat, Delhi and Jaipur.</p></div>
          </div>
          <Link to="/about" className="btn-secondary mt-8">Our story <ArrowRight size={17} /></Link>
        </Reveal>
      </div>
    </section>
  )
}

function ServicesPreview() {
  return (
    <section className="section-space bg-mist">
      <div className="container-site">
        <Reveal><SectionHeading eyebrow="What we do" title="A capable partner across the entire fabric journey." text="From the first brief to the final dispatch, we bring market intelligence and calm coordination to every stage." align="center" /></Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }, i) => <Reveal key={title} delay={(i % 3) * .07}><div className="group h-full rounded-3xl border border-slate-200/80 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-gold-light hover:shadow-soft"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold-light/20 text-gold-dark transition group-hover:bg-gold group-hover:text-ink"><Icon size={22} /></span><h3 className="mt-6 font-display text-xl font-bold text-ink">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{text}</p><Link to="/services" className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-ink">Learn more <ArrowUpRight size={15} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" /></Link></div></Reveal>)}
        </div>
      </div>
    </section>
  )
}

function ProductsPreview() {
  return (
    <section className="section-space">
      <div className="container-site">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"><Reveal><SectionHeading eyebrow="Product portfolio" title="Categories for every market." text="Focused trade support across traditional, occasion and readymade garment categories." /></Reveal><Reveal delay={.1}><Link to="/products" className="btn-secondary">View all categories <ArrowRight size={17} /></Link></Reveal></div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{products.slice(0, 4).map((product, i) => <ProductCard key={product.title} product={product} index={i} />)}</div>
      </div>
    </section>
  )
}

function WhyUs() {
  return (
    <section className="section-space relative overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-weave bg-[size:32px_32px]" />
      <div className="container-site relative">
        <Reveal><SectionHeading eyebrow="The Krishna Madhav advantage" title="Direct communication across three textile markets." text="A professional commission agency approach with focused categories, personal contact and responsive trade coordination." light /></Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }, i) => <Reveal key={title} delay={(i % 3) * .06}><div className="group h-full bg-ink/85 p-7 transition hover:bg-white/[.07] sm:p-8"><Icon size={23} className="text-gold" /><h3 className="mt-5 font-display text-lg font-bold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{text}</p></div></Reveal>)}
        </div>
      </div>
    </section>
  )
}

function Industries() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-site"><Reveal><SectionHeading eyebrow="Who we work with" title="Serving the textile and garment trade." align="center" /></Reveal><div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-5">{industries.map(({ icon: Icon, title }, i) => <Reveal key={title} delay={i * .05}><div className="group flex min-h-36 flex-col items-center justify-center rounded-2xl border border-slate-200 p-5 text-center transition hover:-translate-y-1 hover:border-gold hover:shadow-card"><Icon size={24} className="text-gold-dark transition group-hover:scale-110" /><h3 className="mt-4 text-sm font-bold text-ink">{title}</h3></div></Reveal>)}</div></div>
    </section>
  )
}

function Process() {
  return (
    <section className="section-space bg-cream">
      <div className="container-site"><Reveal><SectionHeading eyebrow="How it works" title="One clear path from brief to delivery." text="A considered, accountable process that keeps everyone aligned." align="center" /></Reveal>
        <div className="mt-14 overflow-x-auto pb-3 hide-scrollbar"><div className="relative grid min-w-[1050px] grid-cols-6 gap-5"><div className="absolute left-[8%] right-[8%] top-7 h-px bg-gold" />{process.map((item, i) => <Reveal key={item.step} delay={i * .06}><div className="relative text-center"><span className="relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-full border-4 border-cream bg-ink font-display text-xs font-bold text-white shadow-lg">{item.step}</span><h3 className="mt-6 font-display text-base font-bold text-ink">{item.title}</h3><p className="mt-2 text-xs leading-5 text-slate-500">{item.text}</p>{i < process.length - 1 && <ArrowRight className="absolute -right-4 top-5 text-gold" size={16} />}</div></Reveal>)}</div></div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="section-space">
      <div className="container-site"><Reveal><SectionHeading eyebrow="Client stories" title="Trust earned in the follow-through." align="center" /></Reveal><div className="mt-12 grid gap-5 lg:grid-cols-3">{testimonials.map((item, i) => <Reveal key={item.name} delay={i * .08}><article className="relative h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-card sm:p-8"><Quote className="absolute right-7 top-7 text-gold-light/40" size={48} fill="currentColor" /><div className="flex gap-1 text-gold" aria-label="5 out of 5 stars">{Array.from({ length: 5 }).map((_, j) => <Star key={j} size={15} fill="currentColor" />)}</div><blockquote className="relative mt-7 text-base leading-7 text-slate-700">“{item.quote}”</blockquote><div className="mt-8 flex items-center gap-3 border-t border-slate-100 pt-6"><span className="grid h-11 w-11 place-items-center rounded-full bg-ink text-xs font-bold text-white">{item.initials}</span><div><p className="text-sm font-bold text-ink">{item.name}</p><p className="text-xs text-slate-500">{item.role}</p></div></div></article></Reveal>)}</div></div>
    </section>
  )
}

function Gallery() {
  return (
    <section className="pb-20 sm:pb-24 lg:pb-28">
      <div className="container-site"><Reveal><div className="flex items-end justify-between gap-6"><SectionHeading eyebrow="From the textile floor" title="Texture, craft and capability." /><p className="hidden max-w-xs text-right text-sm leading-6 text-slate-500 md:block">A glimpse into the materials, making and people behind every successful order.</p></div></Reveal><div className="mt-10 columns-2 gap-4 lg:columns-3">{gallery.map((image, i) => <Reveal key={image.src} delay={(i % 3) * .05} className="mb-4 break-inside-avoid"><div className="group overflow-hidden rounded-2xl bg-slate-100"><img src={image.src} alt={image.alt} loading="lazy" className={`w-full object-cover transition duration-700 group-hover:scale-105 ${image.size === 'tall' ? 'h-72 sm:h-[430px]' : 'h-44 sm:h-64'}`} /></div></Reveal>)}</div></div>
    </section>
  )
}

export default function Home() {
  return <motion.main id="main-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><SEO title="Textile Commission Agent" description="Krishna Madhav Agency deals in sarees, lehengas, suits, readymade garments and garments across Surat, Delhi and Jaipur." /><HeroCarousel /><AboutPreview /><ServicesPreview /><ProductsPreview /><WhyUs /><Industries /><Process /><Testimonials /><Gallery /><ContactSection compact /></motion.main>
}
