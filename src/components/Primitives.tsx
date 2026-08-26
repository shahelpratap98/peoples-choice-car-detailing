import type { CSSProperties, ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'

/* -------------------------------------------------------------------------- */
/*  Noise filters                                                             */
/* -------------------------------------------------------------------------- */

/** Subtle grain, multiply blend. Sits at the app root, used by the headline. */
export function RootNoiseFilter() {
  return (
    <svg className="absolute w-0 h-0" aria-hidden="true" focusable="false">
      <filter id="c3-noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
        <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0" />
        <feComposite in2="SourceGraphic" operator="in" result="noise" />
        <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
      </filter>
    </svg>
  )
}

/** Coarser fractal noise, overlay blend. Scoped to the packages watermark. */
export function PricingNoiseFilter() {
  return (
    <svg className="absolute w-0 h-0" aria-hidden="true" focusable="false">
      <filter id="c3-noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" stitchTiles="stitch" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.075" />
        </feComponentTransfer>
        <feComposite in2="SourceGraphic" operator="in" result="noise" />
        <feBlend in="SourceGraphic" in2="noise" mode="overlay" />
      </filter>
    </svg>
  )
}

/* -------------------------------------------------------------------------- */
/*  Marks                                                                     */
/* -------------------------------------------------------------------------- */

/** Layered swooshes + sparkles, echoing the Soft Touch Auto Finishing logo. */
export function LogoMark({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} aria-hidden="true" focusable="false">
      {/* roof line */}
      <path
        d="M96 118 C 128 92 168 96 198 124 C 186 121 173 115 159 111 C 135 104 114 107 96 118 Z"
        fill="#D9430E"
      />
      {/* gold wedge */}
      <path d="M150 141 C 170 137 187 133 201 130 C 191 141 174 145 156 147 Z" fill="#F5C518" />
      {/* aqua swoosh */}
      <path d="M40 112 C 63 141 105 151 151 139 C 108 155 66 151 40 112 Z" fill="#5BC8DC" />
      {/* azure wave */}
      <path
        d="M34 130 C 62 168 118 178 176 160 C 200 153 214 146 226 140 C 208 158 186 170 158 176 C 100 188 52 172 34 130 Z"
        fill="#2E86DE"
      />
      {/* sparkles */}
      <path d="M186 40 L192 58 L210 64 L192 70 L186 88 L180 70 L162 64 L180 58 Z" fill="#5BC8DC" />
      <path d="M126 62 L130 74 L142 78 L130 82 L126 94 L122 82 L110 78 L122 74 Z" fill="#2E86DE" />
    </svg>
  )
}

/** WhatsApp glyph, used on the primary CTA. */
export function WhatsAppIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" focusable="false">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  )
}

/** Stacked "Soft Touch / Auto Finishing" lockup. */
export function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`flex flex-col leading-none ${className}`}>
      <span className="text-base font-extrabold tracking-tight text-brand">Soft Touch</span>
      <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
        Auto Finishing
      </span>
    </span>
  )
}

/* -------------------------------------------------------------------------- */
/*  Buttons                                                                   */
/* -------------------------------------------------------------------------- */

const PILL =
  'group inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-medium text-sm px-5 py-3 transition-all hover:bg-white/90 active:scale-[0.98]'

export function BrandButton({
  label = 'Book on WhatsApp',
  href,
  full = false,
  icon = <WhatsAppIcon />,
}: {
  label?: string
  href: string
  full?: boolean
  icon?: ReactNode
}) {
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`${PILL} ${full ? 'w-full' : ''}`}
    >
      {icon}
      <span>{label}</span>
      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-[1px]" />
    </a>
  )
}

export function GhostButton({
  label,
  href,
  icon,
  full = false,
}: {
  label: string
  href: string
  icon?: ReactNode
  full?: boolean
}) {
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 text-white text-sm font-medium px-5 py-3 transition-all hover:bg-white/5 active:scale-[0.98] ${
        full ? 'w-full' : ''
      }`}
    >
      {icon}
      <span>{label}</span>
      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-[1px]" />
    </a>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section eyebrow                                                           */
/* -------------------------------------------------------------------------- */

export function SectionEyebrow({ label, tag }: { label: string; tag?: string }) {
  return (
    <div className="flex items-center gap-2 text-xs font-medium text-white/70">
      <span className="w-1.5 h-1.5 rounded-full bg-white" />
      <span>{label}</span>
      {tag ? (
        <span className="px-2 py-0.5 rounded-full border border-white/10 text-white/50">{tag}</span>
      ) : null}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Shiny gradient headline                                                   */
/* -------------------------------------------------------------------------- */

export const gradientStyle: CSSProperties = {
  backgroundImage:
    'linear-gradient(to right, #1B0A02 0%, #7A2408 12.5%, #D9430E 32.5%, #F5C518 50%, #7A2408 67.5%, #1B0A02 87.5%, #1B0A02 100%)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
  filter: 'url(#c3-noise)',
}
