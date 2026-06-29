export default function SectionHeading({ eyebrow, title, text, align = 'left', light = false }) {
  const centered = align === 'center'
  return (
    <div className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}`}>
      <span className={`eyebrow ${light ? '!text-gold' : ''}`}>
        <span className="h-px w-7 bg-current" aria-hidden="true" />{eyebrow}
      </span>
      <h2 className={`section-title mt-6 md:mt-8 text-balance ${light ? '!text-white' : ''}`}>{title}</h2>
      {text && <p className={`body-copy mt-6 md:mt-8 ${light ? '!text-slate-300' : ''}`}>{text}</p>}
    </div>
  )
}
