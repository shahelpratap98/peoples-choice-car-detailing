import { PACKAGES } from '../data/services'
import { BUSINESS, waLink } from '../config'
import { PricingNoiseFilter } from './Primitives'

function Check() {
  return (
    <span className="c3-check" aria-hidden="true">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
        <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

export default function Packages() {
  return (
    <section className="c3-pricing-section">
      <PricingNoiseFilter />

      <div className="c3-watermark-container">
        <div className="c3-watermark-main">
          <span className="c3-watermark-line-1">Your car,</span>
          <span className="c3-watermark-line-2">our detail.</span>
        </div>
        <p className="mt-6 text-sm text-white/50 max-w-md mx-auto leading-[1.6]">
          Three packages, all done at your place. Every job is quoted first — send the vehicle and
          what it needs, and you&rsquo;ll get a price back before anything is booked.
        </p>
      </div>

      <div className="c3-grid">
        {PACKAGES.map((p) => (
          <article key={p.name} className={`c3-card${p.pro ? ' c3-card-pro' : ''}`}>
            <div className="relative z-[1]">
              <div className="c3-tier-small">{p.kicker}</div>
              <h3 className="c3-tier-large">{p.name}</h3>
              <div className="c3-desc">{p.desc}</div>
            </div>

            <ul className="c3-list">
              {p.features.map((f) => (
                <li key={f}>
                  <Check />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <a
              className="c3-btn"
              href={waLink(
                `Hi ${BUSINESS.name}, I'd like a quote for the ${p.name} package. My vehicle is a `,
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get a quote
            </a>
          </article>
        ))}
      </div>

      <p className="mt-10 text-xs text-white/40 max-w-md text-center">
        {/* TODO(launch): add prices here if the owner wants them published. */}
        Pricing depends on the vehicle and its condition. Call or message {BUSINESS.phoneDisplay} for
        a quote.
      </p>
    </section>
  )
}
