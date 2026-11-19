import { Link } from 'react-router-dom'
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import { BUSINESS, DEFAULT_ENQUIRY, mailLink, waLink } from '../config'
import { LogoMark, WhatsAppIcon, Wordmark } from './Primitives'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark className="w-9 h-9 text-white" />
            <Wordmark />
          </div>
          <p className="mt-5 text-sm text-white/50 leading-[1.6] max-w-xs">
            {BUSINESS.legalName}. Quality car grooming and detailing in {BUSINESS.region} — we
            come to you.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-xs uppercase tracking-widest text-white/40">Pages</h2>
          <ul className="mt-2 text-sm">
            <li>
              <Link to="/" className="block py-2.5 text-white/70 hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="block py-2.5 text-white/70 hover:text-white transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="block py-2.5 text-white/70 hover:text-white transition-colors">
                About us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2.5 text-white/70 hover:text-white transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-xs uppercase tracking-widest text-white/40">Get in touch</h2>
          <ul className="mt-2 text-sm">
            <li>
              <a
                href={waLink(DEFAULT_ENQUIRY)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2.5 text-white/70 hover:text-white transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={`tel:${BUSINESS.phoneTel}`}
                className="flex items-center gap-2 py-2.5 text-white/70 hover:text-white transition-colors tabular-nums"
              >
                <Phone className="w-4 h-4" />
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={mailLink('Car detailing enquiry')}
                className="flex items-center gap-2 py-2.5 text-white/70 hover:text-white transition-colors break-all"
              >
                <Mail className="w-4 h-4 shrink-0" />
                {BUSINESS.email}
              </a>
            </li>
            <li>
              <a
                href={BUSINESS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2.5 text-white/70 hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </a>
            </li>
            <li>
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2.5 text-white/70 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs uppercase tracking-widest text-white/40">Where & when</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-white/40" />
              {BUSINESS.serviceArea}
            </li>
            <li className="text-white/70">{BUSINESS.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS.legalName}. All rights reserved.
          </p>
          <p>{BUSINESS.region}, New Zealand</p>
        </div>
      </div>
    </footer>
  )
}
