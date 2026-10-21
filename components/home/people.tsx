import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/section/eyebrow";
import { LeadParagraph } from "@/components/section/lead-paragraph";
import { Reveal } from "@/components/section/reveal";
import { Section } from "@/components/section/section";
import { SectionHeadline } from "@/components/section/section-headline";
import { SilentQuestion } from "@/components/section/silent-question";
import { displayClass, focusRingLight, labelClass, lightBodyColour } from "@/components/section/tone";
import { routes } from "@/lib/routes";
import { founderQuote, people, type Person } from "@/lib/site";
import type { TextSegment } from "@/lib/text";

// Copy is locked: _brief/docs/08-homepage-content.md, section 10.
const eyebrow = "THE PEOPLE BEHIND APPORINE";
const question = "Who has worked with you?";
const headline: TextSegment[] = [{ text: "Accountable people. Not a faceless " }, { text: "vendor.", accent: true }];
const paragraph = "You will always know who is building your product, and who answers for it.";
const position =
  "A logo wall is easy to borrow. We will not publish a client until that organisation has asked us to. Until then, the proof is the person who answers, the product that carries our name, and the evidence we share under NDA.";

const proof = [
  { label: "THE PERSON", title: "Bisma Idrees", line: "Founder. Named, and accountable for the standard.", href: routes.leadership },
  { label: "THE PRODUCT", title: "Relyxus", line: "AI incident response that carries our name. Orion follows, in development.", href: routes.relyxus },
  { label: "THE EVIDENCE", title: "On request", line: "Policies, questionnaires and a security pack, shared under NDA.", href: routes.trust },
];

function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/** Real photograph from /public/people/, or the monogram tile until one exists. Never AI faces or stock photos. */
function Portrait({ person }: { person: Person }) {
  return (
    <div data-surface="dark" className="relative mb-6 aspect-[4/5] overflow-hidden rounded-[24px] bg-plum-800">
      <div className="size-full transition-transform duration-240 ease-brand group-hover:scale-[1.03] motion-reduce:group-hover:scale-100">
        {person.photo ? (
          <Image src={person.photo} alt={person.name} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
        ) : (
          <div aria-hidden="true" className="flex size-full items-center justify-center">
            <span className="flex size-40 items-center justify-center rounded-full border border-citrine">
              <span className={`${displayClass} text-[64px] leading-none tracking-normal text-plum-50`}>{initials(person.name)}</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function PersonCard({ person }: { person: Person }) {
  return (
    <article className="group">
      <Portrait person={person} />
      <h3 className="relative inline-block font-sans text-[22px] leading-[1.3] font-semibold text-plum-800">
        {person.name}
        {/* Citrine line under the name on hover. */}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 bg-citrine transition-transform duration-240 ease-brand group-hover:scale-x-100 rtl:origin-right"
        />
      </h3>
      {person.role && <p className={`${labelClass} mt-3 text-plum-600`}>{person.role}</p>}
      {person.bio && <p className={`mt-3 font-sans text-base leading-[1.6] ${lightBodyColour}`}>{person.bio}</p>}
      {person.linkedIn && (
        <a
          href={person.linkedIn}
          rel="noopener noreferrer"
          target="_blank"
          className={`mt-4 inline-block rounded-sm font-sans text-[15px] font-semibold text-plum-800 underline decoration-plum-200 underline-offset-4 hover:decoration-orchid ${focusRingLight}`}
        >
          LinkedIn<span className="sr-only"> (opens in a new tab)</span>
        </a>
      )}
    </article>
  );
}

/** Section 10 (07-homepage-spec.md): people cards (room for four) and the founder quote, from lib/site.ts. */
export function People() {
  const shown = people.filter((person) => person.name);

  return (
    <Section labelledBy="people-title" background="bg-plum-50" surface="light">
      <Reveal>
        <Eyebrow tone="light" className="mb-4">
          {eyebrow}
        </Eyebrow>
        <SilentQuestion tone="light">{question}</SilentQuestion>
      </Reveal>
      <SectionHeadline id="people-title" tone="light" segments={headline} />
      <Reveal>
        <LeadParagraph tone="light">{paragraph}</LeadParagraph>
        <p className={`mt-6 max-w-[40rem] font-sans text-base leading-[1.6] ${lightBodyColour}`}>{position}</p>
      </Reveal>

      <ul className="mt-14 grid gap-4 md:mt-16 md:grid-cols-3">
        {proof.map((item, index) => (
          <Reveal key={item.label} as="li" index={index}>
            <Link
              href={item.href}
              prefetch={false}
              className={`group block h-full rounded-[24px] border border-plum-200 bg-plum-50 p-8 transition-[translate,border-color] duration-240 ease-brand hover:-translate-y-1 hover:border-orchid motion-reduce:hover:translate-y-0 ${focusRingLight}`}
            >
              <p className={`${labelClass} mb-6 text-plum-600`}>{item.label}</p>
              <p className="font-sans text-[22px] leading-[1.3] font-semibold text-plum-800">{item.title}</p>
              <p className={`mt-3 font-sans text-base leading-[1.6] ${lightBodyColour}`}>{item.line}</p>
            </Link>
          </Reveal>
        ))}
      </ul>

      {shown.length > 0 && (
        <ul className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
          {shown.map((person, index) => (
            <Reveal key={person.name} as="li" index={index}>
              <PersonCard person={person} />
            </Reveal>
          ))}
        </ul>
      )}

      <Reveal className="mt-20 md:mt-28">
        <figure className="max-w-[44rem]">
          <blockquote>
            <p className="font-serif text-[clamp(28px,3vw,44px)] leading-[1.2] text-plum-800 italic">{founderQuote.text}</p>
          </blockquote>
          <figcaption className={`${labelClass} mt-6 text-plum-600`}>{founderQuote.attribution}</figcaption>
        </figure>
      </Reveal>
    </Section>
  );
}
