import { ButtonLink } from "@/components/button-link";
import { gutter } from "@/components/layout";
import { Film } from "@/components/section/film";
import { sectionPadding } from "@/components/section/section";
import { displayClass, labelClass } from "@/components/section/tone";
import { OrionVisual } from "@/components/home/products/orion-visual";
import { RelyxusVisual } from "@/components/home/products/relyxus-visual";
import { TiltFrame } from "@/components/home/products/tilt-frame";
import { ClosingBand, PageHeading } from "@/components/pages/blocks";
import { Footer } from "@/components/home/footer/footer";
import { routes } from "@/lib/routes";

const relyxusPillars = [
  { title: "Find the cause", line: "Evidence for every finding, never a guess." },
  { title: "Approve the fix", line: "Nothing changes without the right person’s approval." },
  { title: "Prove it", line: "Every action recorded for your audit trail." },
];

/**
 * Products index. Two full bleed chapters, then how a product is chosen.
 * Copy for Relyxus and Orion is locked in 08-homepage-content.md, section 5.
 */
export function ProductsView({ hasScreenshot }: { hasScreenshot: boolean }) {
  return (
    <>
      <main>
        <section data-surface="dark" className="bg-plum-950">
          <div className={`${gutter} pt-[148px] pb-[clamp(64px,8vw,120px)]`}>
            <PageHeading
              tone="dark"
              eyebrow="OUR PRODUCTS"
              title={[{ text: "Our products carry our " }, { text: "name.", accent: true }]}
              lead="Every product we release is held to one standard: clear in design, correct under pressure and built for the long run. Here is what that looks like."
            />
          </div>
        </section>

        <article id="relyxus" className="relative isolate flex min-h-[88vh] items-end overflow-hidden bg-plum-900 scroll-mt-32" data-surface="dark">
          <div className="absolute inset-0 -z-10">
            <Film name="hero-02-armillary" mobileName="hero-02-armillary-mobile" />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(18,4,26,0.92) 0%, rgba(18,4,26,0.72) 48%, rgba(18,4,26,0.35) 100%)",
              }}
            />
          </div>
          <div className={`${gutter} grid items-end gap-12 py-[clamp(72px,8vw,120px)] lg:grid-cols-12`}>
            <div className="lg:col-span-6">
              <p className={`${labelClass} mb-4 text-plum-100`}>AI INCIDENT RESPONSE</p>
              <h2 className={`${displayClass} mb-5 text-[clamp(48px,6vw,88px)] leading-[0.9] text-plum-50`}>Relyxus</h2>
              <p className="mb-8 max-w-[34rem] font-sans text-[clamp(17px,1.35vw,20px)] leading-[1.6] text-plum-100">
                When critical systems fail, Relyxus finds the cause, shows the evidence and resolves the incident within the approvals you set.
              </p>
              <ol className="mb-8 divide-y divide-white/15 border-y border-white/15">
                {relyxusPillars.map((pillar, index) => (
                  <li key={pillar.title} className="flex gap-4 py-4">
                    <span className="font-mono text-[13px] text-citrine">{String(index + 1).padStart(2, "0")}</span>
                    <span>
                      <span className="block font-sans text-lg font-semibold text-plum-50">{pillar.title}</span>
                      <span className="mt-1 block font-sans text-base leading-[1.5] text-plum-100">{pillar.line}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <ButtonLink href={routes.relyxus} variant="primary">
                Meet Relyxus
              </ButtonLink>
            </div>
            <div className="lg:col-span-6">
              <TiltFrame>
                <RelyxusVisual hasScreenshot={hasScreenshot} />
              </TiltFrame>
            </div>
          </div>
        </article>

        <article id="orion" className="scroll-mt-32 bg-plum-950" data-surface="dark">
          <div className={`${gutter} ${sectionPadding} grid items-center gap-12 lg:grid-cols-12`}>
            <div className="lg:col-span-5 lg:order-2">
              <p className={`${labelClass} mb-4 text-citrine`}>IN DEVELOPMENT</p>
              <h2 className={`${displayClass} mb-5 text-[clamp(48px,6vw,88px)] leading-[0.9] text-plum-50`}>Orion</h2>
              <p className={`${labelClass} mb-4 text-plum-300`}>OUR NEXT PRODUCT</p>
              <p className="mb-8 max-w-[34rem] font-sans text-[clamp(17px,1.35vw,20px)] leading-[1.6] text-plum-300">
                Orion is being engineered to the same pristine standard as everything we make. We will share the details when it’s ready.
              </p>
              <ButtonLink href={routes.orion} variant="primary">
                See Orion
              </ButtonLink>
            </div>
            <div className="lg:col-span-7">
              <TiltFrame>
                <OrionVisual />
              </TiltFrame>
            </div>
          </div>
        </article>

        <section id="how-we-choose" data-surface="light" className="scroll-mt-32 bg-ivory">
          <div className={`${gutter} ${sectionPadding} max-w-[920px]`}>
            <PageHeading
              tone="light"
              eyebrow="HOW WE CHOOSE"
              title={[{ text: "Every product starts with a costly " }, { text: "problem.", accent: true }]}
              lead="Some problems are shared by entire industries, so we build products for them. Others are yours alone, so we build with you."
            />
            <p className="mt-8 max-w-[40rem] font-sans text-base leading-[1.6] text-[#4A3456]">
              Downtime, fraud, delay and waste are not the cost of doing business. They are problems nobody has engineered away. Yet. If we cannot measure the problem, we do not build.
            </p>
          </div>
        </section>

        <ClosingBand
          title={[{ text: "Bring us the problem that costs you " }, { text: "most.", accent: true }]}
          body="Tell us where your business loses money, time or trust. We will show you what we would build, and how we would prove it."
        />
      </main>
      <Footer />
    </>
  );
}
