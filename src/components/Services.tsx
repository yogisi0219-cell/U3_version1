import { CalendarHeart, ChefHat, Palette, ShieldCheck, Sparkle } from 'lucide-react'
import { OrnamentDivider, SectionKicker, SectionTitle } from './Ornament'

const SERVICES = [
  {
    number: '01',
    title: 'Wedding & Phera Ceremonies',
    icon: CalendarHeart,
    description:
      'End-to-end pandit coordination, mandap design, and muhurat planning across our three ceremonial venues — from an intimate 80-guest phera to a 1,200-guest baraat welcome.',
  },
  {
    number: '02',
    title: 'Banquet & Royal Catering',
    icon: ChefHat,
    description:
      'A nine-chef kitchen serving Awadhi, Rajasthani, and continental live counters, with a dedicated tasting session four weeks before your date.',
  },
  {
    number: '03',
    title: 'Décor, Lighting & Florals',
    icon: Palette,
    description:
      'In-house design atelier building custom mandaps, floral tunnels, and chandelier installations — no two weddings leave with the same silhouette.',
  },
  {
    number: '04',
    title: 'Sangeet, Reception & Entertainment',
    icon: Sparkle,
    description:
      'Sound-engineered terrace stage, choreography rehearsal space, and a curated roster of dhol players, singers, and fireworks vendors.',
  },
  {
    number: '05',
    title: 'Concierge, Stay & Valet',
    icon: ShieldCheck,
    description:
      '38 guest rooms, a bridal suite, round-the-clock valet for 400 vehicles, and a dedicated wedding manager from booking to the final farewell.',
  },
]

export function Services() {
  return (
    <section id="services" className="relative bg-ink py-28 sm:py-36 px-5 sm:px-8 overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: 'radial-gradient(ellipse 50% 40% at 90% 10%, rgba(212,175,55,0.08), transparent 70%)' }}
      />
      <div className="max-w-5xl mx-auto relative">
        <SectionKicker>Curated for Every Vow</SectionKicker>
        <SectionTitle>Our Services</SectionTitle>
        <OrnamentDivider className="mb-20" />

        <div className="flex flex-col">
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            const reversed = index % 2 === 1
            return (
              <div
                key={service.number}
                className={`group flex flex-col md:flex-row ${reversed ? 'md:flex-row-reverse' : ''} items-center gap-8 md:gap-14 py-10 border-b border-gold-deep/20 last:border-b-0`}
              >
                <div className="shrink-0 relative">
                  <span className="font-display text-6xl sm:text-7xl text-gold/15 group-hover:text-gold/30 transition-colors duration-500">
                    {service.number}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="text-gold" size={26} strokeWidth={1.3} />
                  </div>
                </div>

                <div className={`text-center ${reversed ? 'md:text-right' : 'md:text-left'}`}>
                  <h3 className="font-heading text-xl sm:text-2xl text-ivory mb-2.5 tracking-wide group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-body text-champagne/75 text-base sm:text-lg leading-relaxed max-w-xl">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
