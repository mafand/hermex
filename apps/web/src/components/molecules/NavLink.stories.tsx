import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { NavLink } from "./NavLink";

const meta = {
  title: "Molecules/NavLink",
  component: NavLink,
  args: { href: "/cadastro", icon: "account_circle", label: "Cadastro" },
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SignUp: Story = {};

export const Login: Story = {
  args: { href: "/login", icon: "login", label: "Login" },
};
