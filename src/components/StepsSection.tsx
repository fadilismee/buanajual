import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Banknote,
  CheckCircle2,
  ClipboardCheck,
  MessageCircle,
  Truck,
} from "lucide-react";
import { Reveal } from "./Reveal";

const processSteps = [
  {
    step: "01",
    icon: MessageCircle,
    title: "Konsultasi / Foto Unit",
    desc: "Kirim foto barang & seri via form web atau WA. Teknisi kami hitung taksiran awal dalam 5–15 menit.",
    tag: "Respon < 15 Menit",
    color: "from-blue-600 to-blue-500",
  },
  {
    step: "02",
    icon: Truck,
    title: "Drop Toko / Jemput",
    desc: "Bawa ke cabang terdekat (Gunungkidul, Lampung, Cikarang) atau manfaatkan layanan kurir jemput area cabang.",
    tag: "3 Cabang / COD",
    color: "from-teal-600 to-teal-500",
  },
  {
    step: "03",
    icon: ClipboardCheck,
    title: "Diagnosa Lab Transparan",
    desc: "Cek tegangan multimeter, tes POST & visual board langsung di depan Anda secara objektif.",
    tag: "Disaksikan Langsung",
    color: "from-indigo-600 to-indigo-500",
  },
  {
    step: "04",
    icon: Banknote,
    title: "Deal & Cair Instan",
    desc: "Harga final disepakati, pembayaran langsung ditransfer real-time (BCA/Mandiri/BRI/QRIS) atau tunai di tempat.",
    tag: "Detik Itu Juga",
    color: "from-emerald-600 to-emerald-500",
  },
];

export function StepsSection() {
  return (
    <section className="bg-slate-900 py-14 sm:py-20 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal from="bottom">
          <div className="mx-auto mb-12 max-w-2xl text-center space-y-3">
            <span className="font-monotech inline-flex items-center gap-1.5 rounded-full bg-blue-900/60 border border-blue-400/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-300">
              <CheckCircle2 size={14} className="text-emerald-400" />
              Prosedur Cepat &amp; Transparan
            </span>
            <h2 className="font-heading text-2xl font-extrabold text-white sm:text-4xl">
              Alur Jual Hardware di Gudang Komputer
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Tanpa prosedur rumit, tanpa tempo pembayaran. Dari chat santai hingga uang masuk ke
              rekening Anda dalam hitungan menit.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s, idx) => (
            <Reveal key={s.step} from="bottom" delay={idx * 90}>
              <div className="relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs transition-all hover:border-white/25 hover:bg-white/[0.08] hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} text-white shadow-md`}
                    >
                      <s.icon size={22} />
                    </div>
                    <span className="font-monotech text-2xl font-extrabold text-white/20">
                      {s.step}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading text-base font-bold text-white">{s.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-300">{s.desc}</p>
                  </div>
                </div>

                <div className="mt-5 border-t border-white/10 pt-3">
                  <span className="font-monotech text-xs font-semibold text-emerald-400">
                    ✓ {s.tag}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal from="bottom" delay={300}>
          <div className="mt-12 text-center">
            <Link
              to="/jual/form"
              className="font-heading inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-500 hover:scale-[1.02]"
            >
              <span>Mulai Isi Form Taksiran Gratis</span>
              <ArrowRight size={16} />
            </Link>
            <p className="font-monotech mt-3 text-xs text-slate-400">
              Estimasi kilat online • Respon teknisi rata-rata 7 menit
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
