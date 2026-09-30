import { CenteredPage } from "@/components/templates";
import { auth } from "@/auth";

export default async function DashboardPage() {
  const session = await auth();
  return <CenteredPage title={`Olá, ${session?.user?.name ?? "usuário"}`} />;
}
