import { LanguageSelect } from "@/components/ui/LanguageSelect";
import { footerLinks } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] text-white/70">
      <div className="netflix-container py-10">
        <a className="text-base underline underline-offset-2 hover:text-white" href="#">
          Questions? Contact us.
        </a>

        <nav
          aria-label="Footer"
          className="mt-8 grid gap-x-8 gap-y-4 text-sm sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {footerLinks.map((link) => (
            <a className="underline underline-offset-2 hover:text-white" href="#" key={link}>
              {link}
            </a>
          ))}
        </nav>

        <div className="mt-8">
          <LanguageSelect />
        </div>

        <p className="mt-8 text-sm">Netflix India</p>
      </div>
    </footer>
  );
}
