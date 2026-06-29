import Link from "next/link";

const miniTests = [
  {
    name: "MBTI Test",
    description: "Discover your personality type",
    icon: "📝",
    href: "/mini-tests/mbti",
  },
  {
    name: "Love Language Test",
    description: "Find your primary love language",
    icon: "💖",
    href: "/mini-tests/love-language",
  },
  {
    name: "Career Interest Test",
    description: "Explore suitable career paths",
    icon: "💼",
    href: "/mini-tests/career",
  },
  {
    name: "Friendship Style Test",
    description: "Learn how you connect with others",
    icon: "🤝",
    href: "/mini-tests/friendship",
  },
  {
    name: "Stress Management Test",
    description: "Assess your stress coping strategies",
    icon: "🧘‍♂️",
    href: "/mini-tests/stress-management",
  },
  {
    name: "Emotional Intelligence Test",
    description: "Evaluate your emotional awareness",
    icon: "🧠",
    href: "/mini-tests/emotional-intelligence",
  },
];
export default function MiniTestList() {
  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
        <h2 className="text-2xl font-bold">Discover Who You Are</h2>
        <p className="text-base-content/70 mt-2">
          Take our collection of mini tests to uncover your personality,
          emotional traits, interests, and more.
        </p>
      </li>

      {miniTests.map((test) => (
        <li key={test.href}>
          <ul className="list-row hover:bg-base-200 transition-colors">
            <div className="text-2xl">{test.icon}</div>

            <div>
              <div>{test.name}</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                {test.description}
              </div>
            </div>
            {/* btn */}

            <button className="btn btn-square btn-ghost ml-auto">
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
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
            </button>

            <Link href={test.href}>
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
