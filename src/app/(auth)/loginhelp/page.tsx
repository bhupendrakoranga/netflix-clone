import type { Metadata } from "next";

import { LoginHelpPageShell } from "@/components/auth/LoginHelpPageShell";

export const metadata: Metadata = {
  title: "Login Help | Netflix India Clone",
  description: "Reset password, email, or phone details for the Netflix India clone.",
};

export default function LoginHelpPage() {
  return <LoginHelpPageShell />;
}
