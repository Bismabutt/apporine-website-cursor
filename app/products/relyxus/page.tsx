import { existsSync } from "node:fs";
import path from "node:path";
import { Footer } from "@/components/home/footer/footer";
import { RELYXUS_SCREENSHOT } from "@/components/home/products/relyxus-visual";
import { RelyxusStory } from "@/components/pages/relyxus-story";
import { StoryPage, storyMetadata } from "@/components/story-page";
import { routes } from "@/lib/routes";

export const metadata = storyMetadata(routes.relyxus);

export default function Page() {
  const hasScreenshot = existsSync(path.join(process.cwd(), "public", RELYXUS_SCREENSHOT));
  return (
    <>
      <StoryPage path={routes.relyxus}>
        <RelyxusStory hasScreenshot={hasScreenshot} />
      </StoryPage>
      <Footer />
    </>
  );
}
