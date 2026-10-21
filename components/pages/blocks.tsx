import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { gutter } from "@/components/layout";
import { Eyebrow } from "@/components/section/eyebrow";
import { LeadParagraph } from "@/components/section/lead-paragraph";
import { sectionPadding } from "@/components/section/section";
import { SegmentText } from "@/components/section/segment-text";
import { displayClass, focusRing, focusRingLight, labelClass, lightBodyColour, type Tone } from "@/components/section/tone";
import { methodSteps } from "@/lib/method";
import { anchors, routes } from "@/lib/routes";
import type { TextSegment } from "@/lib/text";

export function MethodList({ tone }: { tone: Tone }) {
  const title = tone === "dark" ? "text-plum-50" : "text-plum-800";
  const body = tone === "dark" ? "text-plum-300" : lightBodyColour;
  const rule = tone === "dark" ? "border-plum-700" : "border-plum-200";
  const chip = tone === "dark" ? "border-citrine text-citrine" : "border-plum-800 text-plum-800";
  return (
    <ol className={`divide-y ${rule} border-y ${rule}`}>
      {methodSteps.map((step, index) => (
        <li key={step.title} className="grid gap-4 py-8 md:grid-cols-[4.5rem_1fr] md:gap-8">
          <span className={`font-mono text-[13px] font-medium ${chip} flex size-9 items-center justify-center rounded-full border`}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className={`font-sans text-2xl leading-[1.25] font-semibold ${title}`}>{step.title}</h3>
            <p className={`mt-2 max-w-[36rem] font-sans text-base leading-[1.6] ${body}`}>{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function ClosingBand({
  title,
  body,
  primaryHref = anchors.start,
  primaryLabel = "Start building",
  secondaryHref = routes.contact,
  secondaryLabel = "Talk to us",
}: {
  title: TextSegment[];
  body: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section data-surface="dark" className="bg-plum-950">
      <div className={`${gutter} ${sectionPadding}`}>
        <h2 className={`${displayClass} mb-6 max-w-[14ch] text-[clamp(40px,5.6vw,84px)] leading-[0.92] text-plum-50`}>
          <SegmentText segments={title} tone="dark" />
        </h2>
        <LeadParagraph tone="dark" className="mb-10 max-w-[34rem]">
          {body}
        </LeadParagraph>
        <div className="flex flex-col gap-3 md:flex-row md:flex-wrap">
          <ButtonLink href={primaryHref} variant="primary" className="w-full md:w-auto">
            {primaryLabel}
          </ButtonLink>
          <ButtonLink href={secondaryHref} variant="secondary" className="w-full md:w-auto">
            {secondaryLabel}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function InlineLink({ href, children, tone }: { href: string; children: string; tone: Tone }) {
  const colour =
    tone === "dark"
      ? `text-citrine ${focusRing}`
      : `text-plum-800 underline decoration-plum-200 underline-offset-4 hover:decoration-orchid ${focusRingLight}`;
  return (
    <Link href={href} prefetch={false} className={`rounded-sm font-semibold ${colour}`}>
      {children}
    </Link>
  );
}

export function Kicker({ children, tone = "light" }: { children: string; tone?: Tone }) {
  return <p className={`${labelClass} ${tone === "dark" ? "text-plum-300" : "text-plum-600"}`}>{children}</p>;
}

export function PageHeading({
  eyebrow,
  title,
  lead,
  tone,
  id,
}: {
  eyebrow: string;
  title: TextSegment[];
  lead: string;
  tone: Tone;
  id?: string;
}) {
  return (
    <div>
      <Eyebrow tone={tone} onFilm={tone === "dark"}>
        {eyebrow}
      </Eyebrow>
      <h1
        id={id}
        className={`${displayClass} mb-7 max-w-[min(920px,100%)] text-[clamp(48px,6.2vw,96px)] leading-[0.9] ${
          tone === "dark" ? "text-plum-50" : "text-plum-800"
        }`}
      >
        <SegmentText segments={title} tone={tone} />
      </h1>
      <LeadParagraph tone={tone} onFilm={tone === "dark"}>
        {lead}
      </LeadParagraph>
    </div>
  );
}
