import { ButtonLink } from "@/components/button-link";
import { gutter } from "@/components/layout";
import { RelyxusVisual } from "@/components/home/products/relyxus-visual";
import { TiltFrame } from "@/components/home/products/tilt-frame";
import { sectionPadding } from "@/components/section/section";
import { displayClass, labelClass, lightBodyColour } from "@/components/section/tone";
import { routes } from "@/lib/routes";

const pillars = [
  { title: "Find the cause", line: "Evidence for every finding, never a guess." },
  { title: "Approve the fix", line: "Nothing changes without the right person’s approval." },
  { title: "Prove it", line: "Every action recorded for your audit trail." },
];

const limits = [
  "It does not guess. A finding without evidence is not a finding.",
  "It does not change a system without the right person’s approval.",
  "It does not leave an action off the record.",
];

/** The Relyxus page, under the story banner. */
export function RelyxusStory({ hasScreenshot }: { hasScreenshot: boolean }) {
  return (
    <>
      <section data-surface="light" className="bg-ivory">
        <div className={`${gutter} ${sectionPadding} grid items-center gap-12 lg:grid-cols-12`}>
          <div className="lg:col-span-6">
            <p className={`${labelClass} mb-4 text-plum-600`}>AI INCIDENT RESPONSE</p>
            <h2 className={`${displayClass} mb-6 text-[clamp(36px,4vw,64px)] leading-[0.95] text-plum-800`}>
              Built for the first hour.
            </h2>
            <p className={`max-w-[34rem] font-sans text-lg leading-[1.6] ${lightBodyColour}`}>
              When critical systems fail, Relyxus finds the cause, shows the evidence and resolves the incident within the approvals you set.
            </p>
          </div>
          <div className="lg:col-span-6">
            <TiltFrame>
              <RelyxusVisual hasScreenshot={hasScreenshot} />
            </TiltFrame>
          </div>
        </div>
      </section>

      <section data-surface="dark" className="bg-plum-950">
        <div className={`${gutter} ${sectionPadding}`}>
          <ol className="grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <li key={pillar.title} className="rounded-[24px] border border-plum-700 p-8">
                <p className={`${labelClass} mb-6 text-citrine`}>{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mb-3 font-sans text-[22px] font-semibold text-plum-50">{pillar.title}</h3>
                <p className="font-sans text-base leading-[1.6] text-plum-300">{pillar.line}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section data-surface="light" className="bg-plum-50">
        <div className={`${gutter} ${sectionPadding} grid gap-10 lg:grid-cols-12`}>
          <h2 className={`${displayClass} text-[clamp(32px,3.5vw,52px)] leading-[0.95] text-plum-800 lg:col-span-4`}>What it will not do.</h2>
          <ul className="lg:col-span-7 lg:col-start-6">
            {limits.map((line) => (
              <li key={line} className={`border-t border-plum-200 py-5 font-sans text-lg leading-[1.5] ${lightBodyColour} last:border-b`}>
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section data-surface="dark" className="bg-plum-900">
        <div className={`${gutter} py-[clamp(72px,8vw,120px)]`}>
          <ButtonLink href={routes.contact} variant="primary">
            Talk to us
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
