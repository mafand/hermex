import Link from "next/link";
import { CenteredPage } from "@/components/templates";

export default function Home() {
  return (
    <CenteredPage title="Hermex">
      <p className="text-zinc-600">Locadora de veículos.</p>
      <Link href="/login" className="text-sm underline">
        Entrar
      </Link>
    </CenteredPage>
  );
}
