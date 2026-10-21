import { routes, type RoutePath } from "@/lib/routes";

/**
 * Industry pages. The costly problem and what we build are locked copy from
 * _brief/docs/08-homepage-content.md, section 8. The hour is the same fact,
 * written out. No statistics, no client names.
 */

export type IndustryPageContent = {
  path: RoutePath;
  name: string;
  /** Explore link label, locked. */
  explore: string;
  problem: string;
  build: string;
  film: string;
  mobileFilm: string;
  /** Two paragraphs on the hour this industry actually loses. */
  hour: [string, string];
};

export const industryPages: IndustryPageContent[] = [
  {
    path: routes.financialServices,
    name: "Financial services",
    explore: "Explore financial services",
    problem: "Payment outages, fraud and manual reviews that slow every transaction.",
    build: "Resilient payment operations, fraud intelligence and automated compliance workflows.",
    film: "hero-01-monolith",
    mobileFilm: "hero-01-monolith-mobile",
    hour: [
      "Money does not wait for a maintenance window. A failed authorisation, a fraud queue that only a person can clear, a settlement file that arrives late: each one is an hour the institution pays for twice, once in cost and once in trust.",
      "We start with that hour. We measure it, then we build the operations that retire it.",
    ],
  },
  {
    path: routes.insurance,
    name: "Insurance",
    explore: "Explore insurance",
    problem: "Slow claims, leakage and processes still built on paper.",
    build: "Claims automation, leakage detection and broker platforms.",
    film: "hero-03-bridge",
    mobileFilm: "hero-03-bridge-mobile",
    hour: [
      "A claim is a promise with a clock on it. When the clock runs on paper, on retyping, and on judgement that lives in one person’s head, leakage and delay are not surprises. They are the process.",
      "We build the systems that take the clock seriously: claims that move, leakage that is visible, and broker platforms a person can actually use.",
    ],
  },
  {
    path: routes.telecommunications,
    name: "Telecommunications",
    explore: "Explore telecommunications",
    problem: "Network incidents that ripple out to millions of customers.",
    build: "Incident intelligence, self healing operations and customer platforms.",
    film: "hero-01-monolith",
    mobileFilm: "hero-01-monolith-mobile",
    hour: [
      "A network incident is never local for long. One fault becomes a map of dropped calls, failed logins and customers who cannot reach the people they need.",
      "We build the intelligence that finds the fault, the operations that heal what can be healed, and the customer platforms that tell the truth while the work is done.",
    ],
  },
  {
    path: routes.energyAndUtilities,
    name: "Energy and utilities",
    explore: "Explore energy and utilities",
    problem: "Ageing systems running grids that cannot fail.",
    build: "Grid operations software, asset monitoring and field apps.",
    film: "hero-02-armillary",
    mobileFilm: "hero-02-armillary-mobile",
    hour: [
      "A grid does not get to have a bad hour. The software around it is often older than the people on shift, and the cost of that age is paid in slow decisions.",
      "We build the operations software, the asset monitoring and the field tools that let a control room see clearly and act in time.",
    ],
  },
  {
    path: routes.logistics,
    name: "Logistics",
    explore: "Explore logistics",
    problem: "Disconnected systems and delays that compound across the chain.",
    build: "Visibility platforms, routing intelligence and integration.",
    film: "hero-03-bridge",
    mobileFilm: "hero-03-bridge-mobile",
    hour: [
      "A delay is rarely one delay. It stacks: a missed scan, a system that does not speak to the next, a route decided on yesterday’s information.",
      "We build the visibility, the routing intelligence and the integration that stop one fault becoming a week.",
    ],
  },
  {
    path: routes.retailAndEcommerce,
    name: "Retail and ecommerce",
    explore: "Explore retail and ecommerce",
    problem: "Stock gaps, abandoned checkouts and failures on peak days.",
    build: "Commerce platforms, demand forecasting and resilient checkout.",
    film: "hero-02-armillary",
    mobileFilm: "hero-02-armillary-mobile",
    hour: [
      "Peak is not a surprise. It is a date on a calendar. Stock that is not where the promise said it would be, and a checkout that fails when everyone arrives, are how a good season is lost.",
      "We build commerce platforms, demand forecasting and checkout that hold on the day that matters.",
    ],
  },
];

export function industryByPath(path: RoutePath): IndustryPageContent {
  const industry = industryPages.find((entry) => entry.path === path);
  if (!industry) throw new Error(`No industry page for ${path}`);
  return industry;
}
