import { DocumentPage } from "@/components/pages/document-page";
import { pageMetadata } from "@/lib/page-meta";

export const metadata = pageMetadata(
  "Terms",
  "This site is an introduction to Apporine. It is not a contract and not an offer.",
);

export default function Page() {
  return (
    <DocumentPage
      eyebrow="TERMS"
      title="An introduction, not a contract."
      lead="This website is operated from the United States. It introduces Apporine. It does not, by itself, create a contract."
      sections={[
        {
          heading: "Not an offer",
          paragraphs: [
            "Nothing on this site is an offer to sell a product, a promise of a feature, or a commitment to take on a project. Relyxus is described as it is. Orion is in development, and we will share the details when it is ready.",
            "Product terms, and the terms of any engagement, are agreed separately and in writing.",
          ],
        },
        {
          heading: "The words and the mark",
          paragraphs: [
            "The site, the Falcon, the word Apporine and the product names are owned by Apporine. You may link to a page. You may not copy the site, the mark or the films and present them as your own.",
          ],
        },
        {
          heading: "The site itself",
          paragraphs: [
            "We work to keep the site available and accurate. We do not warrant that it will be uninterrupted, or that a page is free of error. If a line is wrong, the correction belongs on the page, not in a footnote you cannot find.",
            "To the extent the law allows, Apporine is not liable for loss arising only from the use of this informational site. A product or an engagement is governed by its own agreement.",
          ],
        },
      ]}
    />
  );
}
