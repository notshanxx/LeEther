import Image from "next/image";
import { getById } from "@/lib/json-data-helper";
import data from "../_data/western-zodiac.json";
import Card3D from "@/app/_components/Card3D";

export default async function WesternZodiacSignPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const westernZodiacData = getById(data, id);
  const mainData = westernZodiacData?.main;
  const infoData = westernZodiacData?.infos;
  console.log("westernZodiacData:", infoData);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center mx-4">
      <Card3D>
        <div className="flex justify-center mb-4 ">
          <div className="flex flex-col justify-center ">
            <h1 className="text-2xl font-bold">{mainData.name}</h1>
            <p>{mainData.title}</p>
          </div>

          <Image
            src={`/zodiacs/western/${id}.svg`}
            alt={id}
            width={200}
            height={200}
            className="brightness-0 dark:invert"
          />
        </div>
      </Card3D>

      <div className="flex flex-col items-center justify-center ">
        {/* quote n desc*/}
        <div className="flex flex-col items-center justify-center mb-8 max-w-sm">
          <div className="carousel rounded-box w-full">
            {mainData.quotes.map((quote: { quote: string; quoteAuthor: string }, index: number) => (
              <div
                key={index}
                id={`slide${index}`}
                className="carousel-item relative w-full"
              >
                <div className="card w-full">
                  <div className="card-body text-center py-8">
                    <p className="text-lg italic">&quot;{quote.quote}&quot;</p>

                    <cite className="mt-4 text-sm opacity-70">
                      — {quote.quoteAuthor}
                    </cite>
                  </div>
                </div>

                <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 justify-between">
                  <a
                    href={`#slide${
                      (index - 1 + mainData.quotes.length) %
                      mainData.quotes.length
                    }`}
                    className="btn btn-circle btn-sm"
                  >
                    ❮
                  </a>

                  <a
                    href={`#slide${(index + 1) % mainData.quotes.length}`}
                    className="btn btn-circle btn-sm"
                  >
                    ❯
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="text-lg">{mainData.shortDesc}</p>
        </div>
        {/* info */}
        <div className="grid grid-cols-2 gap-2">
          {infoData?.map((section: { title: string; items: string[] }, index: number) => (
            <section key={section.title} className={`mb-8 `}>
              <h2 className="text-xl font-bold mb-3">{section.title}</h2>

              <ul className="list-disc pl-5 space-y-1">
                {section.items.map((item: string, itemIndex: number) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
