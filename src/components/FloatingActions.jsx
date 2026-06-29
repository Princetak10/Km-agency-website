import { useEffect, useState } from 'react'
import { ArrowUp, MessageCircle } from 'lucide-react'

export default function FloatingActions() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { const fn = () => setVisible(window.scrollY > 500); window.addEventListener('scroll', fn); return () => window.removeEventListener('scroll', fn) }, [])
  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-3 sm:bottom-7 sm:right-7">
      <button aria-label="Scroll to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`grid h-11 w-11 place-items-center rounded-full bg-ink text-white shadow-lg transition-all duration-300 hover:-translate-y-1 ${visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'}`}><ArrowUp size={18} /></button>
      <a href="https://wa.me/0000000000?text=Hello%20Krishna%20Madhav%20Agency%2C%20I%20have%20a%20textile%20requirement." target="_blank" rel="noreferrer" aria-label="Chat with Krishna Madhav Agency on WhatsApp" className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-500/25 transition hover:-translate-y-1 hover:scale-105"><MessageCircle size={25} fill="currentColor" /></a>
    </div>
  )
}
