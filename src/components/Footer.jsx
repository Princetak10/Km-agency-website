import { Mail, MapPin, MessageCircle, Phone, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../assets/krishna-madhav-logo.webp'

const quick = [['/', 'Home'], ['/about', 'About us'], ['/products', 'Products'], ['/contact', 'Contact']]
const serviceLinks = ['Textile commission agency', 'Buyer–seller coordination', 'Garment sourcing', 'Order follow-up']

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-slate-300">
      <div className="container-site py-20 sm:py-28">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-[1.45fr_.65fr_.9fr_1.2fr]">
          <div>
            <Link to="/" className="flex items-center gap-3 text-white group">
              <img src={logo} alt="Krishna Madhav Agency" className="h-16 w-16 object-contain transition-transform duration-500 group-hover:scale-105" />
              <span className="font-display text-[20px] font-bold text-white transition-colors group-hover:text-gold">Krishna Madhav Agency</span>
            </Link>
            <p className="mt-8 max-w-sm text-[16px] leading-[1.8] text-slate-400">Textile commission agents dealing in sarees, lehengas, suits, readymade garments and garments across Surat, Delhi and Jaipur.</p>
            <div className="mt-7 flex gap-3">
              <a href="https://wa.me/919825191726" target="_blank" rel="noreferrer" aria-label="Contact Krishna Madhav Agency on WhatsApp" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 transition hover:-translate-y-1 hover:border-gold hover:text-gold"><MessageCircle size={17} /></a>
              <a href="mailto:kmagencysrt@gmail.com" aria-label="Email Krishna Madhav Agency" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 transition hover:-translate-y-1 hover:border-gold hover:text-gold"><Mail size={17} /></a>
              {/* TODO: Add verified company social profile URLs here when provided. */}
            </div>
          </div>
          <div>
            <h3 className="font-display text-[16px] font-bold text-gold uppercase tracking-wider">Quick links</h3>
            <ul className="mt-8 space-y-4 text-[16px]">{quick.map(([to, label]) => <li key={to}><Link className="transition-colors hover:text-gold" to={to}>{label}</Link></li>)}</ul>
          </div>
          <div>
            <h3 className="font-display text-[16px] font-bold text-gold uppercase tracking-wider">Services</h3>
            <ul className="mt-8 space-y-4 text-[16px]">{serviceLinks.map(label => <li key={label}><Link className="transition-colors hover:text-gold" to="/services">{label}</Link></li>)}</ul>
          </div>
          <div>
            <h3 className="font-display text-[16px] font-bold text-gold uppercase tracking-wider">Let’s talk textiles</h3>
            <div className="mt-8 space-y-5 text-[16px]">
              <a href="tel:+919825191726" className="flex gap-3 transition-colors hover:text-gold"><Phone size={20} className="mt-0.5 shrink-0 text-gold-dark" /> Mahendra Bhai: +91 98251 91726</a>
              <a href="mailto:kmagencysrt@gmail.com" className="flex gap-3 transition-colors hover:text-gold"><Mail size={20} className="mt-0.5 shrink-0 text-gold-dark" /> kmagencysrt@gmail.com</a>
              <p className="flex gap-3 leading-[1.8]"><MapPin size={20} className="mt-1 shrink-0 text-gold-dark" /> S-43, Upper Ground, Belgium Square, Japan Market, Delhi Gate, Ring Road, Surat 395003</p>
            </div>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 text-[16px] font-bold text-gold transition-transform hover:-translate-y-0.5">Send an enquiry <ArrowUpRight size={18} /></Link>
          </div>
        </div>
        <div className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-8 text-[14px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Krishna Madhav Agency. All rights reserved.</p>
          <p>Think Beyond • Surat | Delhi | Jaipur</p>
        </div>
      </div>
    </footer>
  )
}
