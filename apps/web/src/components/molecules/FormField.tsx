import type { InputHTMLAttributes } from "react";
import { Input } from "../atoms";

type Props = InputHTMLAttributes<HTMLInputElement> & { label: string };

export function FormField({ label, id, ...props }: Props) {
  return (
    <label htmlFor={id} className="flex flex-col gap-1 text-sm font-medium">
      {label}
      <Input id={id} {...props} />
    </label>
  );
}
