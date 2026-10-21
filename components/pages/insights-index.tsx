import Link from "next/link";
import { Footer } from "@/components/home/footer/footer";
import { gutter } from "@/components/layout";
import { ClosingBand } from "@/components/pages/blocks";
import { displayClass, focusRingLight, labelClass, lightBodyColour } from "@/components/section/tone";
import { essays } from "@/lib/essays";

/** Editorial index: one featured field note, then the rest as a column of titles. */
export function InsightsIndex() {
  const [featured, ...rest] = essays;
  return (
    <>
      <main>
        <section data-surface="light" className="bg-ivory">
          <div className={`${gutter} pt-[148px] pb-[clamp(72px,8vw,128px)]`}>
            <p className={`${labelClass} mb-8 text-plum-600`}>INSIGHTS</p>
            <h1 className={`${displayClass} mb-6 max-w-[12ch] text-[clamp(56px,8vw,120px)] leading-[0.88] text-plum-800`}>
              Field notes
            </h1>
            <p className={`max-w-[34rem] font-sans text-[clamp(17px,1.35vw,20px)] leading-[1.6] ${lightBodyColour}`}>
              Thinking that holds up in production. Field notes on engineering, AI in production and the problems that cost industries most.
            </p>
          </div>
        </section>

        <section data-surface="dark" className="bg-plum-950">
          <div className={`${gutter} ${"py-[clamp(72px,8vw,120px)]"}`}>
            <p className={`${labelClass} mb-6 text-citrine`}>{featured.category.toUpperCase()}</p>
            <h2 className={`${displayClass} mb-6 max-w-[18ch] text-[clamp(36px,4.5vw,72px)] leading-[0.95] text-plum-50`}>
              <Link href={featured.path} prefetch={false} className={`rounded-sm focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-citrine`}>
                {featured.titlePlain}
              </Link>
            </h2>
            <p className="max-w-[36rem] font-sans text-lg leading-[1.6] text-plum-300">{featured.description}</p>
          </div>
        </section>

        <section data-surface="light" className="bg-plum-50">
          <ul className={`${gutter}`}>
            {rest.map((essay, index) => (
              <li key={essay.path} className="border-b border-plum-200">
                <Link href={essay.path} prefetch={false} className={`group grid gap-3 py-10 md:grid-cols-[8rem_1fr] md:gap-10 ${focusRingLight} rounded-sm`}>
                  <span className={`${labelClass} text-plum-600`}>{String(index + 2).padStart(2, "0")}</span>
                  <span>
                    <span className={`${labelClass} mb-3 block text-orchid-deep`}>{essay.category}</span>
                    <span className="block font-sans text-[clamp(22px,2vw,32px)] leading-[1.25] font-semibold text-plum-800">{essay.titlePlain}</span>
                    <span className={`mt-3 block max-w-[40rem] font-sans text-base leading-[1.6] ${lightBodyColour}`}>{essay.description}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <ClosingBand
          title={[{ text: "Read it, then bring us the " }, { text: "problem.", accent: true }]}
          body="Tell us where your business loses money, time or trust. We will show you what we would build, and how we would prove it."
        />
      </main>
      <Footer />
    </>
  );
}
