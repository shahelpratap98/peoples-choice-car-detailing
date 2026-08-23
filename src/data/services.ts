import {
  Armchair,
  Car,
  CircleDot,
  Dog,
  Droplets,
  Gauge,
  ShieldCheck,
  SprayCan,
  Sun,
  Truck,
  Wind,
  type LucideIcon,
} from 'lucide-react'

/**
 * NOTE ON SOURCING
 * ----------------
 * The MR SONS Facebook page is login-walled, so its service list could not be
 * read programmatically. Everything below is built from what the public
 * recommendations on that page actually evidence — mobile service, 2–3.5 hour
 * full cleans, dog hair and odour removal, 7 and 8 seaters — plus the standard
 * scope of a NZ mobile detailing job.
 *
 * TODO(launch): have Janish confirm this list and add real prices.
 */

export type Service = {
  slug: string
  title: string
  duration: string
  blurb: string
  includes: string[]
  icon: LucideIcon
  featured?: boolean
}

export const SERVICES: Service[] = [
  {
    slug: 'full-detail',
    title: 'Full Interior & Exterior Detail',
    duration: '3 – 3.5 hrs',
    blurb:
      'The job most customers book. Every panel, every seat, every vent — the car leaves looking better than the day it was bought.',
    includes: [
      'Hand wash, dry and wax',
      'Wheels, arches and tyre dressing',
      'Full interior vacuum and blow-out',
      'Seats, carpets and mats shampooed',
      'Dash, console and door cards detailed',
      'Interior and exterior glass',
    ],
    icon: Sun,
    featured: true,
  },
  {
    slug: 'interior-deep-clean',
    title: 'Interior Deep Clean',
    duration: '2 – 3 hrs',
    blurb:
      'For cars that live hard. School runs, work gear, spilled coffee, sand in the carpet — all of it lifted out.',
    includes: [
      'Full strip-out vacuum, seats and boot',
      'Seat and carpet shampoo',
      'Plastics, vinyl and trim cleaned',
      'Vents, cupholders and seat rails',
      'Interior glass streak-free',
    ],
    icon: Armchair,
  },
  {
    slug: 'exterior-wash-wax',
    title: 'Exterior Wash & Wax',
    duration: '1 – 1.5 hrs',
    blurb:
      'A proper two-bucket hand wash and wax. No automatic brushes, no swirl marks, no shortcuts.',
    includes: [
      'Pre-rinse and two-bucket hand wash',
      'Wheels, barrels and arches',
      'Tyre and trim dressing',
      'Protective wax layer',
      'Windows and mirrors',
    ],
    icon: Droplets,
  },
  {
    slug: 'pet-hair-odour',
    title: 'Pet Hair & Odour Removal',
    duration: '+1 hr on any detail',
    blurb:
      'Dog hair worked out of the weave rather than skimmed off the top, then the smell treated at the source.',
    includes: [
      'Mechanical hair lift from carpet and seats',
      'Boot and cargo area included',
      'Odour treatment through the cabin',
      'Air vents and recirculation path',
    ],
    icon: Dog,
  },
  {
    slug: 'large-vehicles',
    title: '7 & 8 Seater Detailing',
    duration: '3 – 4 hrs',
    blurb:
      'SUVs, people movers and vans. Third row folded out and done properly, not reached over.',
    includes: [
      'All rows moved through full travel',
      'Third-row carpet and seat backs',
      'Boot liner and cargo space',
      'Full exterior to match',
    ],
    icon: Car,
  },
  {
    slug: 'seat-carpet-shampoo',
    title: 'Seat & Carpet Shampoo',
    duration: '1.5 – 2 hrs',
    blurb:
      'Hot extraction on fabric seats and carpets. Stains, marks and the grey film that vacuuming will never touch.',
    includes: [
      'Fabric seats front and rear',
      'Carpets and floor mats',
      'Stain treatment where possible',
      'Extracted damp, not soaked',
    ],
    icon: SprayCan,
  },
  {
    slug: 'pre-sale-prep',
    title: 'Pre-Sale & End-of-Lease Prep',
    duration: '3 – 4 hrs',
    blurb:
      'Presentation detail before the listing photos or the lease handback. A clean car photographs — and sells — for more.',
    includes: [
      'Full interior and exterior detail',
      'Engine bay tidy-up',
      'Glass, badges and door shuts',
      'Ready for photos on collection',
    ],
    icon: ShieldCheck,
  },
  {
    slug: 'fleet',
    title: 'Fleet & Work Vehicles',
    duration: 'By arrangement',
    blurb:
      'Utes, vans and company cars cleaned on site at your yard or office, on a schedule that suits the crew.',
    includes: [
      'On-site at your premises',
      'Multiple vehicles per visit',
      'Regular scheduling available',
      'Invoiced to the business',
    ],
    icon: Truck,
  },
]

/* -------------------------------------------------------------------------- */
/*  Packages                                                                  */
/* -------------------------------------------------------------------------- */

export type Package = {
  tier: string
  /** Time on the tools for a sedan / hatch. */
  timeStandard: string
  /** Time on the tools for an SUV, 7 seater or van. */
  timeLarge: string
  desc: string
  features: string[]
  pro?: boolean
}

/**
 * TODO(launch): prices are deliberately absent — none were available from the
 * Facebook page, and quoting a real business's rates without confirmation would
 * be misleading. Add a `price` field here once Janish confirms them.
 */
