import { useState } from 'react'
import { Mail, MapPin, Phone, Clock } from 'lucide-react'
import { OrnamentDivider, SectionKicker, SectionTitle } from './Ornament'

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

const CONTACT_DETAILS = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Maharajpur Lohara Road, Kawardha, Chhattisgarh 491995',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9981735735',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'umeshutsavudyan@gmail.com',
  },
  {
    icon: Clock,
    label: 'Visiting Hours',
    value: 'Every day, 10:00 AM – 7:30 PM (site tours by appointment)',
  },
]

export function Contact() {
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...fields }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      setFields({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative bg-onyx py-28 sm:py-36 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionKicker>We'd Love to Host You</SectionKicker>
        <SectionTitle>Contact Us</SectionTitle>
        <OrnamentDivider className="mb-16" />

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16">
          <div className="space-y-8">
            {CONTACT_DETAILS.map((detail) => {
              const Icon = detail.icon
              return (
                <div key={detail.label} className="flex gap-5 items-start">
                  <span className="shrink-0 w-11 h-11 rounded-full border border-gold/50 flex items-center justify-center text-gold">
                    <Icon size={18} strokeWidth={1.4} />
                  </span>
                  <div>
                    <p className="font-heading text-gold text-xs tracking-[0.2em] uppercase mb-1.5">
                      {detail.label}
                    </p>
                    <p className="font-body text-champagne/85 text-lg leading-snug">{detail.value}</p>
                  </div>
                </div>
              )
            })}

            <div className="gold-border p-6 mt-4 bg-gradient-to-br from-[#181209] to-[#0d0b08]">
              <p className="font-body text-champagne/70 text-sm leading-relaxed">
                For urgent date checks on weekends and festival season, calling ahead secures a
                same-day site walkthrough with our wedding manager.
              </p>
            </div>
          </div>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="gold-border p-8 sm:p-10 bg-onyx-soft/50"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don't fill this out: <input name="bot-field" onChange={() => {}} />
              </label>
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="font-heading text-xs tracking-[0.2em] uppercase text-champagne/70 mb-2 block">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={fields.name}
                  onChange={handleChange}
                  placeholder="Ananya Verma"
                  className="w-full bg-transparent border-b border-gold-deep/40 focus:border-gold outline-none py-2.5 font-body text-lg text-ivory placeholder:text-champagne/30 transition-colors"
                />
              </div>
              <div>
                <label className="font-heading text-xs tracking-[0.2em] uppercase text-champagne/70 mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={fields.email}
                  onChange={handleChange}
                  placeholder="ananya@example.com"
                  className="w-full bg-transparent border-b border-gold-deep/40 focus:border-gold outline-none py-2.5 font-body text-lg text-ivory placeholder:text-champagne/30 transition-colors"
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="font-heading text-xs tracking-[0.2em] uppercase text-champagne/70 mb-2 block">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={fields.message}
                onChange={handleChange}
                placeholder="Tell us about the celebration you're planning..."
                className="w-full bg-transparent border-b border-gold-deep/40 focus:border-gold outline-none py-2.5 font-body text-lg text-ivory placeholder:text-champagne/30 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 bg-gold text-ink font-heading text-xs uppercase tracking-[0.25em] hover:bg-gold-light transition-all duration-300 disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>

            {status === 'sent' && (
              <p className="mt-4 font-body text-gold-light text-base">
                Thank you — our wedding manager will reach out within one business day.
              </p>
            )}
            {status === 'error' && (
              <p className="mt-4 font-body text-red-400 text-base">
                Something went wrong. Please try again or call us directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
