import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'motion/react'
import { Menu, Phone, X } from 'lucide-react'
import { BUSINESS, DEFAULT_ENQUIRY, waLink } from '../config'
import { BrandButton, LogoMark, Wordmark } from './Primitives'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const EXIT_MS = 180

export default function Navbar() {
  const [open, setOpen] = useState(false)
  /**
   * Presence is tracked explicitly rather than with AnimatePresence: its
   * exit-complete callback did not fire reliably here, which left an invisible
   * full-screen panel mounted and swallowing every tap on mobile.
   */
  const [mounted, setMounted] = useState(false)
  const { pathname } = useLocation()

  // Close whenever the route changes.
  useEffect(() => setOpen(false), [pathname])

  // Mount immediately on open; unmount only after the fade-out has finished.
  useEffect(() => {
    if (open) {
      setMounted(true)
      return
    }
    const timer = window.setTimeout(() => setMounted(false), EXIT_MS)
    return () => window.clearTimeout(timer)
  }, [open])

  // Lock body scroll and allow Escape to dismiss while the menu is open.
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-30 max-w-6xl mx-auto px-6 pt-6 flex items-center justify-between"
        aria-label="Primary"
      >
        <NavLink to="/" className="flex items-center gap-3 py-1" aria-label={`${BUSINESS.name} home`}>
          <LogoMark className="w-9 h-9 text-white" />
          <Wordmark />
        </NavLink>

        <div className="hidden md:flex gap-8">
          {LINKS.map((link, i) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.05, ease: 'easeOut' }}
            >
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-white' : 'text-white/70 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </motion.div>
          ))}
        </div>

        <div className="hidden md:block">
          <BrandButton href={waLink(DEFAULT_ENQUIRY)} label="Book on WhatsApp" />
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="md:hidden w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center cursor-pointer transition-colors hover:bg-white/10"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Menu className="w-5 h-5" />
        </button>
      </motion.nav>

      {mounted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: open ? 1 : 0 }}
          transition={{ duration: open ? 0.25 : EXIT_MS / 1000, ease: 'easeOut' }}
          className={`fixed inset-0 z-50 md:hidden bg-black/80 backdrop-blur-xl ${
            open ? '' : 'pointer-events-none'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="px-6 pt-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <LogoMark className="w-9 h-9 text-white" />
              <Wordmark />
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="px-6 mt-12 flex flex-col gap-2">
            {LINKS.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.05 + i * 0.04, ease: 'easeOut' }}
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `block py-4 text-3xl font-semibold tracking-tight transition-colors ${
                      isActive ? 'text-white' : 'text-white/50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
          </div>

          <div className="px-6 mt-10 flex flex-col gap-3">
            <BrandButton href={waLink(DEFAULT_ENQUIRY)} label="Book on WhatsApp" full />
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-white/15 text-white text-sm font-medium px-5 py-3 hover:bg-white/5"
            >
              <Phone className="w-4 h-4" />
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </motion.div>
      ) : null}
    </>
  )
}
