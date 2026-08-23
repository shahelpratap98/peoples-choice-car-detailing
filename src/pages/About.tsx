import { motion } from 'motion/react'
import { Clock, MapPin, MessageSquare, ShieldCheck } from 'lucide-react'
import { BUSINESS } from '../config'
import { SectionEyebrow, gradientStyle } from '../components/Primitives'
import Reviews from '../components/Reviews'
import FinalCTA from '../components/FinalCTA'

const EASE = [0.22, 1, 0.36, 1] as const

const PRINCIPLES = [
  {
    icon: Clock,
    title: 'Time on the tools, not on the clock',
    body: 'A full detail takes three hours or more because that is how long it takes. Customers regularly note three and three and a half hour jobs — that is the standard, not the exception.',
  },
  {
    icon: MessageSquare,
    title: 'You get a straight answer',
    body: 'Messages get replied to. Times get confirmed. If something changes you hear about it first, not after you have moved the car out of the garage.',
  },
  {
    icon: MapPin,
    title: 'We travel to you',
    body: 'The van carries its own water and power, so the job happens at your house, your office or your yard. No drop-off, no waiting room, no half day gone.',
  },
  {
    icon: ShieldCheck,
    title: 'Checked before we leave',
    body: 'Every job ends with a walk around the car together. If something is not right it gets fixed on the spot.',
  },
]

const STATS = [
  { value: '3+ hrs', label: 'Typical time on a full detail' },
  { value: '7 days', label: 'Bookings taken every day of the week' },
  { value: 'Auckland', label: 'Mobile across the whole region' },
  { value: '8 seaters', label: 'Large vehicles and people movers welcome' },
]

const STEPS = [
  {
    n: '01',
    title: 'Message Janish',
    body: 'WhatsApp, a call or Facebook. Tell us the vehicle, the suburb and roughly what state it is in. A photo helps.',
  },
  {
    n: '02',
    title: 'Get a fixed quote',
    body: 'You get a price and a time back, usually the same day. Nothing is booked until you are happy with both.',
  },
  {
    n: '03',
    title: 'We come to you',
    body: 'Park it somewhere we can get around it. We bring the water, the power and every bit of gear the job needs.',
  },
  {
    n: '04',
    title: 'Walk around together',
    body: 'Two to four hours later you look over the car with us in daylight before we pack up.',
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
          <span className="block text-white">Hard graft.</span>
          <span className="block animate-shiny" style={gradientStyle}>
            Done properly
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="mt-8 text-white/60 max-w-lg text-base leading-[1.5]"
        >
          {BUSINESS.legalName} is run by {BUSINESS.operator} — a mobile detailer working across{' '}
          {BUSINESS.region}. One person, one van, and a habit of spending longer on a car than most
          people expect.
        </motion.p>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Story                                                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <SectionEyebrow label="About us" tag={BUSINESS.region} />
            <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02]">
              A car wash cleans it.
              <br />
              A detail resets it.
            </h2>
            <div className="mt-6 space-y-4 text-white/60 text-base leading-[1.65] max-w-md">
              <p>
                Most cars have never actually been cleaned. They have been rinsed, run through a
                brush and vacuumed around the edges — which is why the carpet is still grey, the
                seat rails are still full of grit and the boot still smells like the dog.
              </p>
              <p>
                {BUSINESS.operator} works the other way round. The seats come forward, the mats come
                out, the third row gets the same treatment as the driver&rsquo;s seat, and the paint
                gets a proper two-bucket contact wash instead of a machine full of somebody
                else&rsquo;s dirt.
              </p>
              <p>
                It takes longer. That is the whole point — and it is the thing customers keep
                writing about afterwards.
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
                <div key={p.title} className="liquid-glass rounded-2xl p-5">
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-brand shrink-0" />
                    <h3 className="text-sm font-semibold">{p.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-white/60 leading-[1.6]">{p.body}</p>
                </div>
              )
            })}
          </motion.div>
        </div>
      </section>

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
              <span className="text-xs font-semibold tracking-widest text-brand tabular-nums">
                {step.n}
              </span>
              <h3 className="mt-4 text-base font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-3 text-sm text-white/60 leading-[1.6]">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Reviews />
      <FinalCTA />
    </>
  )
}
