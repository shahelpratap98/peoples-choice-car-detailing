import {
  Armchair,
  CloudFog,
  Dog,
  Droplets,
  Lightbulb,
  RefreshCw,
  ScanLine,
  Sparkles,
  Sticker,
  Sun,
  Truck,
  WandSparkles,
  type LucideIcon,
} from 'lucide-react'

/**
 * NOTE ON SOURCING
 * ----------------
 * Every service below is taken from the business's own Facebook page, read on
 * 19 Nov 2026: the "Specialities" list in its About section, plus what its
 * posts describe. Blurbs paraphrase those posts; nothing here is invented
 * process detail, a duration or a price.
 *
 * Prices are deliberately absent. The page says "call for quote" throughout;
 * the one figure it has published (a $99-a-pair headlight Christmas special)
 * was a time-limited promotion, so it is not repeated here.
 *
 * TODO(launch): have the owner confirm the list and wording.
 */

export type Service = {
  slug: string
  title: string
  /** Short category label shown on the card. */
  tag: string
  blurb: string
  includes: string[]
  icon: LucideIcon
}

export const SERVICES: Service[] = [
  {
    slug: 'full-valet',
    title: 'Full Valet',
    tag: 'Valet',
    blurb:
      'Interior and exterior in one visit — the five-star treatment, done at your place. Leather seat treatment can be added.',
    includes: [
      'Interior and exterior grooming',
      'Tar removal and decontamination',
      'Interior dressing',
      'Leather seat treatment available',
    ],
    icon: Sun,
  },
  {
    slug: 'cut-and-polish',
    title: 'Cut & Polish',
    tag: 'Paint',
    blurb:
      'Brings the shine back to tired paint. Offered as a one-step or a two-step, depending on what the paint needs.',
    includes: ['One-step cut and polish', 'Two-step cut and polish', 'Quoted on the vehicle'],
    icon: Sparkles,
  },
  {
    slug: 'paint-correction',
    title: 'Paint Correction',
    tag: 'Paint',
    blurb:
      'For a rich, deep finish. Paired with a cut and polish it becomes the Black Pearl Package.',
    includes: ['Paint correction', 'Black Pearl Package: cut and polish + correction'],
    icon: WandSparkles,
  },
  {
    slug: 'headlight-restoration',
    title: 'Headlight Restoration',
    tag: 'Restoration',
    blurb:
      'Foggy or hazy headlights spoil the look of a car and can fail a WOF. Restored clearer, cleaner and brighter at your doorstep.',
    includes: ['Foggy and hazy lenses restored', 'Helps with headlight WOF fails', 'Mobile service'],
    icon: Lightbulb,
  },
  {
    slug: 'interior-detailing',
    title: 'Interior Detailing',
    tag: 'Interior',
    blurb:
      'The inside of the car brought back: seats shampooed, surfaces dressed and odours treated.',
    includes: ['Seats shampooing', 'Odour treatment', 'Interior dressing'],
    icon: Armchair,
  },
  {
    slug: 'exterior-detailing',
    title: 'Exterior Detailing & Wash and Wax',
    tag: 'Exterior',
    blurb:
      'From a wash and wax to the hard cases. Baked-on cement and moss have both been brought back to original.',
    includes: ['Wash and wax', 'Tar removal and decontamination', 'Baked-on cement and moss'],
    icon: Droplets,
  },
  {
    slug: 'pet-hair-odour',
    title: 'Pet Hair & Odour Removal',
    tag: 'Interior',
    blurb: 'Sick of pet hair in the car? Hair removed and the smell dealt with, including ozone treatment.',
    includes: ['Pet and dog hair removal', 'Odour removal', 'Ozone treatment'],
    icon: Dog,
  },
  {
    slug: 'seats-leather',
    title: 'Seat Shampoo & Leather Treatment',
    tag: 'Interior',
    blurb: 'Fabric seats shampooed; leather seats steam cleaned and treated.',
    includes: ['Seats shampooing', 'Leather steam clean', 'Leather seat treatment'],
    icon: ScanLine,
  },
  {
    slug: 'hood-lining',
    title: 'Hood Lining Cleaning',
    tag: 'Restoration',
    blurb: 'Hood lining shampooed and restored, including mould removal.',
    includes: ['Hood lining shampooing', 'Mould removal', 'Upholstery cleaning'],
    icon: CloudFog,
  },
  {
    slug: 'vinyl-wrap-sticker-removal',
    title: 'Vinyl, Wrap & Sticker Removal',
    tag: 'Exterior',
    blurb: 'Old vinyl, wraps and stickers taken off the vehicle.',
    includes: ['Vinyl removal', 'Wrap removal', 'Sticker removal'],
    icon: Sticker,
  },
  {
    slug: 'maintenance-valet',
    title: 'Maintenance Valet',
    tag: 'Valet',
    blurb: 'Regular upkeep that keeps a car in its prime condition between full valets.',
    includes: ['Ongoing maintenance grooming', 'Premium service for luxury cars'],
    icon: RefreshCw,
  },
  {
    slug: 'fleet',
    title: 'Fleet & Work Vehicles',
    tag: 'Fleet',
    blurb:
      'Fleet maintenance and hard-working vehicles — including bringing a forestry ute back, inside and out.',
    includes: ['Fleet maintenance', 'Utes and vans', 'Full grooming, interior and exterior'],
    icon: Truck,
  },
]

/* -------------------------------------------------------------------------- */
/*  Packages                                                                  */
/* -------------------------------------------------------------------------- */

export type Package = {
  /** Small label above the name. */
  kicker: string
  name: string
  desc: string
  features: string[]
  pro?: boolean
}

/**
 * The three packages the business names in its own posts. No prices: every
 * one of them is "call for quote" on the page.
 */
export const PACKAGES: Package[] = [
  {
    kicker: 'Valet',
    name: 'Full Valet',
    desc: 'Give your car the five-star treatment it deserves — interior and exterior, at your place.',
    features: [
      'Interior and exterior grooming',
      'Tar removal and decontamination',
      'Interior dressing',
      'Add leather seat treatment',
      'We come to you',
    ],
  },
  {
    kicker: 'Paint',
    name: 'Black Pearl',
    desc: 'Cut and polish plus paint correction, for a rich and shiny look to your ride.',
    features: [
      'Cut and polish',
      'Paint correction',
      'One-step or two-step',
      'Quoted on the vehicle',
      'We come to you',
    ],
    pro: true,
  },
  {
    kicker: 'Restoration',
    name: 'Headlights',
    desc: 'Foggy headlights failed the WOF? Restored at your doorstep so the car is back on the road.',
    features: [
      'Professional headlight restoration',
      'Clearer, cleaner and brighter',
      'Helps with headlight WOF fails',
      'Mobile service',
    ],
  },
]
