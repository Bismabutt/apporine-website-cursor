/**
 * Every page path on the site (spec 05-navigation-spec.md, section 7).
 * Navigation, hero and pages read paths from here, so a page can be built,
 * or a destination moved, without touching the components that link to it.
 */
export const routes = {
  home: "/",
  products: "/products",
  // Later this will point to the Relyxus website.
  relyxus: "/products/relyxus",
  orion: "/products/orion",
  build: "/build",
  industries: "/industries",
  financialServices: "/industries/financial-services",
  insurance: "/industries/insurance",
  telecommunications: "/industries/telecommunications",
  energyAndUtilities: "/industries/energy-and-utilities",
  logistics: "/industries/logistics",
  retailAndEcommerce: "/industries/retail-and-ecommerce",
  insights: "/insights",
  engineeringNotes: "/insights/engineering-notes",
  aiInProduction: "/insights/ai-in-production",
  operationalResilience: "/insights/operational-resilience",
  industryPerspectives: "/insights/industry-perspectives",
  costOfProblems: "/insights/the-cost-of-the-problems-youve-learned-to-live-with",
  company: "/company",
  leadership: "/company/leadership",
  careers: "/careers",
  press: "/press",
  contact: "/contact",
  trust: "/trust",
  security: "/security",
  privacy: "/privacy",
  cookies: "/cookies",
  terms: "/terms",
  accessibility: "/accessibility",
} as const;

export type RoutePath = (typeof routes)[keyof typeof routes];

/** In page anchors; until their sections exist they land on the parent page. */
export const anchors = {
  pristine: `${routes.company}#pristine`,
  howWePartner: `${routes.build}#how-we-partner`,
  howWeChoose: `${routes.products}#how-we-choose`,
  start: `${routes.build}#start`,
} as const;

/** Links that preselect a contact topic. */
export const contactTopics = {
  security: `${routes.contact}?topic=security`,
} as const;

/**
 * Pages not built yet. Each has an app/<path>/page.tsx that renders the
 * coming soon template with "<name> · Apporine" as its title. When a page is
 * built, replace that file and remove its entry here.
 */
/** Pages still on the coming soon template. Empty once a route has a real page. */
export const comingSoonPages: { path: RoutePath; name: string }[] = [];
