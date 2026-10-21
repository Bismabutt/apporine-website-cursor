import { Footer } from "@/components/home/footer/footer";
import { TrustStory } from "@/components/pages/trust-story";
import { StoryPage, storyMetadata } from "@/components/story-page";
import { routes } from "@/lib/routes";

export const metadata = storyMetadata(routes.trust);

export default function Page() {
  return (
    <>
      <StoryPage path={routes.trust}>
        <TrustStory />
      </StoryPage>
      <Footer />
    </>
  );
}
