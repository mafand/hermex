import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const tones = {
  default:
    "border-neutral-details text-neutral-text placeholder:text-neutral-text focus-visible:border-secondary",
  // White outline/text, for use on the orange search bar.
  inverse:
    "border-white text-white placeholder:text-white focus-visible:ring-2 focus-visible:ring-white/40 [color-scheme:dark]",
};

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  tone?: keyof typeof tones;
};

export function Input({ tone = "default", className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full rounded border bg-transparent px-4 py-3 text-body-md outline-none transition-colors",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
