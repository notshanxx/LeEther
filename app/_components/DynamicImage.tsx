import Image from "next/image";
export default function DynamicImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return <Image src={src} alt={alt} className={`${className} brightness-0 dark:invert`} width={24} height={24} />;
}
