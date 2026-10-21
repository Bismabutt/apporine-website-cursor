import Link from "next/link";
import { Footer } from "@/components/home/footer/footer";
import { gutter } from "@/components/layout";
import { ClosingBand, PageHeading } from "@/components/pages/blocks";
import { focusRing, labelClass } from "@/components/section/tone";
import { industryPages } from "@/lib/industry-pages";

/** A full width index. The homepage stage is the conversation; this is the map. */
export function IndustriesIndex() {
  return (
    <>
      <main>
        <section data-surface="dark" className="bg-plum-950">
          <div className={`${gutter} pt-[148px] pb-10`}>
            <PageHeading
              tone="dark"
              eyebrow="INDUSTRIES"
              title={[{ text: "Where one bad hour can cost " }, { text: "millions.", accent: true }]}
              lead="We go where reliability is not a feature but the business itself."
            />
          </div>
          <ul className={`${gutter} pb-[clamp(72px,8vw,128px)]`}>
            {industryPages.map((industry, index) => (
              <li key={industry.path} className="border-t border-plum-700 last:border-b">
                <Link
                  href={industry.path}
                  prefetch={false}
                  className={`group grid gap-4 py-8 md:grid-cols-[4.5rem_minmax(0,1fr)_minmax(0,1fr)_auto] md:items-center md:gap-8 md:py-10 ${focusRing} rounded-sm`}
                >
                  <span className={`${labelClass} text-citrine`}>{String(index + 1).padStart(2, "0")}</span>
                  <span className="font-display text-[clamp(28px,3vw,44px)] leading-[1] font-extrabold tracking-[-0.015em] text-plum-50 uppercase [font-variation-settings:'wdth'_75,'opsz'_96]">
                    {industry.name}
                  </span>
                  <span className="font-sans text-base leading-[1.5] text-plum-300 md:max-w-[28rem]">{industry.problem}</span>
                  <span aria-hidden="true" className="font-sans text-xl text-citrine transition-transform duration-240 ease-brand group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <ClosingBand
          title={[{ text: "Bring us the hour that costs you " }, { text: "most.", accent: true }]}
          body="Tell us where your business loses money, time or trust. We will show you what we would build, and how we would prove it."
        />
      </main>
      <Footer />
    </>
  );
}
