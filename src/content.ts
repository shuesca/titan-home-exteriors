export const COMPANY = {
  name: "Titan Home Exteriors",
  phone: "(813) 614-4930",
  phoneHref: "tel:+18136144930",
  email: "titanhomeexteriors@gmail.com",
  owner: "Michael Scalise",
  installer: "Saballos Construction Inc.",
  license: "CGC058605",
  liability: "$2,000,000",
  tagline: "Florida's trusted exterior renovation contractor",
  promoBar: "GUARANTEED LOWEST PRICE — We'll beat any written competitor quote.",
};

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Reviews", href: "#reviews" },
  { label: "Warranty", href: "#warranty" },
  { label: "Area", href: "#area" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const OFFER = {
  label: "Current offer",
  title: "Up To $500 Off Any Full Project",
  body: "Book your free estimate and save. No gimmicks — just Titan's guaranteed lowest price.",
  cta: "Claim This Offer",
};

export const HERO_STATS = [
  { value: 22, suffix: "+", label: "Years combined experience" },
  { value: 3712, suffix: "+", label: "Projects completed" },
  { value: null, display: "Licensed", label: "FL Licensed" },
] as const;

export const PROMISE = {
  eyebrow: "Our commitment to you",
  title: "The Titan Promise",
  body: "At Titan Home Exteriors, your satisfaction isn't just a goal — it's a written guarantee. We deliver premium name-brand products, expert craftsmanship, and the lowest price in Florida — or we'll beat any competitor's quote.",
  pillars: ["Expert Installation", "Name Brand Products", "Guaranteed Lowest Price"],
};

export const ABOUT_STORY = [
  "Titan Home Exteriors was founded in Florida by Michael Scalise, who was raised in a family of contractors — learning the trade hands-on as his family transformed homes across the country. After years working for large national firms, Michael saw an opportunity to build something different — a local company that combined big-company quality with small-company accountability.",
  "Today, Titan serves hundreds of homeowners and commercial property owners throughout the region. We've built our reputation one project at a time, earning referrals through honest work, clean job sites, and standing behind everything we install.",
];

export const CERTIFICATE = {
  eyebrow: "Official guarantee",
  title: "Titan Lowest Price Certificate",
  body: "We stand behind every quote with our written Lowest Price Guarantee. If you receive a lower written estimate from a licensed contractor for the same scope of work and materials, we will beat that price — guaranteed. No gimmicks. No fine print. Just the best value in Florida.",
  points: [
    "Valid on identical products, scope, and installation",
    "Must be a written estimate from a licensed Florida contractor",
    "Applies to all windows, doors, siding, and exterior services",
    "Certificate issued with every Titan proposal",
  ],
};

export const SERVICES = [
  {
    slug: "windows",
    title: "Windows",
    short: "Energy-efficient window replacement that cuts utility costs and enhances your home's appearance.",
    tags: ["Energy Efficient", "Impact-Rated", "Custom Sizes", "Low-E Glass"],
    image: "/images/svc-windows.jpg",
  },
  {
    slug: "siding",
    title: "Siding",
    short: "Durable siding installation and replacement that protects your home and boosts curb appeal.",
    tags: ["Vinyl", "Fiber Cement", "Composite", "Lifetime Warranty"],
    image: "/images/svc-siding.jpg",
  },
  {
    slug: "doors",
    title: "Doors",
    short: "Entry door installation and replacement — from standard to custom, built for security and style.",
    tags: ["Steel", "Fiberglass", "Wood", "Impact-Rated"],
    image: "/images/svc-doors.jpg",
  },
];

export const SERVICE_BADGES = [
  { title: "Licensed & Insured", sub: "FL General Contractor" },
  { title: "Lifetime Warranty", sub: "All parts & labor covered" },
  { title: "24hr Quote Turnaround", sub: "Free, no-obligation estimates" },
];

export const DIFFERENCE = [
  {
    title: "Premium Materials",
    body: "We source only top-tier materials from trusted manufacturers — products engineered to withstand Florida's heat, humidity, and storm season.",
  },
  {
    title: "Expert Crews",
    body: "Our crews are trained, background-checked, and dedicated to clean, precise work. We treat your property like it's our own.",
  },
  {
    title: "Lifetime Warranty",
    body: "Every project comes with a lifetime warranty on all parts, labor, and workmanship. Coverage transfers once to the next homeowner.",
  },
];

export const REVIEWS = [
  {
    quote:
      "Titan replaced all 14 windows in our home and the difference is night and day. The crew was professional, clean, and done in one day. Our electric bill dropped immediately. Highly recommend!",
    name: "Robert & Linda M.",
    place: "Brandon, FL",
    tag: "Windows",
  },
  {
    quote:
      "Michael and his team installed new siding on our entire house. The quality of work was outstanding — they matched the style perfectly and cleaned up every day before leaving. True professionals.",
    name: "Carlos V.",
    place: "Florida",
    tag: "Siding",
  },
  {
    quote:
      "We got three quotes and Titan came in with the best price AND the best warranty. Our new front door looks amazing. The installation took less than half a day. Will definitely use them again.",
    name: "Jennifer T.",
    place: "Wesley Chapel, FL",
    tag: "Doors",
  },
  {
    quote:
      "After Hurricane season we needed impact windows fast. Titan had us scheduled within a week and the impact windows are solid. Couldn't be happier with the whole experience.",
    name: "Dave & Susan K.",
    place: "Riverview, FL",
    tag: "Windows",
  },
  {
    quote:
      "From the first call to the final walkthrough, Titan was responsive and honest. No hidden fees, no surprises. The new siding completely transformed our home's curb appeal.",
    name: "Maria G.",
    place: "Lutz, FL",
    tag: "Siding",
  },
  {
    quote:
      "I've used several contractors over the years and Titan is by far the best. Licensed, insured, on time, and the work speaks for itself. My neighbors have already asked for their number.",
    name: "Tony B.",
    place: "Land O' Lakes, FL",
    tag: "Doors",
  },
];

export const BRANDS = [
  { name: "PGT Innovations", cat: "Windows & Doors" },
  { name: "Simonton Windows", cat: "Windows & Doors" },
  { name: "WinCore Windows", cat: "Windows & Doors" },
  { name: "EAS Windows", cat: "Windows & Doors" },
  { name: "Therma-Tru", cat: "Entry Doors" },
  { name: "BHI Doors", cat: "Entry Doors" },
  { name: "Pella", cat: "Windows & Doors" },
  { name: "CWS", cat: "Windows & Doors" },
];

export const BEFORE_AFTER = [
  {
    title: "Window Replacement — Demo To Finished Trim",
    body: "The old single-pane unit comes out, the rough opening is framed and flashed, and the new impact-rated window goes in sealed and trimmed. Clean removal, no damage to surrounding stucco.",
    before: "/images/ba-window-before.jpg",
    after: "/images/ba-window-after.jpg",
  },
  {
    title: "Siding Replacement — Faded Vinyl To Fiber Cement",
    body: "Chalky, buckled panels and mildew streaking come off down to the sheathing. New fiber cement goes on with straight courses, fresh corner trim and new window casings.",
    before: "/images/ba-siding-before.jpg",
    after: "/images/ba-siding-after.jpg",
  },
];

export const BEFORE_AFTER_NOTE =
  "Illustrations of the scope of work. Photos marked as completed projects are Titan installations with the location stated.";

export const PROJECTS = [
  {
    title: "Vinyl Siding Replacement",
    place: "South Florida, FL",
    image: "/images/siding-1.jpg",
  },
  {
    title: "Fiber Cement Siding",
    place: "Clearwater, FL",
    image: "/images/siding-2.jpg",
  },
  {
    title: "Insulated Siding Upgrade",
    place: "St. Petersburg, FL",
    image: "/images/siding-3.jpg",
  },
];

export const WARRANTY = [
  {
    title: "Lifetime Product",
    body: "All materials covered against defects for as long as you own the home.",
  },
  {
    title: "Lifetime Labor",
    body: "We cover 100% of labor costs on every covered repair — no service call fees.",
  },
  {
    title: "Lifetime Workmanship",
    body: "Our installation quality is guaranteed for the lifetime of the original homeowner.",
  },
  {
    title: "One-Time Transferable",
    body: "Warranty transfers to the next homeowner once — a real selling advantage.",
  },
  {
    title: "No Deductibles",
    body: "Zero deductibles, zero trip charges, zero hidden fees on covered repairs.",
  },
  {
    title: "Lifetime Glass",
    body: "Windows and doors: seal failure and stress cracks covered for life.",
  },
];

export const FINANCING = [
  {
    tag: "Most popular",
    title: "0% Interest",
    body: "For qualified homeowners. Start the upgrade now and pay over time with zero interest.",
  },
  {
    tag: "Budget friendly",
    title: "Low Monthly Payments",
    body: "Flexible plans sized for almost any budget — a few windows or a full exterior.",
  },
  {
    tag: "Quick decisions",
    title: "Fast Approvals",
    body: "Momnt, a licensed consumer lender, returns most credit decisions quickly.",
  },
];

export const FINANCING_NOTE =
  "Financing is subject to credit approval. Not all applicants qualify. 0% APR offers are promotional and limited; standard rates apply after. This is not a commitment to lend.";

export const COUNTIES = [
  "Polk",
  "Sarasota",
  "Manatee",
  "Citrus",
  "Hardee",
  "Highlands",
  "DeSoto",
  "Charlotte",
  "Lee",
  "Collier",
  "Osceola",
  "Sumter",
];

export const FAQ = [
  {
    q: "Is Titan Home Exteriors licensed and insured?",
    a: "Yes. Installations are performed by or under the supervision of Saballos Construction Inc., Florida license CGC058605, with $2 million in liability insurance. We can provide a certificate of insurance before work begins.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes. Estimates are free with no obligation. We come to your home, measure the project, and send a written quote — usually within 24 hours.",
  },
  {
    q: "Do you pull permits?",
    a: "Yes. We handle required permits so the work is inspected and up to Florida building code.",
  },
  {
    q: "How long does installation take?",
    a: "Most window and door replacements finish in one to two days. Siding typically takes two to five days, depending on the house. You get a specific timeline with the estimate.",
  },
  {
    q: "Do you install impact-resistant windows?",
    a: "Yes. Impact-rated windows and doors meet Florida hurricane codes, protect the home in storms, and can lower a homeowner's insurance premium.",
  },
  {
    q: "What warranty do you offer?",
    a: "Every installation includes a lifetime warranty on labor, plus manufacturer coverage on the products. Many warranties transfer once if you sell the home. Call (813) 614-4930 to start a claim.",
  },
];

export const SERVICE_OPTIONS = ["Siding", "Windows", "Doors", "Multiple Services"];

export const EXPECT = [
  "A licensed Titan specialist calls you back — not a call center",
  "On-site measurement and a written, itemized scope",
  "Your Lowest Price Certificate issued with the proposal",
  "Financing options presented only if you ask for them",
];
