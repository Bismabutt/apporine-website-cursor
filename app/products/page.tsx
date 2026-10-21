import { existsSync } from "node:fs";
import path from "node:path";
import { RELYXUS_SCREENSHOT } from "@/components/home/products/relyxus-visual";
import { ProductsView } from "@/components/pages/products-view";
import { pageMetadata } from "@/lib/page-meta";

export const metadata = pageMetadata(
  "Products",
  "Relyxus, AI incident response, and Orion, in development. Every product we release is held to one standard.",
);

export default function Page() {
  const hasScreenshot = existsSync(path.join(process.cwd(), "public", RELYXUS_SCREENSHOT));
  return <ProductsView hasScreenshot={hasScreenshot} />;
}
