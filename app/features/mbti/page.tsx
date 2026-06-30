import { getAll } from "@/lib/json-data-helper";
import mbti from "./_data/mbti.json";
import Card from "@/app/_components/HoverCard";

export default function FeatureLists() {
  const mbtiTypes = getAll(mbti);
  return (
    <div className="min-h-screen px-6 py-12 bg-background text-foreground transition-colors">
    <div className="hero py-16">
  <div className="hero-content text-center">
    <div className="max-w-3xl">
      <div className="badge badge-primary mb-4">
        Personality Explorer
      </div>

      <h1 className="text-4xl md:text-6xl font-bold">
        Discover Your MBTI Type
      </h1>

      <p className="py-6 text-lg text-base-content/70">
        Explore the 16 personality types, learn about their strengths and
        traits, or take a short personality test to discover which MBTI
        type best matches you.
      </p>

      <button className="btn btn-primary">
        Take a Short Test
      </button>
    </div>
  </div>
</div>
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mbtiTypes.map((data) => (
          <Card
            key={data.id}
            imageSrc={`/mbti/${data.id.toUpperCase()}.svg`}
            imageAlt={data.main.title}
            title={data.main.name +" - " + data.main.title}
            description={data.main.shortDesc.split(".")[0]}
            href={`/features/mbti/${data.id}`}
          />
        ))}
      </div>
    </div>
  );
}
