import { gutter } from "@/components/layout";
import { sectionPadding } from "@/components/section/section";
import { displayClass, lightBodyColour } from "@/components/section/tone";
import { CapabilityIconSvg, type CapabilityIcon } from "@/components/home/capability-icons";
import { Footer } from "@/components/home/footer/footer";
import { ClosingBand, MethodList, PageHeading } from "@/components/pages/blocks";
import { ContactForm } from "@/components/pages/contact-form";
import { routes } from "@/lib/routes";

const capabilities: { id: string; icon: CapabilityIcon; title: string; body: string }[] = [
  { id: "platforms", icon: "platforms", title: "Enterprise platforms", body: "Core systems your business runs on, built to last a decade." },
  { id: "agents", icon: "agents", title: "AI agents and automation", body: "Intelligence that does real work, inside the guardrails you set." },
  { id: "apps", icon: "apps", title: "Web and mobile apps", body: "Products your customers and teams choose to use." },
  { id: "cloud", icon: "cloud", title: "Cloud and DevOps", body: "Infrastructure built to stay up, scale and recover." },
  { id: "data", icon: "data", title: "Data and integration", body: "Every system connected. Every number you can trust." },
];

/** What we build: the capabilities, the partnership, and the place a project starts. */
export function BuildView() {
  return (
    <>
      <main>
        <section data-surface="light" className="bg-ivory">
          <div className={`${gutter} pt-[148px] pb-[clamp(72px,8vw,128px)]`}>
            <PageHeading
              tone="light"
              eyebrow="BUILD WITH APPORINE"
              title={[{ text: "Your next product, built " }, { text: "pristine.", accent: true }]}
              lead="Platforms, apps, AI agents and automation, engineered to the standard of our own products."
            />
          </div>
        </section>

        {capabilities.map((capability, index) => {
          const dark = index % 2 === 0;
          return (
            <section key={capability.id} id={capability.id} data-surface={dark ? "dark" : "light"} className={`scroll-mt-32 ${dark ? "bg-plum-950" : "bg-plum-50"}`}>
              <div className={`${gutter} ${sectionPadding} grid items-center gap-10 md:grid-cols-[auto_1fr] md:gap-16`}>
                <p className={`${displayClass} text-[clamp(64px,8vw,120px)] leading-none ${dark ? "text-plum-800" : "text-plum-200"}`} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <div className={dark ? "[&_svg]:stroke-citrine" : ""}>
                    <CapabilityIconSvg icon={capability.icon} />
                  </div>
                  <h2 className={`${displayClass} mt-6 mb-4 text-[clamp(36px,4vw,64px)] leading-[0.95] ${dark ? "text-plum-50" : "text-plum-800"}`}>
                    {capability.title}
                  </h2>
                  <p className={`max-w-[34rem] font-sans text-[clamp(17px,1.35vw,20px)] leading-[1.6] ${dark ? "text-plum-300" : lightBodyColour}`}>
                    {capability.body}
                  </p>
                </div>
              </div>
            </section>
          );
        })}

        <section id="how-we-partner" data-surface="light" className="scroll-mt-32 bg-ivory">
          <div className={`${gutter} ${sectionPadding}`}>
            <PageHeading
              tone="light"
              eyebrow="HOW WE PARTNER"
              title={[{ text: "Four steps. No " }, { text: "shortcuts.", accent: true }]}
              lead="The same discipline behind our own products, applied to yours. From the first idea to a product that is running."
            />
            <div className="mt-14 max-w-[760px]">
              <MethodList tone="light" />
            </div>
          </div>
        </section>

        <section id="start" data-surface="dark" className="scroll-mt-32 bg-plum-900">
          <div className={`${gutter} ${sectionPadding} grid gap-12 lg:grid-cols-12`}>
            <div className="lg:col-span-5">
              <PageHeading
                tone="dark"
                eyebrow="START A PROJECT"
              title={[{ text: "The problem worth " }, { text: "solving.", accent: true }]}
              lead="Tell us the problem worth solving. We will tell you what we would build."
              />
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <ContactForm defaultTopic="project" />
            </div>
          </div>
        </section>

        <ClosingBand
          title={[{ text: "Or start with what we’ve already " }, { text: "built.", accent: true }]}
          body="Some problems are shared by entire industries, so we build products for them."
          primaryHref={routes.products}
          primaryLabel="Explore our products"
          secondaryHref="#start"
          secondaryLabel="Start a project"
        />
      </main>
      <Footer />
    </>
  );
}
