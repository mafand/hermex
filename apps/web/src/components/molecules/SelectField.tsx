import { Icon, Select, type SelectProps } from "../atoms";
import { cn } from "@/lib/cn";

type Option = { value: string; label: string };

type Props = Omit<SelectProps, "children"> & {
  options: Option[];
  /** Shown while nothing is selected, e.g. "Selecione a categoria". */
  placeholder?: string;
};

export function SelectField({
  options,
  placeholder,
  tone = "outline",
  className,
  defaultValue,
  ...props
}: Props) {
  return (
    <div
      className={cn(
        "relative",
        tone === "inverse" ? "text-white" : "text-secondary",
        className,
      )}
    >
      <Select
        tone={tone}
        className="pr-10"
        defaultValue={
          defaultValue ?? (props.value === undefined && placeholder ? "" : undefined)
        }
        {...props}
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      <Icon
        name="keyboard_arrow_down"
        className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2"
      />
    </div>
  );
}
