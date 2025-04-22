import StoryCard from "./components/Card";
import { stories } from "./components/Card";

export default function Home() {
  return (
    <div className="px-6 py-4">
      <div className="grid grid-cols-4 gap-8">
        {stories.map(story => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
}
