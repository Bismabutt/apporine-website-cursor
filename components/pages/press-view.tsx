import { Footer } from "@/components/home/footer/footer";
import { gutter } from "@/components/layout";
import { PageHeading } from "@/components/pages/blocks";
import { sectionPadding } from "@/components/section/section";
import { labelClass, lightBodyColour } from "@/components/section/tone";
import { routes } from "@/lib/routes";

const boilerplate = [
  "Apporine builds enterprise products for industries where failure is costly. The company operates from the United States.",
  "Its first product, Relyxus, is AI incident response that finds the cause, shows the evidence and resolves the incident within the approvals a customer sets. A further product, Orion, is in development.",
  "Apporine also designs and builds platforms, applications, AI agents and automation with a customer’s own team, to the standard of its own products.",
];

const refuses = [
  "Client names, unless that organisation has asked to be named.",
  "Revenue, headcount, valuation or market share.",
  "Certifications that are not yet in place. The assurance roadmap states each status plainly: in progress, or planned.",
];

/** Press: a boilerplate and a list of what we will not claim. No invented news. */
export function PressView() {
  return (
    <>
      <main>
        <section data-surface="light" className="bg-ivory">
          <div className={`${gutter} pt-[148px] ${sectionPadding}`}>
            <PageHeading
              tone="light"
              eyebrow="PRESS"
              title={[{ text: "The facts, stated " }, { text: "plainly.", accent: true }]}
              lead="Use this page as the source. If a line is not here, we have not said it."
            />
          </div>
        </section>

        <section data-surface="dark" className="bg-plum-950">
          <div className={`${gutter} ${sectionPadding} grid gap-10 lg:grid-cols-12`}>
            <h2 className={`${labelClass} text-citrine lg:col-span-3`}>BOILERPLATE</h2>
            <div className="lg:col-span-8">
              {boilerplate.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="mb-5 font-sans text-lg leading-[1.65] text-plum-100">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section data-surface="light" className="bg-plum-50">
          <div className={`${gutter} ${sectionPadding} grid gap-10 lg:grid-cols-12`}>
            <h2 className={`${labelClass} text-plum-600 lg:col-span-3`}>WHAT WE WILL NOT CLAIM</h2>
            <ul className="lg:col-span-8">
              {refuses.map((line) => (
                <li key={line} className={`border-t border-plum-200 py-5 font-sans text-lg leading-[1.5] ${lightBodyColour} last:border-b`}>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section data-surface="dark" className="bg-plum-900">
          <div className={`${gutter} ${sectionPadding} grid gap-8 md:grid-cols-2`}>
            <div>
              <h2 className={`${labelClass} mb-4 text-plum-300`}>BRAND</h2>
              <p className="font-sans text-base leading-[1.6] text-plum-300">
                Imperial Plum and Citrine. The mark is the Falcon. Wordmarks and guidance are shared on request, not as a public kit.
              </p>
            </div>
            <div>
              <h2 className={`${labelClass} mb-4 text-plum-300`}>CONTACT</h2>
              <p className="mb-4 font-sans text-base leading-[1.6] text-plum-300">For a conversation, use the contact page and choose Press.</p>
              <a href={`${routes.contact}?topic=press`} className="font-sans text-[15px] font-semibold text-citrine">
                Talk to us →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
