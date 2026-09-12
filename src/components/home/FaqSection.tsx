import { Plus } from "lucide-react";

import { SectionShell } from "@/components/ui/SectionShell";
import { faqs } from "@/lib/content";

export function FaqSection() {
  return (
    <SectionShell title="Frequently Asked Questions">
      <div className="space-y-2">
        {faqs.map((faq) => (
          <details
            className="group rounded-lg bg-[#2d2d2d] text-white transition-colors open:bg-[#2d2d2d]"
            key={faq.question}
          >
            <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left text-xl leading-tight font-normal transition-colors outline-none hover:bg-white/8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:min-h-[84px] sm:px-7 sm:text-2xl [&::-webkit-details-marker]:hidden">
              <span>{faq.question}</span>
              <Plus
                aria-hidden
                className="h-7 w-7 shrink-0 transition-transform group-open:rotate-45 sm:h-9 sm:w-9"
              />
            </summary>
            <div className="space-y-6 border-t border-black/35 px-6 py-6 text-xl leading-[1.34] text-white sm:px-7 sm:py-7 sm:text-2xl">
              {faq.answer.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </details>
        ))}
      </div>
    </SectionShell>
  );
}
