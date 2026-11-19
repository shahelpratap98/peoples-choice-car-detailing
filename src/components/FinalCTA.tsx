import { motion } from 'motion/react'
import { Phone } from 'lucide-react'
import { BUSINESS, DEFAULT_ENQUIRY, waLink } from '../config'
import { BrandButton, GhostButton } from './Primitives'

export default function FinalCTA() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-3xl bg-powder text-raven px-8 py-16 md:py-24 text-center"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(700px circle at 50% 0%, rgba(255,255,255,0.55), transparent 70%)',
          }}
        />

        <div className="relative">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02]">
            Park it.
            <br />
            <span className="text-brand">We&rsquo;ll do the rest.</span>
          </h2>

          <p className="mt-6 text-raven/75 max-w-md mx-auto text-sm leading-[1.6]">
            Send through your vehicle and where you are, and you&rsquo;ll get a quote back.
            We&rsquo;re mobile across {BUSINESS.region} and surrounding areas — we come to you.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <BrandButton href={waLink(DEFAULT_ENQUIRY)} label="Book on WhatsApp" />
            <GhostButton
              href={`tel:${BUSINESS.phoneTel}`}
              label={BUSINESS.phoneDisplay}
              icon={<Phone className="w-4 h-4" />}
              tone="light"
            />
          </div>

          <p className="mt-6 text-xs text-raven/70">
            {BUSINESS.serviceArea} · {BUSINESS.hours}
          </p>
        </div>
      </motion.div>
    </section>
  )
}
