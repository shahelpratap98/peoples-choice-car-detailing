import { motion } from 'motion/react'
import { Phone } from 'lucide-react'
import { BUSINESS } from '../config'
import { LogoMark } from './Primitives'

const ITEMS = ['Mobile service', 'We come to you', `${BUSINESS.region} & surrounds`, `${BUSINESS.experience} experience`]

/**
 * Thin full-bleed status strip. Same construction as the macOS menu bar in the
 * reference design, carrying the details a customer actually scans for.
 */
export default function InfoStrip() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' }}
      className="relative z-10 h-10 bg-brand"
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between text-xs">
        <div className="flex items-center gap-4">
          <LogoMark className="w-3.5 h-3.5" primary="#ffffff" accent="#080402" />
          <span className="font-bold text-white">{BUSINESS.name}</span>
          {ITEMS.map((item, i) => (
            <span
              key={item}
              className={`text-white ${i > 1 ? 'hidden sm:inline' : ''} ${
                i > 2 ? 'hidden md:inline' : ''
              }`}
            >
              {item}
            </span>
          ))}
        </div>

        <a
          href={`tel:${BUSINESS.phoneTel}`}
          className="h-full flex items-center gap-2 font-semibold text-white hover:underline underline-offset-4"
        >
          <Phone className="w-3.5 h-3.5" />
          <span className="tabular-nums">{BUSINESS.phoneDisplay}</span>
        </a>
      </div>
    </motion.div>
  )
}
