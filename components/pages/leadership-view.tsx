import { Footer } from "@/components/home/footer/footer";
import { gutter } from "@/components/layout";
import { ClosingBand } from "@/components/pages/blocks";
import { displayClass, labelClass, lightBodyColour } from "@/components/section/tone";
import { routes } from "@/lib/routes";
import { founderQuote, people } from "@/lib/site";

/** Leadership. Only people with a name are shown. The empty seat is not invented. */
export function LeadershipView() {
  const shown = people.filter((person) => person.name);
  return (
    <>
      <main>
        <section data-surface="dark" className="bg-plum-950">
          <div className={`${gutter} grid min-h-[100svh] items-end gap-12 pt-[148px] pb-[clamp(72px,8vw,120px)] lg:grid-cols-12`}>
            <div className="lg:col-span-6">
              <p className={`${labelClass} mb-6 text-plum-300`}>LEADERSHIP</p>
              <h1 className={`${displayClass} mb-6 text-[clamp(48px,6vw,92px)] leading-[0.9] text-plum-50`}>
                The people <em className="font-serif text-[1.05em] font-normal text-citrine normal-case italic">accountable.</em>
              </h1>
              <p className="max-w-[34rem] font-sans text-[clamp(17px,1.35vw,20px)] leading-[1.6] text-plum-300">
                You will always know who is building your product, and who answers for it.
              </p>
            </div>
            <ul className="lg:col-span-5 lg:col-start-8">
              {shown.map((person) => (
                <li key={person.name}>
                  <p className={`${displayClass} mb-4 text-[72px] leading-none text-plum-50`} aria-hidden="true">
                    {person.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </p>
                  <h2 className="font-sans text-[28px] font-semibold text-plum-50">{person.name}</h2>
                  <p className={`${labelClass} mt-3 text-citrine`}>{person.role}</p>
                  <p className="mt-4 font-sans text-base leading-[1.6] text-plum-300">{person.bio}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section data-surface="light" className="bg-ivory">
          <div className={`${gutter} py-[clamp(72px,8vw,120px)] max-w-[760px]`}>
            <blockquote>
              <p className="font-serif text-[clamp(28px,3vw,44px)] leading-[1.2] text-plum-800 italic">{founderQuote.text}</p>
            </blockquote>
            <p className={`${labelClass} mt-6 text-plum-600`}>{founderQuote.attribution}</p>
            <p className={`mt-12 font-sans text-base leading-[1.6] ${lightBodyColour}`}>
              A co founder and chief technology officer will be named on this page when that person is ready to be named. We do not publish a seat we cannot introduce.
            </p>
            <p className="mt-8">
              <a href={routes.company} className="font-sans text-[15px] font-semibold text-plum-800 underline decoration-plum-200 underline-offset-4 hover:decoration-orchid">
                Our story →
              </a>
            </p>
          </div>
        </section>

        <ClosingBand
          title={[{ text: "Build with the people who answer for " }, { text: "it.", accent: true }]}
          body="Tell us where your business loses money, time or trust. We will show you what we would build, and how we would prove it."
          secondaryHref={routes.careers}
          secondaryLabel="Careers"
        />
      </main>
      <Footer />
    </>
  );
}
