import Image from "next/image";
import { getById } from "@/lib/json-data-helper";
import data from "../_data/mbti.json";
import Card3D from "@/app/_components/Card3D";
import { notFound } from "next/navigation";

export default async function MBTIPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const mbtiMeaning: Record<string, string> = {
    I: "Introverted",
    E: "Extraverted",
    S: "Sensing",
    N: "Intuition",
    T: "Thinking",
    F: "Feeling",
    J: "Judging",
    P: "Perceiving",
  };

  const mbtiData = getById(data, id);

  if (!mbtiData) {
      return notFound();
    }

  const mainData = mbtiData?.main;
  const infoData = mbtiData?.infos;
  console.log("mbtiData:", infoData);

  return (

    <div className="min-h-screen flex flex-col items-center justify-center ">
      <Card3D>
        <div className="flex justify-center mb-4">
          <div className="flex flex-col justify-center ">
            <h1 className="text-2xl font-bold">{mainData?.name}</h1>
            <p>{mainData?.title}</p>
            <div>
              {id
                .toUpperCase()
                .split("")
                .map((char, index) => (
                  <p key={index} className="badge badge-xs">
                    <span className="font-bold">{char}</span>
                    {mbtiMeaning[char].slice(1)}
                  </p>
                ))}
            </div>
          </div>

          <Image src={`/mbti/${id.toLowerCase()}.svg`} alt={id} width={200} height={200}  />
        </div>
      </Card3D>

      <div className="flex flex-col items-center justify-center gap-10">
        <blockquote className="space-y-2">
          <p className="text-lg italic text-base-content/90">
            &quot;{mbtiData?.main.quote}&quot;
          </p>

          <cite className="text-sm not-italic text-base-content/60">
            — {mbtiData?.main.quoteAuthor}
          </cite>
        </blockquote>
        <p className="text-lg max-w-md">{mbtiData?.main.shortDesc}</p>

        <div className="grid grid-cols-2 gap-2">
          {infoData?.map((section, index ) => (
            <section
              key={section.title}
              className={`mb-8 ${
                index === 0 || index === infoData.length - 1 ? "col-span-2" : ""
              }`}
            >
              <h2 className="text-xl font-bold mb-3">{section.title}</h2>

              <ul className="list-disc pl-5 space-y-1">
                {section.items.map((item, itemIndex) => (
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
