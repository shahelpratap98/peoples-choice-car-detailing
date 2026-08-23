import { useState } from 'react'
import { PACKAGES } from '../data/services'
import { waLink } from '../config'
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
  const [large, setLarge] = useState(false)

  return (
    <section className="c3-pricing-section">
      <PricingNoiseFilter />

      <div className="c3-watermark-container">
        <div className="c3-watermark-main">
          <span className="c3-watermark-line-1">Your car.</span>
          <span className="c3-watermark-line-2">Revitalized</span>
        </div>
        <p className="mt-6 text-sm text-white/50 max-w-md mx-auto leading-[1.6]">
          Three ways to book. Times shown are hours on the tools at your place — the van carries its
          own water and power, so all we need is somewhere to park.
        </p>
      </div>

      <div className="c3-grid">
        {PACKAGES.map((p) => (
          <article key={p.tier} className={`c3-card${p.pro ? ' c3-card-pro' : ''}`}>
            <div className="relative z-[1]">
              <div className="c3-tier-small">{p.tier}</div>
              <div className="c3-tier-large">{large ? p.timeLarge : p.timeStandard}</div>
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
                `Hi Janish, I'd like to book the ${p.tier} package with MR SONS. My vehicle is a `,
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book this
            </a>
          </article>
        ))}
      </div>

      <div className="c3-toggle-wrap">
        <span id="vehicle-size-label" className="text-sm text-white/70">
          SUV, van or 7 seater
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={large}
          aria-labelledby="vehicle-size-label"
          onClick={() => setLarge((v) => !v)}
          className={`c3-toggle${large ? ' active' : ''}`}
        >
          <span className="c3-toggle-knob" />
        </button>
      </div>

      <p className="mt-6 text-xs text-white/40 max-w-md text-center">
        {/* TODO(launch): swap this line for real pricing once Janish confirms his rates. */}
        Pricing depends on vehicle size and condition. Send a photo on WhatsApp and you&rsquo;ll get a
        fixed quote back before anything is booked.
      </p>
    </section>
  )
}