export const PACKAGES: Package[] = [
  {
    tier: 'Express Refresh',
    timeStandard: '1.5 hrs',
    timeLarge: '2 hrs',
    desc: 'For a car that is already in good order and just needs bringing back up.',
    features: [
      'Two-bucket exterior hand wash',
      'Wheels, arches and tyre dressing',
      'Interior vacuum, front and rear',
      'Dash, console and door wipe-down',
      'Interior and exterior glass',
    ],
  },
  {
    tier: 'Full Detail',
    timeStandard: '3 hrs',
    timeLarge: '3.5 hrs',
    desc: 'The one most people book. Interior and exterior, top to bottom, in a single visit.',
    features: [
      'Everything in Express Refresh',
      'Seats, carpets and mats shampooed',
      'Boot and cargo area included',
      'Vents, cupholders and seat rails',
      'Protective wax layer',
      'Trim and plastics dressed',
    ],
  },
  {
    tier: 'Showroom',
    timeStandard: '4 hrs',
    timeLarge: '4.5 hrs +',
    desc: 'Pre-sale, end-of-lease, or a car you simply want perfect. Nothing left on the table.',
    features: [
      'Everything in Full Detail',
      'Hot extraction on seats and carpets',
      'Pet hair and odour treatment',
      'Engine bay tidy-up',
      'Door shuts, badges and grilles',
      'Final walk-around with you',
    ],
    pro: true,
  },
]

/* -------------------------------------------------------------------------- */
/*  Detail process                                                            */
/*                                                                            */
/*  Currently unused — the interactive panel this fed was removed from the     */
/*  home page. Kept because the copy is reusable (a process section on the     */
/*  services or about page would take it as-is). Tree-shaken from the bundle   */
/*  while nothing imports it. Delete if it is still unused at launch.          */
/* -------------------------------------------------------------------------- */

export type Stage = {
  id: string
  label: string
  time: string
  icon: LucideIcon
  headline: string
  summary: string
  body: string[]
  checklist: string[]
}

export const STAGES: Stage[] = [
  {
    id: 'wheels',
    label: 'Wheels & arches',
    time: '20 min',
    icon: CircleDot,
    headline: 'Wheels and arches first',
    summary:
      'The dirtiest part of the car is done before anything else, so nothing that comes off it lands on clean paint later.',
    body: [
      'Wheels are cleaned face, barrel and lip — not just the bit you can see from the footpath.',
      'Arches are flushed out, then tyres and trim are dressed once everything is dry.',
    ],
    checklist: ['Wheel faces and barrels', 'Arch liners flushed', 'Brake dust lifted', 'Tyres dressed'],
  },
  {
    id: 'exterior',
    label: 'Exterior hand wash',
    time: '35 min',
    icon: Droplets,
    headline: 'Two buckets, one mitt, no brushes',
    summary:
      'A proper contact wash with a grit guard. Automatic brushes are what put the swirl marks in the paint in the first place.',
    body: [
      'Pre-rinse to move the loose grit, then a two-bucket wash panel by panel from the top down.',
      'Dried with clean microfibre, then a wax layer goes on to hold the finish through the next few weeks of weather.',
    ],
    checklist: ['Pre-rinse', 'Two-bucket contact wash', 'Microfibre dry', 'Wax layer applied'],
  },
  {
    id: 'strip',
    label: 'Interior strip & vacuum',
    time: '40 min',
    icon: Wind,
    headline: 'Everything out, then vacuumed',
    summary:
      'Mats out, seats moved through their full travel, boot emptied. The rails and the seat backs are where the mess actually hides.',
    body: [
      'Loose items are set aside and returned, mats come out entirely, and the seats are run forward and back so the carpet underneath gets reached.',
      'Compressed air blows the grit out of vents, seams and seat rails before the vacuum goes through.',
    ],
    checklist: ['Mats removed', 'Under and behind seats', 'Boot and cargo area', 'Vents and seams blown out'],
  },
  {
    id: 'seats',
    label: 'Seats, carpets & trim',
    time: '45 min',
    icon: Armchair,
    headline: 'The part that takes the time',
    summary:
      'Fabric is shampooed and extracted, leather is cleaned and conditioned, and every hard surface is worked rather than wiped.',
    body: [
      'Seats and carpets are shampooed and hot-extracted so they come up damp, not soaked, and dry the same day.',
      'Dash, console, door cards and trim are cleaned into the corners — around switches, in the cupholders, along the seat rails.',
    ],
    checklist: ['Seats shampooed', 'Carpets extracted', 'Dash and console', 'Door cards and trim'],
  },
  {
    id: 'glass',
    label: 'Glass & finishing',
    time: '25 min',
    icon: Gauge,
    headline: 'Glass last, both sides',
    summary:
      'Interior glass gets the film off it, exterior gets cleaned after the wax so nothing is left sitting on the windscreen.',
    body: [
      'All glass is done inside and out, including the top edge of the windscreen and the tailgate window that most washes miss.',
      'Mirrors, badges and door shuts are finished off at the same time.',
    ],
    checklist: ['Interior glass', 'Exterior glass', 'Mirrors', 'Door shuts and badges'],
  },
  {
    id: 'final',
    label: 'Final walk-around',
    time: '15 min',
    icon: ShieldCheck,
    headline: 'Checked with you before we leave',
    summary:
      'A walk around the car together. Anything that is not right gets sorted on the spot, not booked in for another day.',
    body: [
      'Every job finishes with a look over the car with the owner, in daylight, with the doors open.',
      'If something has been missed it is fixed there and then before the van packs up.',
    ],
    checklist: ['Panel-by-panel check', 'Interior re-check', 'Items returned', 'Signed off with you'],
  },
]
