import { ButtonLink } from "@/components/button-link";
import { Eyebrow } from "@/components/section/eyebrow";
import { LeadParagraph } from "@/components/section/lead-paragraph";
import { Reveal } from "@/components/section/reveal";
import { Section } from "@/components/section/section";
import { SectionHeadline } from "@/components/section/section-headline";
import { SilentQuestion } from "@/components/section/silent-question";
import { AssuranceTable } from "@/components/trust/assurance-table";
import { principles, type PrincipleId } from "@/lib/principles";
import { contactTopics, routes } from "@/lib/routes";
import type { TextSegment } from "@/lib/text";

// Copy is locked: _brief/docs/08-homepage-content.md, section 9.
const eyebrow = "TRUST AND SECURITY";
const question = "Can I trust you with my data?";
const headline: TextSegment[] = [{ text: "Built to be " }, { text: "examined.", accent: true }];
const paragraph =
  "Enterprises trust what they can verify. So we design for scrutiny from day one: clear controls, honest status and evidence on request.";

/** Small citrine line icons, 24px. Decorative. */
const principleIcons = {
  // Shield.
  security: <path d="M12 3 5 6v5.5c0 4.2 2.9 7.9 7 9.5 4.1-1.6 7-5.3 7-9.5V6z" />,
  // Padlock.
  data: (
    <>
      <rect x="5" y="10.5" width="14" height="10" rx="2" />
      <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" />
    </>
  ),
  // A switch held in the on position.
  control: (
    <>
      <rect x="3" y="8" width="18" height="8" rx="4" />
      <circle cx="17" cy="12" r="2" />
    </>
  ),
  // An open eye.
  transparent: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="2.75" />
    </>
  ),
};

function PrincipleIcon({ id }: { id: PrincipleId }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="var(--citrine)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {principleIcons[id]}
    </svg>
  );
}

const card = "rounded-[24px] border border-[rgba(165,59,239,0.3)] bg-[rgba(18,4,26,0.45)] p-8";

/**
 * Section 9 (07-homepage-spec.md): four principles and the assurance roadmap,
 * on a blueprint grid with a slow scanning line. Statuses come from
 * lib/site.ts. Never any certification logo or badge: text and statuses only.
 */
export function Trust() {
  return (
    <Section labelledBy="trust-title" background="bg-plum-800" surface="dark" className="overflow-hidden">
      <div aria-hidden="true" className="blueprint-grid" />
      <div aria-hidden="true" className="blueprint-scan" />

      <Reveal>
        <Eyebrow tone="dark" className="mb-4">
          {eyebrow}
        </Eyebrow>
        <SilentQuestion tone="dark">{question}</SilentQuestion>
      </Reveal>
      <SectionHeadline id="trust-title" tone="dark" segments={headline} />
      <Reveal>
        <LeadParagraph tone="dark">{paragraph}</LeadParagraph>
      </Reveal>

      {principles
        .filter((principle) => principle.id === "data")
        .map((principle) => (
          <Reveal key={principle.id} className={`mt-14 md:mt-20 ${card}`}>
            <PrincipleIcon id={principle.id} />
            <h3 className="mt-8 font-display text-[clamp(32px,4vw,56px)] leading-[0.95] font-extrabold tracking-[-0.015em] text-plum-50 uppercase [font-variation-settings:'wdth'_75,'opsz'_96]">
              {principle.title}
            </h3>
            <p className="mt-4 max-w-[40rem] font-sans text-[clamp(17px,1.35vw,20px)] leading-[1.6] text-plum-50">{principle.body}</p>
          </Reveal>
        ))}

      <ul className="mt-4 grid gap-4 lg:grid-cols-3">
        {principles
          .filter((principle) => principle.id !== "data")
          .map((principle, index) => (
            <Reveal key={principle.id} as="li" index={index} className={card}>
              <PrincipleIcon id={principle.id} />
              <h3 className="mt-8 font-sans text-[22px] leading-[1.3] font-semibold text-plum-50">{principle.title}</h3>
              <p className="mt-2 font-sans text-base leading-[1.6] text-plum-300">{principle.body}</p>
            </Reveal>
          ))}
      </ul>

      <Reveal className="mt-16 md:mt-24">
        <AssuranceTable />
      </Reveal>

      <Reveal className="mt-12 flex flex-col gap-3 md:flex-row md:flex-wrap">
        <ButtonLink href={routes.trust} variant="primary" className="w-full md:w-auto">
          Visit the Trust centre
        </ButtonLink>
        <ButtonLink href={contactTopics.security} variant="secondary" className="w-full md:w-auto">
          Request our security pack
        </ButtonLink>
      </Reveal>
    </Section>
  );
}
