import { Reveal } from "./Reveal";
import { Link } from "@tanstack/react-router";
import { steps } from "@/components/JualHero.utils";

export function StepsSection() {
  const stepCards = steps.map((s) => (
    <Reveal
      key={s.n}
      from="bottom"
      delay={0}
      once
      className="flex flex-col justify-between space-y-4 rounded-xl border border-outline-variant/40 bg-surface-low p-5 shadow-sm transition-all hover:border-pri/30 hover:shadow-md hover-lift"
    >
      <div className="space-y-3">
        <div className="font-heading flex h-10 w-10 items-center justify-center rounded-full bg-pri font-bold text-on-pri">
          {s.n}
        </div>
        <h4 className="font-heading font-semibold text-on-surface">{s.title}</h4>
        <p className="text-sm leading-relaxed text-on-surface-variant">{s.desc}</p>
      </div>
      <div className="font-monotech flex items-center gap-1 text-[11px] font-semibold text-pri">
        <s.icon size={16} />
        <span>{s.foot}</span>
      </div>
    </Reveal>
  ));

  return (
    <Reveal from="bottom" delay={0} className="w-full bg-surface-lowest py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal from="bottom" delay={0} className="mx-auto mb-10 max-w-2xl space-y-2 text-center">
          <span className="font-monotech text-[11px] font-semibold uppercase tracking-widest text-pri">
            Prosedur Cepat & Aman
          </span>
          <h2 className="font-heading text-2xl font-bold text-on-surface sm:text-3xl lg:text-4xl">
            Alur Mudah Jual Hardware Anda ke Gudang Komputer
          </h2>
          <p className="text-on-surface-variant">
            Dari konsultasi santai lewat WhatsApp hingga uang masuk ke rekening Anda dalam hitungan
            menit.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">{stepCards}</div>
        <Reveal from="bottom" delay={300} className="mt-10 text-center">
          <Link
            to="/jual/form"
            className="hover-lift hover-glow font-heading inline-flex items-center gap-2 rounded-xl bg-pri-container px-8 py-3.5 font-bold text-on-pri shadow-lg transition-all hover:bg-pri"
          >
            Mulai Isi Form Pengajuan Jual <span aria-hidden>→</span>
          </Link>
          <p className="font-monotech mt-3 text-[11px] text-outline">
            Estimasi kilat gratis • Respon rata-rata 7 menit
          </p>
        </Reveal>
      </div>
    </Reveal>
  );
}
