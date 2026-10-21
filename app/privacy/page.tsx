import { DocumentPage } from "@/components/pages/document-page";
import { pageMetadata } from "@/lib/page-meta";

export const metadata = pageMetadata(
  "Privacy",
  "What this site collects, what it does not, and the rule for client data in our products.",
);

export default function Page() {
  return (
    <DocumentPage
      eyebrow="PRIVACY"
      title="Your data stays yours."
      lead="We collect only what we need, and client data is never used to train shared models. This page says what that means for the website, and for the products."
      sections={[
        {
          heading: "This website",
          paragraphs: [
            "The marketing site does not ask you to create an account. It does not run advertising. It does not sell personal information, because it is not in the business of collecting it.",
            "Apporine operates from the United States. This page is the standard we hold the site to. It is not a certification.",
          ],
        },
        {
          heading: "The contact brief",
          paragraphs: [
            "The contact form prepares a brief in your browser. It is not sent to an Apporine server. If a public email address has been published in the site configuration, choosing to send opens your own email program. If no address is published, the brief stays on the page for you to copy.",
            "What you type is yours until you decide to send it.",
          ],
        },
        {
          heading: "Client data in the products",
          paragraphs: [
            "We collect only what we need, and client data is never used to train shared models. That rule is a company policy. It applies to the products, not only to this website.",
            "Policies, security questionnaires and evidence are shared under NDA, on request.",
          ],
        },
        {
          heading: "Ask us",
          paragraphs: [
            "If you want to know what a product stores, ask through the contact page and choose a security pack, or write to the person you are already speaking with.",
          ],
        },
      ]}
    />
  );
}
