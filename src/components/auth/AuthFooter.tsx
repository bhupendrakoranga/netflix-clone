import { LanguageSelect } from "@/components/ui/LanguageSelect";
import { authFooterLinks } from "@/lib/authContent";

export function AuthFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#161616] text-[#b3b3b3]">
      <div className="auth-container py-11 sm:py-16">
        <p className="text-base sm:text-lg">
          Questions? Call{" "}
          <a className="underline underline-offset-2 hover:text-white" href="tel:0008009191743">
            000-800-919-1743 (Toll-Free)
          </a>
        </p>

        <nav
          aria-label="Login footer"
          className="mt-8 grid gap-x-10 gap-y-5 text-sm sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:text-base"
        >
          {authFooterLinks.map((link) => (
            <a className="underline underline-offset-2 hover:text-white" href="#" key={link}>
              {link}
            </a>
          ))}
        </nav>

        <LanguageSelect className="mt-8" />
      </div>
    </footer>
  );
}
