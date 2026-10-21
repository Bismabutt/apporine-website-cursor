import { Footer } from "@/components/home/footer/footer";
import { gutter } from "@/components/layout";
import { sectionPadding } from "@/components/section/section";
import { displayClass, labelClass, lightBodyColour } from "@/components/section/tone";

export type DocumentSection = { heading: string; paragraphs: string[] };

/** A quiet legal page: dark masthead, ivory reading column. Not a marketing layout. */
export function DocumentPage({
  eyebrow,
  title,
  lead,
  sections,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  sections: DocumentSection[];
}) {
  return (
    <>
      <main>
        <header data-surface="dark" className="bg-plum-950">
          <div className={`${gutter} pt-[148px] pb-[clamp(56px,7vw,96px)]`}>
            <p className={`${labelClass} mb-6 text-plum-300`}>{eyebrow}</p>
            <h1 className={`${displayClass} mb-6 max-w-[16ch] text-[clamp(44px,5.5vw,80px)] leading-[0.92] text-plum-50`}>{title}</h1>
            <p className="max-w-[40rem] font-sans text-[clamp(17px,1.35vw,20px)] leading-[1.6] text-plum-300">{lead}</p>
          </div>
        </header>
        <article data-surface="light" className="bg-ivory">
          <div className={`${gutter} ${sectionPadding}`}>
            <div className="mx-auto max-w-[44rem]">
              {sections.map((section) => (
                <section key={section.heading} className="mb-12">
                  <h2 className="mb-4 font-sans text-[22px] font-semibold text-plum-800">{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className={`mb-4 font-sans text-base leading-[1.7] ${lightBodyColour}`}>
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
              <p className={`border-t border-plum-200 pt-8 font-sans text-base leading-[1.7] ${lightBodyColour}`}>
                This page states the standard Apporine holds this site to. It is not a certification and it is not a contract.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
