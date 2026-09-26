import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  /** Koyu zemin için beyaz varyant */
  variant?: "color" | "white";
  className?: string;
  priority?: boolean;
};

export function BrandLogo({
  variant = "color",
  className = "h-9 w-auto",
  priority = false,
}: BrandLogoProps) {
  const src =
    variant === "white" ? "/images/logo-white.png" : "/images/logo.png";

  return (
    <Link href="/" className="focus-ring inline-flex shrink-0 items-center">
      <Image
        src={src}
        alt="Yalçın Isı"
        width={581}
        height={197}
        priority={priority}
        className={className}
      />
    </Link>
  );
}
