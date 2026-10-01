import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SelectField } from "./SelectField";

const categories = [
  { value: "hatch", label: "Hatch" },
  { value: "sedan", label: "Sedan" },
  { value: "suv", label: "SUV" },
  { value: "minivan", label: "Minivan" },
  { value: "compacto", label: "Compacto" },
];

const hours = Array.from({ length: 15 }, (_, i) => {
  const hour = `${String(i + 8).padStart(2, "0")}:00`;
  return { value: hour, label: hour };
});

const meta = {
  title: "Molecules/SelectField",
  component: SelectField,
  args: {
    options: categories,
    placeholder: "Selecione a categoria",
    "aria-label": "Categoria",
  },
  argTypes: {
    tone: { control: "inline-radio", options: ["outline", "inverse"] },
  },
} satisfies Meta<typeof SelectField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CategoryFilter: Story = {};

export const Time: Story = {
  args: {
    tone: "inverse",
    options: hours,
    placeholder: "Horário",
    "aria-label": "Horário",
    className: "w-[128px]",
  },
  globals: { backgrounds: { value: "primary" } },
};
