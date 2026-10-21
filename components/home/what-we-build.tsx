import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { Eyebrow } from "@/components/section/eyebrow";
import { LeadParagraph } from "@/components/section/lead-paragraph";
import { Reveal } from "@/components/section/reveal";
import { Section } from "@/components/section/section";
import { SectionHeadline } from "@/components/section/section-headline";
import { SegmentText } from "@/components/section/segment-text";
import { displayClass, focusRingLight, labelClass, lightBodyColour } from "@/components/section/tone";
import { anchors, routes } from "@/lib/routes";
import type { TextSegment } from "@/lib/text";
import { CapabilityIconSvg, type CapabilityIcon } from "./capability-icons";

// Copy is locked: _brief/docs/08-homepage-content.md, section 7.
const eyebrow = "WHAT WE BUILD";
const headline: TextSegment[] = [{ text: "From core platforms to intelligent " }, { text: "agents.", accent: true }];
const paragraph = "Whatever the problem needs, built to the standard of our own products.";

const capabilities: { icon: CapabilityIcon; title: string; body: string }[] = [
  { icon: "platforms", title: "Enterprise platforms", body: "Core systems your business runs on, built to last a decade." },
  { icon: "agents", title: "AI agents and automation", body: "Intelligence that does real work, inside the guardrails you set." },
  { icon: "apps", title: "Web and mobile apps", body: "Products your customers and teams choose to use." },
  { icon: "cloud", title: "Cloud and DevOps", body: "Infrastructure built to stay up, scale and recover." },
  { icon: "data", title: "Data and integration", body: "Every system connected. Every number you can trust." },
];

const invitation = {
  title: [{ text: "Something else in " }, { text: "mind?", accent: true }] as TextSegment[],
  body: "Tell us the problem worth solving. We will tell you what we would build.",
  button: { label: "Start building", href: anchors.start },
};

/**
 * Section 7 (07-homepage-spec.md): the five capabilities as a ledger, then the
 * invitation. Each capability links to What we build, like the navigation and
 * the footer. The whole row is the link's hit area.
 */
export function WhatWeBuild() {
  return (
    <Section labelledBy="what-we-build-title" background="bg-plum-100" surface="light">
      <Reveal>
        <Eyebrow tone="light">{eyebrow}</Eyebrow>
      </Reveal>
      <SectionHeadline id="what-we-build-title" tone="light" segments={headline} />
      <Reveal>
        <LeadParagraph tone="light">{paragraph}</LeadParagraph>
      </Reveal>

      <ul className="mt-14 border-t border-plum-200 md:mt-20">
        {capabilities.map((capability, index) => (
          <Reveal key={capability.title} as="li" index={index} className="border-b border-plum-200">
            <div data-cursor="card" className="group relative grid gap-4 py-8 md:grid-cols-[4.5rem_auto_minmax(0,1fr)_auto] md:items-center md:gap-8 md:py-10">
              <span className={`${labelClass} text-plum-600`}>{String(index + 1).padStart(2, "0")}</span>
              <CapabilityIconSvg icon={capability.icon} />
              <div>
                <h3 className="font-sans text-[22px] leading-[1.3] font-semibold text-plum-800">
                  <Link
                    href={routes.build}
                    prefetch={false}
                    className={`rounded-sm after:absolute after:inset-0 after:content-[''] ${focusRingLight}`}
                  >
                    {capability.title}
                  </Link>
                </h3>
                <p className={`mt-2 max-w-[36rem] font-sans text-base leading-[1.6] ${lightBodyColour}`}>{capability.body}</p>
              </div>
              <span
                aria-hidden="true"
                className="-translate-x-1 font-sans text-xl text-plum-800 opacity-0 transition-[opacity,translate] duration-240 ease-brand group-hover:translate-x-0 group-hover:opacity-100 group-has-focus-visible:translate-x-0 group-has-focus-visible:opacity-100 rtl:-scale-x-100"
              >
                →
              </span>
            </div>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-10">
        <div data-surface="dark" className="flex flex-col items-start rounded-[28px] bg-plum-800 p-8 md:p-12">
          <h3 className={`${displayClass} mb-4 max-w-[16ch] text-[clamp(32px,4vw,56px)] leading-[0.95] text-plum-50`}>
            <SegmentText segments={invitation.title} tone="dark" />
          </h3>
          <p className="mb-8 max-w-[32rem] font-sans text-base leading-[1.6] text-plum-50">{invitation.body}</p>
          <ButtonLink href={invitation.button.href} variant="primary">
            {invitation.button.label}
          </ButtonLink>
        </div>
      </Reveal>
    </Section>
  );
}
