import { AuthFooter } from "@/components/auth/AuthFooter";
import { AuthHeader } from "@/components/auth/AuthHeader";
import { PasswordResetForm } from "@/components/auth/PasswordResetForm";

export function LoginHelpPageShell() {
  return (
    <div className="min-h-screen bg-[#050000] text-white">
      <div className="auth-help-surface">
        <AuthHeader
          className="bg-black/35"
          containerClassName="auth-wide-container h-[84px] items-start pt-6 sm:h-[118px] sm:pt-[33px]"
          logoClassName="w-28 sm:w-[188px]"
          showSignIn
        />
        <main className="mx-auto flex min-h-[724px] w-[calc(100%-32px)] max-w-[607px] justify-center pt-14 pb-24 sm:w-[calc(100%-48px)] sm:pt-[100px] lg:min-h-[901px]">
          <div className="w-full">
            <PasswordResetForm />
            <p className="mt-5 text-sm leading-5 font-semibold text-[#697886] sm:text-base">
              This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot.
            </p>
          </div>
        </main>
      </div>
      <AuthFooter containerClassName="auth-wide-container auth-help-footer-container" />
    </div>
  );
}
