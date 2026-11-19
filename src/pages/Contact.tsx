import { useState, type FormEvent } from 'react'
import { motion } from 'motion/react'
import { Clock, Facebook, Mail, MapPin, Phone } from 'lucide-react'
import { BUSINESS, mailLink, waLink } from '../config'
import { SectionEyebrow, WhatsAppIcon, gradientStyle } from '../components/Primitives'
import { SERVICES } from '../data/services'

const EASE = [0.22, 1, 0.36, 1] as const

type Fields = {
  name: string
  phone: string
  vehicle: string
  suburb: string
  service: string
  notes: string
}

const EMPTY: Fields = {
  name: '',
  phone: '',
  vehicle: '',
  suburb: '',
  service: 'Not sure yet',
  notes: '',
}

const REQUIRED: (keyof Fields)[] = ['name', 'phone', 'vehicle', 'suburb']

const LABELS: Record<keyof Fields, string> = {
  name: 'Your name',
  phone: 'Best contact number',
  vehicle: 'Vehicle',
  suburb: 'Suburb',
  service: 'What do you need?',
  notes: 'Anything else',
}

/** Turns the form into a plain-text message for WhatsApp or email. */
function composeMessage(f: Fields) {
  const lines = [
    `Hi ${BUSINESS.name}, I'd like a quote for a detail.`,
    '',
    `Name: ${f.name}`,
    `Phone: ${f.phone}`,
    `Vehicle: ${f.vehicle}`,
    `Suburb: ${f.suburb}`,
    `Service: ${f.service}`,
  ]
  if (f.notes.trim()) lines.push(`Notes: ${f.notes.trim()}`)
  return lines.join('\n')
}

