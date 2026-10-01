import Image from "next/image";
import { cn } from "@/lib/cn";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

export function CarImage({ src, alt, className }: Props) {
  return (
    <div
      className={cn(
        "relative aspect-[7/4] w-[280px] overflow-hidden bg-neutral-details",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="280px"
        className="object-contain"
      />
    </div>
  );
}
