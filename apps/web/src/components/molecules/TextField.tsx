import { Icon, Input, type InputProps } from "../atoms";
import { cn } from "@/lib/cn";

type Props = InputProps & {
  /** Material Icons name shown before the text, e.g. "search". */
  icon?: string;
};

export function TextField({ icon, tone = "default", className, ...props }: Props) {
  return (
    <div
      className={cn(
        "relative",
        tone === "inverse" ? "text-white" : "text-neutral-text",
        className,
      )}
    >
      {icon && (
        <Icon
          name={icon}
          className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2"
        />
      )}
      <Input tone={tone} className={cn(icon && "pl-10")} {...props} />
    </div>
  );
}
