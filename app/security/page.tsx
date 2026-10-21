import { SecurityView } from "@/components/pages/security-view";
import { pageMetadata } from "@/lib/page-meta";

export const metadata = pageMetadata(
  "Security",
  "Security principles, an honest assurance roadmap, and how to request the security pack.",
);

export default function Page() {
  return <SecurityView />;
}
