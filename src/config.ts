/**
 * Single source of truth for every business detail on the site.
 * Change it here and it changes everywhere.
 */

export const BUSINESS = {
  name: 'Soft Touch',
  legalName: 'Soft Touch Auto Finishing',
  trading: 'Soft Touch Auto Finishing',

  /* ------------------------------------------------------------------ */
  /*  TODO(launch): EVERY FIELD IN THIS BLOCK IS A PLACEHOLDER.         */
  /*                                                                    */
  /*  The Facebook page is login-walled, so none of it could be read    */
  /*  from the source. Nothing here has been verified against the       */
  /*  business. Confirm all of it before this site is pointed at a      */
  /*  domain or shown to a customer.                                    */
  /* ------------------------------------------------------------------ */

  phoneDisplay: '021 000 0000',
  phoneTel: '+64210000000',
  whatsappNumber: '64210000000', // wa.me format: country code, no +, no spaces
  email: 'hello@softtouchautofinishing.co.nz',

  // The country is an assumption too. NZ formatting is used above only
  // because that is where the other sites in this account operate.

  /* ------------------------------------------------------------------ */

  // Verified — the page supplied in the brief.
  facebook: 'https://www.facebook.com/profile.php?id=100083261346551',

  // Deliberately not naming a city or region anywhere on the site: the
  // location is unknown, and asserting the wrong one is worse than saying
  // nothing. The copy is written to work without it. Add a `region` field
  // and wire it into InfoStrip / Contact / index.html once confirmed.
  serviceArea: 'Mobile service — we come to you',
  hours: 'Mon – Sun · 7am – 7pm', // TODO(launch): confirm
} as const

export const waLink = (message: string) =>
  `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`

export const mailLink = (subject: string, body = '') =>
  `mailto:${BUSINESS.email}?subject=${encodeURIComponent(subject)}` +
  (body ? `&body=${encodeURIComponent(body)}` : '')

export const DEFAULT_ENQUIRY = `Hi ${BUSINESS.name}, I'd like to book a detail. My vehicle is a `
