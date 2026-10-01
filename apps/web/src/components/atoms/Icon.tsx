import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Props = HTMLAttributes<HTMLSpanElement> & {
  /** Material Icons ligature name, e.g. "search", "calendar_month". */
  name: string;
};

export function Icon({ name, className, ...props }: Props) {
  return (
    <span
      aria-hidden
      className={cn(
        // Mirrors the `.material-icons` rules; the ligature turns `name` into the glyph.
        "inline-block shrink-0 font-icon text-body-md leading-none font-normal tracking-normal normal-case whitespace-nowrap antialiased [direction:ltr] [font-feature-settings:'liga'] [word-wrap:normal]",
        className,
      )}
      {...props}
    >
      {name}
    </span>
  );
}
