import { Mail, MapPin, MessageCircle, Phone, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../assets/krishna-madhav-logo.webp'

const quick = [['/', 'Home'], ['/about', 'About us'], ['/products', 'Products'], ['/contact', 'Contact']]
const serviceLinks = ['Textile commission agency', 'Buyer–seller coordination', 'Garment sourcing', 'Order follow-up']

export default function Footer() {
  return (
    <footer className="bg-ink text-slate-300">
      <div className="container-site py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.45fr_.65fr_.9fr_1.2fr]">
          <div>
            <Link to="/" className="flex items-center gap-3 text-white">
              <img src={logo} alt="Krishna Madhav Agency" className="h-14 w-14 object-contain" />
              <span className="font-display text-lg font-bold">Krishna Madhav Agency</span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">Textile commission agents dealing in sarees, lehengas, suits, readymade garments and garments across Surat, Delhi and Jaipur.</p>
            <div className="mt-7 flex gap-3">
              <a href="https://wa.me/919825191726" target="_blank" rel="noreferrer" aria-label="Contact Krishna Madhav Agency on WhatsApp" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 transition hover:-translate-y-1 hover:border-gold hover:text-gold"><MessageCircle size={17} /></a>
              <a href="mailto:kmagencysrt@gmail.com" aria-label="Email Krishna Madhav Agency" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 transition hover:-translate-y-1 hover:border-gold hover:text-gold"><Mail size={17} /></a>
              {/* TODO: Add verified company social profile URLs here when provided. */}
            </div>
          </div>
          <div>
            <h3 className="font-display text-sm font-bold text-white">Quick links</h3>
            <ul className="mt-5 space-y-3 text-sm">{quick.map(([to, label]) => <li key={to}><Link className="transition hover:text-gold" to={to}>{label}</Link></li>)}</ul>
          </div>
          <div>
            <h3 className="font-display text-sm font-bold text-white">Services</h3>
            <ul className="mt-5 space-y-3 text-sm">{serviceLinks.map(label => <li key={label}><Link className="transition hover:text-gold" to="/services">{label}</Link></li>)}</ul>
          </div>
          <div>
            <h3 className="font-display text-sm font-bold text-white">Let’s talk textiles</h3>
            <div className="mt-5 space-y-4 text-sm">
              <a href="tel:+919825191726" className="flex gap-3 transition hover:text-gold"><Phone size={17} className="mt-0.5 shrink-0" /> Mahendra Bhai: +91 98251 91726</a>
              <a href="mailto:kmagencysrt@gmail.com" className="flex gap-3 transition hover:text-gold"><Mail size={17} className="mt-0.5 shrink-0" /> kmagencysrt@gmail.com</a>
              <p className="flex gap-3 leading-6"><MapPin size={17} className="mt-0.5 shrink-0" /> S-43, Upper Ground, Belgium Square, Japan Market, Delhi Gate, Ring Road, Surat 395003</p>
            </div>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-gold">Send an enquiry <ArrowUpRight size={15} /></Link>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Krishna Madhav Agency. All rights reserved.</p>
          <p>Think Beyond • Surat | Delhi | Jaipur</p>
        </div>
      </div>
    </footer>
  )
}
