import { routes, type RoutePath } from "@/lib/routes";
import type { TextSegment } from "@/lib/text";

/**
 * Field notes. No statistics, no client names, no certifications we do not hold.
 * The cost of problems piece keeps the locked heading from the Living Mosaic.
 */

export type EssaySection = {
  heading: string;
  paragraphs: string[];
};

export type Essay = {
  path: RoutePath;
  category: string;
  title: TextSegment[];
  /** Plain title, for the document title and links. */
  titlePlain: string;
  description: string;
  sections: EssaySection[];
};

export const essays: Essay[] = [
  {
    path: routes.costOfProblems,
    category: "Perspective",
    title: [{ text: "The cost of the problems you’ve learned to live with" }],
    titlePlain: "The cost of the problems you’ve learned to live with",
    description:
      "Every enterprise carries losses it no longer notices. Here is how to find them, and what to do about them.",
    sections: [
      {
        heading: "Losses you have learned not to see",
        paragraphs: [
          "Every enterprise carries losses it no longer notices. They have been in the budget so long they look like the business: the queue a person clears by hand, the incident that takes an evening, the report everyone doubts and uses anyway.",
          "Downtime, fraud, delay and waste are not the cost of doing business. They are problems nobody has engineered away. Yet.",
        ],
      },
      {
        heading: "How to find the costly hour",
        paragraphs: [
          "Find the hour that costs the most in money, time or trust. If it cannot be measured, it is not ready to be built. Write the cost down in the unit the operator already feels. Then decide what software would retire it.",
          "We do not start from a platform we hope to sell. We start from the loss. If we cannot measure the problem, we do not build.",
        ],
      },
      {
        heading: "What ending it actually means",
        paragraphs: [
          "Ending it means the loss does not return when the project team leaves. The system holds in production: clear in design, correct under pressure, and still improving. That is the only ending that counts.",
          "A slide that describes the problem is not the end of it. Working software, measured against the cost we found, is.",
        ],
      },
    ],
  },
  {
    path: routes.engineeringNotes,
    category: "Engineering notes",
    title: [{ text: "Measure first. Then " }, { text: "build.", accent: true }],
    titlePlain: "Measure first. Then build.",
    description: "How we build, in detail. The same discipline behind our own products, applied to yours.",
    sections: [
      {
        heading: "The cost is the brief",
        paragraphs: [
          "A brief that starts with a feature list is already lost. The brief is the cost: where the business loses money, time or trust, and how that loss will be known to be gone.",
          "Architecture, security and experience are designed together, before a single line of code. A design that leaves security for later is not a design. It is a debt.",
        ],
      },
      {
        heading: "Short cycles, real software",
        paragraphs: [
          "We build in short cycles, with working software at every step. A demonstration that cannot run in the environment it is meant for is not progress.",
          "Results are measured against the cost we found, not against the number of tickets closed. If the cost is still there, the work is not done.",
        ],
      },
      {
        heading: "We stay",
        paragraphs: [
          "Launch is not the end of accountability. We stay, keeping the system fast, secure and getting better.",
          "The pristine standard is simple to say and hard to fake. Clear in design. Correct under pressure. Built for the long run.",
        ],
      },
    ],
  },
  {
    path: routes.aiInProduction,
    category: "AI in production",
    title: [{ text: "A demo is not a " }, { text: "system.", accent: true }],
    titlePlain: "A demo is not a system.",
    description: "What works beyond the demo. Intelligence that does real work, inside the guardrails you set.",
    sections: [
      {
        heading: "The demo ends where the risk begins",
        paragraphs: [
          "A model that impresses in a meeting has not met your approvals, your audit, or your worst hour. Production is that meeting.",
          "Intelligence that does real work is welcome. Intelligence that acts outside the guardrails you set is not a product. It is an incident waiting for a name.",
        ],
      },
      {
        heading: "Approval is part of the product",
        paragraphs: [
          "Our AI acts only within the approvals you define, and every action is recorded. Nothing changes without the right person’s approval.",
          "Evidence for every finding, never a guess. If a system cannot show why it believes something, it does not get to act on it.",
        ],
      },
      {
        heading: "Your data is not our training set",
        paragraphs: [
          "We collect only what we need, and client data is never used to train shared models. That is a policy, not a slogan, and it is one we expect you to examine.",
          "What works beyond the demo is boring in the best way: a record, a control, a result you can check.",
        ],
      },
    ],
  },
  {
    path: routes.operationalResilience,
    category: "Operational resilience",
    title: [{ text: "The first hour decides " }, { text: "it.", accent: true }],
    titlePlain: "The first hour decides it.",
    description: "Keeping critical systems running. The hour an outage starts is the hour the design is tested.",
    sections: [
      {
        heading: "What the first hour feels like",
        paragraphs: [
          "The first hour of an outage is not a dashboard. It is a room that needs a cause, an evidence trail, and a decision a named person can stand behind.",
          "Relyxus is built for that hour: find the cause, show the evidence, and resolve the incident within the approvals you set.",
        ],
      },
      {
        heading: "What healing is allowed to do",
        paragraphs: [
          "Self healing is not a machine left alone with production. It is a repair that stays inside the approvals you defined, and that leaves a record.",
          "Humans stay in control. Automation that cannot be stopped, explained or audited is not resilience. It is a second incident.",
        ],
      },
      {
        heading: "The record is the product",
        paragraphs: [
          "Every action recorded for your audit trail. When the hour is over, the question is not only whether the system recovered. It is whether you can prove what happened.",
          "We go where reliability is not a feature but the business itself. The record is how you show that it held.",
        ],
      },
    ],
  },
  {
    path: routes.industryPerspectives,
    category: "Industry perspectives",
    title: [{ text: "Where the hour is " }, { text: "expensive.", accent: true }],
    titlePlain: "Where the hour is expensive.",
    description: "Where each industry loses money. We build for the industries that cannot afford a bad hour.",
    sections: [
      {
        heading: "The same shape of loss",
        paragraphs: [
          "The industries are different. The shape of the loss is not. A payment that stalls. A claim that sits. A network fault that spreads. A grid served by software older than the shift. A delay that stacks along a chain. A checkout that fails on the day everyone arrives.",
          "We build for industries where one bad hour can cost millions. We go where reliability is not a feature but the business itself.",
        ],
      },
      {
        heading: "What we refuse to pretend",
        paragraphs: [
          "We do not arrive with a borrowed client list or a number we cannot show you. We arrive to find the costly problem and to say, in plain language, what we would build.",
          "Financial services, insurance, telecommunications, energy and utilities, logistics, retail and ecommerce. Six places. One standard.",
        ],
      },
      {
        heading: "Start from your hour",
        paragraphs: [
          "Bring the hour that costs you most. We will tell you whether we can measure it, and what we would build if we can.",
          "If we cannot measure the problem, we do not build. That is the perspective. Everything else is a detail of the industry.",
        ],
      },
    ],
  },
];

export function essayByPath(path: RoutePath): Essay {
  const essay = essays.find((entry) => entry.path === path);
  if (!essay) throw new Error(`No essay for ${path}`);
  return essay;
}

/** The next field note, wrapping to the first. */
export function nextEssay(path: RoutePath): Essay {
  const index = essays.findIndex((entry) => entry.path === path);
  return essays[(index + 1) % essays.length];
}
