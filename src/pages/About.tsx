import { motion } from 'motion/react'
import { Award, MapPin, MessageSquare, Sparkles } from 'lucide-react'
import { BUSINESS } from '../config'
import { SectionEyebrow, gradientStyle } from '../components/Primitives'
import FinalCTA from '../components/FinalCTA'

const EASE = [0.22, 1, 0.36, 1] as const

/**
 * Everything on this page is drawn from the business's own Facebook and
 * Instagram pages (read 19 Nov 2026). See src/config.ts for the sources.
 */
const PRINCIPLES = [
  {
    icon: MapPin,
    title: 'We come to you',
    body: `A mobile service covering ${BUSINESS.region} and surrounding areas. Home, work or yard — the job happens where the car is.`,
  },
  {
    icon: Award,
    title: 'More than eight years in the trade',
    body: 'Over eight years of car grooming and detailing experience goes into every job, from a quick maintenance valet to a full paint correction.',
  },
  {
    icon: Sparkles,
    title: 'The hard cases are welcome',
    body: 'Baked-on cement, moss, tar, mould in the hood lining, pet hair, foggy headlights. If it can be brought back, we will bring it back.',
  },
  {
    icon: MessageSquare,
    title: 'Quoted before it is booked',
    body: 'Call, text or message with the vehicle and what it needs, and you get a quote first.',
  },
]

const STATS = [
  { value: BUSINESS.experience, label: 'Car detailing experience' },
  { value: BUSINESS.rating, label: 'Rating on Facebook' },
  { value: BUSINESS.recommend, label: 'Recommend us on Facebook' },
  { value: 'Mobile', label: `${BUSINESS.region} & surrounding areas` },
]

const STEPS = [
  {
    n: '01',
    title: 'Get in touch',
    body: 'Call, text, WhatsApp or message us on Facebook. Tell us the vehicle, where you are and what it needs. A photo helps.',
  },
  {
    n: '02',
    title: 'Get a quote',
    body: 'Every job is quoted on the vehicle and its condition before anything is booked.',
  },
  {
    n: '03',
    title: 'We come to you',
    body: `We are a mobile detailer. The work is done at your place, anywhere in ${BUSINESS.region} and surrounding areas.`,
  },
  {
    n: '04',
    title: 'Back to its best',
    body: 'No drop-off and no pick-up. The car is finished where it is parked.',
  },
]

export default function About() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 pt-16 md:pt-24 pb-12 text-center flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          className="text-4xl md:text-7xl font-semibold tracking-tight leading-[0.9]"
        >
          <span className="block text-white">Quality service.</span>
          <span className="block animate-shiny pb-2" style={gradientStyle}>
            Great results.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="mt-8 text-white/60 max-w-lg text-base leading-[1.5]"
        >
          {BUSINESS.legalName} is a locally owned mobile detailer in {BUSINESS.region}, with more
          than eight years of experience in car grooming and detailing.
        </motion.p>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Story                                                               */}
      {/* ------------------------------------------------------------------ */}
      {/* Powder-blue band: black type, solid black cards, red accents. */}
      <div className="bg-powder text-raven">
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <SectionEyebrow label="About us" tag={BUSINESS.region} tone="light" />
            <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02]">
              A wash cleans it.
              <br />
              <span className="text-brand">A detail resets it.</span>
            </h2>
            <div className="mt-6 space-y-4 text-raven/75 text-base leading-[1.65] max-w-md">
              <p>
                We are a mobile car detailer, so the work comes to you — a driveway in Te Kamo, a
                home in Glenbervie, a workplace in town. The car never has to leave to come back
                looking its best.
              </p>
              <p>
                The jobs range from a maintenance valet that keeps a luxury car in prime condition
                to bringing a forestry ute back, inside and out. Then there are the awkward ones:
                baked-on cement, moss, mould in the hood lining, pet hair, and foggy headlights that
                have failed a WOF.
              </p>
              <p>
                What we aim for on every one of them is the same: quality service, satisfied
                customers and great results.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="grid gap-4"
          >
            {PRINCIPLES.map((p) => {
              const Icon = p.icon
              return (
                <div
                  key={p.title}
                  className="bg-raven text-white rounded-2xl p-5 shadow-xl shadow-raven/20"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-brand shrink-0" />
                    <h3 className="text-sm font-semibold">{p.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-white/70 leading-[1.6]">{p.body}</p>
                </div>
              )
            })}
          </motion.div>
        </div>
      </section>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Stats                                                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
              className="liquid-glass rounded-2xl p-6"
            >
              <div className="text-2xl md:text-3xl font-semibold tracking-tight">{stat.value}</div>
              <p className="mt-2 text-xs text-white/50 leading-[1.5]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* How it works                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 border-t border-white/10">
        <SectionEyebrow label="How it works" />
        <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02]">
          Four steps, start
          <br />
          to spotless.
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
              className="liquid-glass rounded-2xl p-6"
            >
              <span className="text-xs font-semibold tracking-widest text-powder tabular-nums">
                {step.n}
              </span>
              <h3 className="mt-4 text-base font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-3 text-sm text-white/60 leading-[1.6]">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
