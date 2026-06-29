import Card from "@/app/_components/HoverCard";
import { getAll } from "@/lib/json-data-helper";
import chineseZodiac from "./_data/chinese-zodiac.json";

export default function ChineseZodiacSignPage() {
  const chineseZodiacs = getAll(chineseZodiac);

  return (
    <div className="min-h-screen px-6 py-12 bg-background text-foreground transition-colors">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">
          Chinese Zodiac Signs
        </h1>

        <p className="mt-4 text-sm sm:text-base text-muted-foreground">
          Discover the 12 Chinese zodiac animals and their meanings, traits, and
          symbolism.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {chineseZodiacs.map((data) => (
          <Card
            key={data.id}
            imageSrc={`/zodiacs/chinese/${data.id}.svg`}
            imageAlt={data.main.title}
            title={data.main.name + " - " + data.main.title}
            description={data.main.shortDesc.split(".")[0]}
            href={`/features/zodiac/chinese/${data.id}`}
          />
        ))}
      </div>
    </div>
  );
}
