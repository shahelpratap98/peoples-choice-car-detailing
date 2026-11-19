/**
 * Single source of truth for every business detail on the site.
 * Change it here and it changes everywhere.
 *
 * SOURCING — read on 19 Nov 2026:
 *   [FB]     the business's own Facebook page (About + Contact info + posts)
 *   [Google] the Google results page for "peoples choice car detailing"
 *   [Yellow] the Yellow NZ directory listing (third-party, may be stale)
 */

export const BUSINESS = {
  name: "People's Choice",
  legalName: "People's Choice Car Detailing",

  // [FB] Contact info — phone, WhatsApp and email are all listed there.
  phoneDisplay: '027 231 6818',
  phoneTel: '+64272316818',
  whatsappNumber: '64272316818', // wa.me format: country code, no +, no spaces
  email: 'pccarvalet@gmail.com',

  // [FB] the page itself, and the Instagram handle it links to.
  facebook: 'https://www.facebook.com/profile.php?id=100063696067611',
  instagram: 'https://www.instagram.com/pccar_detailing/',
  instagramHandle: '@pccar_detailing',

  // [FB] "Whangarei, New Zealand" as both address and service area; posts say
  // "Whangārei & surrounding areas" and name jobs in Te Kamo and Glenbervie.
  region: 'Whangārei',
  serviceArea: 'Mobile — Whangārei & surrounding areas',

  // [Yellow] TODO(launch): confirm with the owner. Facebook only says "Open now".
  hours: 'Mon – Fri 8:30am – 4:30pm · Sat 9am – 3pm',

  // [FB/Instagram bio] "more than 8 years experience of car detailing".
  experience: '8+ years',

  // [Google] Facebook result shows 5.0 and "100% recommend (8 reviews)".
  // The review text itself is not publicly readable, so no quotes are used.
  rating: '5.0',
  recommend: '100%',
} as const

export const waLink = (message: string) =>
  `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`

export const mailLink = (subject: string, body = '') =>
  `mailto:${BUSINESS.email}?subject=${encodeURIComponent(subject)}` +
  (body ? `&body=${encodeURIComponent(body)}` : '')

export const DEFAULT_ENQUIRY = `Hi ${BUSINESS.name}, I'd like a quote for a car detail. My vehicle is a `
