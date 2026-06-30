import Link from "next/link";

const miniTests = [{
    name: "Szondi Test",
    description: "Explore your subconscious desires",
    icon: "🧠",
    href: "/mini-test/szondi",
  }
 
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
          <ul className="list-row flex item-center hover:bg-base-200 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="text-2xl shrink-0 self-center"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" x2="8" y1="13" y2="13" />
              <line x1="16" x2="8" y1="17" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>

            <div>
              <div>{test.name}</div>
              <div className="text-xs font-semibold opacity-60">
                {test.description}
              </div>
            </div>
            {/* btn */}

            {/* <button className="btn btn-square btn-ghost ml-auto">
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
            </button> */}

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
