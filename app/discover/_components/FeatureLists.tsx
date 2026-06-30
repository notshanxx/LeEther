"use client";
import DynamicImage from "@/app/_components/DynamicImage";
import Link from "next/link";
export default function FeatureLists() {
  const features = [
    {
      name: "Chinese Zodiac",
      description: "Rat, Ox, Tiger, Rabbit...",
      icon: "/zodiacs/chinese/dragon.svg",
      href: "/features/zodiac/chinese",
    },
    {
      name: "Western Zodiac",
      description: "Aries, Taurus, Gemini...",
      icon: "/zodiacs/western/aries.svg",
      href: "/features/zodiac/western",
    },
    {
      name: "MBTI Types",
      description: "INTJ, ENFP, ISTP...",
      icon: "/mbti/INTJ.svg",
      href: "/features/mbti",
    },
  ];

  // const [saved, setSaved] = useState(false);

  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
        <h2 className="text-2xl font-bold">
          Explore Personality & Self-Discovery
        </h2>
        <p className="text-base-content/70 mt-2">
          Learn about personality types, zodiac signs, and other fascinating
          insights to better understand yourself and others.
        </p>
      </li>

      {features.map((feature) => (
        <li key={feature.href}>
          <ul className="list-row hover:bg-base-200 transition-colors">
            <div className="text-2xl">
              <DynamicImage
                src={feature.icon}
                alt={feature.name}
                className="size-10"
              />
            </div>

            <div>
              <div>{feature.name}</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                {feature.description}
              </div>
            </div>
            {/* btn */}
{/* 
            <button
              onClick={() => setSaved(!saved)}
              className={`btn btn-square ml-auto btn-ghost`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="size-[1.2em]"
                fill={saved ? "currentColor" : "none"}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
            </button> */}

            <Link href={feature.href}>
              <button className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="size-[1.2em]"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" x2="21" y1="14" y2="3" />
                </svg>
              </button>
            </Link>
          </ul>
        </li>
      ))}
    </ul>
  );
}
