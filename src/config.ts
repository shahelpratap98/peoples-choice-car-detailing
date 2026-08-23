/**
 * Single source of truth for every business detail on the site.
 * Change it here and it changes everywhere.
 */

export const BUSINESS = {
  name: 'MR SONS',
  legalName: 'MR SONS Cleaning Service',
  trading: 'MR SONS Car Detailing',
  operator: 'Janish',

  // Verified — printed on the company logo.
  phoneDisplay: '022 510 4885',
  phoneTel: '+64225104885',
  whatsappNumber: '64225104885', // wa.me format: country code, no +, no spaces

  // TODO(launch): CONFIRM WITH JANISH BEFORE GOING LIVE.
  // This address is a placeholder — it has not been verified against the business.
  email: 'mrsonscardetailing@gmail.com',

  // Verified — the page supplied in the brief.
  facebook: 'https://www.facebook.com/MRsonscardetailing',

  region: 'Auckland',
  serviceArea: 'Mobile — greater Auckland',
  hours: 'Mon – Sun · 7am – 7pm',
} as const

export const waLink = (message: string) =>
  `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`

export const mailLink = (subject: string, body = '') =>
  `mailto:${BUSINESS.email}?subject=${encodeURIComponent(subject)}` +
  (body ? `&body=${encodeURIComponent(body)}` : '')

export const DEFAULT_ENQUIRY =
  "Hi Janish, I'd like to book a car detail with MR SONS. My vehicle is a "
