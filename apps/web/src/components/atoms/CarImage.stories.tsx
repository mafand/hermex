import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CarImage } from "./CarImage";

const meta = {
  title: "Atoms/CarImage",
  component: CarImage,
  args: { src: "/cars/hb20.png", alt: "Hyundai HB20 1.0" },
} satisfies Meta<typeof CarImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
