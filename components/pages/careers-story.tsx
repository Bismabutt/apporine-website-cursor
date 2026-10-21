import { ButtonLink } from "@/components/button-link";
import { gutter } from "@/components/layout";
import { sectionPadding } from "@/components/section/section";
import { displayClass, labelClass, lightBodyColour } from "@/components/section/tone";
import { routes } from "@/lib/routes";

const asks = [
  { title: "You have kept something running", line: "Not a sample. A system that other people depended on, including on the day it failed." },
  { title: "You measure before you propose", line: "If the problem cannot be measured, you do not pretend a design is the answer." },
  { title: "You write so someone else can hold it", line: "The work has to survive you being away. Clarity is part of the standard." },
];

/** Careers. No invented openings. The standard of the person, then a way to write. */
export function CareersStory() {
  return (
    <>
      <section data-surface="light" className="bg-ivory">
        <div className={`${gutter} ${sectionPadding}`}>
          <p className={`${labelClass} mb-4 text-plum-600`}>OPEN ROLES</p>
          <h2 className={`${displayClass} mb-6 max-w-[16ch] text-[clamp(36px,4vw,64px)] leading-[0.95] text-plum-800`}>
            None listed, because none are open.
          </h2>
          <p className={`max-w-[40rem] font-sans text-lg leading-[1.65] ${lightBodyColour}`}>
            We hire when the work needs a person who can hold the standard. A role will be listed here, with the work it is accountable for, when that is true. We do not publish openings to look busy.
          </p>
        </div>
      </section>
      <section data-surface="dark" className="bg-plum-950">
        <div className={`${gutter} ${sectionPadding}`}>
          <h2 className={`${displayClass} mb-12 text-[clamp(32px,3.5vw,56px)] leading-[0.95] text-plum-50`}>What we will ask of you.</h2>
          <ol className="grid gap-6 lg:grid-cols-3">
            {asks.map((ask, index) => (
              <li key={ask.title} className="rounded-[24px] border border-plum-700 p-8">
                <p className={`${labelClass} mb-6 text-citrine`}>{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mb-3 font-sans text-[22px] font-semibold text-plum-50">{ask.title}</h3>
                <p className="font-sans text-base leading-[1.6] text-plum-300">{ask.line}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section data-surface="light" className="bg-plum-50">
        <div className={`${gutter} py-[clamp(72px,8vw,120px)]`}>
          <p className={`mb-8 max-w-[36rem] font-sans text-lg leading-[1.6] ${lightBodyColour}`}>
            If that is the work you want, write to us. Tell us what you have kept running.
          </p>
          <ButtonLink href={`${routes.contact}?topic=careers`} variant="primaryOnLight">
            Talk to us
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
