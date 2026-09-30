import type { ReactNode } from "react";

export function CenteredPage({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
      {children}
    </main>
  );
}
