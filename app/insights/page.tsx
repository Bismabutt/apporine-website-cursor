import { InsightsIndex } from "@/components/pages/insights-index";
import { pageMetadata } from "@/lib/page-meta";

export const metadata = pageMetadata(
  "Insights",
  "Field notes on engineering, AI in production and the problems that cost industries most.",
);

export default function Page() {
  return <InsightsIndex />;
}
