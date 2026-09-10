import { Plus } from "lucide-react";

import { SectionShell } from "@/components/ui/SectionShell";
import { faqs } from "@/lib/content";

export function FaqSection() {
  return (
    <SectionShell title="Frequently Asked Questions">
      <div className="space-y-2">
        {faqs.map((faq) => (
          <details
            className="group rounded-lg bg-[#2d2d2d] text-white transition-colors open:bg-[#333333]"
            key={faq.question}
          >
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-lg font-medium transition-colors outline-none hover:bg-white/8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white [&::-webkit-details-marker]:hidden">
              <span>{faq.question}</span>
              <Plus
                aria-hidden
                className="h-6 w-6 shrink-0 transition-transform group-open:rotate-45"
              />
            </summary>
            <div className="border-t border-black/35 px-5 py-5 text-base leading-7 text-white/82">
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </SectionShell>
  );
}
