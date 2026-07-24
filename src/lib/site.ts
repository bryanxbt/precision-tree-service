export const site = {
  name: "Precision Tree Service",
  tagline: "Safe, professional tree care you can trust",
  description:
    "Local tree removal, trimming, stump grinding, and emergency storm response. Licensed, insured, and committed to clean job sites.",
  // Update these when you have real details
  phone: "(555) 123-4567",
  phoneHref: "tel:+15551234567",
  email: "hello@precisiontreeservice.com",
  emailHref: "mailto:hello@precisiontreeservice.com",
  serviceArea: "Your city & surrounding areas",
  hours: "Mon–Sat 7am–6pm · Emergency 24/7",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    slug: "tree-removal",
    title: "Tree Removal",
    short:
      "Safe removal of hazardous, dead, or unwanted trees — including tight-access jobs.",
    details: [
      "Hazardous and storm-damaged trees",
      "Close-quarter and residential removals",
      "Full cleanup and debris haul-away",
      "Free estimates before we start",
    ],
  },
  {
    slug: "tree-trimming",
    title: "Tree Trimming & Pruning",
    short:
      "Shape, thin, and strengthen trees for health, curb appeal, and safety.",
    details: [
      "Crown cleaning and deadwood removal",
      "Clearance for roofs, power lines, and driveways",
      "Seasonal maintenance plans",
      "Fruit tree and ornamental care",
    ],
  },
  {
    slug: "stump-grinding",
    title: "Stump Grinding",
    short:
      "Grind stumps below grade so you can reclaim your yard and plant again.",
    details: [
      "Stumps of all sizes",
      "Grind below ground level",
      "Mulch left or hauled away",
      "Prep for landscaping or new plantings",
    ],
  },
  {
    slug: "emergency",
    title: "Storm & Emergency",
    short:
      "Fast response when trees come down — day or night after severe weather.",
    details: [
      "24/7 emergency call-outs",
      "Fallen tree and limb removal",
      "Property access restoration",
      "Insurance-friendly documentation",
    ],
  },
  {
    slug: "lot-clearing",
    title: "Lot Clearing",
    short:
      "Clear brush and trees for building sites, views, and property improvement.",
    details: [
      "Selective or full clearing",
      "Brush and undergrowth removal",
      "View and access opening",
      "Debris disposal included",
    ],
  },
  {
    slug: "consultations",
    title: "Consultations & Estimates",
    short:
      "Honest assessments of tree health, risk, and the right next step for your property.",
    details: [
      "On-site walkthroughs",
      "Risk and health evaluation",
      "Written free estimates",
      "No-pressure recommendations",
    ],
  },
] as const;

export const galleryItems = [
  {
    title: "Large oak removal",
    category: "Tree Removal",
    caption: "Full takedown and cleanup on a residential lot",
  },
  {
    title: "Canopy lift & thin",
    category: "Trimming",
    caption: "Improved light and clearance over the driveway",
  },
  {
    title: "Storm cleanup",
    category: "Emergency",
    caption: "Overnight response after a windstorm",
  },
  {
    title: "Stump grind & finish",
    category: "Stump Grinding",
    caption: "Yard ready for new grass and landscaping",
  },
  {
    title: "Backyard access job",
    category: "Tree Removal",
    caption: "Tight-space removal without property damage",
  },
  {
    title: "Lot prep for build",
    category: "Lot Clearing",
    caption: "Selective clearing for a new home site",
  },
] as const;

export const values = [
  {
    title: "Safety first",
    description:
      "Proper rigging, PPE, and techniques on every job — protecting people and property.",
  },
  {
    title: "Clean job sites",
    description:
      "We leave your property cleaner than we found it. No mess left behind.",
  },
  {
    title: "Straight answers",
    description:
      "Clear pricing, honest recommendations, and no upsells you don’t need.",
  },
  {
    title: "Local & accountable",
    description:
      "A small team building a reputation in our community — one job at a time.",
  },
] as const;
