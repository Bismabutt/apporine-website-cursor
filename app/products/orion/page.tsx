import { Footer } from "@/components/home/footer/footer";
import { OrionStory } from "@/components/pages/orion-story";
import { StoryPage, storyMetadata } from "@/components/story-page";
import { routes } from "@/lib/routes";

export const metadata = storyMetadata(routes.orion);

export default function Page() {
  return (
    <>
      <StoryPage path={routes.orion}>
        <OrionStory />
      </StoryPage>
      <Footer />
    </>
  );
}
