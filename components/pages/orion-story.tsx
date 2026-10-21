import { ButtonLink } from "@/components/button-link";
import { OrionVisual } from "@/components/home/products/orion-visual";
import { TiltFrame } from "@/components/home/products/tilt-frame";
import { gutter } from "@/components/layout";
import { sectionPadding } from "@/components/section/section";
import { displayClass, labelClass, lightBodyColour } from "@/components/section/tone";
import { routes } from "@/lib/routes";

/** Orion, still in development. No feature list we have not published. */
export function OrionStory() {
  return (
    <>
      <section data-surface="dark" className="bg-plum-950">
        <div className={`${gutter} ${sectionPadding} grid items-center gap-12 lg:grid-cols-12`}>
          <div className="lg:col-span-6">
            <TiltFrame>
              <OrionVisual />
            </TiltFrame>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className={`${labelClass} mb-4 text-citrine`}>IN DEVELOPMENT</p>
            <h2 className={`${displayClass} mb-6 text-[clamp(36px,4vw,64px)] leading-[0.95] text-plum-50`}>
              The same standard. Not a smaller one.
            </h2>
            <p className="font-sans text-lg leading-[1.6] text-plum-300">
              Orion is being engineered to the same pristine standard as everything we make. We will share the details when it’s ready.
            </p>
          </div>
        </div>
      </section>
      <section data-surface="light" className="bg-ivory">
        <div className={`${gutter} ${sectionPadding} max-w-[44rem]`}>
          <h2 className="mb-5 font-sans text-[28px] font-semibold text-plum-800">What we will not do while it is being built</h2>
          <p className={`mb-4 font-sans text-lg leading-[1.65] ${lightBodyColour}`}>
            We will not describe a feature that is not ready. A name is not a specification, and a constellation on this page is not a product tour.
          </p>
          <p className={`mb-10 font-sans text-lg leading-[1.65] ${lightBodyColour}`}>
            Clear in design, correct under pressure and built for the long run. That is the bar Orion has to clear before we say anything more.
          </p>
          <ButtonLink href={routes.contact} variant="primaryOnLight">
            Talk to us
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
