import { useState } from 'react'
import { motion } from 'framer-motion'
import { Clock3, Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const details = [
  { icon: MapPin, label: 'Surat office', value: 'S-43, Upper Ground, Belgium Square, Japan Market, Delhi Gate, Ring Road, Surat 395003' },
  { icon: Phone, label: 'Mahendra Bhai', value: '+91 98251 91726', href: 'tel:+919825191726' },
  { icon: Phone, label: 'Ramavtar Sharma', value: '+91 97124 82033', href: 'tel:+919712482033' },
  { icon: Mail, label: 'Write to us', value: 'kmagencysrt@gmail.com', href: 'mailto:kmagencysrt@gmail.com' },
  // TODO: Replace these business hours if the company follows a different schedule.
  { icon: Clock3, label: 'Working hours', value: 'Mon–Sat, 10:00 AM–7:00 PM' },
]

export default function ContactSection({ compact = false }) {
  const [sent, setSent] = useState(false)
  const submit = e => { e.preventDefault(); setSent(true); e.currentTarget.reset(); setTimeout(() => setSent(false), 4000) }
  return (
    <section className={`${compact ? 'py-20 sm:py-24' : 'section-space'} bg-mist`} id="contact">
      <div className="container-site">
        <Reveal><SectionHeading eyebrow="Start a conversation" title="Tell us what you need. We’ll connect the right trade." text="Share your saree, lehenga, suit or garment requirement, expected quantity and preferred market. Our team will get back to you promptly." /></Reveal>
        <div className="mt-12 grid overflow-hidden rounded-[2rem] bg-white shadow-soft lg:grid-cols-[.82fr_1.18fr]">
          <div className="relative overflow-hidden bg-ink p-7 text-white sm:p-10 lg:p-12">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border-[40px] border-white/5" />
            <h3 className="relative font-display text-2xl font-bold">Contact details</h3>
            <p className="relative mt-3 text-sm leading-6 text-slate-400">Direct access to our Surat team, with offices in Delhi and Jaipur.</p>
            <div className="relative mt-9 space-y-6">
              {details.map(({ icon: Icon, label, value, href }) => <div key={label} className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-gold"><Icon size={19} /></span><div><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</p>{href ? <a href={href} className="mt-1 block text-sm text-slate-200 transition hover:text-gold">{value}</a> : <p className="mt-1 max-w-xs text-sm leading-6 text-slate-200">{value}</p>}</div></div>)}
            </div>
          </div>
          <form onSubmit={submit} className="p-7 sm:p-10 lg:p-12">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-ink">Your name<input required name="name" className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 font-normal outline-none transition focus:border-gold focus:bg-white focus:ring-4 focus:ring-gold-light/40" placeholder="e.g. Raj Patel" /></label>
              <label className="text-sm font-semibold text-ink">Phone number<input required name="phone" type="tel" className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 font-normal outline-none transition focus:border-gold focus:bg-white focus:ring-4 focus:ring-gold-light/40" placeholder="+91 98765 43210" /></label>
              <label className="text-sm font-semibold text-ink">Email address<input name="email" type="email" className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 font-normal outline-none transition focus:border-gold focus:bg-white focus:ring-4 focus:ring-gold-light/40" placeholder="you@company.com" /></label>
              <label className="text-sm font-semibold text-ink">Requirement<select name="requirement" className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 font-normal outline-none transition focus:border-gold focus:bg-white focus:ring-4 focus:ring-gold-light/40"><option>Sarees</option><option>Lehengas</option><option>Suits</option><option>Readymade garments</option><option>Other garments</option><option>Commission agency enquiry</option></select></label>
              <label className="text-sm font-semibold text-ink sm:col-span-2">Tell us more<textarea required name="message" rows="4" className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 font-normal outline-none transition focus:border-gold focus:bg-white focus:ring-4 focus:ring-gold-light/40" placeholder="Product category, quantity, preferred market and any specific requirement..." /></label>
            </div>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button className="btn-primary" type="submit">Send enquiry <Send size={16} /></button>
              {sent && <motion.p initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2 text-sm font-semibold text-emerald-600"><CheckCircle2 size={17} /> Thanks! We’ll be in touch.</motion.p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
