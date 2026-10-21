import Link from "next/link";
import { Footer } from "@/components/home/footer/footer";
import { gutter } from "@/components/layout";
import { ClosingBand, Kicker, MethodList } from "@/components/pages/blocks";
import { Film } from "@/components/section/film";
import { sectionPadding } from "@/components/section/section";
import { displayClass, focusRingLight, labelClass, lightBodyColour } from "@/components/section/tone";
import { industryPages, type IndustryPageContent } from "@/lib/industry-pages";
import { routes } from "@/lib/routes";

/** One industry: the film and the costly hour on opposite sides, then the method. */
export function IndustryView({ industry }: { industry: IndustryPageContent }) {
  const index = industryPages.findIndex((entry) => entry.path === industry.path);
  const flip = index % 2 === 1;
  const others = industryPages.filter((entry) => entry.path !== industry.path);

  return (
    <>
      <main>
        <section data-surface="dark" className="grid min-h-[100svh] bg-plum-950 lg:grid-cols-2">
          <div className={`relative min-h-[48vh] ${flip ? "lg:order-2" : ""}`}>
            <Film name={industry.film} mobileName={industry.mobileFilm} eager />
          </div>
          <div className={`${gutter} flex flex-col justify-end py-[clamp(72px,8vw,120px)] lg:px-[clamp(40px,4vw,80px)] ${flip ? "lg:order-1" : ""}`}>
            <p className={`${labelClass} mb-6 text-citrine`}>
              {String(index + 1).padStart(2, "0")} / {String(industryPages.length).padStart(2, "0")}
            </p>
            <h1 className={`${displayClass} mb-6 text-[clamp(48px,6vw,92px)] leading-[0.9] text-plum-50`}>{industry.name}</h1>
            <p className={`${labelClass} mb-3 text-plum-300`}>THE COSTLY PROBLEM</p>
            <p className="max-w-[34rem] font-sans text-[clamp(18px,1.5vw,22px)] leading-[1.45] text-plum-50">{industry.problem}</p>
          </div>
        </section>

        <section data-surface="light" className="bg-ivory">
          <div className={`${gutter} ${sectionPadding} grid gap-12 lg:grid-cols-12`}>
            <div className="lg:col-span-4">
              <Kicker>THE HOUR</Kicker>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              {industry.hour.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className={`mb-6 font-sans text-[clamp(18px,1.4vw,22px)] leading-[1.55] ${lightBodyColour}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section data-surface="dark" className="bg-plum-900">
          <div className={`${gutter} ${sectionPadding} grid gap-10 lg:grid-cols-12`}>
            <div className="lg:col-span-4">
              <p className={`${labelClass} mb-4 text-plum-300`}>WHAT WE BUILD</p>
              <p className={`${displayClass} text-[clamp(32px,3.4vw,52px)] leading-[0.95] text-plum-50`}>{industry.build}</p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className={`${labelClass} mb-6 text-plum-300`}>HOW AN ENGAGEMENT RUNS</p>
              <MethodList tone="dark" />
            </div>
          </div>
        </section>

        <section data-surface="light" className="bg-plum-50">
          <div className={`${gutter} py-[clamp(64px,8vw,112px)]`}>
            <p className={`${labelClass} mb-6 text-plum-600`}>OTHER INDUSTRIES</p>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((entry) => (
                <li key={entry.path}>
                  <Link href={entry.path} prefetch={false} className={`rounded-sm font-sans text-lg font-semibold text-plum-800 underline decoration-plum-200 underline-offset-4 hover:decoration-orchid ${focusRingLight}`}>
                    {entry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ClosingBand
          title={[{ text: "If this is your hour, " }, { text: "start.", accent: true }]}
          body="Tell us where your business loses money, time or trust. We will show you what we would build, and how we would prove it."
          secondaryHref={routes.industries}
          secondaryLabel="All industries"
        />
      </main>
      <Footer />
    </>
  );
}
