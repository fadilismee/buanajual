import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";
import { faqs } from "@/components/JualHero.utils";

export function JualFaq() {
  const [open, setOpen] = useState<number | null>(0);
  const faqItems = faqs.map((f, i) => {
    const isOpen = open === i;
    return (
      <Reveal
        key={f.q}
        from="bottom"
        delay={0}
        once
        className="overflow-hidden rounded-xl border border-outline-variant/40 bg-surface-lowest shadow-sm"
      >
        <button
          type="button"
          onClick={() => setOpen(isOpen ? null : i)}
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${i}`}
          id={`faq-btn-${i}`}
          className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left font-heading font-semibold text-on-surface transition-colors hover:text-pri"
        >
          <span>{f.q}</span>
          <ChevronDown
            size={20}
            aria-hidden
            className={`shrink-0 text-outline transition-transform duration-200 ${isOpen ? "rotate-180 text-pri" : ""}`}
          />
        </button>
        <div
          id={`faq-panel-${i}`}
          role="region"
          aria-labelledby={`faq-btn-${i}`}
          className={`grid transition-[grid-template-rows] duration-200 ease-out ${
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <p className="px-5 pb-4 text-sm leading-relaxed text-on-surface-variant">{f.a}</p>
          </div>
        </div>
      </Reveal>
    );
  });

  return (
    <Reveal from="bottom" delay={0} className="mx-auto w-full max-w-7xl px-4 py-10 sm:py-14">
      <Reveal from="bottom" delay={0} className="mb-8 space-y-2 text-center">
        <span className="font-monotech text-[11px] font-semibold uppercase tracking-widest text-pri">
          Tanya Jawab Seputar Jual Beli
        </span>
        <h2 className="font-heading text-2xl font-bold text-on-surface sm:text-3xl lg:text-4xl">
          Pertanyaan yang Sering Diajukan
        </h2>
        <p className="text-on-surface-variant">
          Hal-hal yang sering ditanyakan penjual hardware di Gudang Komputer
        </p>
      </Reveal>
      <div className="mx-auto max-w-4xl space-y-3">{faqItems}</div>
    </Reveal>
  );
}
