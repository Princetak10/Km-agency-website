/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111827', // Dark Gray
        gold: '#D4AF37', // Gold from logo
        'gold-light': '#F3E5AB',
        'gold-dark': '#996515',
        'brand-red': '#D82035', // Red from logo
        'brand-orange': '#F79A2B', // Orange from logo gradient
        cream: '#FAFAFA', // White / off-white background
        mist: '#F3F4F6', // Subtle gray
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        soft: '0 20px 60px -30px rgba(17, 24, 39, 0.25)',
        card: '0 12px 36px -18px rgba(17, 24, 39, 0.20)',
        gold: '0 10px 40px -10px rgba(212, 175, 55, 0.3)',
      },
      backgroundImage: {
        weave: 'linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)',
        'gradient-logo': 'linear-gradient(135deg, #D82035 0%, #F79A2B 100%)',
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #F3E5AB 50%, #D4AF37 100%)',
      },
    },
  },
  plugins: [],
}
