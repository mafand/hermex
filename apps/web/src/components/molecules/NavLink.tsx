import Link, { type LinkProps } from "next/link";
import { Icon } from "../atoms";
import { cn } from "@/lib/cn";

type Props = LinkProps & {
  icon: string;
  label: string;
  className?: string;
};

export function NavLink({ icon, label, className, ...props }: Props) {
  return (
    <Link
      className={cn(
        "inline-flex items-center gap-2 text-body-md text-neutral-text transition-colors hover:text-primary",
        className,
      )}
      {...props}
    >
      <Icon name={icon} />
      {label}
    </Link>
  );
}
