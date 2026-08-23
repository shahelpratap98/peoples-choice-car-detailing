import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { BUSINESS, DEFAULT_ENQUIRY, waLink } from '../config'
import { BrandButton, SectionEyebrow, gradientStyle } from '../components/Primitives'
import InfoStrip from '../components/InfoStrip'
import Reviews from '../components/Reviews'
import FinalCTA from '../components/FinalCTA'
import { SERVICES } from '../data/services'

const EASE = [0.22, 1, 0.36, 1] as const

const BREAKDOWN = [
  {
    label: 'Exterior',
    count: 6,
    dot: '#ffffff',
    items: ['Two-bucket hand wash', 'Wheels, arches and tyres'],
  },
  {
    label: 'Interior',
    count: 9,
    dot: '#e5e5e5',
    items: ['Strip-out vacuum, all rows', 'Dash, console and door cards'],
  },
  {
    label: 'Deep clean',
    count: 5,
    dot: '#a3a3a3',
    items: ['Seats and carpets shampooed', 'Pet hair and odour treatment'],
  },
  {
    label: 'Finishing',
    count: 4,
    dot: '#525252',
    items: ['Wax layer · Glass · Trim dressing'],
  },
]

const VEHICLES = [
  'Sedans',
  'Hatchbacks',
  'SUVs',
  'Utes',
  'Vans',
  '7 Seaters',
  'People Movers',
  'Work Fleets',
]

export default function Home() {
  const preview = SERVICES.slice(0, 4)

  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* Hero                                                                */}
      {/* ------------------------------------------------------------------ */}
      <section className="max-w-6xl mx-auto px-6 pt-16 md:pt-28 pb-20 text-center flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="text-4xl md:text-7xl font-semibold tracking-tight leading-[0.9]"
        >
          <span className="block text-white">Your car.</span>
          <span className="block animate-shiny" style={gradientStyle}>
            Revitalized
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
          className="mt-8 text-white/60 max-w-md text-base leading-[1.5]"
        >
          {BUSINESS.legalName} is a mobile detailing outfit working across {BUSINESS.region}. We come
          to your driveway with our own water and power, and we do not leave until the car looks like
          it did in the showroom.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <BrandButton href={waLink(DEFAULT_ENQUIRY)} label="Book on WhatsApp" />
          <p className="text-xs text-white/40">
            Mobile service · We come to you · {BUSINESS.hours}
          </p>
        </motion.div>
      </section>

      <InfoStrip />

      {/* ------------------------------------------------------------------ */}
      {/* What a full detail actually covers                                  */}
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
              One visit.
              <br />
              Nothing skipped.
            </h2>
            <p className="mt-6 text-white/60 text-base leading-[1.6] max-w-md">
              Most jobs run two to three and a half hours, in one visit, at your place. Seats come
              forward, mats come out, the third row gets the same attention as the front — the parts
              nobody sees are the parts that make the car feel new again.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {['We come to you', 'Own water & power', '7 days a week', 'Fixed quote first'].map(
                (chip) => (
                  <span
                    key={chip}
                    className="text-xs text-white/70 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]"
                  >
                    {chip}
                  </span>
                ),
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="liquid-glass rounded-2xl p-5"
          >
            <p className="text-xs text-white/50">A Full Detail · 24 checkpoints</p>

            <div className="mt-4 space-y-3">
              {BREAKDOWN.map((group) => (
                <div key={group.label} className="liquid-glass rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2.5 text-sm font-medium">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ background: group.dot }}
                        aria-hidden="true"
                      />
                      {group.label}
                    </span>
                    <span className="text-xs text-white/40 tabular-nums">{group.count}</span>
                  </div>
                  <ul className="mt-2 space-y-1 pl-[18px]">
                    {group.items.map((item) => (
                      <li key={item} className="text-xs text-white/50">
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
        <p className="text-center text-xs uppercase tracking-widest text-white/40">
          Everything on the driveway, from the runabout to the work van
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
            All services
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
                  <Icon className="w-6 h-6 text-brand shrink-0" />
                  <span className="text-xs text-white/40 tabular-nums">{service.duration}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{service.title}</h3>
                <p className="mt-3 text-sm text-white/60 leading-[1.6]">{service.blurb}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      <Reviews />
      <FinalCTA />
    </>
  )
}
