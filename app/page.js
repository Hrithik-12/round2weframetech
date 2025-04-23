
import StoryCard from "./components/Card";
import { stories } from "./components/Card";

export default function Home() {
  return (
    <div className="px-4 sm:px-6 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
}

