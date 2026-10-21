"use client";

import { gutter } from "@/components/layout";
import { Eyebrow } from "@/components/section/eyebrow";
import { Film } from "@/components/section/film";
import { LeadParagraph } from "@/components/section/lead-paragraph";
import { Reveal } from "@/components/section/reveal";
import { deferredRendering, sectionPadding } from "@/components/section/section";
import { SectionHeadline } from "@/components/section/section-headline";
import { SignatureLine } from "@/components/section/signature-line";
import { SilentQuestion } from "@/components/section/silent-question";
import type { TextSegment } from "@/lib/text";

// Copy is locked: _brief/docs/08-homepage-content.md, section 3 (the conviction).
const eyebrow = "OUR CONVICTION";
const question = "What exactly can you do for me?";
const headline: TextSegment[] = [
  { text: "Every costly problem is a product waiting to be " },
  { text: "built.", accent: true },
];
const paragraph =
  "Downtime, fraud, delay and waste are not the cost of doing business. They are problems nobody has engineered away. Yet. We find them, measure them and build the software that ends them for good.";

/** Readability scrim over the monolith, heavier on the left where the type sits. */
const SCRIM = [
  "linear-gradient(90deg, rgba(18,4,26,0.92) 0%, rgba(18,4,26,0.72) 46%, rgba(18,4,26,0.28) 100%)",
  "linear-gradient(0deg, rgba(18,4,26,0.88) 0%, rgba(18,4,26,0.35) 42%, rgba(18,4,26,0.45) 100%)",
].join(", ");

const SOFT_TEXT_SHADOW = "[text-shadow:0_1px_24px_rgba(18,4,26,0.8)]";

/**
 * The visitor’s first real question, answered on a full bleed film. The
 * conviction copy is the answer; the two ways, the products and the
 * capabilities continue it directly below.
 */
export function ForYou() {
  return (
    <section
      aria-labelledby="for-you-title"
      data-surface="dark"
      className={`relative isolate flex min-h-[100svh] items-end overflow-hidden bg-plum-950 ${deferredRendering}`}
    >
      <div className="absolute inset-0 -z-10">
        <Film name="hero-01-monolith" mobileName="hero-01-monolith-mobile" className="object-center" />
        <div aria-hidden="true" className="absolute inset-0" style={{ backgroundImage: SCRIM }} />
        <div aria-hidden="true" className="film-grain-overlay" />
      </div>

      <div className={`${gutter} ${sectionPadding}`}>
        <SignatureLine />
        <Reveal>
          <Eyebrow tone="dark" onFilm className="mb-4">
            {eyebrow}
          </Eyebrow>
          <SilentQuestion tone="dark">{question}</SilentQuestion>
        </Reveal>
        <SectionHeadline
          id="for-you-title"
          tone="dark"
          segments={headline}
          className={`mb-7 max-w-[min(1100px,80vw)] text-[clamp(48px,7vw,112px)] leading-[0.9] max-md:max-w-none ${SOFT_TEXT_SHADOW}`}
        />
        <Reveal>
          <LeadParagraph tone="dark" onFilm className={`max-w-[40rem] ${SOFT_TEXT_SHADOW}`}>
            {paragraph}
          </LeadParagraph>
        </Reveal>
      </div>
    </section>
  );
}
