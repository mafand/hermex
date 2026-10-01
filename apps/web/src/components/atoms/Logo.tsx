import Image from "next/image";
import { cn } from "@/lib/cn";

const sources = {
  default: { mark: "/brand/logo-mark.svg", tagline: "/brand/logo-tagline.svg" },
  // White "x" and tagline, for dark backgrounds (footer).
  inverse: {
    mark: "/brand/logo-mark-inverse.svg",
    tagline: "/brand/logo-tagline-inverse.svg",
  },
};

type Props = {
  variant?: keyof typeof sources;
  className?: string;
};

export function Logo({ variant = "default", className }: Props) {
  const { mark, tagline } = sources[variant];

  return (
    <span
      role="img"
      aria-label="Hermex locadora"
      className={cn("relative block aspect-[180/60.472] w-[180px]", className)}
    >
      <span className="absolute inset-[9.94%_7.95%_41.59%_7.95%]">
        <Image src={mark} alt="" fill />
      </span>
      <span className="absolute inset-[65.71%_8.64%_16.45%_48.32%]">
        <Image src={tagline} alt="" fill />
      </span>
    </span>
  );
}
