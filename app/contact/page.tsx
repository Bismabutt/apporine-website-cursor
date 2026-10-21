import { ContactView } from "@/components/pages/contact-view";
import { pageMetadata } from "@/lib/page-meta";

export const metadata = pageMetadata(
  "Contact",
  "Tell us where your business loses money, time or trust. We will show you what we would build.",
);

export default function Page() {
  return <ContactView />;
}
