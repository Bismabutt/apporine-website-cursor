import Link from "next/link";
import { Footer } from "@/components/home/footer/footer";
import { gutter } from "@/components/layout";
import { PageHeading } from "@/components/pages/blocks";
import { sectionPadding } from "@/components/section/section";
import { focusRing, labelClass } from "@/components/section/tone";
import { AssuranceTable } from "@/components/trust/assurance-table";
import { principles } from "@/lib/principles";
import { contactTopics, routes } from "@/lib/routes";

/** Security: the principles, the honest roadmap, and how to ask for the pack. */
export function SecurityView() {
  return (
    <>
      <main>
        <section data-surface="dark" className="relative isolate overflow-hidden bg-plum-800">
          <div aria-hidden="true" className="blueprint-grid" />
          <div aria-hidden="true" className="blueprint-scan" />
          <div className={`${gutter} relative pt-[148px] pb-[clamp(64px,8vw,112px)]`}>
            <PageHeading
              tone="dark"
              eyebrow="SECURITY"
              title={[{ text: "Built to be " }, { text: "examined.", accent: true }]}
              lead="Enterprises trust what they can verify. So we design for scrutiny from day one: clear controls, honest status and evidence on request."
            />
          </div>
        </section>

        <section data-surface="dark" className="bg-plum-950">
          <div className={`${gutter} ${sectionPadding}`}>
            <ol className="grid gap-8 md:grid-cols-2">
              {principles.map((principle, index) => (
                <li key={principle.id} className="border-t border-plum-700 pt-6">
                  <p className={`${labelClass} mb-4 text-citrine`}>{String(index + 1).padStart(2, "0")}</p>
                  <h2 className="mb-3 font-sans text-[22px] font-semibold text-plum-50">{principle.title}</h2>
                  <p className="font-sans text-base leading-[1.6] text-plum-300">{principle.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section data-surface="dark" className="bg-plum-900">
          <div className={`${gutter} ${sectionPadding}`}>
            <AssuranceTable />
            <p className="mt-8 max-w-[40rem] font-sans text-base leading-[1.6] text-plum-300">
              A status of planned is not a badge. We publish the roadmap so you can see the work, not a logo we have not earned.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link href={contactTopics.security} prefetch={false} className={`font-sans text-[15px] font-semibold text-citrine ${focusRing} rounded-sm`}>
                Request our security pack →
              </Link>
              <Link href={routes.trust} prefetch={false} className={`font-sans text-[15px] font-semibold text-plum-100 ${focusRing} rounded-sm`}>
                Visit the Trust centre →
              </Link>
              <Link href="/.well-known/security.txt" prefetch={false} className={`font-sans text-[15px] font-semibold text-plum-100 ${focusRing} rounded-sm`}>
                security.txt →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
