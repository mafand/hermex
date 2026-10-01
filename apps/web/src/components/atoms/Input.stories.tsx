import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "./Input";

const meta = {
  title: "Atoms/Input",
  component: Input,
  args: { placeholder: "O que você procura?", className: "w-[320px]" },
  argTypes: {
    tone: { control: "inline-radio", options: ["default", "inverse"] },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Inverse: Story = {
  args: { tone: "inverse", placeholder: "Local de retirada" },
  globals: { backgrounds: { value: "primary" } },
};
