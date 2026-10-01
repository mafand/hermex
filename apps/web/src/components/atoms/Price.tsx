import { cn } from "@/lib/cn";

type Props = {
  value: number;
  period?: string;
  className?: string;
};

export function Price({ value, period = "diária", className }: Props) {
  return (
    <p className={cn("flex items-center text-black", className)}>
      <span className="font-display text-heading-xs font-bold">R${value}</span>
      <span className="text-body-lg">/{period}</span>
    </p>
  );
}
