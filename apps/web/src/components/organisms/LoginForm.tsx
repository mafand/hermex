import { Button } from "../atoms";
import { FormField } from "../molecules";

// Not wired yet: no auth provider is configured in src/auth.ts.
export function LoginForm() {
  return (
    <form className="flex w-full max-w-sm flex-col gap-4">
      <FormField id="email" name="email" type="email" label="E-mail" />
      <FormField id="password" name="password" type="password" label="Senha" />
      <Button type="submit" disabled>
        Entrar
      </Button>
      <p className="text-xs text-zinc-500">
        Autenticação ainda não configurada.
      </p>
    </form>
  );
}
