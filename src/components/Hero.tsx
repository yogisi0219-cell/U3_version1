import { CornerFlourish } from './Ornament'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-ink"
    >
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 18%, rgba(212,175,55,0.14), transparent 60%), radial-gradient(ellipse 60% 40% at 85% 85%, rgba(138,106,31,0.12), transparent 65%), linear-gradient(180deg, #07060a 0%, #0d0b08 55%, #07060a 100%)',
        }}
      />

      <svg
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] max-w-[1400px] text-gold/[0.09] animate-spin-slow"
        viewBox="0 0 400 400"
        aria-hidden="true"
      >
        <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1" fill="none" />
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i / 24) * Math.PI * 2
          const x1 = 200 + Math.cos(angle) * 150
          const y1 = 200 + Math.sin(angle) * 150
          const x2 = 200 + Math.cos(angle) * 180
          const y2 = 200 + Math.sin(angle) * 180
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" />
        })}
      </svg>

      <span className="absolute w-2 h-2 rounded-full bg-gold/60 blur-[1px] left-[18%] top-[28%] animate-drift" />
      <span className="absolute w-1.5 h-1.5 rounded-full bg-gold-light/50 blur-[1px] left-[78%] top-[38%] animate-drift delay-2" />
      <span className="absolute w-1 h-1 rounded-full bg-gold/70 left-[65%] top-[70%] animate-drift delay-3" />
      <span className="absolute w-1.5 h-1.5 rounded-full bg-gold-light/40 left-[24%] top-[68%] animate-drift delay-4" />

      <CornerFlourish className="absolute top-6 left-6 sm:top-10 sm:left-10 w-14 h-14 sm:w-20 sm:h-20 text-gold-deep" />
      <CornerFlourish className="absolute top-6 right-6 sm:top-10 sm:right-10 w-14 h-14 sm:w-20 sm:h-20 text-gold-deep rotate-90" />
      <CornerFlourish className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 w-14 h-14 sm:w-20 sm:h-20 text-gold-deep -rotate-90" />
      <CornerFlourish className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 w-14 h-14 sm:w-20 sm:h-20 text-gold-deep rotate-180" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        
        <p className="animate-fade-up font-heading text-gold text-xs sm:text-sm tracking-[0.5em] uppercase mb-6">
          Est. 2019 &middot; Kawardha, Chhattisgarh
        </p>

        <h1 className="animate-fade-up delay-1 font-display text-gold-gradient animate-shimmer text-[13vw] leading-[0.95] sm:text-7xl md:text-8xl lg:text-[7.5rem] mb-3">
          Umesh Utsav
        </h1>
        <h1 className="animate-fade-up delay-2 font-display text-gold-gradient animate-shimmer text-[13vw] leading-[0.95] sm:text-7xl md:text-8xl lg:text-[7.5rem] mb-8">
          Udyan
        </h1>

        <p className="animate-fade-up delay-3 font-body italic text-champagne/90 text-lg sm:text-2xl max-w-2xl mb-10">
          Where seven vows are woven in gold thread — a palace of marble courtyards,
          candle-lit lawns, and nights that end in showers of petals.
        </p>

        <div className="animate-fade-up delay-4 flex flex-col sm:flex-row items-center gap-5">
          <a
            href="#booking"
            className="inline-flex items-center justify-center px-9 py-4 bg-gold text-ink font-heading text-xs uppercase tracking-[0.25em] hover:bg-gold-light transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(212,175,55,0.55)] hover:shadow-[0_16px_55px_-10px_rgba(212,175,55,0.75)] hover:-translate-y-0.5"
          >
            Check Your Date
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center justify-center px-9 py-4 border border-gold/60 text-gold font-heading text-xs uppercase tracking-[0.25em] hover:border-gold hover:bg-gold/10 transition-all duration-300"
          >
            Explore the Palace
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold/70 animate-pulse-glow">
        <span className="font-heading text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  )
}
