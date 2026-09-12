import { AuthFooter } from "@/components/auth/AuthFooter";
import { AuthHeader } from "@/components/auth/AuthHeader";
import { SignInForm } from "@/components/auth/SignInForm";

export function LoginPageShell() {
  return (
    <div className="min-h-screen bg-[#050000] text-white">
      <div className="auth-login-surface">
        <AuthHeader />
        <main className="mx-auto min-h-[720px] w-[calc(100%-48px)] max-w-[440px] pt-[42px] pb-24 sm:min-h-[724px]">
          <h1 className="text-[32px] leading-tight font-bold tracking-[0]">
            Enter your info to sign in
          </h1>
          <p className="mt-3 text-lg leading-7 font-semibold text-[#b3b3b3] sm:text-xl">
            Or get started with a new account.
          </p>

          <SignInForm />

          <p className="mt-12 text-sm leading-6 font-semibold text-[#8c8c8c] sm:text-base">
            This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot.
          </p>
        </main>
      </div>
      <AuthFooter />
    </div>
  );
}
