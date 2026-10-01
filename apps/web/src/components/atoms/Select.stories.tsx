import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Select } from "./Select";

const meta = {
  title: "Atoms/Select",
  component: Select,
  args: {
    className: "w-[240px]",
    children: (
      <>
        <option value="hatch">Hatch</option>
        <option value="sedan">Sedan</option>
        <option value="suv">SUV</option>
      </>
    ),
  },
  argTypes: {
    tone: { control: "inline-radio", options: ["outline", "inverse"] },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outline: Story = {};

export const Inverse: Story = {
  args: { tone: "inverse" },
  globals: { backgrounds: { value: "primary" } },
};
