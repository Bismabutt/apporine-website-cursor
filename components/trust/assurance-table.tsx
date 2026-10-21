import { labelClass } from "@/components/section/tone";
import { assurance, type AssuranceStatus } from "@/lib/site";

const roadmapLabel = "OUR ASSURANCE ROADMAP";

const statusStyles: Record<AssuranceStatus, string> = {
  "In place": "bg-citrine text-plum-800 border-citrine",
  "In progress": "border-citrine text-citrine",
  Planned: "border-plum-400 text-plum-300",
};

function StatusPill({ status }: { status: AssuranceStatus }) {
  return (
    <span
      className={`inline-flex h-7 items-center rounded-pill border px-3 font-mono text-[11px] font-medium tracking-[0.08em] whitespace-nowrap uppercase ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}

/**
 * The assurance roadmap (07-homepage-spec.md, section 9). Statuses come from
 * lib/site.ts. Text and pills only: never a certification logo or badge.
 */
export function AssuranceTable() {
  return (
    <div>
      <h3 id="assurance-roadmap" className={`${labelClass} mb-6 text-plum-300`}>
        {roadmapLabel}
      </h3>
      <table aria-labelledby="assurance-roadmap" className="w-full border-collapse text-start">
        <thead className="sr-only">
          <tr>
            <th scope="col">Item</th>
            <th scope="col">What it means</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody className="border-t border-plum-600">
          {assurance.map((row) => (
            <tr
              key={row.item}
              className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-1 border-b border-plum-600 py-5 md:table-row md:py-0"
            >
              <th scope="row" className="text-start font-sans text-lg font-semibold text-plum-50 md:w-[30%] md:py-5 md:pe-6">
                {row.item}
              </th>
              <td className="col-start-1 row-start-2 font-sans text-base leading-[1.5] text-plum-300 md:py-5 md:pe-6">{row.meaning}</td>
              <td className="col-start-2 row-span-2 row-start-1 self-center text-end md:py-5">
                <StatusPill status={row.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
