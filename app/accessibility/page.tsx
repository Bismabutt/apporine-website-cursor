import { DocumentPage } from "@/components/pages/document-page";
import { pageMetadata } from "@/lib/page-meta";

export const metadata = pageMetadata(
  "Accessibility",
  "Apporine aims for WCAG 2.2 AA. Keyboard, contrast, and reduced motion are part of the build.",
);

export default function Page() {
  return (
    <DocumentPage
      eyebrow="ACCESSIBILITY"
      title="Built to be used, not only admired."
      lead="We aim for WCAG 2.2 level AA on this site. A beautiful page that a keyboard cannot operate is not finished."
      sections={[
        {
          heading: "What we design for",
          paragraphs: [
            "Text and controls meet contrast requirements against their backgrounds. Focus is visible. The navigation, the industry controls and the forms work from the keyboard.",
            "If you ask the system for reduced motion, entrances become short fades. Films stay on their posters. Nothing is pinned to the scroll, and nothing tilts toward the pointer.",
          ],
        },
        {
          heading: "The cursor",
          paragraphs: [
            "On a fine pointer, with motion allowed, a small square follows the pointer and the system cursor is hidden. It is decorative. It does not appear when reduced motion is on, or on a coarse pointer such as a finger, and the system cursor remains.",
            "Text fields keep a text cursor, so you can see where you are typing. Every action the square points at can also be reached without a pointer.",
          ],
        },
        {
          heading: "If something blocks you",
          paragraphs: [
            "Tell us. Use the contact page and say what you were trying to do, and what stopped you. We treat that as a defect in the work, not as a preference.",
          ],
        },
      ]}
    />
  );
}
