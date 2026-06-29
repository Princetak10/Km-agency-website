import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/krishna-madhav-logo.webp'

const links = [
  ['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/products', 'Products'], ['/contact', 'Contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location.pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll(); window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 shadow-sm backdrop-blur-xl py-0' : 'bg-white/95 py-2'}`}>
      <nav className="container-site flex h-[90px] items-center justify-between" aria-label="Main navigation">
        <Link to="/" className="group flex items-center gap-2 sm:gap-3 flex-nowrap" aria-label="Krishna Madhav Agency home">
          <img src={logo} alt="" className="h-12 w-12 sm:h-[68px] sm:w-[68px] object-contain transition-transform duration-500 group-hover:scale-105 shrink-0" />
          <span className="leading-none whitespace-nowrap">
            <div className="flex flex-row items-baseline sm:flex-col sm:items-start">
              <span className="font-display text-[13px] sm:text-[16px] font-extrabold tracking-[-0.02em] text-ink">
                KRISHNA MADHAV
              </span>
              <span className="ml-1 sm:ml-0 sm:mt-1 text-[9px] sm:text-[10px] font-bold tracking-[0.23em] text-gold-dark">
                AGENCY
              </span>
            </div>
          </span>
        </Link>

        <div className="hidden items-center gap-12 lg:flex">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} className={({ isActive }) => `relative py-2 text-[17px] lg:text-[18px] font-semibold transition-colors duration-300 ${isActive ? 'text-gold-dark' : 'text-gray-600 hover:text-brand-orange'}`}>
              {({ isActive }) => <>{label}{isActive && <motion.span layoutId="nav-indicator" className="absolute inset-x-0 -bottom-1 mx-auto h-0.5 w-5 rounded-full bg-gold" />}</>}
            </NavLink>
          ))}
        </div>

        <Link to="/contact" className="btn-primary hidden lg:inline-flex">Start an enquiry <ArrowUpRight size={18} /></Link>
        <button type="button" onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-full border border-gray-200 text-ink transition-colors hover:bg-mist lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          {open ? <X size={20} /> : <Menu size={21} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-gray-100 bg-white shadow-lg lg:hidden">
            <div className="container-site flex flex-col gap-2 py-5">
              {links.map(([to, label]) => <NavLink key={to} to={to} className={({ isActive }) => `rounded-xl px-4 py-3 text-base font-semibold transition-colors ${isActive ? 'bg-gold-light/20 text-gold-dark' : 'text-gray-700 hover:bg-mist'}`}>{label}</NavLink>)}
              <Link to="/contact" className="btn-primary mt-4">Start an enquiry <ArrowUpRight size={16} /></Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
