import { Flower2, Gem, Landmark, PartyPopper, Sparkles, Trees, UtensilsCrossed, Wine } from 'lucide-react'
import { OrnamentDivider, SectionKicker, SectionTitle } from './Ornament'

const TILES = [
  {
    title: 'Ishvi Banquet',
    caption: 'Grand hall for 500 guests, ideal for weddings and receptions',
    icon: Landmark,
    span: 'md:col-span-2 md:row-span-2',
    gradient: 'from-[#221a0c] via-[#3a2b12] to-[#0d0b08]',
  },
  {
    title: 'Ishvi Lawn',
    caption: '60,000 sq ft expanse hosting 3,500+ guests for baraat, sangeet, and open-air galas',
    icon: Trees,
    span: 'md:col-span-1 md:row-span-1',
    gradient: 'from-[#151d12] via-[#26301c] to-[#0d0b08]',
  },
  {
    title: 'Umaa Banquet',
    caption: 'Intimate 150‑guest hall with elegant décor for mehndi and family functions',
    icon: UtensilsCrossed,
    span: 'md:col-span-1 md:row-span-1',
    gradient: 'from-[#231409] via-[#3d2410] to-[#0d0b08]',
  },
  {
    title: 'Ramaa Hall',
    caption: 'Versatile 150+ capacity space for birthdays, corporate meets, and private gatherings',
    icon: Flower2,
    span: 'md:col-span-1 md:row-span-2',
    gradient: 'from-[#25130f] via-[#3e1f16] to-[#0d0b08]',
  },
  {
    title: 'Annada Dining Dome',
    caption: '7,000 sq ft covered dome serving 1,500 guests with royal catering',
    icon: Gem,
    span: 'md:col-span-1 md:row-span-1',
    gradient: 'from-[#1a140a] via-[#2f2410] to-[#0d0b08]',
  },
  {
    title: 'Varuna Pool',
    caption: '20×50 ft pool with 600+ capacity, perfect for cocktails and summer celebrations',
    icon: PartyPopper,
    span: 'md:col-span-1 md:row-span-1',
    gradient: 'from-[#1c1006] via-[#33200d] to-[#0d0b08]',
  },
  {
    title: 'Umeshwar Mahadev Temple',
    caption: 'Sacred shrine with Shiv‑Parvati ji Virajman, serene setting for phera and blessings',
    icon: Wine,
    span: 'md:col-span-2 md:row-span-1',
    gradient: 'from-[#180f0c] via-[#2c1a13] to-[#0d0b08]',
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="relative bg-onyx py-28 sm:py-36 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionKicker>A Glimpse Within</SectionKicker>
        <SectionTitle>The Palace Gallery</SectionTitle>
        <OrnamentDivider className="mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[220px] gap-4 sm:gap-5">
          {TILES.map((tile) => {
            const Icon = tile.icon
            return (
              <div
                key={tile.title}
                className={`group relative overflow-hidden gold-border gold-ring-hover min-h-[240px] ${tile.span}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${tile.gradient} transition-transform duration-700 group-hover:scale-110`} />
                <div className="absolute inset-0 bg-noise opacity-60" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'radial-gradient(circle at 50% 100%, rgba(212,175,55,0.25), transparent 65%)' }}
                />
                <Icon
                  className="absolute right-5 top-5 text-gold/25 group-hover:text-gold/50 transition-all duration-500 group-hover:scale-110"
                  size={38}
                  strokeWidth={1.1}
                />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-heading text-gold text-base sm:text-lg tracking-wide mb-1.5">{tile.title}</h3>
                  <p className="font-body text-champagne/80 text-sm sm:text-[15px] leading-snug opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-500">
                    {tile.caption}
                  </p>
                </div>
                <Sparkles
                  className="absolute left-5 bottom-5 text-gold opacity-0 group-hover:opacity-70 transition-opacity duration-500"
                  size={16}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
