import { Footer } from "@/components/home/footer/footer";
import { EssayBody } from "@/components/pages/essay-body";
import { essayByPath } from "@/lib/essays";
import { pageMetadata } from "@/lib/page-meta";
import { routes } from "@/lib/routes";

const essay = essayByPath(routes.industryPerspectives);

export const metadata = pageMetadata(essay.titlePlain, essay.description);

export default function Page() {
  return (
    <>
      <main>
        <EssayBody essay={essay} masthead />
      </main>
      <Footer />
    </>
  );
}
