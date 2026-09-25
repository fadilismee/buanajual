import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  CircuitBoard,
  Cpu,
  Laptop,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { appraisalRates, type AppraisalCategory, type AppraisalCondition } from "@/data/sellPrices";

const heroCategories: { id: AppraisalCategory; label: string; icon: typeof Laptop }[] = [
  { id: "laptop", label: "Laptop", icon: Laptop },
  { id: "vga", label: "VGA Card", icon: Zap },
  { id: "motherboard", label: "Motherboard", icon: CircuitBoard },
  { id: "pc_rakitan", label: "PC Rakitan", icon: Cpu },
];

const heroConditions: { id: AppraisalCondition; label: string; tag: string }[] = [
  { id: "normal", label: "Normal Mulus", tag: "85% Nilai" },
  { id: "minus_ringan", label: "Ada Minus", tag: "65% Nilai" },
  { id: "rusak_spesifik", label: "Rusak / Artefak", tag: "45% Nilai" },
  { id: "matot", label: "Mati Total (Matot)", tag: "Kanibal IC" },
];

export function JualHero() {
  const navigate = useNavigate();
  const [selectedCat, setSelectedCat] = useState<AppraisalCategory>("laptop");
  const [selectedCond, setSelectedCond] = useState<AppraisalCondition>("minus_ringan");

  const estimatedRange = appraisalRates[selectedCat]?.[selectedCond] ?? "Rp 500.000 - Rp 2.500.000";

  const handleQuickAjukan = () => {
    navigate({
      to: "/jual/form",
      search: { category: selectedCat },
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      {/* Background subtle mesh glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-blue-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 -right-40 h-[350px] w-[350px] rounded-full bg-teal-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Headline & Value Props */}
          <div className="space-y-6 lg:col-span-7">
            {/* Top Badge: 3 Branches */}
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/60 px-3.5 py-1.5 text-xs text-blue-300 shadow-xs backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-white">Pusat Buyback Resmi:</span>
              <span>Gunungkidul (DIY) • Lampung • Cikarang</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-5xl lg:leading-[1.15]">
                Ubah Laptop &amp; Hardware Bekas / Rusak Jadi{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                  Uang Tunai
                </span>
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Terima laptop mati total, VGA artefak, motherboard konslet, hingga lelang PC kantor.
                Pengecekan lab transparan 15 menit, dana langsung cair detik itu juga.
              </p>
            </div>

            {/* 3 Key Trust Pillars */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 pt-2">
              <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-xs">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600/30 text-blue-300">
                  <Zap size={18} />
                </div>
                <div>
                  <p className="font-heading text-xs font-bold text-white">15 Menit Cair</p>
                  <p className="text-[11px] text-slate-400">Cash / Transfer real-time</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-xs">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-600/30 text-emerald-300">
                  <Building2 size={18} />
                </div>
                <div>
                  <p className="font-heading text-xs font-bold text-white">3 Cabang Resmi</p>
                  <p className="text-[11px] text-slate-400">DIY, Lampung &amp; Jabar</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-xs">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-600/30 text-teal-300">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <p className="font-heading text-xs font-bold text-white">Military Wipe</p>
                  <p className="text-[11px] text-slate-400">100% Data dihapus tuntas</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/jual/form"
                className="font-heading inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-500 hover:scale-[1.02]"
              >
                <span>Isi Form Taksir Gratis</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/6285979220599?text=Halo%20Gudang%20Komputer%2C%20saya%20mau%20konsultasi%20jual%20hardware%20bekas%2Frusak"
                target="_blank"
                rel="noreferrer"
                className="font-heading inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                <MessageCircle size={16} className="text-emerald-400" />
                <span>Chat WA Teknisi</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Instant Estimator Simulator */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-white/15 bg-slate-800/80 p-5 sm:p-7 shadow-2xl backdrop-blur-xl">
              {/* Header simulator */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
                    <Sparkles size={15} />
                  </div>
                  <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                    Simulasi Taksiran Kilat
                  </h3>
                </div>
                <span className="font-monotech inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Live Rate
                </span>
              </div>

              {/* Step 1: Select Category */}
              <div className="mt-4 space-y-2">
                <label className="font-monotech block text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                  1. Pilih Kategori Hardware
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {heroCategories.map((c) => {
                    const isSelected = selectedCat === c.id;
                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setSelectedCat(c.id)}
                        className={`flex items-center gap-2 rounded-xl border p-2.5 text-left transition-all ${
                          isSelected
                            ? "border-blue-500 bg-blue-600/20 text-white shadow-xs"
                            : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                        }`}
                      >
                        <c.icon
                          size={16}
                          className={isSelected ? "text-blue-400" : "text-slate-400"}
                        />
                        <span className="font-heading text-xs font-semibold">{c.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Select Condition */}
              <div className="mt-4 space-y-2">
                <label className="font-monotech block text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                  2. Pilih Kondisi Unit
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {heroConditions.map((cond) => {
                    const isSelected = selectedCond === cond.id;
                    return (
                      <button
                        key={cond.id}
                        type="button"
                        onClick={() => setSelectedCond(cond.id)}
                        className={`flex flex-col rounded-xl border p-2.5 text-left transition-all ${
                          isSelected
                            ? "border-blue-500 bg-blue-600/20 text-white shadow-xs"
                            : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-heading text-xs font-semibold">{cond.label}</span>
                          {isSelected && <CheckCircle2 size={12} className="text-blue-400" />}
                        </div>
                        <span className="font-monotech mt-0.5 text-[10px] text-slate-400">
                          {cond.tag}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Estimate Result Box */}
              <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-950/40 p-4">
                <span className="font-monotech text-[10px] uppercase tracking-wider text-blue-300">
                  Estimasi Harga Terima di Lab:
                </span>
                <p className="font-heading mt-1 text-xl font-extrabold text-white sm:text-2xl">
                  {estimatedRange}
                </p>
                <p className="mt-1 text-[11px] text-slate-300">
                  *Estimasi awal. Unit mati total/artefak tetap kami hargai untuk kanibal part
                  donor.
                </p>
              </div>

              {/* Action */}
              <button
                type="button"
                onClick={handleQuickAjukan}
                className="font-heading mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 text-sm font-bold text-white shadow-md transition-all hover:from-blue-500 hover:to-indigo-500"
              >
                <span>Ajukan Taksiran Kategori Ini →</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3 Cabang Bar di Bawah Hero */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur-md">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <span className="font-monotech flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600/30 text-xs font-bold text-blue-300">
                01
              </span>
              <div>
                <p className="font-heading text-sm font-bold text-white">Cabang Gunungkidul</p>
                <p className="text-xs text-slate-400">D.I. Yogyakarta • Drop-off &amp; COD DIY</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-monotech flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-600/30 text-xs font-bold text-emerald-300">
                02
              </span>
              <div>
                <p className="font-heading text-sm font-bold text-white">Cabang Lampung</p>
                <p className="text-xs text-slate-400">Sumatera • Pusat Layanan Regional</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-monotech flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-600/30 text-xs font-bold text-indigo-300">
                03
              </span>
              <div>
                <p className="font-heading text-sm font-bold text-white">Cabang Cikarang</p>
                <p className="text-xs text-slate-400">
                  Bekasi, Jabar • Area Jabodetabek &amp; Industri
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
