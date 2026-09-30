import { LoginForm } from "@/components/organisms";
import { CenteredPage } from "@/components/templates";

export default function LoginPage() {
  return (
    <CenteredPage title="Entrar">
      <LoginForm />
    </CenteredPage>
  );
}
