import { Exo_2, Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["700"],
});

// Loaded through next/font (instead of the package's CSS) so the font file
// is bundled the same way by Next and by Storybook's Vite builder.
export const materialIcons = localFont({
  src: "../../node_modules/material-icons/iconfont/material-icons.woff2",
  variable: "--font-material-icons",
  display: "block",
});

export const fontVariables = `${inter.variable} ${exo2.variable} ${materialIcons.variable}`;
