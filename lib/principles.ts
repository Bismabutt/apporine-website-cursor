/**
 * Trust principles. Copy is locked: _brief/docs/08-homepage-content.md, section 9.
 * Shared by the homepage, the Trust centre and the Security page.
 */

export const principles = [
  {
    id: "security",
    title: "Security by design",
    body: "Threat modelling, least privilege access and encryption in transit and at rest.",
  },
  {
    id: "data",
    title: "Your data stays yours",
    body: "We collect only what we need, and client data is never used to train shared models.",
  },
  {
    id: "control",
    title: "Humans stay in control",
    body: "Our AI acts only within the approvals you define, and every action is recorded.",
  },
  {
    id: "transparent",
    title: "Transparent by default",
    body: "Policies, security questionnaires and evidence shared under NDA.",
  },
] as const;

export type PrincipleId = (typeof principles)[number]["id"];
