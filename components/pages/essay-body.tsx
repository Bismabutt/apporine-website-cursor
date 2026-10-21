import Link from "next/link";
import { gutter } from "@/components/layout";
import { sectionPadding } from "@/components/section/section";
import { SegmentText } from "@/components/section/segment-text";
import { displayClass, focusRingLight, labelClass, lightBodyColour } from "@/components/section/tone";
import { nextEssay, type Essay } from "@/lib/essays";

/** The reading column of a field note. Set `masthead` when the page has no film banner. */
export function EssayBody({ essay, masthead = false }: { essay: Essay; masthead?: boolean }) {
  const next = nextEssay(essay.path);
  return (
    <>
      {masthead && (
        <header data-surface="light" className="bg-ivory">
          <div className={`${gutter} pt-[148px] pb-[clamp(48px,6vw,80px)]`}>
            <p className={`${labelClass} mb-6 text-plum-600`}>{essay.category.toUpperCase()}</p>
            <h1 className={`${displayClass} max-w-[14ch] text-[clamp(48px,6vw,96px)] leading-[0.9] text-plum-800`}>
              <SegmentText segments={essay.title} tone="light" />
            </h1>
            <p className={`mt-6 max-w-[36rem] font-sans text-[clamp(17px,1.35vw,20px)] leading-[1.6] ${lightBodyColour}`}>{essay.description}</p>
          </div>
        </header>
      )}
      <article data-surface="light" className="bg-ivory">
        <div className={`${gutter} ${sectionPadding}`}>
          <div className="mx-auto max-w-[44rem]">
            {essay.sections.map((section, index) => (
              <section key={section.heading} className={index === 0 ? "" : "mt-16"}>
                <p className={`${labelClass} mb-4 text-orchid-deep`}>{String(index + 1).padStart(2, "0")}</p>
                <h2 className="mb-5 font-sans text-[clamp(26px,2.4vw,36px)] leading-[1.2] font-semibold text-plum-800">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)} className={`mb-5 font-sans text-lg leading-[1.65] ${lightBodyColour}`}>
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
            <p className="mt-20 border-t border-plum-200 pt-8">
              <Link href={next.path} prefetch={false} className={`rounded-sm font-sans text-[15px] font-semibold text-plum-800 ${focusRingLight}`}>
                Next: {next.titlePlain} →
              </Link>
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
