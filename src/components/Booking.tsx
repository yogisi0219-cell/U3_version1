import { useState } from 'react'
import { OrnamentDivider, SectionKicker, SectionTitle } from './Ornament'

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

const EVENT_TYPES = [
  'Wedding Ceremony',
  'Engagement',
  'Sangeet / Reception',
  'Anniversary Celebration',
  'Corporate Gala',
  'Other Celebration',
]

const initialFields = {
  name: '',
  phone: '',
  email: '',
  'event-date': '',
  'event-type': EVENT_TYPES[0],
  guests: '',
  message: '',
}

export function Booking() {
  const [fields, setFields] = useState(initialFields)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setFields((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'booking', ...fields }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      setFields(initialFields)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="booking"
      className="relative bg-ink py-28 sm:py-36 px-5 sm:px-8 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-50"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 15% 15%, rgba(212,175,55,0.1), transparent 65%)' }}
      />
      <div className="max-w-4xl mx-auto relative">
        <SectionKicker>Reserve Your Celebration</SectionKicker>
        <SectionTitle>Booking Enquiry</SectionTitle>
        <OrnamentDivider className="mb-6" />
        <p className="text-center font-body text-champagne/75 text-lg max-w-2xl mx-auto mb-14">
          Share a few details and our wedding manager will confirm availability, walk you through
          package pricing, and hold your preferred date for 72 hours.
        </p>

        {status === 'sent' ? (
          <div className="gold-border p-12 text-center bg-onyx-soft/50">
            <p className="font-display text-3xl text-gold-gradient mb-4">Your Date is on Hold</p>
            <p className="font-body text-champagne/85 text-lg">
              We've received your enquiry — expect a call from our wedding manager within 24 hours
              to confirm your reservation.
            </p>
          </div>
        ) : (
          <form
            name="booking"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="gold-border p-8 sm:p-12 bg-onyx-soft/50"
          >
            <input type="hidden" name="form-name" value="booking" />
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
                  placeholder="Rohan Bakshi"
                  className="w-full bg-transparent border-b border-gold-deep/40 focus:border-gold outline-none py-2.5 font-body text-lg text-ivory placeholder:text-champagne/30 transition-colors"
                />
              </div>
              <div>
                <label className="font-heading text-xs tracking-[0.2em] uppercase text-champagne/70 mb-2 block">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={fields.phone}
                  onChange={handleChange}
                  placeholder="+91 90000 11223"
                  className="w-full bg-transparent border-b border-gold-deep/40 focus:border-gold outline-none py-2.5 font-body text-lg text-ivory placeholder:text-champagne/30 transition-colors"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-6">
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
                  placeholder="rohan@example.com"
                  className="w-full bg-transparent border-b border-gold-deep/40 focus:border-gold outline-none py-2.5 font-body text-lg text-ivory placeholder:text-champagne/30 transition-colors"
                />
              </div>
              <div>
                <label className="font-heading text-xs tracking-[0.2em] uppercase text-champagne/70 mb-2 block">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="event-date"
                  required
                  value={fields['event-date']}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gold-deep/40 focus:border-gold outline-none py-2.5 font-body text-lg text-ivory transition-colors [color-scheme:dark]"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="font-heading text-xs tracking-[0.2em] uppercase text-champagne/70 mb-2 block">
                  Event Type
                </label>
                <select
                  name="event-type"
                  value={fields['event-type']}
                  onChange={handleChange}
                  className="w-full bg-onyx border-b border-gold-deep/40 focus:border-gold outline-none py-2.5 font-body text-lg text-ivory transition-colors"
                >
                  {EVENT_TYPES.map((type) => (
                    <option key={type} value={type} className="bg-onyx">
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="font-heading text-xs tracking-[0.2em] uppercase text-champagne/70 mb-2 block">
                  Estimated Guests
                </label>
                <input
                  type="number"
                  name="guests"
                  min={20}
                  required
                  value={fields.guests}
                  onChange={handleChange}
                  placeholder="350"
                  className="w-full bg-transparent border-b border-gold-deep/40 focus:border-gold outline-none py-2.5 font-body text-lg text-ivory placeholder:text-champagne/30 transition-colors"
                />
              </div>
            </div>

            <div className="mb-9">
              <label className="font-heading text-xs tracking-[0.2em] uppercase text-champagne/70 mb-2 block">
                Anything We Should Know
              </label>
              <textarea
                name="message"
                rows={3}
                value={fields.message}
                onChange={handleChange}
                placeholder="Ceremony style, catering preferences, out-of-town guests..."
                className="w-full bg-transparent border-b border-gold-deep/40 focus:border-gold outline-none py-2.5 font-body text-lg text-ivory placeholder:text-champagne/30 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full inline-flex items-center justify-center px-9 py-4 bg-gold text-ink font-heading text-xs uppercase tracking-[0.25em] hover:bg-gold-light transition-all duration-300 disabled:opacity-60"
            >
              {status === 'sending' ? 'Submitting…' : 'Request to Reserve'}
            </button>

            {status === 'error' && (
              <p className="mt-4 font-body text-red-400 text-base text-center">
                Something went wrong. Please try again or call us directly.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}
