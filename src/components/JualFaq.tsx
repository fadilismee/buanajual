import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { faqs } from "@/components/JualHero.utils";

export function JualFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-14 sm:py-20">
      <Reveal from="bottom">
        <div className="mb-10 text-center space-y-2.5 max-w-2xl mx-auto">
          <div className="font-monotech inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-blue-700">
            <HelpCircle size={14} />
            FAQ &amp; Tanya Jawab
          </div>
          <h2 className="font-heading text-2xl font-bold text-slate-900 sm:text-4xl">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Semua hal yang perlu Anda ketahui sebelum menjual atau tukar tambah hardware di Gudang
            Komputer.
          </p>
        </div>
      </Reveal>

      <div className="space-y-3.5">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={f.q} from="bottom" delay={i * 50}>
              <div
                className={`overflow-hidden rounded-2xl border transition-all ${
                  isOpen
                    ? "border-blue-500/50 bg-white shadow-md ring-1 ring-blue-500/20"
                    : "border-slate-200 bg-white shadow-2xs hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-btn-${i}`}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-heading text-sm sm:text-base font-bold text-slate-900 transition-colors"
                >
                  <span className={isOpen ? "text-blue-600" : ""}>{f.q}</span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all ${
                      isOpen ? "bg-blue-600 text-white rotate-180" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  className={`grid transition-[grid-template-rows] duration-250 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-3">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
