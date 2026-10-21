import { Suspense } from "react";
import { Film } from "@/components/section/film";
import { gutter } from "@/components/layout";
import { ContactTopicForm } from "@/components/pages/contact-topic";
import { displayClass, labelClass } from "@/components/section/tone";
import { Footer } from "@/components/home/footer/footer";

/** Split screen: the question on the film, the brief on the dark panel. */
export function ContactView() {
  return (
    <>
      <main className="grid min-h-[100svh] lg:grid-cols-2">
        <section data-surface="dark" className="relative isolate flex min-h-[52vh] items-end overflow-hidden bg-plum-950">
          <div className="absolute inset-0 -z-10">
            <Film name="hero-03-bridge" mobileName="hero-03-bridge-mobile" eager />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{ backgroundImage: "linear-gradient(0deg, rgba(18,4,26,0.88) 0%, rgba(18,4,26,0.35) 55%)" }}
            />
          </div>
          <div className={`${gutter} py-[clamp(48px,6vw,96px)] lg:px-[clamp(40px,4vw,80px)]`}>
            <p className={`${labelClass} mb-5 text-plum-100`}>TALK TO US</p>
            <h1 className={`${displayClass} max-w-[12ch] text-[clamp(44px,5vw,80px)] leading-[0.9] text-plum-50`}>
              Bring us the problem that costs you <em className="font-serif text-[1.05em] font-normal text-citrine normal-case italic">most.</em>
            </h1>
          </div>
        </section>
        <section data-surface="dark" className="bg-plum-900">
          <div className={`${gutter} py-[clamp(72px,8vw,120px)] pt-[120px] lg:px-[clamp(40px,4vw,80px)] lg:pt-[148px]`}>
            <p className="mb-8 max-w-[32rem] font-sans text-base leading-[1.6] text-plum-300">
              Tell us where your business loses money, time or trust. We will show you what we would build, and how we would prove it.
            </p>
            <Suspense fallback={<p className="font-sans text-base text-plum-300">Loading the brief.</p>}>
              <ContactTopicForm />
            </Suspense>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
