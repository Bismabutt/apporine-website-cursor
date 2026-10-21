import { Footer } from "@/components/home/footer/footer";
import { gutter } from "@/components/layout";
import { ClosingBand, PageHeading } from "@/components/pages/blocks";
import { sectionPadding } from "@/components/section/section";
import { displayClass, labelClass, lightBodyColour } from "@/components/section/tone";
import { anchors, routes } from "@/lib/routes";
import { founderQuote } from "@/lib/site";

const standard = [
  { title: "Clear in design", line: "A person can see what the system is doing, and why." },
  { title: "Correct under pressure", line: "The hour that costs the most is the hour the design is for." },
  { title: "Built for the long run", line: "We stay accountable after launch, keeping it fast, secure and getting better." },
];

/** The company: why it exists, the pristine standard, and where it operates. */
export function CompanyView() {
  return (
    <>
      <main>
        <section data-surface="light" className="bg-ivory">
          <div className={`${gutter} pt-[148px] pb-[clamp(72px,8vw,120px)]`}>
            <PageHeading
              tone="light"
              eyebrow="COMPANY"
              title={[{ text: "A company built to " }, { text: "last.", accent: true }]}
              lead="The people, principles and pristine standard behind every product we build."
            />
            <p className={`mt-8 font-sans text-base leading-[1.6] ${lightBodyColour}`}>Apporine operates from the United States.</p>
          </div>
        </section>

        <section data-surface="dark" className="bg-plum-950">
          <div className={`${gutter} ${sectionPadding} grid gap-16 lg:grid-cols-12`}>
            <div className="lg:col-span-7">
              <h2 className={`${displayClass} text-[clamp(40px,5vw,72px)] leading-[0.92] text-plum-50`}>
                Every costly problem is a product waiting to be <em className="font-serif text-[1.05em] font-normal tracking-normal text-citrine normal-case italic">built.</em>
              </h2>
              <p className="mt-8 max-w-[40rem] font-sans text-[clamp(17px,1.35vw,20px)] leading-[1.6] text-plum-300">
                Downtime, fraud, delay and waste are not the cost of doing business. They are problems nobody has engineered away. Yet. We find them, measure them and build the software that ends them for good.
              </p>
            </div>
            <figure className="lg:col-span-5 lg:pt-6">
              <blockquote>
                <p className="font-serif text-[clamp(26px,2.6vw,36px)] leading-[1.25] text-citrine italic">{founderQuote.text}</p>
              </blockquote>
              <figcaption className={`${labelClass} mt-6 text-plum-300`}>{founderQuote.attribution}</figcaption>
            </figure>
          </div>
        </section>

        <section id="pristine" data-surface="light" className="scroll-mt-32 bg-plum-50">
          <div className={`${gutter} ${sectionPadding}`}>
            <p className={`${labelClass} mb-4 text-plum-600`}>THE PRISTINE STANDARD</p>
            <h2 className={`${displayClass} mb-14 max-w-[16ch] text-[clamp(36px,4.5vw,68px)] leading-[0.95] text-plum-800`}>
              What every product must be.
            </h2>
            <ol className="grid gap-6 lg:grid-cols-3">
              {standard.map((item, index) => (
                <li key={item.title} className="rounded-[24px] border border-plum-200 bg-ivory p-8">
                  <p className={`${labelClass} mb-6 text-orchid-deep`}>{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mb-3 font-sans text-[22px] font-semibold text-plum-800">{item.title}</h3>
                  <p className={`font-sans text-base leading-[1.6] ${lightBodyColour}`}>{item.line}</p>
                </li>
              ))}
            </ol>
            <p className="mt-12">
              <a href={anchors.howWeChoose} className="font-sans text-[15px] font-semibold text-plum-800 underline decoration-plum-200 underline-offset-4 hover:decoration-orchid">
                How we choose what to build →
              </a>
            </p>
          </div>
        </section>

        <section data-surface="dark" className="bg-plum-800">
          <div className={`${gutter} ${sectionPadding} grid gap-8 md:grid-cols-2`}>
            <div>
              <p className={`${labelClass} mb-4 text-plum-300`}>LEADERSHIP</p>
              <h2 className="mb-4 font-sans text-[28px] font-semibold text-plum-50">Accountable people. Not a faceless vendor.</h2>
              <p className="mb-6 max-w-[32rem] font-sans text-base leading-[1.6] text-plum-300">You will always know who is building your product, and who answers for it.</p>
              <a href={routes.leadership} className="font-sans text-[15px] font-semibold text-citrine">
                The people accountable →
              </a>
            </div>
            <div>
              <p className={`${labelClass} mb-4 text-plum-300`}>CAREERS</p>
              <h2 className="mb-4 font-sans text-[28px] font-semibold text-plum-50">Build what tomorrow runs on.</h2>
              <p className="mb-6 max-w-[32rem] font-sans text-base leading-[1.6] text-plum-300">
                Join the team engineering products for the world’s most demanding industries.
              </p>
              <a href={routes.careers} className="font-sans text-[15px] font-semibold text-citrine">
                Careers →
              </a>
            </div>
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
