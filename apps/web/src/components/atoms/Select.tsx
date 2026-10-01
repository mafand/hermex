import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const tones = {
  outline:
    "border-secondary text-secondary focus-visible:ring-2 focus-visible:ring-secondary/30",
  // White outline/text, for use on the orange search bar.
  inverse:
    "border-white text-white focus-visible:ring-2 focus-visible:ring-white/40 [&>option]:text-neutral-text",
};

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  tone?: keyof typeof tones;
};

export function Select({ tone = "outline", className, ...props }: SelectProps) {
  return (
    <select
      className={cn(
        "w-full cursor-pointer appearance-none rounded border bg-transparent px-4 py-3 text-body-md outline-none transition-colors",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
