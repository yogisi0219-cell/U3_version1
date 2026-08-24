import { CornerFlourish } from './Ornament'

const STATS = [
  { value: '17', label: 'Years of Weddings' },
  { value: '640+', label: 'Celebrations Hosted' },
  { value: '1,200', label: 'Guest Capacity' },
  { value: '38', label: 'Suites & Guest Rooms' },
]

export function About() {
  return (
    <section id="about" className="relative bg-onyx py-28 sm:py-36 px-5 sm:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-6 items-center">
        <div className="animate-fade-up">
          <p className="font-heading text-gold text-xs sm:text-sm tracking-[0.45em] uppercase mb-4">
            Our Story
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-ivory mb-8 leading-tight">
            A Family Legacy,
            <br />
            Carved in Marble &amp; Gold
          </h2>
          <div className="space-y-5 font-body text-lg text-champagne/85 leading-relaxed max-w-xl">
            <p>
              Umesh Utsav Udyan began in 2009 as a single lawn on the edge of Bhopal, built by
              Umesh Rathore for his own daughter's wedding when no venue in the city felt grand
              enough. Word travelled faster than the marigold garlands.
            </p>
            <p>
              Seventeen years on, the same family still walks the property before every function —
              checking the chandeliers, tasting the dal makhani, greeting each baraat at the gate.
              What was built for one wedding now holds six hundred and counting, each one treated
              like the first.
            </p>
            <p>
              Every hall is designed to be reconfigured — sacred fire in the morning, a live band
              by night — so a single booking can carry a family through four days of ceremony
              without ever changing address.
            </p>
          </div>

          <a
            href="#gallery"
            className="inline-flex items-center gap-3 mt-9 font-heading text-xs uppercase tracking-[0.25em] text-gold border-b border-gold/50 pb-1.5 hover:border-gold hover:gap-4 transition-all duration-300"
          >
            Walk Through the Palace
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        <div className="relative animate-fade-up delay-2">
          <div className="relative gold-border p-10 sm:p-12 bg-gradient-to-br from-[#1a1409] via-[#120e08] to-[#0d0b08]">
            <CornerFlourish className="absolute -top-3 -left-3 w-16 h-16 text-gold" />
            <CornerFlourish className="absolute -bottom-3 -right-3 w-16 h-16 text-gold rotate-180" />

            <blockquote className="font-body italic text-xl sm:text-2xl text-champagne/95 leading-snug mb-8">
              "We built a place that never asks a family to compromise between tradition and
              scale. It should feel like a palace and run like clockwork."
            </blockquote>
            <p className="font-heading text-gold text-sm tracking-[0.2em] uppercase mb-10">
              — Umesh Rathore, Founder
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-gold-deep/25 pt-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl sm:text-4xl text-gold-gradient mb-1">{stat.value}</p>
                  <p className="font-heading text-[11px] tracking-[0.15em] uppercase text-champagne/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
