import { withBasePath } from "@/lib/paths";

/**
 * Business content for Precision Tree Service.
 * Update phone, email, cities, social links, and reviews as you go.
 */
export const site = {
  name: "Precision Tree Service",
  tagline: "Tree services from a local crew you can rely on",
  description:
    "Tree removal, trimming, stump grinding, and storm cleanup — done carefully, priced fairly, and finished clean. A small local crew homeowners can count on.",
  /** Public site URL (GitHub Pages preview for now) */
  url: "https://bryanxbt.github.io/precision-tree-service",
  // --- Update these with real business details ---
  phone: "(765) 867-1823",
  phoneHref: "tel:+17658671823",
  email: "hello@precisiontreeservice.com",
  emailHref: "mailto:hello@precisiontreeservice.com",
  serviceArea: "North Indy & surrounding areas",
  hours: "Mon–Sat 7am–6pm · Emergency 24/7",
  hoursDetailed: [
    { day: "Monday", time: "7:00am – 6:00pm" },
    { day: "Tuesday", time: "7:00am – 6:00pm" },
    { day: "Wednesday", time: "7:00am – 6:00pm" },
    { day: "Thursday", time: "7:00am – 6:00pm" },
    { day: "Friday", time: "7:00am – 6:00pm" },
    { day: "Saturday", time: "8:00am – 4:00pm" },
    { day: "Sunday", time: "Emergency only" },
  ],
  social: {
    facebook: "", // e.g. https://facebook.com/yourpage
    instagram: "", // e.g. https://instagram.com/yourhandle
    google: "", // Google Business Profile link
  },
  /** Set true when insured (and licensed, if applicable in your area) */
  insured: true,
  bonded: false,
  freeEstimates: true,
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    slug: "tree-removal",
    title: "Tree Removal",
    short:
      "Safe removal of hazardous, dead, or unwanted trees — including tight-access jobs.",
    seo:
      "Professional tree removal for hazardous, dead, or unwanted trees. Careful work near homes and full cleanup included.",
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
    seo: "Tree trimming and pruning to improve safety, light, and curb appeal around your home.",
    details: [
      "Crown cleaning and deadwood removal",
      "Clearance for roofs, power lines, and driveways",
      "Seasonal maintenance",
      "Ornamental and shade tree care",
    ],
  },
  {
    slug: "stump-grinding",
    title: "Stump Grinding",
    short:
      "Grind stumps below grade so you can reclaim your yard and plant again.",
    seo: "Stump grinding below grade so you can reclaim yard space for grass, landscaping, or new plantings.",
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
    seo: "Emergency tree removal and storm cleanup when fallen trees block access or threaten property.",
    details: [
      "Emergency call-outs",
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
    seo: "Lot clearing for building sites, views, and property improvement with debris disposal.",
    details: [
      "Selective or full clearing",
      "Brush and undergrowth removal",
      "View and access opening",
      "Debris disposal included",
    ],
  },
  {
    slug: "residential",
    title: "Residential Tree Service",
    short:
      "Homeowner-focused tree work with clear communication and careful cleanup.",
    seo: "Residential tree services for homeowners who want safe work and a clean finish.",
    details: [
      "Single-tree or full-property jobs",
      "Yard and landscape protection",
      "Clear communication before we start",
      "Haul-away available",
    ],
  },
  {
    slug: "commercial",
    title: "Commercial Tree Service",
    short:
      "Reliable work for businesses, HOAs, churches, and multi-unit properties.",
    seo: "Commercial tree care for businesses, HOAs, and multi-unit properties on a dependable schedule.",
    details: [
      "HOAs and multi-unit properties",
      "Storefronts and parking lots",
      "Scheduled maintenance options",
      "Safety-minded crews",
    ],
  },
  {
    slug: "consultations",
    title: "Consultations & Estimates",
    short:
      "On-site walkthroughs with honest recommendations and free written estimates.",
    seo: "Free on-site estimates and clear recommendations for your tree project.",
    details: [
      "On-site walkthroughs",
      "Straight-talk recommendations",
      "Written free estimates",
      "No-pressure pricing",
    ],
  },
] as const;

