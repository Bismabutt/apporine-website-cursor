import { IndustryView } from "@/components/pages/industry-view";
import { industryByPath } from "@/lib/industry-pages";
import { pageMetadata } from "@/lib/page-meta";
import { routes } from "@/lib/routes";

const industry = industryByPath(routes.energyAndUtilities);

export const metadata = pageMetadata(industry.name, industry.problem);

export default function Page() {
  return <IndustryView industry={industry} />;
}
