import Image from "next/image";
import Link from "next/link";

interface CardProps {
  href?: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

export default function Card({
  href = "#",
  imageSrc,
  imageAlt,
  title,
  description,
}: CardProps) {
  return (
    <Link href={href} className="group relative block h-64 sm:h-80 lg:h-96 ">
      <span className="absolute inset-0 border-2 border-dashed border-base-content "></span>

      <div className="relative flex h-full transform items-end border-2 border-base-content bg-base-100 text-base-content transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2">
        <div className="px-4 pb-4 transition-opacity duration-300 group-hover:absolute group-hover:opacity-0 sm:px-6 sm:pb-4 lg:px-8 lg:pb-8">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={400}
            height={400}
            className="size-10 sm:size-12 brightness-0 dark:invert"
          />

          <h2 className="mt-4 text-xl font-medium sm:text-xl">{title}</h2>
        </div>

        <div className="absolute p-4 opacity-0 transition-opacity duration-300 group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
          <h3 className="mt-4 text-xl font-medium sm:text-2xl">{title}</h3>

          <p className="mt-4 text-sm text-base-content sm:text-base">
            {description}
          </p>

          <p className="mt-8 font-bold text-info">
            Read more →
          </p>
        </div>
      </div>
    </Link>
  );
}
