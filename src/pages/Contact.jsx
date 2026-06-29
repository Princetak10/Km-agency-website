import { motion } from 'framer-motion'
import { Building2, MapPin } from 'lucide-react'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import ContactSection from '../components/ContactSection'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const offices = [
  {
    city: 'Surat Office',
    address: 'S-43, Upper Ground, Belgium Square, Japan Market, Delhi Gate, Ring Road, Surat - 395003',
  },
  {
    city: 'Delhi Office',
    address: 'Room No. 113, 1st Floor, 413 Sai Bhawan, Haveli Haidar Quli, Chandni Chowk, Delhi - 110006',
  },
  {
    city: 'Jaipur Office',
    address: 'B-27, Kanti Nagar, Hathi Babu Ka Hatha, Polo Victory, Jaipur - 302016',
  },
]

export default function Contact() {
  return <motion.main id="main-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <SEO title="Contact" description="Contact Krishna Madhav Agency in Surat, Delhi or Jaipur for textile commission agency and garment trade enquiries." />
    <PageHero eyebrow="Contact" title="A good textile trade conversation starts here." text="Speak directly with Mahendra Bhai or Ramavtar Sharma, or reach the office nearest to your market." image="https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=1800&q=85" />
    <ContactSection compact />

    <section className="section-space bg-white">
      <div className="container-site">
        <Reveal><SectionHeading eyebrow="Our locations" title="Present in three key textile markets." text="Visit Krishna Madhav Agency in Surat, Delhi or Jaipur." align="center" /></Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {offices.map((office, index) => (
            <Reveal key={office.city} delay={index * .07}>
              <article className="card h-full p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-50 text-amber-600"><Building2 size={22} /></span>
                <h2 className="mt-5 font-display text-xl font-bold text-ink">{office.city}</h2>
                <p className="mt-3 flex gap-2 text-sm leading-6 text-slate-600"><MapPin size={17} className="mt-1 shrink-0 text-amber-500" />{office.address}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="pb-20 sm:pb-28">
      <div className="container-site">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
            <iframe
              title="Krishna Madhav Agency Surat office on Google Maps"
              src="https://www.google.com/maps?q=S-43%2C%20Upper%20Ground%2C%20Belgium%20Square%2C%20Japan%20Market%2C%20Delhi%20Gate%2C%20Ring%20Road%2C%20Surat%20395003&output=embed"
              className="h-[460px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  </motion.main>
}
