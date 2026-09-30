import type { NextAuthConfig } from "next-auth";

// Edge-safe config shared by auth.ts and proxy.ts (no Node-only imports here).
export const authConfig = {
  pages: { signIn: "/login" },
  // Providers are added in auth.ts once the login strategy is defined.
  providers: [],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isPrivate = nextUrl.pathname.startsWith("/dashboard");
      return isPrivate ? !!auth?.user : true;
    },
  },
} satisfies NextAuthConfig;
