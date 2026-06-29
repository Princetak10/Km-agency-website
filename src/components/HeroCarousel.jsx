import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&w=2000&q=88',
    title: 'Bridal Lehengas',
    subtitle: 'Exquisite craftsmanship for your special day.',
    description: 'Discover our premium collection of bridal wear featuring intricate embroidery and luxurious fabrics.',
    link: '/products',
  },
  {
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=2000&q=88',
    title: 'Designer Sarees',
    subtitle: 'Elegance woven into every thread.',
    description: 'Explore an exclusive range of traditional and contemporary sarees crafted for elegance.',
    link: '/products',
  },
  {
    image: 'https://images.unsplash.com/photo-1589465885857-44edb59bbff2?auto=format&fit=crop&w=2000&q=88',
    title: 'Premium Silk',
    subtitle: 'Authentic silk fabrics and sarees.',
    description: 'Experience the richness of pure silk sourced directly from the finest weavers.',
    link: '/products',
  },
  {
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=2000&q=88',
    title: 'Designer Suits',
    subtitle: 'Ready-to-wear & unstitched elegance.',
    description: 'A curated selection of salwar suits and dress materials for every occasion.',
    link: '/products',
  },
  {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2000&q=88',
    title: 'Textile Excellence',
    subtitle: 'From loom to luxury.',
    description: 'Partner with us for high-quality fabric rolls, manufacturing, and wholesale distribution.',
    link: '/about',
  }
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative mt-[90px] min-h-[calc(100svh-90px)] overflow-hidden bg-ink">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent z-10" />
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-weave bg-[size:36px_36px] z-20 opacity-30" />

      <div className="container-site relative z-30 flex min-h-[calc(100svh-90px)] flex-col justify-center py-20 lg:py-32">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md shadow-sm mb-4">
                <span className="h-2 w-2 animate-pulse rounded-full bg-gold" /> {slides[current].subtitle}
              </div>
              
              <h1 className="mt-6 font-display text-[36px] sm:text-[42px] md:text-[52px] lg:text-[64px] xl:text-[72px] font-extrabold leading-[1.05] tracking-[-0.03em] text-white text-balance drop-shadow-xl">
                {slides[current].title}
              </h1>
              
              <p className="mt-8 max-w-2xl text-[18px] sm:text-[20px] leading-[1.8] text-gray-200 drop-shadow-md">
                {slides[current].description}
              </p>
              
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link to="/contact" className="btn-primary group">
                  Contact Us <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to={slides[current].link} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-[17px] sm:text-[18px] font-bold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-ink">
                  Explore Products <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all duration-500 ${idx === current ? 'w-10 bg-gold' : 'w-2 bg-white/40 hover:bg-white/60'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
