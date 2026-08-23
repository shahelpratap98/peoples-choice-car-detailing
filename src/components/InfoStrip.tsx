import { motion } from 'motion/react'
import { Phone } from 'lucide-react'
import { BUSINESS } from '../config'
import { LogoMark } from './Primitives'

const ITEMS = ['Mobile service', 'We come to you', 'Auckland wide', 'Own water & power', '7 days a week']

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
      className="relative z-10 h-10 bg-black/40 backdrop-blur-md border-t border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between text-xs">
        <div className="flex items-center gap-4">
          <LogoMark className="w-3.5 h-3.5 text-white" />
          <span className="font-bold text-white">MR SONS</span>
          {ITEMS.map((item, i) => (
            <span
              key={item}
              className={`text-white/60 ${i > 1 ? 'hidden sm:inline' : ''} ${
                i > 2 ? 'hidden md:inline' : ''
              }`}
            >
              {item}
            </span>
          ))}
        </div>

        <a
          href={`tel:${BUSINESS.phoneTel}`}
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
          <span className="tabular-nums">{BUSINESS.phoneDisplay}</span>
        </a>
      </div>
    </motion.div>
  )
}
