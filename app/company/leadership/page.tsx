import { LeadershipView } from "@/components/pages/leadership-view";
import { pageMetadata } from "@/lib/page-meta";

export const metadata = pageMetadata(
  "Leadership",
  "You will always know who is building your product, and who answers for it.",
);

export default function Page() {
  return <LeadershipView />;
}
