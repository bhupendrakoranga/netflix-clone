import type { Metadata } from "next";

import { LoginPageShell } from "@/components/auth/LoginPageShell";

export const metadata: Metadata = {
  title: "Sign In | Netflix India Clone",
  description: "Sign in page for the Netflix India clone.",
};

export default function LoginPage() {
  return <LoginPageShell />;
}
