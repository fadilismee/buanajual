import { CheckCircle2, ShieldCheck, Sparkles, Wrench, Zap } from "lucide-react";
import { Reveal } from "./Reveal";

const modernGrades = [
  {
    code: "GRADE A",
    range: "70% - 85% Pasar",
    percent: 85,
    title: "Normal & Mulus",
    desc: "Unit siap pakai, segel utuh atau pemakaian wajar, performa benchmark 100% stabil tanpa kendala.",
    badgeClass: "bg-blue-600 text-white",
    barColor: "bg-blue-600",
    icon: Sparkles,
    highlight: "Valuasi Tertinggi",
  },
  {
    code: "GRADE B",
    range: "50% - 70% Pasar",
    percent: 65,
    title: "Normal Minus Kosmetik",
    desc: "Mesin dan komponen 100% normal, ada lecet pemakaian, baterai drop wajar, atau tanpa kardus/dus.",
    badgeClass: "bg-teal-600 text-white",
    barColor: "bg-teal-600",
    icon: CheckCircle2,
    highlight: "Paling Sering Masuk",
  },
  {
    code: "GRADE C",
    range: "30% - 50% Pasar",
    percent: 45,
    title: "Rusak Sebagian / Minor",
    desc: "Masih POST/nyala tapi ada kendala: VGA artefak, keyboard rusak, port mati, atau layar bergaris.",
    badgeClass: "bg-amber-600 text-white",
    barColor: "bg-amber-600",
    icon: Wrench,
    highlight: "Bahan Servis Lab",
  },
  {
    code: "GRADE D",
    range: "Rp 50rb - 1.5Jt+",
    percent: 25,
    title: "Mati Total (Matot)",
    desc: "Mati total, bekas short circuit, kena cairan, korosi, atau terbakar. Tetap berharga untuk kanibal IC & part donor.",
    badgeClass: "bg-rose-600 text-white",
    barColor: "bg-rose-600",
    icon: Zap,
    highlight: "Pasti Kami Bayar",
  },
];

export function GradeGuide() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:py-16">
      <Reveal from="bottom">
        <div className="mb-10 space-y-2 text-center max-w-2xl mx-auto">
          <div className="font-monotech inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-blue-700">
            <ShieldCheck size={14} />
            Standar Penilaian Objektif
          </div>
          <h2 className="font-heading text-2xl font-bold text-slate-900 sm:text-4xl">
            Pedoman Grade Kondisi Hardware
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600">
            Kami tidak memukul rata semua barang bekas. Setiap komponen dinilai secara transparan
            berdasarkan kelengkapan fungsional dan potensi pemanfaatan kanibal part donor.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {modernGrades.map((g, i) => (
          <Reveal key={g.code} from="bottom" delay={i * 80}>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs transition-all hover:border-blue-400 hover:shadow-lg hover:-translate-y-1">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span
                    className={`font-monotech rounded-lg px-2.5 py-1 text-xs font-bold ${g.badgeClass}`}
                  >
                    {g.code}
                  </span>
                  <span className="font-monotech text-xs font-bold text-slate-700">{g.range}</span>
                </div>

                {/* Progress valuation meter */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-monotech text-slate-500">
                    <span>Valuasi Harga</span>
                    <span>{g.percent}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={`h-full rounded-full ${g.barColor}`}
                      style={{ width: `${g.percent}%` }}
                    />
                  </div>
                </div>

                <div className="pt-1">
                  <h3 className="font-heading text-base font-bold text-slate-900">{g.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">{g.desc}</p>
                </div>
              </div>

              <div className="mt-5 border-t border-slate-100 pt-3 flex items-center gap-2 font-monotech text-xs font-semibold text-slate-700">
                <g.icon size={15} className="text-blue-600 shrink-0" />
                <span>{g.highlight}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
