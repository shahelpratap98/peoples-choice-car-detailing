import { motion } from 'motion/react'
import { Facebook, Star } from 'lucide-react'
import { REVIEWS } from '../data/reviews'
import { BUSINESS } from '../config'
import { SectionEyebrow } from './Primitives'

export default function Reviews() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <SectionEyebrow label="Reviews" tag="From Facebook" />
          <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02]">
            What Auckland says
            <br />
            after we drive off.
          </h2>
        </div>
        <a
          href={BUSINESS.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 py-3 text-sm text-white/60 hover:text-white transition-colors shrink-0"
        >
          <Facebook className="w-4 h-4" />
          Read them all on Facebook
        </a>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.map((review, i) => (
          <motion.figure
            key={review.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="liquid-glass rounded-2xl p-6 flex flex-col"
          >
            <div className="flex items-center gap-1" aria-label="Recommended">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="w-3.5 h-3.5 text-brand" fill="currentColor" />
              ))}
            </div>

            <blockquote className="mt-4 text-sm text-white/80 leading-[1.6] grow">
              &ldquo;{review.quote}&rdquo;
            </blockquote>

            <figcaption className="mt-6 pt-5 border-t border-white/10">
              <div className="text-sm font-semibold">{review.name}</div>
              <div className="mt-1 text-xs text-white/50">
                {review.date}
                {review.vehicle ? ` · ${review.vehicle}` : ''}
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <p className="mt-8 text-xs text-white/40">
        Recommendations published publicly on the {BUSINESS.legalName} Facebook page. Quoted as written.
      </p>
    </section>
  )
}
