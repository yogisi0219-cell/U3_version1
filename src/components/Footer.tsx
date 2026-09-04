import { Facebook, Instagram, Youtube } from 'lucide-react'

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About Us' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#booking', label: 'Booking' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="relative bg-onyx border-t border-gold-deep/25 pt-16 pb-8 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
        <div>
          <a href="#home" className="flex items-center gap-3 mb-5">
            <span className="font-heading text-ivory text-sm tracking-[0.2em] uppercase">
              Umesh Utsav Udyan
            </span>
          </a>
          <p className="font-body text-champagne/65 text-base leading-relaxed max-w-xs">
            A royal marriage palace in Kawardha, hosting weddings, sangeets, and receptions since
            2009.
          </p>
        </div>

        <div>
          <p className="font-heading text-gold text-xs tracking-[0.25em] uppercase mb-5">
            Navigate
          </p>
          <ul className="space-y-3">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-champagne/75 hover:text-gold transition-colors text-base"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading text-gold text-xs tracking-[0.25em] uppercase mb-5">
            Visit
          </p>
          <p className="font-body text-champagne/75 text-base leading-relaxed mb-3">
            Maharajpur Lohara Road
            <br />
            Kawardha, Chhattisgarh 491995
          </p>
          <p className="font-body text-champagne/75 text-base">+91 9981735735</p>
          <p className="font-body text-champagne/75 text-base">umeshutsavudyan@gmail.com</p>
        </div>

        <div>
          <p className="font-heading text-gold text-xs tracking-[0.25em] uppercase mb-5">
            Follow the Celebration
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-ink transition-all duration-300"
            >
              <Facebook size={17} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-ink transition-all duration-300"
            >
              <Instagram size={17} />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-ink transition-all duration-300"
            >
              <Youtube size={17} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gold-deep/20 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-body text-champagne/50 text-sm text-center sm:text-left">
          &copy; {'2026'} Umesh Utsav Udyan. All rights reserved.
        </p>
        <p className="font-heading text-gold/50 text-[11px] tracking-[0.25em] uppercase">
          Grandeur, By Design
        </p>
      </div>
    </footer>
  )
}
