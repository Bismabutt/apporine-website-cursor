import { Footer } from "@/components/home/footer/footer";
import { CareersStory } from "@/components/pages/careers-story";
import { StoryPage, storyMetadata } from "@/components/story-page";
import { routes } from "@/lib/routes";

export const metadata = storyMetadata(routes.careers);

export default function Page() {
  return (
    <>
      <StoryPage path={routes.careers}>
        <CareersStory />
      </StoryPage>
      <Footer />
    </>
  );
}
