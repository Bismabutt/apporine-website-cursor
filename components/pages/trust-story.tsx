import Link from "next/link";
import { gutter } from "@/components/layout";
import { sectionPadding } from "@/components/section/section";
import { focusRing, labelClass } from "@/components/section/tone";
import { AssuranceTable } from "@/components/trust/assurance-table";
import { principles } from "@/lib/principles";
import { contactTopics, routes } from "@/lib/routes";

/** Trust centre, under the story banner: the four principles and the roadmap. */
export function TrustStory() {
  return (
    <section data-surface="dark" className="relative isolate overflow-hidden bg-plum-800">
      <div aria-hidden="true" className="blueprint-grid" />
      <div aria-hidden="true" className="blueprint-scan" />
      <div className={`${gutter} relative ${sectionPadding}`}>
        <ol className="grid gap-6 md:grid-cols-2">
          {principles.map((principle, index) => (
            <li key={principle.id} className="rounded-[24px] border border-[rgba(165,59,239,0.3)] bg-[rgba(18,4,26,0.45)] p-8">
              <p className={`${labelClass} mb-6 text-citrine`}>{String(index + 1).padStart(2, "0")}</p>
              <h2 className="mb-3 font-sans text-[22px] font-semibold text-plum-50">{principle.title}</h2>
              <p className="font-sans text-base leading-[1.6] text-plum-300">{principle.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-16 md:mt-24">
          <AssuranceTable />
        </div>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link href={contactTopics.security} prefetch={false} className={`rounded-sm font-sans text-[15px] font-semibold text-citrine ${focusRing}`}>
            Request our security pack →
          </Link>
          <Link href={routes.security} prefetch={false} className={`rounded-sm font-sans text-[15px] font-semibold text-plum-100 ${focusRing}`}>
            Security →
          </Link>
          <Link href={routes.privacy} prefetch={false} className={`rounded-sm font-sans text-[15px] font-semibold text-plum-100 ${focusRing}`}>
            Privacy →
          </Link>
        </div>
      </div>
    </section>
  );
}
