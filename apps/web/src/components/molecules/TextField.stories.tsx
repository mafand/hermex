import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TextField } from "./TextField";

const meta = {
  title: "Molecules/TextField",
  component: TextField,
  args: { icon: "search", placeholder: "O que você procura?" },
  argTypes: {
    tone: { control: "inline-radio", options: ["default", "inverse"] },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Search: Story = {
  args: { type: "search", "aria-label": "Buscar" },
};

export const PickupLocation: Story = {
  args: {
    tone: "inverse",
    icon: "location_on",
    placeholder: "Local de retirada",
    "aria-label": "Local de retirada",
    className: "w-[652px]",
  },
  globals: { backgrounds: { value: "primary" } },
};

export const PickupDate: Story = {
  args: {
    tone: "inverse",
    icon: "calendar_month",
    placeholder: "Data",
    "aria-label": "Data",
    className: "w-[128px]",
  },
  globals: { backgrounds: { value: "primary" } },
};

export const WithoutIcon: Story = {
  args: { icon: undefined, placeholder: "Digite aqui" },
};
