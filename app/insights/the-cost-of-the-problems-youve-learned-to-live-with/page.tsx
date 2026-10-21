import { Footer } from "@/components/home/footer/footer";
import { EssayBody } from "@/components/pages/essay-body";
import { StoryPage, storyMetadata } from "@/components/story-page";
import { essayByPath } from "@/lib/essays";
import { routes } from "@/lib/routes";

const essay = essayByPath(routes.costOfProblems);

export const metadata = storyMetadata(routes.costOfProblems);

export default function Page() {
  return (
    <>
      <StoryPage path={routes.costOfProblems}>
        <EssayBody essay={essay} />
      </StoryPage>
      <Footer />
    </>
  );
}