/** Cities/areas you serve — local SEO pages */
export const serviceAreas = [
  {
    slug: "kokomo",
    name: "Kokomo",
    blurb:
      "Tree removal, trimming, stump grinding, and storm cleanup for Kokomo homes and businesses.",
  },
  {
    slug: "tipton",
    name: "Tipton",
    blurb:
      "Local tree service in Tipton — safe removals, pruning, and full cleanup.",
  },
  {
    slug: "cicero",
    name: "Cicero",
    blurb:
      "Residential and light commercial tree care for Cicero and nearby neighborhoods.",
  },
  {
    slug: "noblesville",
    name: "Noblesville",
    blurb:
      "Tree removal, trimming, and storm response serving Noblesville properties.",
  },
  {
    slug: "carmel",
    name: "Carmel",
    blurb:
      "Professional tree work in Carmel with careful cleanup and free estimates.",
  },
  {
    slug: "westfield",
    name: "Westfield",
    blurb:
      "Tree service in Westfield for removals, stump grinding, and lot clearing.",
  },
  {
    slug: "fishers",
    name: "Fishers",
    blurb:
      "Reliable tree care for Fishers homeowners — from trim jobs to full removals.",
  },
  {
    slug: "indianapolis",
    name: "Indianapolis",
    blurb:
      "Tree removal, trimming, and emergency storm work across Indianapolis.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Contact us",
    description:
      "Call, text, or send a free quote request with a few details (and photos if you have them).",
  },
  {
    step: "02",
    title: "Schedule your estimate",
    description:
      "We visit the property, walk the job with you, and give a clear, free written estimate.",
  },
  {
    step: "03",
    title: "Get the job done",
    description:
      "We show up prepared, work safely, and leave your property clean when we are finished.",
  },
] as const;

/**
 * Replace with real Google / Facebook reviews as you earn them.
 * Do not publish fake reviews on a live marketing site long-term.
 */
export const testimonials = [
  {
    quote:
      "They explained the job clearly, showed up when they said they would, and left the yard cleaner than we expected.",
    name: "Local homeowner",
    detail: "Tree removal",
    placeholder: true,
  },
  {
    quote:
      "Fair price, careful around the house and fence, and great communication the whole way.",
    name: "Local homeowner",
    detail: "Trimming & cleanup",
    placeholder: true,
  },
  {
    quote:
      "Storm took a limb down overnight. They responded quickly and got our driveway open again.",
    name: "Local homeowner",
    detail: "Emergency work",
    placeholder: true,
  },
] as const;

export const faqs = [
  {
    question: "What areas do you service?",
    answer:
      `We serve ${site.serviceArea}. If you are nearby and do not see your town listed, still reach out — we often can help.`,
  },
  {
    question: "Are you insured?",
    answer:
      "Yes — we carry insurance to protect your property and our crew on every job. Ask us for proof of insurance anytime.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes. Most residential jobs get a free on-site estimate. Emergency or after-hours situations may be handled by phone first so we can respond faster.",
  },
  {
    question: "Do you handle emergency or storm work?",
    answer:
      "Yes. Fallen trees, blocked driveways, and storm damage are a priority. Call us and we will do our best to get there quickly.",
  },
  {
    question: "Do you haul away debris?",
    answer:
      "Cleanup and haul-away are available on nearly every job. We will confirm what is included in your estimate before we start.",
  },
  {
    question: "Are you certified arborists?",
    answer:
      "We are a professional tree service crew focused on safe removals, trimming, stumps, and cleanup. We are not certified arborists. If your situation needs an ISA-certified arborist assessment, we will tell you honestly and help you point in the right direction.",
  },
  {
    question: "How soon can you start?",
    answer:
      "Timing depends on the season and weather. Many jobs can be scheduled within days; storm work is prioritized. We will give you a realistic window when we quote the job.",
  },
  {
    question: "Do you work with insurance claims?",
    answer:
      "We can document storm damage and provide estimates that help with insurance claims. Your carrier’s process varies — we will work with you either way.",
  },
] as const;

/** Hero background (home page) — paths include basePath for GitHub Pages */
export const heroImage = {
  src: withBasePath("/hero/tree-removal-hero.jpg"),
  alt: "Professional tree removal crew at work",
} as const;

export const galleryItems = [
  {
    title: "Large oak removal",
    category: "Tree Removal",
    caption: "Full takedown and cleanup on a residential lot",
    src: withBasePath("/gallery/large-oak-removal.jpg"),
  },
  {
    title: "Canopy lift & thin",
    category: "Trimming",
    caption: "Improved light and clearance over the driveway",
    src: withBasePath("/gallery/canopy-lift-thin.jpg"),
  },
  {
    title: "Storm cleanup",
    category: "Emergency",
    caption: "Fast response after a windstorm",
    src: withBasePath("/gallery/storm-cleanup.jpg"),
  },
  {
    title: "Stump grind & finish",
    category: "Stump Grinding",
    caption: "Yard ready for new grass and landscaping",
    src: withBasePath("/gallery/stump-grinding.jpg"),
  },
  {
    title: "Backyard access job",
    category: "Tree Removal",
    caption: "Tight-space removal without property damage",
    src: withBasePath("/gallery/backyard-access.jpg"),
  },
  {
    title: "Lot prep for build",
    category: "Lot Clearing",
    caption: "Selective clearing for a new home site",
    src: withBasePath("/gallery/lot-prep.jpg"),
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
      "Clear pricing, honest recommendations, and no upsells you do not need.",
  },
  {
    title: "Local & accountable",
    description:
      "A small team building a reputation in our community — one job at a time.",
  },
] as const;

export const trustPoints = [
  "Free written estimates",
  "Insured crew",
  "Cleanup available",
  "Residential & commercial",
  "Storm response",
  "Local & accountable",
] as const;
