import type { Preview } from "@storybook/nextjs-vite";
import { fontVariables } from "../src/styles/fonts";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    layout: "centered",
    backgrounds: {
      options: {
        light: { name: "Branco", value: "#ffffff" },
        primary: { name: "Laranja (busca)", value: "#e28634" },
        secondary: { name: "Azul (rodapé)", value: "#23384d" },
      },
    },
    controls: {
      matchers: { color: /(background|color)$/i },
    },
  },
  initialGlobals: {
    backgrounds: { value: "light" },
  },
  decorators: [
    (Story) => (
      <div className={`${fontVariables} font-sans text-neutral-text`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
