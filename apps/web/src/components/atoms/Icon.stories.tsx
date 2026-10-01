import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Icon } from "./Icon";

const meta = {
  title: "Atoms/Icon",
  component: Icon,
  args: { name: "search" },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Large: Story = {
  args: { name: "calendar_month", className: "text-heading-xs" },
};

const screenIcons = [
  "search",
  "account_circle",
  "login",
  "location_on",
  "calendar_month",
  "keyboard_arrow_down",
];

export const UsedOnHomeScreen: Story = {
  render: () => (
    <div className="flex gap-6">
      {screenIcons.map((name) => (
        <div key={name} className="flex flex-col items-center gap-2 text-sm">
          <Icon name={name} className="text-heading-xs" />
          {name}
        </div>
      ))}
    </div>
  ),
};