export default function Contact() {
  const [fields, setFields] = useState<Fields>(EMPTY)
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({})

  const set = (key: keyof Fields) => (value: string) => {
    setFields((f) => ({ ...f, [key]: value }))
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const validate = () => {
    const next: Partial<Record<keyof Fields, string>> = {}
    for (const key of REQUIRED) {
      if (!fields[key].trim()) next[key] = `${LABELS[key]} is required.`
    }
    setErrors(next)
    const first = REQUIRED.find((k) => next[k])
    if (first) document.getElementById(first)?.focus()
    return Object.keys(next).length === 0
  }

  const send = (channel: 'whatsapp' | 'email') => (event: FormEvent) => {
    event.preventDefault()
    if (!validate()) return

    const message = composeMessage(fields)
    const url =
      channel === 'whatsapp'
        ? waLink(message)
        : mailLink(`Detailing enquiry — ${fields.vehicle}`, message)

    window.open(url, channel === 'whatsapp' ? '_blank' : '_self', 'noopener,noreferrer')
  }

  const CHANNELS = [
    {
      icon: <WhatsAppIcon className="w-5 h-5" />,
      title: 'WhatsApp',
      detail: BUSINESS.phoneDisplay,
      note: 'Send a photo of the car and what it needs for a quote.',
      href: waLink(`Hi ${BUSINESS.name}, I'd like a quote for a car detail.`),
      external: true,
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Call or text',
      detail: BUSINESS.phoneDisplay,
      note: 'Call or text for a quote, or to book your spot.',
      href: `tel:${BUSINESS.phoneTel}`,
      external: false,
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Email',
      detail: BUSINESS.email,
      note: 'For fleet enquiries, or anything that needs more detail.',
      href: mailLink('Car detailing enquiry'),
      external: false,
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      title: 'Facebook',
      detail: BUSINESS.legalName,
      note: 'Before and after photos from recent jobs, and Messenger.',
      href: BUSINESS.facebook,
      external: true,
    },
  ]

  return (
    <>
      <section className="max-w-6xl mx-auto px-6 pt-16 md:pt-24 pb-12 text-center flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          className="text-4xl md:text-7xl font-semibold tracking-tight leading-[0.9]"
        >
          <span className="block text-white">Get in touch.</span>
          <span className="block animate-shiny" style={gradientStyle}>
            Get it booked
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="mt-8 text-white/60 max-w-md text-base leading-[1.5]"
        >
          Tell us the vehicle and where you are, and you will get a quote back. We are mobile
          across {BUSINESS.region} and surrounding areas.
        </motion.p>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Channels                                                            */}
      {/* ------------------------------------------------------------------ */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CHANNELS.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.href}
              {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
              className="liquid-glass rounded-2xl p-6 block transition-transform hover:-translate-y-1"
            >
              <span className="text-powder inline-flex">{c.icon}</span>
              <h2 className="mt-4 text-base font-semibold tracking-tight">{c.title}</h2>
              <p className="mt-1 text-sm text-white/80 break-all">{c.detail}</p>
              <p className="mt-3 text-xs text-white/50 leading-[1.5]">{c.note}</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Form                                                                */}
      {/* ------------------------------------------------------------------ */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-2">
            <SectionEyebrow label="Booking request" />
            <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              Send the details
              <br />
              in one go.
            </h2>
            <p className="mt-6 text-white/60 text-sm leading-[1.65]">
              Fill this in once and send it whichever way suits you. Nothing is stored on this site —
              the form simply opens WhatsApp or your email app with the message already written.
            </p>

            <ul className="mt-8 space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-white/40" />
                {BUSINESS.serviceArea}
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-white/40" />
                {BUSINESS.hours}
              </li>
            </ul>
          </div>

          <form
            noValidate
            onSubmit={send('whatsapp')}
            className="lg:col-span-3 liquid-glass rounded-2xl p-6 md:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                id="name"
                label={LABELS.name}
                required
                value={fields.name}
                onChange={set('name')}
                error={errors.name}
                autoComplete="name"
                placeholder="Jane Smith"
              />
              <Field
                id="phone"
                label={LABELS.phone}
                required
                type="tel"
                value={fields.phone}
                onChange={set('phone')}
                error={errors.phone}
                autoComplete="tel"
                placeholder="021 123 4567"
              />
              <Field
                id="vehicle"
                label={LABELS.vehicle}
                required
                value={fields.vehicle}
                onChange={set('vehicle')}
                error={errors.vehicle}
                hint="Make, model and roughly how many seats."
                placeholder="2019 Mitsubishi ASX"
              />
              <Field
                id="suburb"
                label={LABELS.suburb}
                required
                value={fields.suburb}
                onChange={set('suburb')}
                error={errors.suburb}
                autoComplete="address-level2"
                placeholder="Kensington"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="service" className="block text-xs font-medium text-white/70">
                {LABELS.service}
              </label>
              <select
                id="service"
                value={fields.service}
                onChange={(e) => set('service')(e.target.value)}
                className="mt-2 w-full min-h-[44px] rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white outline-none transition-colors focus:border-powder"
              >
                <option className="bg-[#111]">Not sure yet</option>
                {SERVICES.map((s) => (
                  <option key={s.slug} className="bg-[#111]">
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-5">
              <label htmlFor="notes" className="block text-xs font-medium text-white/70">
                {LABELS.notes}
              </label>
              <textarea
                id="notes"
                rows={4}
                value={fields.notes}
                onChange={(e) => set('notes')(e.target.value)}
                placeholder="Dog hair in the boot, coffee on the back seat, needs doing before Friday…"
                className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-powder resize-y"
              />
              <p className="mt-2 text-xs text-white/40">
                Stains, pet hair or a deadline — the more we know, the tighter the quote.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand text-white font-medium text-sm px-5 py-3 transition-all hover:bg-[#c4081b] active:scale-[0.98] cursor-pointer grow"
              >
                <WhatsAppIcon />
                Send on WhatsApp
              </button>
              <button
                type="button"
                onClick={send('email')}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 text-white text-sm font-medium px-5 py-3 transition-all hover:bg-white/5 active:scale-[0.98] cursor-pointer grow"
              >
                <Mail className="w-4 h-4" />
                Send by email
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

/* -------------------------------------------------------------------------- */

function Field({
  id,
  label,
  value,
  onChange,
  error,
  required = false,
  type = 'text',
  hint,
  placeholder,
  autoComplete,
}: {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
  error?: string
  required?: boolean
  type?: string
  hint?: string
  placeholder?: string
  autoComplete?: string
}) {
  const describedBy = [hint ? `${id}-hint` : null, error ? `${id}-error` : null]
    .filter(Boolean)
    .join(' ')

  return (
    <div>
      <label htmlFor={id} className="block text-xs font-medium text-white/70">
        {label}
        {required ? (
          <span className="text-powder" aria-hidden="true">
            {' '}
            *
          </span>
        ) : null}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy || undefined}
        onChange={(e) => onChange(e.target.value)}
        className={`mt-2 w-full min-h-[44px] rounded-lg border bg-white/[0.04] px-3 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-powder ${
          error ? 'border-red-400' : 'border-white/10'
        }`}
      />
      {hint ? (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-white/40">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs text-red-300">
          {error}
        </p>
      ) : null}
    </div>
  )
}
