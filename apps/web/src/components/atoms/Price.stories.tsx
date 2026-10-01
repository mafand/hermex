import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Price } from "./Price";

const meta = {
  title: "Atoms/Price",
  component: Price,
  args: { value: 120 },
} satisfies Meta<typeof Price>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Daily: Story = {};

export const CustomPeriod: Story = {
  args: { value: 750, period: "semana" },
};
