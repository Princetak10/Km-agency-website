import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function StatCounter({ value, suffix, label, dark = false }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(0)
  useEffect(() => {
    if (!inView) return
    const duration = 1300, start = performance.now()
    const frame = now => {
      const progress = Math.min((now - start) / duration, 1)
      setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3))))
      if (progress < 1) requestAnimationFrame(frame)
    }
    requestAnimationFrame(frame)
  }, [inView, value])
  return <div ref={ref}><p className={`font-display text-3xl font-extrabold tracking-tight sm:text-4xl ${dark ? 'text-white' : 'text-ink'}`}>{display.toLocaleString('en-IN')}{suffix}</p><p className={`mt-1.5 text-xs font-medium sm:text-sm ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{label}</p></div>
}
