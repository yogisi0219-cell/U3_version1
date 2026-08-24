export function OrnamentDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden="true">
      <span className="h-px w-12 sm:w-24 bg-gradient-to-r from-transparent to-gold-deep" />
      <svg width="22" height="22" viewBox="0 0 22 22" className="text-gold">
        <path
          d="M11 1 L13.2 8.8 L21 11 L13.2 13.2 L11 21 L8.8 13.2 L1 11 L8.8 8.8 Z"
          fill="currentColor"
          fillOpacity="0.9"
        />
      </svg>
      <span className="h-px w-12 sm:w-24 bg-gradient-to-l from-transparent to-gold-deep" />
    </div>
  )
}

export function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-heading text-gold text-xs sm:text-sm tracking-[0.45em] uppercase text-center mb-4">
      {children}
    </p>
  )
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-center text-ivory mb-6 leading-tight">
      {children}
    </h2>
  )
}

export function CornerFlourish({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 4 C 40 4, 4 40, 4 4 M4 4 L4 60 M4 4 L60 4"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.55"
      />
      <path
        d="M4 4 C 30 8, 8 30, 4 4"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />
      <circle cx="4" cy="4" r="2.4" fill="currentColor" />
    </svg>
  )
}
