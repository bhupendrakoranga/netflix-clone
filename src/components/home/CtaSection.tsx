import { EmailSignup } from "@/components/ui/EmailSignup";

export function CtaSection() {
  return (
    <section className="mx-auto w-full max-w-3xl px-5 pt-4 pb-14 text-center sm:px-8">
      <p className="text-base leading-7 text-white/88">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <EmailSignup className="mt-4" />
    </section>
  );
}
