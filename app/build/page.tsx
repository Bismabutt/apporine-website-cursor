import { BuildView } from "@/components/pages/build-view";
import { pageMetadata } from "@/lib/page-meta";

export const metadata = pageMetadata(
  "What we build",
  "Platforms, apps, AI agents and automation, engineered to the standard of our own products.",
);

export default function Page() {
  return <BuildView />;
}
