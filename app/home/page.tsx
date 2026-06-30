import Link from "next/link";

export default function HomePage() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content ">
        <div className="max-w-md ">
          <h1 className="text-5xl font-bold ">
            Welcome to 
            <br></br>
            <span className="text-primary">
              LeEther
            </span>
              
          </h1>

          <p className="py-6 max-w-xl">
            Explore personalities, zodiac signs, and discover what makes you
            unique.
          </p>
          <div className="aura">
            <Link href="/profile" className="btn btn-primary">
              Setup Your Card
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
