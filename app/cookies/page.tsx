import { DocumentPage } from "@/components/pages/document-page";
import { pageMetadata } from "@/lib/page-meta";

export const metadata = pageMetadata(
  "Cookies",
  "This site does not use analytics, advertising or tracking cookies.",
);

export default function Page() {
  return (
    <DocumentPage
      eyebrow="COOKIES"
      title="Nothing here is tracking you."
      lead="Apporine does not use this website to set analytics, advertising or tracking cookies. There is no cookie banner, because there is no tracking choice to make."
      sections={[
        {
          heading: "What we do not set",
          paragraphs: [
            "No analytics cookie. No advertising cookie. No cookie that follows you to another site. The pages are static. The contact brief never leaves your browser unless you send it yourself.",
          ],
        },
        {
          heading: "What your browser may still do",
          paragraphs: [
            "A browser, or the host that serves the site, may store something of its own in order to deliver the pages. That is not an Apporine tracker, and we do not use it to build a profile of you.",
            "If that distinction is not clear enough for your review, ask us through the contact page. We would rather explain it than hide behind a banner full of switches.",
          ],
        },
      ]}
    />
  );
}
