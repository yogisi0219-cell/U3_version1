import { Star } from 'lucide-react'
import { OrnamentDivider, SectionKicker, SectionTitle } from './Ornament'

const TESTIMONIALS = [
  {
    names: 'Ishita & Kabir Malhotra',
    date: 'December 2025',
    rating: 5,
    quote:
      "Our mandap looked like something out of a period film. The décor team rebuilt the entire courtyard overnight for the reception and not one marigold was out of place.",
  },
  {
    names: 'Priyanka Deshmukh & Arjun Sethi',
    date: 'February 2026',
    rating: 5,
    quote:
      "We had 640 guests across three days and the staff still knew my grandmother's name by day two. The valet team parked cars faster than we could greet people at the gate.",
  },
  {
    names: 'Fatima & Zohaib Ansari',
    date: 'November 2025',
    rating: 4,
    quote:
      "The banquet hall chandeliers alone were worth the booking. Catering ran a live Awadhi counter that our Hyderabadi relatives are still talking about.",
  },
  {
    names: 'Meher & Devansh Kapoor',
    date: 'January 2026',
    rating: 5,
    quote:
      "Booked the Nawabi Suite for the week of functions. Every request, down to a 6am aarti setup, was handled without us having to ask twice.",
  },
  {
    names: 'Ritika Bhargava & Sameer Oberoi',
    date: 'October 2025',
    rating: 5,
    quote:
      "The sangeet terrace view at sunset sold us instantly. Six months later, strangers still stop my husband to say they saw our fireworks from across the colony.",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-ink py-28 sm:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionKicker>Words From Our Families</SectionKicker>
        <SectionTitle>Testimonials</SectionTitle>
        <OrnamentDivider className="mb-16" />
      </div>

      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-5 sm:px-8 pb-6 [scrollbar-width:thin]">
        {TESTIMONIALS.map((item) => (
          <figure
            key={item.names}
            className="snap-center shrink-0 w-[85vw] sm:w-[420px] gold-border gold-ring-hover bg-onyx-soft/60 p-8 sm:p-10 flex flex-col"
          >
            <div className="flex gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < item.rating ? 'text-gold fill-gold' : 'text-gold-deep/40'}
                />
              ))}
            </div>
            <blockquote className="font-body italic text-champagne/90 text-lg leading-relaxed mb-8 grow">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <figcaption>
              <p className="font-heading text-ivory text-sm tracking-wide">{item.names}</p>
              <p className="font-heading text-gold/70 text-[11px] tracking-[0.15em] uppercase mt-1">
                {item.date}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
