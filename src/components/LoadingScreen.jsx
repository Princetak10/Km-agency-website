import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import logo from '../assets/krishna-madhav-logo.webp'

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  useEffect(() => { const id = setTimeout(() => setLoading(false), 850); return () => clearTimeout(id) }, [])
  return <AnimatePresence>{loading && <motion.div className="fixed inset-0 z-[100] grid place-items-center bg-ink" exit={{ opacity: 0 }} transition={{ duration: .45 }}><motion.div initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} className="text-center"><img src={logo} alt="Krishna Madhav Agency" className="mx-auto h-24 w-24 object-contain" /><div className="mx-auto mt-6 h-0.5 w-24 overflow-hidden rounded-full bg-white/10"><motion.div className="h-full bg-saffron" initial={{ x: '-100%' }} animate={{ x: '100%' }} transition={{ repeat: Infinity, duration: .8, ease: 'easeInOut' }} /></div></motion.div></motion.div>}</AnimatePresence>
}
