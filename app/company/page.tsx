import { CompanyView } from "@/components/pages/company-view";
import { pageMetadata } from "@/lib/page-meta";

export const metadata = pageMetadata(
  "Company",
  "Apporine builds enterprise products for industries where failure is costly. The company operates from the United States.",
);

export default function Page() {
  return <CompanyView />;
}
