import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight, Phone, Star } from 'lucide-react'
import { BUSINESS, DEFAULT_ENQUIRY, waLink } from '../config'
import { BrandButton, GhostButton, SectionEyebrow, gradientStyle } from '../components/Primitives'
import InfoStrip from '../components/InfoStrip'
import FinalCTA from '../components/FinalCTA'
import { SERVICES } from '../data/services'

const EASE = [0.22, 1, 0.36, 1] as const

/**
 * The hero photograph is an AI-generated illustration in the client's three
 * brand colours (raven black, powder blue, poppy red). It is NOT a photo of
 * the business's own work — replace it with one when there is a good shot.
 */
const HERO_IMAGE = '/hero-m3.webp'
const HERO_ALT = 'A freshly detailed red BMW M3 under powder-blue studio lights'

/** Everything here is on the business's own Facebook page. */
const BREAKDOWN = [
  {
    label: 'Valet',
    dot: '#E0091F',
    items: ['Full valet', 'Maintenance valet', 'Fleet maintenance'],
  },
  {
    label: 'Paint',
    dot: '#B6DFF5',
    items: ['Cut and polish, one-step or two-step', 'Paint correction', 'Wash and wax'],
  },
  {
    label: 'Interior',
    dot: '#ffffff',
    items: [
      'Seats shampooing',
      'Leather steam clean and treatment',
      'Pet hair, odour and ozone treatment',
    ],
  },
  {
    label: 'Restoration',
    dot: '#8a8a8a',
    items: [
      'Headlight restoration',
      'Hood lining and mould removal',
      'Vinyl, wrap and sticker removal',
    ],
  },
]

const VEHICLES = ['Hatchbacks', 'Sedans', 'SUVs', 'Utes', 'Vans', 'Luxury', 'EVs', 'Fleets']

const CHIPS = [
  'We come to you',
  'Call for a quote',
  `${BUSINESS.region} & surrounds`,
  `${BUSINESS.experience} experience`,
]

export default function Home() {
  const preview = SERVICES.slice(0, 4)

  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* Hero                                                                */}
      {/* The section is pulled up underneath the navbar so the photograph     */}
      {/* runs edge to edge behind it.                                        */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative -mt-[76px] overflow-hidden">
        {/* Desktop: the photograph is anchored bottom-right and never wider than
            its native 1344px, so it stays sharp. Its left and top edges are
            masked to transparent (see .hero-mask) so it melts into the page
            and the car always sits clear of the headline. */}
        <div className="hidden lg:block absolute right-0 bottom-0 w-[80%] max-w-[1240px] pointer-events-none">
          <img
            src={HERO_IMAGE}
            alt={HERO_ALT}
            width={1344}
            height={752}
            className="hero-mask w-full h-auto"
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 pt-[calc(76px+3.5rem)] lg:pt-[calc(76px+6.5rem)] pb-10 lg:pb-40 lg:min-h-[740px]">
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left flex flex-col items-center lg:items-start">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
              className="text-xs font-semibold uppercase tracking-[0.22em] text-powder"
            >
              Mobile car detailing · {BUSINESS.region}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
              className="mt-5 text-5xl md:text-7xl font-semibold tracking-tight leading-[0.92]"
            >
              <span className="block text-white">Your car,</span>
              <span className="block animate-shiny pb-2" style={gradientStyle}>
                our detail.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
              className="mt-6 text-white/70 max-w-md text-base leading-[1.55]"
            >
              {BUSINESS.legalName} is {BUSINESS.region}&rsquo;s mobile car detailer, with more than
              eight years of experience. Full valets, cut and polish, headlight restoration and
              more — we come to you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
              className="mt-9 flex flex-col sm:flex-row items-center gap-3"
            >
              <BrandButton href={waLink(DEFAULT_ENQUIRY)} label="Get a quote on WhatsApp" />
              <GhostButton
                href={`tel:${BUSINESS.phoneTel}`}
                label={BUSINESS.phoneDisplay}
                icon={<Phone className="w-4 h-4" />}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
              className="mt-7 flex items-center gap-3 text-xs text-white/60"
            >
              <span className="flex items-center gap-0.5 text-powder" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </span>
              <span>
                {BUSINESS.rating} on Facebook · {BUSINESS.recommend} recommend
              </span>
            </motion.div>
          </div>
        </div>

        {/* Phone and tablet: the photograph sits under the copy, cropped to the car */}
        <div className="lg:hidden">
          <img
            src={HERO_IMAGE}
            alt={HERO_ALT}
            width={1344}
            height={752}
            className="hero-mask-y w-full aspect-[4/3] sm:aspect-[16/9] object-cover object-[72%_center]"
          />
        </div>
      </section>

      <InfoStrip />

      {/* ------------------------------------------------------------------ */}
      {/* What the work covers                                                */}
      {/* ------------------------------------------------------------------ */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <SectionEyebrow label="The work" tag="Mobile" />
            <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02]">
              Your one-stop
              <br />
              mobile detailer.
            </h2>
            <p className="mt-6 text-white/60 text-base leading-[1.6] max-w-md">
              From a maintenance valet on a daily driver to a two-step cut and polish, the work
              happens at your place. The hard cases are welcome too — baked-on cement, moss, pet
              hair, mould in the hood lining, and foggy headlights that have failed a WOF.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="text-xs text-white/70 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="liquid-glass rounded-2xl p-5"
          >
            <p className="text-xs text-white/50">What we do · {SERVICES.length} services</p>

            <div className="mt-4 space-y-3">
              {BREAKDOWN.map((group) => (
                <div key={group.label} className="liquid-glass rounded-lg p-3">
                  <span className="flex items-center gap-2.5 text-sm font-medium">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: group.dot }}
                      aria-hidden="true"
                    />
                    {group.label}
                  </span>
                  <ul className="mt-2 space-y-1 pl-[18px]">
                    {group.items.map((item) => (
                      <li key={item} className="text-xs text-white/60">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Vehicles                                                            */}
      {/* ------------------------------------------------------------------ */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <p className="text-center text-xs uppercase tracking-widest text-white/50">
          From forestry utes to luxury EVs
        </p>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {VEHICLES.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="text-center text-sm font-semibold tracking-tight text-white/50 hover:text-white transition-colors"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Services preview                                                    */}
      {/* ------------------------------------------------------------------ */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <SectionEyebrow label="Services" />
            <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02]">
              Book what the car
              <br />
              actually needs.
            </h2>
          </div>
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 py-3 text-sm text-white/60 hover:text-white transition-colors shrink-0"
          >
            All {SERVICES.length} services
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-[2px]" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {preview.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease: EASE }}
                className="liquid-glass rounded-2xl p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <Icon className="w-6 h-6 text-powder shrink-0" />
                  <span className="text-xs text-white/50">{service.tag}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{service.title}</h3>
                <p className="mt-3 text-sm text-white/60 leading-[1.6]">{service.blurb}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
