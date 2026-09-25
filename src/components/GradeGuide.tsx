import { Reveal } from "./Reveal";
import { BadgeCheck } from "lucide-react";
import { grades } from "@/data/sellPrices";
import { gradeBadgeClass } from "@/components/JualHero.utils";

export function GradeGuide() {
  const gradeCards = grades.map((g) => (
    <Reveal
      key={g.code}
      from="bottom"
      delay={0}
      once
      className="flex flex-col justify-between space-y-4 rounded-xl border border-outline-variant/40 bg-surface-lowest p-5 shadow-sm transition-all hover:border-pri/30 hover:shadow-md hover-lift"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <span
            className={`font-monotech rounded px-3 py-0.5 text-[11px] font-bold ${gradeBadgeClass(g.gradeTone)}`}
          >
            {g.code}
          </span>
          <span className="font-monotech text-[11px] font-semibold text-on-surface-variant">
            {g.range}
          </span>
        </div>
        <h3 className="font-heading font-semibold text-on-surface">{g.title}</h3>
        <p className="text-sm leading-relaxed text-on-surface-variant">{g.desc}</p>
      </div>
      <div className="font-monotech flex items-center gap-2 rounded bg-surface-low p-2 text-[11px] text-on-surface">
        <BadgeCheck size={18} className="shrink-0 text-pri" />
        <span>{g.foot}</span>
      </div>
    </Reveal>
  ));

  return (
    <Reveal from="bottom" delay={0} className="mx-auto w-full max-w-7xl px-4 py-10 sm:py-14">
      <div className="mb-8 space-y-2">
        <div className="font-monotech flex items-center gap-2 text-[11px] uppercase tracking-widest text-pri">
          <span aria-hidden>⚙</span>
          <span>Standar Penilaian Objektif</span>
        </div>
        <h2 className="font-heading text-2xl font-bold text-on-surface sm:text-3xl lg:text-4xl">
          Pedoman Grade Kondisi Hardware
        </h2>
        <p className="max-w-2xl text-on-surface-variant">
          Kami tidak memukul rata semua barang bekas. Setiap komponen dinilai berbasis kelengkapan
          fungsional, integritas PCB, dan potensi pemanfaatan kanibal.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">{gradeCards}</div>
    </Reveal>
  );
}
