import { IndustriesIndex } from "@/components/pages/industries-index";
import { pageMetadata } from "@/lib/page-meta";

export const metadata = pageMetadata(
  "Industries",
  "We build for industries where one bad hour can cost millions. Financial services, insurance, telecommunications, energy, logistics and retail.",
);

export default function Page() {
  return <IndustriesIndex />;
}
