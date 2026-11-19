import { motion } from 'motion/react'
import { Check, Facebook, Instagram } from 'lucide-react'
import { SERVICES } from '../data/services'
import { BUSINESS, DEFAULT_ENQUIRY, waLink } from '../config'
import { BrandButton, SectionEyebrow, gradientStyle } from '../components/Primitives'
import Packages from '../components/Packages'
import FinalCTA from '../components/FinalCTA'

const EASE = [0.22, 1, 0.36, 1] as const

export default function Services() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 pt-16 md:pt-24 pb-12 text-center flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          className="text-4xl md:text-7xl font-semibold tracking-tight leading-[0.9]"
        >
          <span className="block text-white">Every service.</span>
          <span className="block animate-shiny" style={gradientStyle}>
            Detailed
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="mt-8 text-white/60 max-w-lg text-base leading-[1.5]"
        >
          Book a single job or a full package. Everything below is done at your place, anywhere
          in {BUSINESS.region} and surrounding areas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
          className="mt-10"
        >
          <BrandButton href={waLink(DEFAULT_ENQUIRY)} label="Get a quote on WhatsApp" />
        </motion.div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Full service list                                                   */}
      {/* ------------------------------------------------------------------ */}
      <div className="bg-powder text-raven">
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <SectionEyebrow label="Services" tag={`${SERVICES.length} in total`} tone="light" />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.slug}
                id={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: EASE }}
                className="bg-raven text-white rounded-2xl p-6 flex flex-col scroll-mt-24 shadow-xl shadow-raven/20"
              >
                <div className="flex items-start justify-between gap-4">
                  <Icon className="w-6 h-6 text-brand shrink-0" />
                  <span className="text-[10px] uppercase tracking-widest text-white/60 px-2 py-1 rounded-full border border-white/15">
                    {service.tag}
                  </span>
                </div>

                <h2 className="mt-5 text-lg font-semibold tracking-tight">{service.title}</h2>

                <p className="mt-3 text-sm text-white/60 leading-[1.6]">{service.blurb}</p>

                <ul className="mt-5 space-y-2 grow">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs text-white/70">
                      <Check className="w-3.5 h-3.5 mt-px shrink-0 text-powder" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(
                    `Hi ${BUSINESS.name}, I'm interested in ${service.title}. My vehicle is a `,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-full border border-white/15 text-white text-sm font-medium px-5 py-3 transition-colors hover:bg-white/5"
                >
                  Enquire
                </a>
              </motion.article>
            )
          })}
        </div>
      </section>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Packages                                                            */}
      {/* ------------------------------------------------------------------ */}
      <Packages />

      {/* ------------------------------------------------------------------ */}
      {/* Facebook                                                            */}
      {/* ------------------------------------------------------------------ */}
      <section className="max-w-6xl mx-auto px-6 pb-8">
        <div className="liquid-glass rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">See the work as it happens</h2>
            <p className="mt-2 text-sm text-white/60 leading-[1.6] max-w-lg">
              Before and after photos and reels from recent jobs go straight onto the{' '}
              {BUSINESS.name} Facebook page and Instagram ({BUSINESS.instagramHandle}).
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={BUSINESS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black text-sm font-medium px-5 py-3 transition-colors hover:bg-white/90"
            >
              <Facebook className="w-4 h-4" />
              Facebook
            </a>
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 text-white text-sm font-medium px-5 py-3 transition-colors hover:bg-white/5"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
