import { PressView } from "@/components/pages/press-view";
import { pageMetadata } from "@/lib/page-meta";

export const metadata = pageMetadata(
  "Press",
  "The facts Apporine will state, and the claims it will not make.",
);

export default function Page() {
  return <PressView />;
}
